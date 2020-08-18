// https://www.terraform.io/docs/providers/google/r/spanner_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SpannerDatabaseConfig extends TerraformMetaArguments {
  /** An optional list of DDL statements to run inside the newly created
database. Statements can create tables, indexes, etc. These statements
execute atomically with the creation of the database: if there is an
error in any statement, the database is not created. */
  readonly ddl?: string[];
  /** The instance to create the database on. */
  readonly instance: string;
  /** A unique identifier for the database, which cannot be changed after
the instance is created. Values are of the form [a-z][-a-z0-9]*[a-z0-9]. */
  readonly name: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: SpannerDatabaseTimeouts;
}
export interface SpannerDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class SpannerDatabase extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpannerDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'google_spanner_database',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ddl = config.ddl;
    this._instance = config.instance;
    this._name = config.name;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ddl - computed: false, optional: true, required: false
  private _ddl?: string[];
  public get ddl() {
    return this._ddl;
  }
  public set ddl(value: string[] | undefined) {
    this._ddl = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this._instance;
  }
  public set instance(value: string) {
    this._instance = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
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
  private _timeouts?: SpannerDatabaseTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SpannerDatabaseTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ddl: this._ddl,
      instance: this._instance,
      name: this._name,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
