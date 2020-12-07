// https://www.terraform.io/docs/providers/google/r/datastore_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatastoreIndexConfig extends cdktf.TerraformMetaArguments {
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

function datastoreIndexPropertiesToTerraform(struct?: DatastoreIndexProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DatastoreIndexTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function datastoreIndexTimeoutsToTerraform(struct?: DatastoreIndexTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class DatastoreIndex extends cdktf.TerraformResource {

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
    return this.getStringAttribute('ancestor');
  }
  public set ancestor(value: string ) {
    this._ancestor = value;
  }
  public resetAncestor() {
    this._ancestor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorInput() {
    return this._ancestor
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
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

  // properties - computed: false, optional: true, required: false
  private _properties?: DatastoreIndexProperties[];
  public get properties() {
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: DatastoreIndexProperties[] ) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatastoreIndexTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DatastoreIndexTimeouts ) {
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
      ancestor: cdktf.stringToTerraform(this._ancestor),
      kind: cdktf.stringToTerraform(this._kind),
      project: cdktf.stringToTerraform(this._project),
      properties: cdktf.listMapper(datastoreIndexPropertiesToTerraform)(this._properties),
      timeouts: datastoreIndexTimeoutsToTerraform(this._timeouts),
    };
  }
}
