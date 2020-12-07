// https://www.terraform.io/docs/providers/google/r/compute_node_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNodeTemplateConfig extends cdktf.TerraformMetaArguments {
  /** An optional textual description of the resource. */
  readonly description?: string;
  /** Name of the resource. */
  readonly name?: string;
  /** Labels to use for node affinity, which will be used in
instance scheduling. */
  readonly nodeAffinityLabels?: { [key: string]: string };
  /** Node type to use for nodes group that are created from this template.
Only one of nodeTypeFlexibility and nodeType can be specified. */
  readonly nodeType?: string;
  readonly project?: string;
  /** Region where nodes using the node template will be created.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** node_type_flexibility block */
  readonly nodeTypeFlexibility?: ComputeNodeTemplateNodeTypeFlexibility[];
  /** timeouts block */
  readonly timeouts?: ComputeNodeTemplateTimeouts;
}
export interface ComputeNodeTemplateNodeTypeFlexibility {
  /** Number of virtual CPUs to use. */
  readonly cpus?: string;
  /** Physical memory available to the node, defined in MB. */
  readonly memory?: string;
}

function computeNodeTemplateNodeTypeFlexibilityToTerraform(struct?: ComputeNodeTemplateNodeTypeFlexibility): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpus: cdktf.stringToTerraform(struct!.cpus),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ComputeNodeTemplateTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function computeNodeTemplateTimeoutsToTerraform(struct?: ComputeNodeTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeNodeTemplate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._description = config.description;
    this._name = config.name;
    this._nodeAffinityLabels = config.nodeAffinityLabels;
    this._nodeType = config.nodeType;
    this._project = config.project;
    this._region = config.region;
    this._nodeTypeFlexibility = config.nodeTypeFlexibility;
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

  // node_affinity_labels - computed: false, optional: true, required: false
  private _nodeAffinityLabels?: { [key: string]: string };
  public get nodeAffinityLabels() {
    return this.interpolationForAttribute('node_affinity_labels') as any;
  }
  public set nodeAffinityLabels(value: { [key: string]: string } ) {
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
  private _nodeType?: string;
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string ) {
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
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
  private _nodeTypeFlexibility?: ComputeNodeTemplateNodeTypeFlexibility[];
  public get nodeTypeFlexibility() {
    return this.interpolationForAttribute('node_type_flexibility') as any;
  }
  public set nodeTypeFlexibility(value: ComputeNodeTemplateNodeTypeFlexibility[] ) {
    this._nodeTypeFlexibility = value;
  }
  public resetNodeTypeFlexibility() {
    this._nodeTypeFlexibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeFlexibilityInput() {
    return this._nodeTypeFlexibility
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeNodeTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeNodeTemplateTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      node_affinity_labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._nodeAffinityLabels),
      node_type: cdktf.stringToTerraform(this._nodeType),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      node_type_flexibility: cdktf.listMapper(computeNodeTemplateNodeTypeFlexibilityToTerraform)(this._nodeTypeFlexibility),
      timeouts: computeNodeTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
