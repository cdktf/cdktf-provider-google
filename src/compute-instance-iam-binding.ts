// https://www.terraform.io/docs/providers/google/r/compute_instance_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeInstanceIamBindingConfig extends TerraformMetaArguments {
  readonly instanceName: string;
  readonly members: string[];
  readonly project?: string;
  readonly role: string;
  readonly zone?: string;
  /** condition block */
  readonly condition?: ComputeInstanceIamBindingCondition[];
}
export interface ComputeInstanceIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class ComputeInstanceIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeInstanceIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceName = config.instanceName;
    this._members = config.members;
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

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: ComputeInstanceIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: ComputeInstanceIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_name: this._instanceName,
      members: this._members,
      project: this._project,
      role: this._role,
      zone: this._zone,
      condition: this._condition,
    };
  }
}
