// https://www.terraform.io/docs/providers/google/r/compute_subnetwork_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeSubnetworkIamMemberConfig extends TerraformMetaArguments {
  readonly member: string;
  readonly project?: string;
  readonly region?: string;
  readonly role: string;
  readonly subnetwork: string;
  /** condition block */
  readonly condition?: ComputeSubnetworkIamMemberCondition[];
}
export interface ComputeSubnetworkIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class ComputeSubnetworkIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeSubnetworkIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_subnetwork_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._member = config.member;
    this._project = config.project;
    this._region = config.region;
    this._role = config.role;
    this._subnetwork = config.subnetwork;
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // subnetwork - computed: false, optional: false, required: true
  private _subnetwork: string;
  public get subnetwork() {
    return this._subnetwork;
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: ComputeSubnetworkIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: ComputeSubnetworkIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      member: this._member,
      project: this._project,
      region: this._region,
      role: this._role,
      subnetwork: this._subnetwork,
      condition: this._condition,
    };
  }
}
