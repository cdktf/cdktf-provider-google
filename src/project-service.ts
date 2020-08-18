// https://www.terraform.io/docs/providers/google/r/project_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ProjectServiceConfig extends TerraformMetaArguments {
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

// Resource

export class ProjectService extends TerraformResource {

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
    return this._disableDependentServices;
  }
  public set disableDependentServices(value: boolean | undefined) {
    this._disableDependentServices = value;
  }

  // disable_on_destroy - computed: false, optional: true, required: false
  private _disableOnDestroy?: boolean;
  public get disableOnDestroy() {
    return this._disableOnDestroy;
  }
  public set disableOnDestroy(value: boolean | undefined) {
    this._disableOnDestroy = value;
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

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this._service;
  }
  public set service(value: string) {
    this._service = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProjectServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ProjectServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_dependent_services: this._disableDependentServices,
      disable_on_destroy: this._disableOnDestroy,
      project: this._project,
      service: this._service,
      timeouts: this._timeouts,
    };
  }
}
