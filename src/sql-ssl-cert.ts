// https://www.terraform.io/docs/providers/google/r/sql_ssl_cert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SqlSslCertConfig extends TerraformMetaArguments {
  /** The common name to be used in the certificate to identify the client. Constrained to [a-zA-Z.-_ ]+. Changing this forces a new resource to be created. */
  readonly commonName: string;
  /** The name of the Cloud SQL instance. Changing this forces a new resource to be created. */
  readonly instance: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: SqlSslCertTimeouts;
}
export interface SqlSslCertTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class SqlSslCert extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqlSslCertConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_ssl_cert',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._commonName = config.commonName;
    this._instance = config.instance;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert - computed: true, optional: false, required: true
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // cert_serial_number - computed: true, optional: false, required: true
  public get certSerialNumber() {
    return this.getStringAttribute('cert_serial_number');
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName: string;
  public get commonName() {
    return this._commonName;
  }
  public set commonName(value: string) {
    this._commonName = value;
  }

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expiration_time - computed: true, optional: false, required: true
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
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

  // private_key - computed: true, optional: false, required: true
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // server_ca_cert - computed: true, optional: false, required: true
  public get serverCaCert() {
    return this.getStringAttribute('server_ca_cert');
  }

  // sha1_fingerprint - computed: true, optional: false, required: true
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlSslCertTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SqlSslCertTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      common_name: this._commonName,
      instance: this._instance,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
