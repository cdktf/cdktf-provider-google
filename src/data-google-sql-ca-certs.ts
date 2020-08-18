// https://www.terraform.io/docs/providers/google/r/data_google_sql_ca_certs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleSqlCaCertsConfig extends TerraformMetaArguments {
  readonly instance: string;
  readonly project?: string;
}
export class DataGoogleSqlCaCertsCerts extends ComplexComputedList {

  // cert - computed: true, optional: false, required: true
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // common_name - computed: true, optional: false, required: true
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expiration_time - computed: true, optional: false, required: true
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // sha1_fingerprint - computed: true, optional: false, required: true
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }
}

// Resource

export class DataGoogleSqlCaCerts extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleSqlCaCertsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_ca_certs',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instance = config.instance;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_version - computed: true, optional: false, required: true
  public get activeVersion() {
    return this.getStringAttribute('active_version');
  }

  // certs - computed: true, optional: false, required: true
  public certs(index: string) {
    return new DataGoogleSqlCaCertsCerts(this, 'certs', index);
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance: this._instance,
      project: this._project,
    };
  }
}
