// https://www.terraform.io/docs/providers/google/r/monitoring_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * A user-assigned name for this group, used only for display
purposes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html#display_name MonitoringGroup#display_name}
  */
  readonly displayName: string;
  /**
  * The filter used to determine which monitored resources
belong to this group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html#filter MonitoringGroup#filter}
  */
  readonly filter: string;
  /**
  * If true, the members of this group are considered to be a
cluster. The system can perform additional analysis on
groups that are clusters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html#is_cluster MonitoringGroup#is_cluster}
  */
  readonly isCluster?: boolean | cdktf.IResolvable;
  /**
  * The name of the group's parent, if it has one. The format is
"projects/{project_id_or_number}/groups/{group_id}". For
groups with no parent, parentName is the empty string, "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html#parent_name MonitoringGroup#parent_name}
  */
  readonly parentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html#project MonitoringGroup#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html#timeouts MonitoringGroup#timeouts}
  */
  readonly timeouts?: MonitoringGroupTimeouts;
}
export interface MonitoringGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html#create MonitoringGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html#delete MonitoringGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html#update MonitoringGroup#update}
  */
  readonly update?: string;
}

function monitoringGroupTimeoutsToTerraform(struct?: MonitoringGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html google_monitoring_group}
*/
export class MonitoringGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_monitoring_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/monitoring_group.html google_monitoring_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringGroupConfig
  */
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
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // filter - computed: false, optional: false, required: true
  private _filter: string;
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_cluster - computed: false, optional: true, required: false
  private _isCluster?: boolean | cdktf.IResolvable;
  public get isCluster() {
    return this.getBooleanAttribute('is_cluster');
  }
  public set isCluster(value: boolean | cdktf.IResolvable ) {
    this._isCluster = value;
  }
  public resetIsCluster() {
    this._isCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isClusterInput() {
    return this._isCluster
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_name - computed: false, optional: true, required: false
  private _parentName?: string;
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }
  public set parentName(value: string ) {
    this._parentName = value;
  }
  public resetParentName() {
    this._parentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentNameInput() {
    return this._parentName
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitoringGroupTimeouts ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      filter: cdktf.stringToTerraform(this._filter),
      is_cluster: cdktf.booleanToTerraform(this._isCluster),
      parent_name: cdktf.stringToTerraform(this._parentName),
      project: cdktf.stringToTerraform(this._project),
      timeouts: monitoringGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
