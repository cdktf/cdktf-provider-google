// https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretManagerSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#expire_time SecretManagerSecret#expire_time}
  */
  readonly expireTime?: string;
  /**
  * The labels assigned to this Secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#labels SecretManagerSecret#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#project SecretManagerSecret#project}
  */
  readonly project?: string;
  /**
  * This must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#secret_id SecretManagerSecret#secret_id}
  */
  readonly secretId: string;
  /**
  * The TTL for the Secret.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#ttl SecretManagerSecret#ttl}
  */
  readonly ttl?: string;
  /**
  * replication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#replication SecretManagerSecret#replication}
  */
  readonly replication: SecretManagerSecretReplication[];
  /**
  * rotation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#rotation SecretManagerSecret#rotation}
  */
  readonly rotation?: SecretManagerSecretRotation[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#timeouts SecretManagerSecret#timeouts}
  */
  readonly timeouts?: SecretManagerSecretTimeouts;
  /**
  * topics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#topics SecretManagerSecret#topics}
  */
  readonly topics?: SecretManagerSecretTopics[];
}
export interface SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination secret.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#kms_key_name SecretManagerSecret#kms_key_name}
  */
  readonly kmsKeyName: string;
}

function secretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionToTerraform(struct?: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export interface SecretManagerSecretReplicationUserManagedReplicas {
  /**
  * The canonical IDs of the location to replicate data. For example: "us-east1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#location SecretManagerSecret#location}
  */
  readonly location: string;
  /**
  * customer_managed_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}
  */
  readonly customerManagedEncryption?: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption[];
}

function secretManagerSecretReplicationUserManagedReplicasToTerraform(struct?: SecretManagerSecretReplicationUserManagedReplicas): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    customer_managed_encryption: cdktf.listMapper(secretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionToTerraform)(struct!.customerManagedEncryption),
  }
}

export interface SecretManagerSecretReplicationUserManaged {
  /**
  * replicas block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#replicas SecretManagerSecret#replicas}
  */
  readonly replicas: SecretManagerSecretReplicationUserManagedReplicas[];
}

function secretManagerSecretReplicationUserManagedToTerraform(struct?: SecretManagerSecretReplicationUserManaged): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replicas: cdktf.listMapper(secretManagerSecretReplicationUserManagedReplicasToTerraform)(struct!.replicas),
  }
}

export interface SecretManagerSecretReplication {
  /**
  * The Secret will automatically be replicated without any restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#automatic SecretManagerSecret#automatic}
  */
  readonly automatic?: boolean;
  /**
  * user_managed block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#user_managed SecretManagerSecret#user_managed}
  */
  readonly userManaged?: SecretManagerSecretReplicationUserManaged[];
}

function secretManagerSecretReplicationToTerraform(struct?: SecretManagerSecretReplication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automatic: cdktf.booleanToTerraform(struct!.automatic),
    user_managed: cdktf.listMapper(secretManagerSecretReplicationUserManagedToTerraform)(struct!.userManaged),
  }
}

export interface SecretManagerSecretRotation {
  /**
  * Timestamp in UTC at which the Secret is scheduled to rotate.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#next_rotation_time SecretManagerSecret#next_rotation_time}
  */
  readonly nextRotationTime?: string;
  /**
  * The Duration between rotation notifications. Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years).
If rotationPeriod is set, 'next_rotation_time' must be set. 'next_rotation_time' will be advanced by this period when the service automatically sends rotation notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#rotation_period SecretManagerSecret#rotation_period}
  */
  readonly rotationPeriod?: string;
}

function secretManagerSecretRotationToTerraform(struct?: SecretManagerSecretRotation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    next_rotation_time: cdktf.stringToTerraform(struct!.nextRotationTime),
    rotation_period: cdktf.stringToTerraform(struct!.rotationPeriod),
  }
}

export interface SecretManagerSecretTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#create SecretManagerSecret#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#delete SecretManagerSecret#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#update SecretManagerSecret#update}
  */
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

export interface SecretManagerSecretTopics {
  /**
  * The resource name of the Pub/Sub topic that will be published to, in the following format: projects/*\/topics/*.
For publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#name SecretManagerSecret#name}
  */
  readonly name: string;
}

function secretManagerSecretTopicsToTerraform(struct?: SecretManagerSecretTopics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html google_secret_manager_secret}
*/
export class SecretManagerSecret extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html google_secret_manager_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretManagerSecretConfig
  */
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
    this._expireTime = config.expireTime;
    this._labels = config.labels;
    this._project = config.project;
    this._secretId = config.secretId;
    this._ttl = config.ttl;
    this._replication = config.replication;
    this._rotation = config.rotation;
    this._timeouts = config.timeouts;
    this._topics = config.topics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expire_time - computed: true, optional: true, required: false
  private _expireTime?: string;
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string;
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string ) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl
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

  // rotation - computed: false, optional: true, required: false
  private _rotation?: SecretManagerSecretRotation[];
  public get rotation() {
    return this.interpolationForAttribute('rotation') as any;
  }
  public set rotation(value: SecretManagerSecretRotation[] ) {
    this._rotation = value;
  }
  public resetRotation() {
    this._rotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation
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

  // topics - computed: false, optional: true, required: false
  private _topics?: SecretManagerSecretTopics[];
  public get topics() {
    return this.interpolationForAttribute('topics') as any;
  }
  public set topics(value: SecretManagerSecretTopics[] ) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expire_time: cdktf.stringToTerraform(this._expireTime),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      secret_id: cdktf.stringToTerraform(this._secretId),
      ttl: cdktf.stringToTerraform(this._ttl),
      replication: cdktf.listMapper(secretManagerSecretReplicationToTerraform)(this._replication),
      rotation: cdktf.listMapper(secretManagerSecretRotationToTerraform)(this._rotation),
      timeouts: secretManagerSecretTimeoutsToTerraform(this._timeouts),
      topics: cdktf.listMapper(secretManagerSecretTopicsToTerraform)(this._topics),
    };
  }
}
