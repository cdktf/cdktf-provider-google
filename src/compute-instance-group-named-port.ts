// https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceGroupNamedPortAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the instance group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html#group ComputeInstanceGroupNamedPortA#group}
  */
  readonly group: string;
  /**
  * The name for this named port. The name must be 1-63 characters
long, and comply with RFC1035.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html#name ComputeInstanceGroupNamedPortA#name}
  */
  readonly name: string;
  /**
  * The port number, which can be a value between 1 and 65535.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html#port ComputeInstanceGroupNamedPortA#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html#project ComputeInstanceGroupNamedPortA#project}
  */
  readonly project?: string;
  /**
  * The zone of the instance group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html#zone ComputeInstanceGroupNamedPortA#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html#timeouts ComputeInstanceGroupNamedPortA#timeouts}
  */
  readonly timeouts?: ComputeInstanceGroupNamedPortTimeouts;
}
export interface ComputeInstanceGroupNamedPortTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html#create ComputeInstanceGroupNamedPortA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html#delete ComputeInstanceGroupNamedPortA#delete}
  */
  readonly delete?: string;
}

function computeInstanceGroupNamedPortTimeoutsToTerraform(struct?: ComputeInstanceGroupNamedPortTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html google_compute_instance_group_named_port}
*/
export class ComputeInstanceGroupNamedPortA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_instance_group_named_port";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port.html google_compute_instance_group_named_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceGroupNamedPortAConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceGroupNamedPortAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_group_named_port',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._group = config.group;
    this._name = config.name;
    this._port = config.port;
    this._project = config.project;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group: string;
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
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

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeInstanceGroupNamedPortTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeInstanceGroupNamedPortTimeouts ) {
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
      group: cdktf.stringToTerraform(this._group),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      project: cdktf.stringToTerraform(this._project),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: computeInstanceGroupNamedPortTimeoutsToTerraform(this._timeouts),
    };
  }
}
