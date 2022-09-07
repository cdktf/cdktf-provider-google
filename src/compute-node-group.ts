// https://www.terraform.io/docs/providers/google/r/compute_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional textual description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#description ComputeNodeGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#id ComputeNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The initial number of nodes in the node group. One of 'initial_size' or 'size' must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#initial_size ComputeNodeGroup#initial_size}
  */
  readonly initialSize?: number;
  /**
  * Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#maintenance_policy ComputeNodeGroup#maintenance_policy}
  */
  readonly maintenancePolicy?: string;
  /**
  * Name of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#name ComputeNodeGroup#name}
  */
  readonly name?: string;
  /**
  * The URL of the node template to which this node group belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#node_template ComputeNodeGroup#node_template}
  */
  readonly nodeTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#project ComputeNodeGroup#project}
  */
  readonly project?: string;
  /**
  * The total number of nodes in the node group. One of 'initial_size' or 'size' must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#size ComputeNodeGroup#size}
  */
  readonly size?: number;
  /**
  * Zone where this node group is located
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#zone ComputeNodeGroup#zone}
  */
  readonly zone?: string;
  /**
  * autoscaling_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#autoscaling_policy ComputeNodeGroup#autoscaling_policy}
  */
  readonly autoscalingPolicy?: ComputeNodeGroupAutoscalingPolicy;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#maintenance_window ComputeNodeGroup#maintenance_window}
  */
  readonly maintenanceWindow?: ComputeNodeGroupMaintenanceWindow;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#timeouts ComputeNodeGroup#timeouts}
  */
  readonly timeouts?: ComputeNodeGroupTimeouts;
}
export interface ComputeNodeGroupAutoscalingPolicy {
  /**
  * Maximum size of the node group. Set to a value less than or equal
to 100 and greater than or equal to min-nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#max_nodes ComputeNodeGroup#max_nodes}
  */
  readonly maxNodes?: number;
  /**
  * Minimum size of the node group. Must be less
than or equal to max-nodes. The default value is 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#min_nodes ComputeNodeGroup#min_nodes}
  */
  readonly minNodes?: number;
  /**
  * The autoscaling mode. Set to one of the following:
  - OFF: Disables the autoscaler.
  - ON: Enables scaling in and scaling out.
  - ONLY_SCALE_OUT: Enables only scaling out.
  You must use this mode if your node groups are configured to
  restart their hosted VMs on minimal servers. Possible values: ["OFF", "ON", "ONLY_SCALE_OUT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#mode ComputeNodeGroup#mode}
  */
  readonly mode?: string;
}

export function computeNodeGroupAutoscalingPolicyToTerraform(struct?: ComputeNodeGroupAutoscalingPolicyOutputReference | ComputeNodeGroupAutoscalingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_nodes: cdktf.numberToTerraform(struct!.maxNodes),
    min_nodes: cdktf.numberToTerraform(struct!.minNodes),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class ComputeNodeGroupAutoscalingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeNodeGroupAutoscalingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodes = this._maxNodes;
    }
    if (this._minNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodes = this._minNodes;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNodeGroupAutoscalingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodes = undefined;
      this._minNodes = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodes = value.maxNodes;
      this._minNodes = value.minNodes;
      this._mode = value.mode;
    }
  }

  // max_nodes - computed: true, optional: true, required: false
  private _maxNodes?: number; 
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }
  public set maxNodes(value: number) {
    this._maxNodes = value;
  }
  public resetMaxNodes() {
    this._maxNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesInput() {
    return this._maxNodes;
  }

  // min_nodes - computed: true, optional: true, required: false
  private _minNodes?: number; 
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }
  public set minNodes(value: number) {
    this._minNodes = value;
  }
  public resetMinNodes() {
    this._minNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodesInput() {
    return this._minNodes;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface ComputeNodeGroupMaintenanceWindow {
  /**
  * instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#start_time ComputeNodeGroup#start_time}
  */
  readonly startTime: string;
}

export function computeNodeGroupMaintenanceWindowToTerraform(struct?: ComputeNodeGroupMaintenanceWindowOutputReference | ComputeNodeGroupMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class ComputeNodeGroupMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeNodeGroupMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNodeGroupMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime = value.startTime;
    }
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface ComputeNodeGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#create ComputeNodeGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#delete ComputeNodeGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#update ComputeNodeGroup#update}
  */
  readonly update?: string;
}

export function computeNodeGroupTimeoutsToTerraform(struct?: ComputeNodeGroupTimeoutsOutputReference | ComputeNodeGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeNodeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeNodeGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNodeGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_node_group google_compute_node_group}
*/
export class ComputeNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_node_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_node_group google_compute_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_node_group',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._initialSize = config.initialSize;
    this._maintenancePolicy = config.maintenancePolicy;
    this._name = config.name;
    this._nodeTemplate = config.nodeTemplate;
    this._project = config.project;
    this._size = config.size;
    this._zone = config.zone;
    this._autoscalingPolicy.internalValue = config.autoscalingPolicy;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._timeouts.internalValue = config.timeouts;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // initial_size - computed: false, optional: true, required: false
  private _initialSize?: number; 
  public get initialSize() {
    return this.getNumberAttribute('initial_size');
  }
  public set initialSize(value: number) {
    this._initialSize = value;
  }
  public resetInitialSize() {
    this._initialSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSizeInput() {
    return this._initialSize;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy?: string; 
  public get maintenancePolicy() {
    return this.getStringAttribute('maintenance_policy');
  }
  public set maintenancePolicy(value: string) {
    this._maintenancePolicy = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_template - computed: false, optional: false, required: true
  private _nodeTemplate?: string; 
  public get nodeTemplate() {
    return this.getStringAttribute('node_template');
  }
  public set nodeTemplate(value: string) {
    this._nodeTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTemplateInput() {
    return this._nodeTemplate;
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
    return this._project;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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
    return this._zone;
  }

  // autoscaling_policy - computed: false, optional: true, required: false
  private _autoscalingPolicy = new ComputeNodeGroupAutoscalingPolicyOutputReference(this, "autoscaling_policy");
  public get autoscalingPolicy() {
    return this._autoscalingPolicy;
  }
  public putAutoscalingPolicy(value: ComputeNodeGroupAutoscalingPolicy) {
    this._autoscalingPolicy.internalValue = value;
  }
  public resetAutoscalingPolicy() {
    this._autoscalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPolicyInput() {
    return this._autoscalingPolicy.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new ComputeNodeGroupMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: ComputeNodeGroupMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeNodeGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeNodeGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      initial_size: cdktf.numberToTerraform(this._initialSize),
      maintenance_policy: cdktf.stringToTerraform(this._maintenancePolicy),
      name: cdktf.stringToTerraform(this._name),
      node_template: cdktf.stringToTerraform(this._nodeTemplate),
      project: cdktf.stringToTerraform(this._project),
      size: cdktf.numberToTerraform(this._size),
      zone: cdktf.stringToTerraform(this._zone),
      autoscaling_policy: computeNodeGroupAutoscalingPolicyToTerraform(this._autoscalingPolicy.internalValue),
      maintenance_window: computeNodeGroupMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      timeouts: computeNodeGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
