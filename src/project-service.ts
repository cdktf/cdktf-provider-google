// https://www.terraform.io/docs/providers/google/r/project_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectServiceConfig extends cdktf.TerraformMetaArguments {
  readonly disableDependentServices?: boolean;
  readonly disableOnDestroy?: boolean;
  readonly project?: string;
  readonly service: string;
  /** timeouts block */
  readonly timeouts?: ProjectServiceTimeouts;
}
export interface ProjectServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function projectServiceTimeoutsToTerraform(struct?: ProjectServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ProjectService extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ProjectServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disableDependentServices = config.disableDependentServices;
    this._disableOnDestroy = config.disableOnDestroy;
    this._project = config.project;
    this._service = config.service;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_dependent_services - computed: false, optional: true, required: false
  private _disableDependentServices?: boolean;
  public get disableDependentServices() {
    return this.getBooleanAttribute('disable_dependent_services');
  }
  public set disableDependentServices(value: boolean ) {
    this._disableDependentServices = value;
  }
  public resetDisableDependentServices() {
    this._disableDependentServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDependentServicesInput() {
    return this._disableDependentServices
  }

  // disable_on_destroy - computed: false, optional: true, required: false
  private _disableOnDestroy?: boolean;
  public get disableOnDestroy() {
    return this.getBooleanAttribute('disable_on_destroy');
  }
  public set disableOnDestroy(value: boolean ) {
    this._disableOnDestroy = value;
  }
  public resetDisableOnDestroy() {
    this._disableOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOnDestroyInput() {
    return this._disableOnDestroy
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

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProjectServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ProjectServiceTimeouts ) {
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
      disable_dependent_services: cdktf.booleanToTerraform(this._disableDependentServices),
      disable_on_destroy: cdktf.booleanToTerraform(this._disableOnDestroy),
      project: cdktf.stringToTerraform(this._project),
      service: cdktf.stringToTerraform(this._service),
      timeouts: projectServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
