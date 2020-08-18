// https://www.terraform.io/docs/providers/google/r/sql_source_representation_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SqlSourceRepresentationInstanceConfig extends TerraformMetaArguments {
  /** The MySQL version running on your source database server. Possible values: ["MYSQL_5_6", "MYSQL_5_7"] */
  readonly databaseVersion: string;
  /** The externally accessible IPv4 address for the source database server. */
  readonly host: string;
  /** The name of the source representation instance. Use any valid Cloud SQL instance name. */
  readonly name: string;
  /** The externally accessible port for the source database server.
Defaults to 3306. */
  readonly port?: number;
  readonly project?: string;
  /** The Region in which the created instance should reside.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** timeouts block */
  readonly timeouts?: SqlSourceRepresentationInstanceTimeouts;
}
export interface SqlSourceRepresentationInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class SqlSourceRepresentationInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqlSourceRepresentationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_source_representation_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseVersion = config.databaseVersion;
    this._host = config.host;
    this._name = config.name;
    this._port = config.port;
    this._project = config.project;
    this._region = config.region;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_version - computed: false, optional: false, required: true
  private _databaseVersion: string;
  public get databaseVersion() {
    return this._databaseVersion;
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }

  // host - computed: false, optional: false, required: true
  private _host: string;
  public get host() {
    return this._host;
  }
  public set host(value: string) {
    this._host = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlSourceRepresentationInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SqlSourceRepresentationInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      database_version: this._databaseVersion,
      host: this._host,
      name: this._name,
      port: this._port,
      project: this._project,
      region: this._region,
      timeouts: this._timeouts,
    };
  }
}
