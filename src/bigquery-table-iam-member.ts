// https://www.terraform.io/docs/providers/google/r/bigquery_table_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigqueryTableIamMemberConfig extends TerraformMetaArguments {
  readonly datasetId: string;
  readonly member: string;
  readonly project?: string;
  readonly role: string;
  readonly tableId: string;
  /** condition block */
  readonly condition?: BigqueryTableIamMemberCondition[];
}
export interface BigqueryTableIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class BigqueryTableIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BigqueryTableIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_table_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datasetId = config.datasetId;
    this._member = config.member;
    this._project = config.project;
    this._role = config.role;
    this._tableId = config.tableId;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId: string;
  public get datasetId() {
    return this._datasetId;
  }
  public set datasetId(value: string) {
    this._datasetId = value;
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

  // table_id - computed: false, optional: false, required: true
  private _tableId: string;
  public get tableId() {
    return this._tableId;
  }
  public set tableId(value: string) {
    this._tableId = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: BigqueryTableIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: BigqueryTableIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_id: this._datasetId,
      member: this._member,
      project: this._project,
      role: this._role,
      table_id: this._tableId,
      condition: this._condition,
    };
  }
}
