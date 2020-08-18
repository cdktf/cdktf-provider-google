// https://www.terraform.io/docs/providers/google/r/datastore_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatastoreIndexConfig extends TerraformMetaArguments {
  /** Policy for including ancestors in the index. Default value: "NONE" Possible values: ["NONE", "ALL_ANCESTORS"] */
  readonly ancestor?: string;
  /** The entity kind which the index applies to. */
  readonly kind: string;
  readonly project?: string;
  /** properties block */
  readonly properties?: DatastoreIndexProperties[];
  /** timeouts block */
  readonly timeouts?: DatastoreIndexTimeouts;
}
export interface DatastoreIndexProperties {
  /** The direction the index should optimize for sorting. Possible values: ["ASCENDING", "DESCENDING"] */
  readonly direction: string;
  /** The property name to index. */
  readonly name: string;
}
export interface DatastoreIndexTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class DatastoreIndex extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatastoreIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'google_datastore_index',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ancestor = config.ancestor;
    this._kind = config.kind;
    this._project = config.project;
    this._properties = config.properties;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ancestor - computed: false, optional: true, required: false
  private _ancestor?: string;
  public get ancestor() {
    return this._ancestor;
  }
  public set ancestor(value: string | undefined) {
    this._ancestor = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // index_id - computed: true, optional: false, required: true
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this._kind;
  }
  public set kind(value: string) {
    this._kind = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: DatastoreIndexProperties[];
  public get properties() {
    return this._properties;
  }
  public set properties(value: DatastoreIndexProperties[] | undefined) {
    this._properties = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatastoreIndexTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatastoreIndexTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ancestor: this._ancestor,
      kind: this._kind,
      project: this._project,
      properties: this._properties,
      timeouts: this._timeouts,
    };
  }
}
