// https://www.terraform.io/docs/providers/google/r/firestore_document.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirestoreDocumentConfig extends cdktf.TerraformMetaArguments {
  /** The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages. */
  readonly collection: string;
  /** The Firestore database id. Defaults to '"(default)"'. */
  readonly database?: string;
  /** The client-assigned document ID to use for this document during creation. */
  readonly documentId: string;
  /** The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string. */
  readonly fields: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: FirestoreDocumentTimeouts;
}
export interface FirestoreDocumentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function firestoreDocumentTimeoutsToTerraform(struct?: FirestoreDocumentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class FirestoreDocument extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FirestoreDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firestore_document',
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
    this._documentId = config.documentId;
    this._fields = config.fields;
    this._project = config.project;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // document_id - computed: false, optional: false, required: true
  private _documentId: string;
  public get documentId() {
    return this.getStringAttribute('document_id');
  }
  public set documentId(value: string) {
    this._documentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentIdInput() {
    return this._documentId
  }

  // fields - computed: false, optional: false, required: true
  private _fields: string;
  public get fields() {
    return this.getStringAttribute('fields');
  }
  public set fields(value: string) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirestoreDocumentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FirestoreDocumentTimeouts ) {
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
      document_id: cdktf.stringToTerraform(this._documentId),
      fields: cdktf.stringToTerraform(this._fields),
      project: cdktf.stringToTerraform(this._project),
      timeouts: firestoreDocumentTimeoutsToTerraform(this._timeouts),
    };
  }
}
