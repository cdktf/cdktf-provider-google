// https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RuntimeconfigConfigIamBindingConfig extends TerraformMetaArguments {
  readonly config: string;
  readonly members: string[];
  readonly project?: string;
  readonly role: string;
  /** condition block */
  readonly condition?: RuntimeconfigConfigIamBindingCondition[];
}
export interface RuntimeconfigConfigIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class RuntimeconfigConfigIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RuntimeconfigConfigIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_runtimeconfig_config_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._config = config.config;
    this._members = config.members;
    this._project = config.project;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config: string;
  public get config() {
    return this._config;
  }
  public set config(value: string) {
    this._config = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this._members;
  }
  public set members(value: string[]) {
    this._members = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: RuntimeconfigConfigIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: RuntimeconfigConfigIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      config: this._config,
      members: this._members,
      project: this._project,
      role: this._role,
      condition: this._condition,
    };
  }
}
