// https://www.terraform.io/docs/providers/google/r/monitoring_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitoringGroupConfig extends TerraformMetaArguments {
  /** A user-assigned name for this group, used only for display
purposes. */
  readonly displayName: string;
  /** The filter used to determine which monitored resources
belong to this group. */
  readonly filter: string;
  /** If true, the members of this group are considered to be a
cluster. The system can perform additional analysis on
groups that are clusters. */
  readonly isCluster?: boolean;
  /** The name of the group's parent, if it has one. The format is
"projects/{project_id_or_number}/groups/{group_id}". For
groups with no parent, parentName is the empty string, "". */
  readonly parentName?: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: MonitoringGroupTimeouts;
}
export interface MonitoringGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MonitoringGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitoringGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_group',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._filter = config.filter;
    this._isCluster = config.isCluster;
    this._parentName = config.parentName;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // filter - computed: false, optional: false, required: true
  private _filter: string;
  public get filter() {
    return this._filter;
  }
  public set filter(value: string) {
    this._filter = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_cluster - computed: false, optional: true, required: false
  private _isCluster?: boolean;
  public get isCluster() {
    return this._isCluster;
  }
  public set isCluster(value: boolean | undefined) {
    this._isCluster = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_name - computed: false, optional: true, required: false
  private _parentName?: string;
  public get parentName() {
    return this._parentName;
  }
  public set parentName(value: string | undefined) {
    this._parentName = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitoringGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      filter: this._filter,
      is_cluster: this._isCluster,
      parent_name: this._parentName,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
