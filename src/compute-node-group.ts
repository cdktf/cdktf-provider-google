// https://www.terraform.io/docs/providers/google/r/compute_node_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeNodeGroupConfig extends TerraformMetaArguments {
  /** An optional textual description of the resource. */
  readonly description?: string;
  /** Name of the resource. */
  readonly name?: string;
  /** The URL of the node template to which this node group belongs. */
  readonly nodeTemplate: string;
  readonly project?: string;
  /** The total number of nodes in the node group. */
  readonly size: number;
  /** Zone where this node group is located */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: ComputeNodeGroupTimeouts;
}
export interface ComputeNodeGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeNodeGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_node_group',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._nodeTemplate = config.nodeTemplate;
    this._project = config.project;
    this._size = config.size;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // node_template - computed: false, optional: false, required: true
  private _nodeTemplate: string;
  public get nodeTemplate() {
    return this._nodeTemplate;
  }
  public set nodeTemplate(value: string) {
    this._nodeTemplate = value;
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

  // size - computed: false, optional: false, required: true
  private _size: number;
  public get size() {
    return this._size;
  }
  public set size(value: number) {
    this._size = value;
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
  private _timeouts?: ComputeNodeGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeNodeGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      node_template: this._nodeTemplate,
      project: this._project,
      size: this._size,
      zone: this._zone,
      timeouts: this._timeouts,
    };
  }
}
