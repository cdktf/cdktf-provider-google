// https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JSON representation of a dashboard, following the format at https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html#dashboard_json MonitoringDashboard#dashboard_json}
  */
  readonly dashboardJson: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html#project MonitoringDashboard#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html#timeouts MonitoringDashboard#timeouts}
  */
  readonly timeouts?: MonitoringDashboardTimeouts;
}
export interface MonitoringDashboardTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html#create MonitoringDashboard#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html#delete MonitoringDashboard#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html#update MonitoringDashboard#update}
  */
  readonly update?: string;
}

function monitoringDashboardTimeoutsToTerraform(struct?: MonitoringDashboardTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html google_monitoring_dashboard}
*/
export class MonitoringDashboard extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html google_monitoring_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dashboardJson = config.dashboardJson;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_json - computed: false, optional: false, required: true
  private _dashboardJson: string;
  public get dashboardJson() {
    return this.getStringAttribute('dashboard_json');
  }
  public set dashboardJson(value: string) {
    this._dashboardJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardJsonInput() {
    return this._dashboardJson
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _timeouts?: MonitoringDashboardTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitoringDashboardTimeouts ) {
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
      dashboard_json: cdktf.stringToTerraform(this._dashboardJson),
      project: cdktf.stringToTerraform(this._project),
      timeouts: monitoringDashboardTimeoutsToTerraform(this._timeouts),
    };
  }
}
