// https://www.terraform.io/docs/providers/google/r/data_google_monitoring_app_engine_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleMonitoringAppEngineServiceConfig extends TerraformMetaArguments {
  /** The ID of the App Engine module underlying this service. 
Corresponds to the 'moduleId' resource label for a 'gae_app'
monitored resource(see https://cloud.google.com/monitoring/api/resources#tag_gae_app) */
  readonly moduleId: string;
  readonly project?: string;
}
export class DataGoogleMonitoringAppEngineServiceTelemetry extends ComplexComputedList {

  // resource_name - computed: true, optional: false, required: true
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
}

// Resource

export class DataGoogleMonitoringAppEngineService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleMonitoringAppEngineServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_app_engine_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._moduleId = config.moduleId;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // module_id - computed: false, optional: false, required: true
  private _moduleId: string;
  public get moduleId() {
    return this._moduleId;
  }
  public set moduleId(value: string) {
    this._moduleId = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // service_id - computed: true, optional: false, required: true
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // telemetry - computed: true, optional: false, required: true
  public telemetry(index: string) {
    return new DataGoogleMonitoringAppEngineServiceTelemetry(this, 'telemetry', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      module_id: this._moduleId,
      project: this._project,
    };
  }
}
