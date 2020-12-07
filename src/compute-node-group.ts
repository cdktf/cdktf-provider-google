// https://www.terraform.io/docs/providers/google/r/compute_node_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /** An optional textual description of the resource. */
  readonly description?: string;
  /** Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT. */
  readonly maintenancePolicy?: string;
  /** Name of the resource. */
  readonly name?: string;
  /** The URL of the node template to which this node group belongs. */
  readonly nodeTemplate: string;
  readonly project?: string;
  /** The total number of nodes in the node group. */
  readonly size: number;
  /** Zone where this node group is located */
  readonly zone?: string;
  /** autoscaling_policy block */
  readonly autoscalingPolicy?: ComputeNodeGroupAutoscalingPolicy[];
  /** timeouts block */
  readonly timeouts?: ComputeNodeGroupTimeouts;
}
export interface ComputeNodeGroupAutoscalingPolicy {
  /** Maximum size of the node group. Set to a value less than or equal
to 100 and greater than or equal to min-nodes. */
  readonly maxNodes?: number;
  /** Minimum size of the node group. Must be less
than or equal to max-nodes. The default value is 0. */
  readonly minNodes?: number;
  /** The autoscaling mode. Set to one of the following:
  - OFF: Disables the autoscaler.
  - ON: Enables scaling in and scaling out.
  - ONLY_SCALE_OUT: Enables only scaling out.
  You must use this mode if your node groups are configured to
  restart their hosted VMs on minimal servers. Possible values: ["OFF", "ON", "ONLY_SCALE_OUT"] */
  readonly mode?: string;
}

function computeNodeGroupAutoscalingPolicyToTerraform(struct?: ComputeNodeGroupAutoscalingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_nodes: cdktf.numberToTerraform(struct!.maxNodes),
    min_nodes: cdktf.numberToTerraform(struct!.minNodes),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export interface ComputeNodeGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeNodeGroupTimeoutsToTerraform(struct?: ComputeNodeGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeNodeGroup extends cdktf.TerraformResource {

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
    this._maintenancePolicy = config.maintenancePolicy;
    this._name = config.name;
    this._nodeTemplate = config.nodeTemplate;
    this._project = config.project;
    this._size = config.size;
    this._zone = config.zone;
    this._autoscalingPolicy = config.autoscalingPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy?: string;
  public get maintenancePolicy() {
    return this.getStringAttribute('maintenance_policy');
  }
  public set maintenancePolicy(value: string ) {
    this._maintenancePolicy = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // node_template - computed: false, optional: false, required: true
  private _nodeTemplate: string;
  public get nodeTemplate() {
    return this.getStringAttribute('node_template');
  }
  public set nodeTemplate(value: string) {
    this._nodeTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTemplateInput() {
    return this._nodeTemplate
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // size - computed: false, optional: false, required: true
  private _size: number;
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
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

  // autoscaling_policy - computed: false, optional: true, required: false
  private _autoscalingPolicy?: ComputeNodeGroupAutoscalingPolicy[];
  public get autoscalingPolicy() {
    return this.interpolationForAttribute('autoscaling_policy') as any;
  }
  public set autoscalingPolicy(value: ComputeNodeGroupAutoscalingPolicy[] ) {
    this._autoscalingPolicy = value;
  }
  public resetAutoscalingPolicy() {
    this._autoscalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPolicyInput() {
    return this._autoscalingPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeNodeGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeNodeGroupTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      maintenance_policy: cdktf.stringToTerraform(this._maintenancePolicy),
      name: cdktf.stringToTerraform(this._name),
      node_template: cdktf.stringToTerraform(this._nodeTemplate),
      project: cdktf.stringToTerraform(this._project),
      size: cdktf.numberToTerraform(this._size),
      zone: cdktf.stringToTerraform(this._zone),
      autoscaling_policy: cdktf.listMapper(computeNodeGroupAutoscalingPolicyToTerraform)(this._autoscalingPolicy),
      timeouts: computeNodeGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
