// https://www.terraform.io/docs/providers/google/r/compute_instance_group_named_port_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeInstanceGroupNamedPortAConfig extends TerraformMetaArguments {
  /** The name of the instance group. */
  readonly group: string;
  /** The name for this named port. The name must be 1-63 characters
long, and comply with RFC1035. */
  readonly name: string;
  /** The port number, which can be a value between 1 and 65535. */
  readonly port: number;
  readonly project?: string;
  /** The zone of the instance group. */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: ComputeInstanceGroupNamedPortTimeouts;
}
export interface ComputeInstanceGroupNamedPortTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeInstanceGroupNamedPortA extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._group;
  }
  public set group(value: string) {
    this._group = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this._port;
  }
  public set port(value: number) {
    this._port = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeInstanceGroupNamedPortTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeInstanceGroupNamedPortTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      group: this._group,
      name: this._name,
      port: this._port,
      project: this._project,
      zone: this._zone,
      timeouts: this._timeouts,
    };
  }
}
