// https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringCustomServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name used for UI elements listing this Service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html#display_name MonitoringCustomService#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html#project MonitoringCustomService#project}
  */
  readonly project?: string;
  /**
  * An optional service ID to use. If not given, the server will generate a
service ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html#service_id MonitoringCustomService#service_id}
  */
  readonly serviceId?: string;
  /**
  * telemetry block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html#telemetry MonitoringCustomService#telemetry}
  */
  readonly telemetry?: MonitoringCustomServiceTelemetry[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html#timeouts MonitoringCustomService#timeouts}
  */
  readonly timeouts?: MonitoringCustomServiceTimeouts;
}
export interface MonitoringCustomServiceTelemetry {
  /**
  * The full name of the resource that defines this service.
Formatted as described in
https://cloud.google.com/apis/design/resource_names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html#resource_name MonitoringCustomService#resource_name}
  */
  readonly resourceName?: string;
}

function monitoringCustomServiceTelemetryToTerraform(struct?: MonitoringCustomServiceTelemetry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
  }
}

export interface MonitoringCustomServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html#create MonitoringCustomService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html#delete MonitoringCustomService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html#update MonitoringCustomService#update}
  */
  readonly update?: string;
}

function monitoringCustomServiceTimeoutsToTerraform(struct?: MonitoringCustomServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html google_monitoring_custom_service}
*/
export class MonitoringCustomService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_monitoring_custom_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/monitoring_custom_service.html google_monitoring_custom_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringCustomServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MonitoringCustomServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_custom_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._project = config.project;
    this._serviceId = config.serviceId;
    this._telemetry = config.telemetry;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string;
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId
  }

  // telemetry - computed: false, optional: true, required: false
  private _telemetry?: MonitoringCustomServiceTelemetry[];
  public get telemetry() {
    return this.interpolationForAttribute('telemetry') as any;
  }
  public set telemetry(value: MonitoringCustomServiceTelemetry[] ) {
    this._telemetry = value;
  }
  public resetTelemetry() {
    this._telemetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringCustomServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitoringCustomServiceTimeouts ) {
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
      project: cdktf.stringToTerraform(this._project),
      service_id: cdktf.stringToTerraform(this._serviceId),
      telemetry: cdktf.listMapper(monitoringCustomServiceTelemetryToTerraform)(this._telemetry),
      timeouts: monitoringCustomServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
