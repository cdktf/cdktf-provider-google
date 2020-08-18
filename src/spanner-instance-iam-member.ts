// https://www.terraform.io/docs/providers/google/r/spanner_instance_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SpannerInstanceIamMemberConfig extends TerraformMetaArguments {
  readonly instance: string;
  readonly member: string;
  readonly project?: string;
  readonly role: string;
  /** condition block */
  readonly condition?: SpannerInstanceIamMemberCondition[];
}
export interface SpannerInstanceIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class SpannerInstanceIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpannerInstanceIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_spanner_instance_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instance = config.instance;
    this._member = config.member;
    this._project = config.project;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this._instance;
  }
  public set instance(value: string) {
    this._instance = value;
  }

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this._member;
  }
  public set member(value: string) {
    this._member = value;
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
  private _condition?: SpannerInstanceIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: SpannerInstanceIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance: this._instance,
      member: this._member,
      project: this._project,
      role: this._role,
      condition: this._condition,
    };
  }
}
