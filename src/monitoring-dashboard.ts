// https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitoringDashboardConfig extends TerraformMetaArguments {
  /** The JSON representation of a dashboard, following the format at https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards. */
  readonly dashboardJson: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: MonitoringDashboardTimeouts;
}
export interface MonitoringDashboardTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MonitoringDashboard extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._dashboardJson;
  }
  public set dashboardJson(value: string) {
    this._dashboardJson = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
  private _timeouts?: MonitoringDashboardTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitoringDashboardTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_json: this._dashboardJson,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
