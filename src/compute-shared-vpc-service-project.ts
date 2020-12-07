// https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_service_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSharedVpcServiceProjectConfig extends cdktf.TerraformMetaArguments {
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

function computeSharedVpcServiceProjectTimeoutsToTerraform(struct?: ComputeSharedVpcServiceProjectTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeSharedVpcServiceProject extends cdktf.TerraformResource {

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
    return this.getStringAttribute('host_project');
  }
  public set hostProject(value: string) {
    this._hostProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProjectInput() {
    return this._hostProject
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_project - computed: false, optional: false, required: true
  private _serviceProject: string;
  public get serviceProject() {
    return this.getStringAttribute('service_project');
  }
  public set serviceProject(value: string) {
    this._serviceProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProjectInput() {
    return this._serviceProject
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSharedVpcServiceProjectTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeSharedVpcServiceProjectTimeouts ) {
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
      host_project: cdktf.stringToTerraform(this._hostProject),
      service_project: cdktf.stringToTerraform(this._serviceProject),
      timeouts: computeSharedVpcServiceProjectTimeoutsToTerraform(this._timeouts),
    };
  }
}
