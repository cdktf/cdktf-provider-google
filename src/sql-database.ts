// https://www.terraform.io/docs/providers/google/r/sql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SqlDatabaseConfig extends TerraformMetaArguments {
  /** The charset value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)
for more details and supported values. Postgres databases only support
a value of 'UTF8' at creation time. */
  readonly charset?: string;
  /** The collation value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)
for more details and supported values. Postgres databases only support
a value of 'en_US.UTF8' at creation time. */
  readonly collation?: string;
  /** The name of the Cloud SQL instance. This does not include the project
ID. */
  readonly instance: string;
  /** The name of the database in the Cloud SQL instance.
This does not include the project ID or instance name. */
  readonly name: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: SqlDatabaseTimeouts;
}
export interface SqlDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class SqlDatabase extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_database',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._charset = config.charset;
    this._collation = config.collation;
    this._instance = config.instance;
    this._name = config.name;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // charset - computed: true, optional: true, required: false
  private _charset?: string;
  public get charset() {
    return this._charset ?? this.getStringAttribute('charset');
  }
  public set charset(value: string | undefined) {
    this._charset = value;
  }

  // collation - computed: true, optional: true, required: false
  private _collation?: string;
  public get collation() {
    return this._collation ?? this.getStringAttribute('collation');
  }
  public set collation(value: string | undefined) {
    this._collation = value;
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

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlDatabaseTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SqlDatabaseTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      charset: this._charset,
      collation: this._collation,
      instance: this._instance,
      name: this._name,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
