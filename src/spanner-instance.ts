// https://www.terraform.io/docs/providers/google/r/spanner_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpannerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the instance's configuration (similar but not
quite the same as a region) which defines the geographic placement and
replication of your databases in this instance. It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#config SpannerInstance#config}
  */
  readonly config: string;
  /**
  * The descriptive name for this instance as it appears in UIs. Must be
unique per project and between 4 and 30 characters in length.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#display_name SpannerInstance#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#force_destroy SpannerInstance#force_destroy}
  */
  readonly forceDestroy?: boolean;
  /**
  * An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#labels SpannerInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A unique identifier for the instance, which cannot be changed after
the instance is created. The name must be between 6 and 30 characters
in length.


If not provided, a random string starting with 'tf-' will be selected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#name SpannerInstance#name}
  */
  readonly name?: string;
  /**
  * The number of nodes allocated to this instance. At most one of either node_count or processing_units
can be present in terraform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#num_nodes SpannerInstance#num_nodes}
  */
  readonly numNodes?: number;
  /**
  * The number of processing units allocated to this instance. At most one of processing_units 
or node_count can be present in terraform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#processing_units SpannerInstance#processing_units}
  */
  readonly processingUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#project SpannerInstance#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#timeouts SpannerInstance#timeouts}
  */
  readonly timeouts?: SpannerInstanceTimeouts;
}
export interface SpannerInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#create SpannerInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#delete SpannerInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html#update SpannerInstance#update}
  */
  readonly update?: string;
}

function spannerInstanceTimeoutsToTerraform(struct?: SpannerInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html google_spanner_instance}
*/
export class SpannerInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/spanner_instance.html google_spanner_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpannerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SpannerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_spanner_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._config = config.config;
    this._displayName = config.displayName;
    this._forceDestroy = config.forceDestroy;
    this._labels = config.labels;
    this._name = config.name;
    this._numNodes = config.numNodes;
    this._processingUnits = config.processingUnits;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config: string;
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
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
    return this._name
  }

  // num_nodes - computed: true, optional: true, required: false
  private _numNodes?: number;
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }
  public set numNodes(value: number) {
    this._numNodes = value;
  }
  public resetNumNodes() {
    this._numNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numNodesInput() {
    return this._numNodes
  }

  // processing_units - computed: true, optional: true, required: false
  private _processingUnits?: number;
  public get processingUnits() {
    return this.getNumberAttribute('processing_units');
  }
  public set processingUnits(value: number) {
    this._processingUnits = value;
  }
  public resetProcessingUnits() {
    this._processingUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingUnitsInput() {
    return this._processingUnits
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpannerInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpannerInstanceTimeouts ) {
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
      config: cdktf.stringToTerraform(this._config),
      display_name: cdktf.stringToTerraform(this._displayName),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      num_nodes: cdktf.numberToTerraform(this._numNodes),
      processing_units: cdktf.numberToTerraform(this._processingUnits),
      project: cdktf.stringToTerraform(this._project),
      timeouts: spannerInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
