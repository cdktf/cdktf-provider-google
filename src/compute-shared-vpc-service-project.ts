// https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_service_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeSharedVpcServiceProjectConfig extends TerraformMetaArguments {
  /** The ID of a host project to associate. */
  readonly hostProject: string;
  /** The ID of the project that will serve as a Shared VPC service project. */
  readonly serviceProject: string;
  /** timeouts block */
  readonly timeouts?: ComputeSharedVpcServiceProjectTimeouts;
}
export interface ComputeSharedVpcServiceProjectTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeSharedVpcServiceProject extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeSharedVpcServiceProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_shared_vpc_service_project',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hostProject = config.hostProject;
    this._serviceProject = config.serviceProject;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_project - computed: false, optional: false, required: true
  private _hostProject: string;
  public get hostProject() {
    return this._hostProject;
  }
  public set hostProject(value: string) {
    this._hostProject = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // service_project - computed: false, optional: false, required: true
  private _serviceProject: string;
  public get serviceProject() {
    return this._serviceProject;
  }
  public set serviceProject(value: string) {
    this._serviceProject = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSharedVpcServiceProjectTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeSharedVpcServiceProjectTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      host_project: this._hostProject,
      service_project: this._serviceProject,
      timeouts: this._timeouts,
    };
  }
}
