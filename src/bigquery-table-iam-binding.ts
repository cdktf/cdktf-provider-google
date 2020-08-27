// https://www.terraform.io/docs/providers/google/r/bigquery_table_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigqueryTableIamBindingConfig extends TerraformMetaArguments {
  readonly datasetId: string;
  readonly members: string[];
  readonly project?: string;
  readonly role: string;
  readonly tableId: string;
  /** condition block */
  readonly condition?: BigqueryTableIamBindingCondition[];
}
export interface BigqueryTableIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class BigqueryTableIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BigqueryTableIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_table_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datasetId = config.datasetId;
    this._members = config.members;
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

  // table_id - computed: false, optional: false, required: true
  private _tableId: string;
  public get tableId() {
    return this._tableId;
  }
  public set tableId(value: string) {
    this._tableId = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: BigqueryTableIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: BigqueryTableIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_id: this._datasetId,
      members: this._members,
      project: this._project,
      role: this._role,
      table_id: this._tableId,
      condition: this._condition,
    };
  }
}
