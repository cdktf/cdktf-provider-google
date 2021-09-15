// https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSharedVpcHostProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the project that will serve as a Shared VPC host project
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project.html#project ComputeSharedVpcHostProject#project}
  */
  readonly project: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project.html#timeouts ComputeSharedVpcHostProject#timeouts}
  */
  readonly timeouts?: ComputeSharedVpcHostProjectTimeouts;
}
export interface ComputeSharedVpcHostProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project.html#create ComputeSharedVpcHostProject#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project.html#delete ComputeSharedVpcHostProject#delete}
  */
  readonly delete?: string;
}

function computeSharedVpcHostProjectTimeoutsToTerraform(struct?: ComputeSharedVpcHostProjectTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project.html google_compute_shared_vpc_host_project}
*/
export class ComputeSharedVpcHostProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_shared_vpc_host_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project.html google_compute_shared_vpc_host_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSharedVpcHostProjectConfig
  */
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
