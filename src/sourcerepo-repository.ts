// https://www.terraform.io/docs/providers/google/r/sourcerepo_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourcerepoRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource name of the repository, of the form '{{repo}}'.
The repo name may contain slashes. eg, 'name/with/slash'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository#name SourcerepoRepository#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository#project SourcerepoRepository#project}
  */
  readonly project?: string;
  /**
  * pubsub_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository#pubsub_configs SourcerepoRepository#pubsub_configs}
  */
  readonly pubsubConfigs?: SourcerepoRepositoryPubsubConfigs[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository#timeouts SourcerepoRepository#timeouts}
  */
  readonly timeouts?: SourcerepoRepositoryTimeouts;
}
export interface SourcerepoRepositoryPubsubConfigs {
  /**
  * The format of the Cloud Pub/Sub messages. 
- PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
- JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository#message_format SourcerepoRepository#message_format}
  */
  readonly messageFormat: string;
  /**
  * Email address of the service account used for publishing Cloud Pub/Sub messages. 
This service account needs to be in the same project as the PubsubConfig. When added, 
the caller needs to have iam.serviceAccounts.actAs permission on this service account. 
If unspecified, it defaults to the compute engine default service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository#service_account_email SourcerepoRepository#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository#topic SourcerepoRepository#topic}
  */
  readonly topic: string;
}

export function sourcerepoRepositoryPubsubConfigsToTerraform(struct?: SourcerepoRepositoryPubsubConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface SourcerepoRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository#create SourcerepoRepository#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository#delete SourcerepoRepository#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository#update SourcerepoRepository#update}
  */
  readonly update?: string;
}

export function sourcerepoRepositoryTimeoutsToTerraform(struct?: SourcerepoRepositoryTimeoutsOutputReference | SourcerepoRepositoryTimeouts): any {
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

export class SourcerepoRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SourcerepoRepositoryTimeouts | undefined {
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

  public set internalValue(value: SourcerepoRepositoryTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository google_sourcerepo_repository}
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
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository google_sourcerepo_repository} Resource
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._project;
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pubsub_configs') as any;
  }
  public set pubsubConfigs(value: SourcerepoRepositoryPubsubConfigs[]) {
    this._pubsubConfigs = value;
  }
  public resetPubsubConfigs() {
    this._pubsubConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubConfigsInput() {
    return this._pubsubConfigs;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SourcerepoRepositoryTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SourcerepoRepositoryTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      pubsub_configs: cdktf.listMapper(sourcerepoRepositoryPubsubConfigsToTerraform)(this._pubsubConfigs),
      timeouts: sourcerepoRepositoryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
