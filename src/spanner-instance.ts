// https://www.terraform.io/docs/providers/google/r/spanner_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SpannerInstanceConfig extends TerraformMetaArguments {
  /** The name of the instance's configuration (similar but not
quite the same as a region) which defines defines the geographic placement and
replication of your databases in this instance. It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances). */
  readonly config: string;
  /** The descriptive name for this instance as it appears in UIs. Must be
unique per project and between 4 and 30 characters in length. */
  readonly displayName: string;
  /** An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  readonly labels?: { [key: string]: string };
  /** A unique identifier for the instance, which cannot be changed after
the instance is created. The name must be between 6 and 30 characters
in length.


If not provided, a random string starting with 'tf-' will be selected. */
  readonly name?: string;
  /** The number of nodes allocated to this instance. */
  readonly numNodes?: number;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: SpannerInstanceTimeouts;
}
export interface SpannerInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class SpannerInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._labels = config.labels;
    this._name = config.name;
    this._numNodes = config.numNodes;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config: string;
  public get config() {
    return this._config;
  }
  public set config(value: string) {
    this._config = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // num_nodes - computed: false, optional: true, required: false
  private _numNodes?: number;
  public get numNodes() {
    return this._numNodes;
  }
  public set numNodes(value: number | undefined) {
    this._numNodes = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpannerInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SpannerInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      config: this._config,
      display_name: this._displayName,
      labels: this._labels,
      name: this._name,
      num_nodes: this._numNodes,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
