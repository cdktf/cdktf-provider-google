// https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSharedVpcHostProjectConfig extends cdktf.TerraformMetaArguments {
  /** The ID of the project that will serve as a Shared VPC host project */
  readonly project: string;
  /** timeouts block */
  readonly timeouts?: ComputeSharedVpcHostProjectTimeouts;
}
export interface ComputeSharedVpcHostProjectTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function computeSharedVpcHostProjectTimeoutsToTerraform(struct?: ComputeSharedVpcHostProjectTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeSharedVpcHostProject extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeSharedVpcHostProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_shared_vpc_host_project',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project - computed: false, optional: false, required: true
  private _project: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSharedVpcHostProjectTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeSharedVpcHostProjectTimeouts ) {
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
      project: cdktf.stringToTerraform(this._project),
      timeouts: computeSharedVpcHostProjectTimeoutsToTerraform(this._timeouts),
    };
  }
}
