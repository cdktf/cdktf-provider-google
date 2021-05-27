// https://www.terraform.io/docs/providers/google/r/firestore_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirestoreIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The collection being indexed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#collection FirestoreIndex#collection}
  */
  readonly collection: string;
  /**
  * The Firestore database id. Defaults to '"(default)"'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#database FirestoreIndex#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#project FirestoreIndex#project}
  */
  readonly project?: string;
  /**
  * The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#query_scope FirestoreIndex#query_scope}
  */
  readonly queryScope?: string;
  /**
  * fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#fields FirestoreIndex#fields}
  */
  readonly fields: FirestoreIndexFields[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#timeouts FirestoreIndex#timeouts}
  */
  readonly timeouts?: FirestoreIndexTimeouts;
}
export interface FirestoreIndexFields {
  /**
  * Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can
be specified. Possible values: ["CONTAINS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#array_config FirestoreIndex#array_config}
  */
  readonly arrayConfig?: string;
  /**
  * Name of the field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#field_path FirestoreIndex#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#order FirestoreIndex#order}
  */
  readonly order?: string;
}

function firestoreIndexFieldsToTerraform(struct?: FirestoreIndexFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    array_config: cdktf.stringToTerraform(struct!.arrayConfig),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export interface FirestoreIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#create FirestoreIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html#delete FirestoreIndex#delete}
  */
  readonly delete?: string;
}

function firestoreIndexTimeoutsToTerraform(struct?: FirestoreIndexTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html google_firestore_index}
*/
export class FirestoreIndex extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/firestore_index.html google_firestore_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirestoreIndexConfig
  */
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
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection
  }

  // database - computed: false, optional: true, required: false
  private _database?: string;
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string ) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // query_scope - computed: false, optional: true, required: false
  private _queryScope?: string;
  public get queryScope() {
    return this.getStringAttribute('query_scope');
  }
  public set queryScope(value: string ) {
    this._queryScope = value;
  }
  public resetQueryScope() {
    this._queryScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryScopeInput() {
    return this._queryScope
  }

  // fields - computed: false, optional: false, required: true
  private _fields: FirestoreIndexFields[];
  public get fields() {
    return this.interpolationForAttribute('fields') as any;
  }
  public set fields(value: FirestoreIndexFields[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirestoreIndexTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FirestoreIndexTimeouts ) {
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
      collection: cdktf.stringToTerraform(this._collection),
      database: cdktf.stringToTerraform(this._database),
      project: cdktf.stringToTerraform(this._project),
      query_scope: cdktf.stringToTerraform(this._queryScope),
      fields: cdktf.listMapper(firestoreIndexFieldsToTerraform)(this._fields),
      timeouts: firestoreIndexTimeoutsToTerraform(this._timeouts),
    };
  }
}
