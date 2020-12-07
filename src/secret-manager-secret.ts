// https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretManagerSecretConfig extends cdktf.TerraformMetaArguments {
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

function secretManagerSecretReplicationUserManagedReplicasToTerraform(struct?: SecretManagerSecretReplicationUserManagedReplicas): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.stringToTerraform(struct!.location),
  }
}

export interface SecretManagerSecretReplicationUserManaged {
  /** replicas block */
  readonly replicas: SecretManagerSecretReplicationUserManagedReplicas[];
}

function secretManagerSecretReplicationUserManagedToTerraform(struct?: SecretManagerSecretReplicationUserManaged): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replicas: cdktf.listMapper(secretManagerSecretReplicationUserManagedReplicasToTerraform)(struct!.replicas),
  }
}

export interface SecretManagerSecretReplication {
  /** The Secret will automatically be replicated without any restrictions. */
  readonly automatic?: boolean;
  /** user_managed block */
  readonly userManaged?: SecretManagerSecretReplicationUserManaged[];
}

function secretManagerSecretReplicationToTerraform(struct?: SecretManagerSecretReplication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automatic: cdktf.booleanToTerraform(struct!.automatic),
    user_managed: cdktf.listMapper(secretManagerSecretReplicationUserManagedToTerraform)(struct!.userManaged),
  }
}

export interface SecretManagerSecretTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function secretManagerSecretTimeoutsToTerraform(struct?: SecretManagerSecretTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SecretManagerSecret extends cdktf.TerraformResource {

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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId
  }

  // replication - computed: false, optional: false, required: true
  private _replication: SecretManagerSecretReplication[];
  public get replication() {
    return this.interpolationForAttribute('replication') as any;
  }
  public set replication(value: SecretManagerSecretReplication[]) {
    this._replication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecretManagerSecretTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SecretManagerSecretTimeouts ) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      secret_id: cdktf.stringToTerraform(this._secretId),
      replication: cdktf.listMapper(secretManagerSecretReplicationToTerraform)(this._replication),
      timeouts: secretManagerSecretTimeoutsToTerraform(this._timeouts),
    };
  }
}
