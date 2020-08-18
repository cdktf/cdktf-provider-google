// https://www.terraform.io/docs/providers/google/r/firestore_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FirestoreIndexConfig extends TerraformMetaArguments {
  /** The collection being indexed. */
  readonly collection: string;
  /** The Firestore database id. Defaults to '"(default)"'. */
  readonly database?: string;
  readonly project?: string;
  /** The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP"] */
  readonly queryScope?: string;
  /** fields block */
  readonly fields: FirestoreIndexFields[];
  /** timeouts block */
  readonly timeouts?: FirestoreIndexTimeouts;
}
export interface FirestoreIndexFields {
  /** Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can
be specified. Possible values: ["CONTAINS"] */
  readonly arrayConfig?: string;
  /** Name of the field. */
  readonly fieldPath?: string;
  /** Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"] */
  readonly order?: string;
}
export interface FirestoreIndexTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class FirestoreIndex extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FirestoreIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firestore_index',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._collection = config.collection;
    this._database = config.database;
    this._project = config.project;
    this._queryScope = config.queryScope;
    this._fields = config.fields;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection - computed: false, optional: false, required: true
  private _collection: string;
  public get collection() {
    return this._collection;
  }
  public set collection(value: string) {
    this._collection = value;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string;
  public get database() {
    return this._database;
  }
  public set database(value: string | undefined) {
    this._database = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // query_scope - computed: false, optional: true, required: false
  private _queryScope?: string;
  public get queryScope() {
    return this._queryScope;
  }
  public set queryScope(value: string | undefined) {
    this._queryScope = value;
  }

  // fields - computed: false, optional: false, required: true
  private _fields: FirestoreIndexFields[];
  public get fields() {
    return this._fields;
  }
  public set fields(value: FirestoreIndexFields[]) {
    this._fields = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirestoreIndexTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FirestoreIndexTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      collection: this._collection,
      database: this._database,
      project: this._project,
      query_scope: this._queryScope,
      fields: this._fields,
      timeouts: this._timeouts,
    };
  }
}
