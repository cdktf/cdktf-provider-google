// https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecretManagerSecretConfig extends TerraformMetaArguments {
  /** The labels assigned to this Secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  readonly labels?: { [key: string]: string };
  readonly project?: string;
  /** This must be unique within the project. */
  readonly secretId: string;
  /** replication block */
  readonly replication: SecretManagerSecretReplication[];
  /** timeouts block */
  readonly timeouts?: SecretManagerSecretTimeouts;
}
export interface SecretManagerSecretReplicationUserManagedReplicas {
  /** The canonical IDs of the location to replicate data. For example: "us-east1". */
  readonly location: string;
}
export interface SecretManagerSecretReplicationUserManaged {
  /** replicas block */
  readonly replicas: SecretManagerSecretReplicationUserManagedReplicas[];
}
export interface SecretManagerSecretReplication {
  /** The Secret will automatically be replicated without any restrictions. */
  readonly automatic?: boolean;
  /** user_managed block */
  readonly userManaged?: SecretManagerSecretReplicationUserManaged[];
}
export interface SecretManagerSecretTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class SecretManagerSecret extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecretManagerSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secret_manager_secret',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._project = config.project;
    this._secretId = config.secretId;
    this._replication = config.replication;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
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

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this._secretId;
  }
  public set secretId(value: string) {
    this._secretId = value;
  }

  // replication - computed: false, optional: false, required: true
  private _replication: SecretManagerSecretReplication[];
  public get replication() {
    return this._replication;
  }
  public set replication(value: SecretManagerSecretReplication[]) {
    this._replication = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecretManagerSecretTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SecretManagerSecretTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: this._labels,
      project: this._project,
      secret_id: this._secretId,
      replication: this._replication,
      timeouts: this._timeouts,
    };
  }
}
