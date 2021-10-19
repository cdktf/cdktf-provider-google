// https://www.terraform.io/docs/providers/google/r/compute_node_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNodeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#cpu_overcommit_type ComputeNodeTemplate#cpu_overcommit_type}
  */
  readonly cpuOvercommitType?: string;
  /**
  * An optional textual description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#description ComputeNodeTemplate#description}
  */
  readonly description?: string;
  /**
  * Name of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#name ComputeNodeTemplate#name}
  */
  readonly name?: string;
  /**
  * Labels to use for node affinity, which will be used in
instance scheduling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#node_affinity_labels ComputeNodeTemplate#node_affinity_labels}
  */
  readonly nodeAffinityLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Node type to use for nodes group that are created from this template.
Only one of nodeTypeFlexibility and nodeType can be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#node_type ComputeNodeTemplate#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#project ComputeNodeTemplate#project}
  */
  readonly project?: string;
  /**
  * Region where nodes using the node template will be created.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#region ComputeNodeTemplate#region}
  */
  readonly region?: string;
  /**
  * node_type_flexibility block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#node_type_flexibility ComputeNodeTemplate#node_type_flexibility}
  */
  readonly nodeTypeFlexibility?: ComputeNodeTemplateNodeTypeFlexibility;
  /**
  * server_binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#server_binding ComputeNodeTemplate#server_binding}
  */
  readonly serverBinding?: ComputeNodeTemplateServerBinding;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#timeouts ComputeNodeTemplate#timeouts}
  */
  readonly timeouts?: ComputeNodeTemplateTimeouts;
}
export interface ComputeNodeTemplateNodeTypeFlexibility {
  /**
  * Number of virtual CPUs to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#cpus ComputeNodeTemplate#cpus}
  */
  readonly cpus?: string;
  /**
  * Physical memory available to the node, defined in MB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#memory ComputeNodeTemplate#memory}
  */
  readonly memory?: string;
}

function computeNodeTemplateNodeTypeFlexibilityToTerraform(struct?: ComputeNodeTemplateNodeTypeFlexibilityOutputReference | ComputeNodeTemplateNodeTypeFlexibility): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpus: cdktf.stringToTerraform(struct!.cpus),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export class ComputeNodeTemplateNodeTypeFlexibilityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: string | undefined; 
  public get cpus() {
    return this.getStringAttribute('cpus');
  }
  public set cpus(value: string | undefined) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string | undefined; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string | undefined) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory
  }
}
export interface ComputeNodeTemplateServerBinding {
  /**
  * Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER',
nodes using this template will restart on any physical server
following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#type ComputeNodeTemplate#type}
  */
  readonly type: string;
}

function computeNodeTemplateServerBindingToTerraform(struct?: ComputeNodeTemplateServerBindingOutputReference | ComputeNodeTemplateServerBinding): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ComputeNodeTemplateServerBindingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface ComputeNodeTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#create ComputeNodeTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html#delete ComputeNodeTemplate#delete}
  */
  readonly delete?: string;
}

function computeNodeTemplateTimeoutsToTerraform(struct?: ComputeNodeTemplateTimeoutsOutputReference | ComputeNodeTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeNodeTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html google_compute_node_template}
*/
export class ComputeNodeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_node_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_node_template.html google_compute_node_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeNodeTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ComputeNodeTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_node_template',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cpuOvercommitType = config.cpuOvercommitType;
    this._description = config.description;
    this._name = config.name;
    this._nodeAffinityLabels = config.nodeAffinityLabels;
    this._nodeType = config.nodeType;
    this._project = config.project;
    this._region = config.region;
    this._nodeTypeFlexibility = config.nodeTypeFlexibility;
    this._serverBinding = config.serverBinding;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_overcommit_type - computed: false, optional: true, required: false
  private _cpuOvercommitType?: string | undefined; 
  public get cpuOvercommitType() {
    return this.getStringAttribute('cpu_overcommit_type');
  }
  public set cpuOvercommitType(value: string | undefined) {
    this._cpuOvercommitType = value;
  }
  public resetCpuOvercommitType() {
    this._cpuOvercommitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOvercommitTypeInput() {
    return this._cpuOvercommitType
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // node_affinity_labels - computed: false, optional: true, required: false
  private _nodeAffinityLabels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get nodeAffinityLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_affinity_labels') as any;
  }
  public set nodeAffinityLabels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._nodeAffinityLabels = value;
  }
  public resetNodeAffinityLabels() {
    this._nodeAffinityLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityLabelsInput() {
    return this._nodeAffinityLabels
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string | undefined; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string | undefined) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // node_type_flexibility - computed: false, optional: true, required: false
  private _nodeTypeFlexibility?: ComputeNodeTemplateNodeTypeFlexibility | undefined; 
  private __nodeTypeFlexibilityOutput = new ComputeNodeTemplateNodeTypeFlexibilityOutputReference(this as any, "node_type_flexibility", true);
  public get nodeTypeFlexibility() {
    return this.__nodeTypeFlexibilityOutput;
  }
  public putNodeTypeFlexibility(value: ComputeNodeTemplateNodeTypeFlexibility | undefined) {
    this._nodeTypeFlexibility = value;
  }
  public resetNodeTypeFlexibility() {
    this._nodeTypeFlexibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeFlexibilityInput() {
    return this._nodeTypeFlexibility
  }

  // server_binding - computed: false, optional: true, required: false
  private _serverBinding?: ComputeNodeTemplateServerBinding | undefined; 
  private __serverBindingOutput = new ComputeNodeTemplateServerBindingOutputReference(this as any, "server_binding", true);
  public get serverBinding() {
    return this.__serverBindingOutput;
  }
  public putServerBinding(value: ComputeNodeTemplateServerBinding | undefined) {
    this._serverBinding = value;
  }
  public resetServerBinding() {
    this._serverBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverBindingInput() {
    return this._serverBinding
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeNodeTemplateTimeouts | undefined; 
  private __timeoutsOutput = new ComputeNodeTemplateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeNodeTemplateTimeouts | undefined) {
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
      cpu_overcommit_type: cdktf.stringToTerraform(this._cpuOvercommitType),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      node_affinity_labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._nodeAffinityLabels),
      node_type: cdktf.stringToTerraform(this._nodeType),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      node_type_flexibility: computeNodeTemplateNodeTypeFlexibilityToTerraform(this._nodeTypeFlexibility),
      server_binding: computeNodeTemplateServerBindingToTerraform(this._serverBinding),
      timeouts: computeNodeTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
