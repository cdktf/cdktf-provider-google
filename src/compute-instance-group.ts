// https://www.terraform.io/docs/providers/google/r/compute_instance_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeInstanceGroupConfig extends TerraformMetaArguments {
  /** An optional textual description of the instance group. */
  readonly description?: string;
  /** List of instances in the group. They should be given as self_link URLs. When adding instances they must all be in the same network and zone as the instance group. */
  readonly instances?: string[];
  /** The name of the instance group. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens. */
  readonly name: string;
  /** The URL of the network the instance group is in. If this is different from the network where the instances are in, the creation fails. Defaults to the network where the instances are in (if neither network nor instances is specified, this field will be blank). */
  readonly network?: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The zone that this instance group should be created in. */
  readonly zone?: string;
  /** named_port block */
  readonly namedPort?: ComputeInstanceGroupNamedPort[];
  /** timeouts block */
  readonly timeouts?: ComputeInstanceGroupTimeouts;
}
export interface ComputeInstanceGroupNamedPort {
  /** The name which the port will be mapped to. */
  readonly name: string;
  /** The port number to map the name to. */
  readonly port: number;
}
export interface ComputeInstanceGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeInstanceGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeInstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._instances = config.instances;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._zone = config.zone;
    this._namedPort = config.namedPort;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[];
  public get instances() {
    return this._instances ?? this.getListAttribute('instances');
  }
  public set instances(value: string[] | undefined) {
    this._instances = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string;
  public get network() {
    return this._network ?? this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
    this._network = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // named_port - computed: false, optional: true, required: false
  private _namedPort?: ComputeInstanceGroupNamedPort[];
  public get namedPort() {
    return this._namedPort;
  }
  public set namedPort(value: ComputeInstanceGroupNamedPort[] | undefined) {
    this._namedPort = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeInstanceGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeInstanceGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      instances: this._instances,
      name: this._name,
      network: this._network,
      project: this._project,
      zone: this._zone,
      named_port: this._namedPort,
      timeouts: this._timeouts,
    };
  }
}
