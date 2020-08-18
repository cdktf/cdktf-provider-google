// https://www.terraform.io/docs/providers/google/r/compute_instance_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeInstanceIamMemberConfig extends TerraformMetaArguments {
  readonly instanceName: string;
  readonly member: string;
  readonly project?: string;
  readonly role: string;
  readonly zone?: string;
  /** condition block */
  readonly condition?: ComputeInstanceIamMemberCondition[];
}
export interface ComputeInstanceIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class ComputeInstanceIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeInstanceIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceName = config.instanceName;
    this._member = config.member;
    this._project = config.project;
    this._role = config.role;
    this._zone = config.zone;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName: string;
  public get instanceName() {
    return this._instanceName;
  }
  public set instanceName(value: string) {
    this._instanceName = value;
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

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: ComputeInstanceIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: ComputeInstanceIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_name: this._instanceName,
      member: this._member,
      project: this._project,
      role: this._role,
      zone: this._zone,
      condition: this._condition,
    };
  }
}
