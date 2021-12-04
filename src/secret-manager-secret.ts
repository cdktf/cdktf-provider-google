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
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
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
  readonly replication: SecretManagerSecretReplication;
  /**
  * rotation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#rotation SecretManagerSecret#rotation}
  */
  readonly rotation?: SecretManagerSecretRotation;
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

export function secretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionToTerraform(struct?: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference | SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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
  readonly customerManagedEncryption?: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption;
}

export function secretManagerSecretReplicationUserManagedReplicasToTerraform(struct?: SecretManagerSecretReplicationUserManagedReplicas): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    customer_managed_encryption: secretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionToTerraform(struct!.customerManagedEncryption),
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

export function secretManagerSecretReplicationUserManagedToTerraform(struct?: SecretManagerSecretReplicationUserManagedOutputReference | SecretManagerSecretReplicationUserManaged): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replicas: cdktf.listMapper(secretManagerSecretReplicationUserManagedReplicasToTerraform)(struct!.replicas),
  }
}

export class SecretManagerSecretReplicationUserManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecretManagerSecretReplicationUserManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicas) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerSecretReplicationUserManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replicas = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replicas = value.replicas;
    }
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: SecretManagerSecretReplicationUserManagedReplicas[]; 
  public get replicas() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('replicas') as any;
  }
  public set replicas(value: SecretManagerSecretReplicationUserManagedReplicas[]) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface SecretManagerSecretReplication {
  /**
  * The Secret will automatically be replicated without any restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#automatic SecretManagerSecret#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * user_managed block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html#user_managed SecretManagerSecret#user_managed}
  */
  readonly userManaged?: SecretManagerSecretReplicationUserManaged;
}

export function secretManagerSecretReplicationToTerraform(struct?: SecretManagerSecretReplicationOutputReference | SecretManagerSecretReplication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic: cdktf.booleanToTerraform(struct!.automatic),
    user_managed: secretManagerSecretReplicationUserManagedToTerraform(struct!.userManaged),
  }
}

export class SecretManagerSecretReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecretManagerSecretReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic;
    }
    if (this._userManaged?.internalValue) {
      hasAnyValues = true;
      internalValueResult.userManaged = this._userManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerSecretReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automatic = undefined;
      this._userManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automatic = value.automatic;
      this._userManaged.internalValue = value.userManaged;
    }
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic?: boolean | cdktf.IResolvable; 
  public get automatic() {
    return this.getBooleanAttribute('automatic') as any;
  }
  public set automatic(value: boolean | cdktf.IResolvable) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // user_managed - computed: false, optional: true, required: false
  private _userManaged = new SecretManagerSecretReplicationUserManagedOutputReference(this as any, "user_managed", true);
  public get userManaged() {
    return this._userManaged;
  }
  public putUserManaged(value: SecretManagerSecretReplicationUserManaged) {
    this._userManaged.internalValue = value;
  }
  public resetUserManaged() {
    this._userManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagedInput() {
    return this._userManaged.internalValue;
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

export function secretManagerSecretRotationToTerraform(struct?: SecretManagerSecretRotationOutputReference | SecretManagerSecretRotation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_rotation_time: cdktf.stringToTerraform(struct!.nextRotationTime),
    rotation_period: cdktf.stringToTerraform(struct!.rotationPeriod),
  }
}

export class SecretManagerSecretRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecretManagerSecretRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextRotationTime) {
      hasAnyValues = true;
      internalValueResult.nextRotationTime = this._nextRotationTime;
    }
    if (this._rotationPeriod) {
      hasAnyValues = true;
      internalValueResult.rotationPeriod = this._rotationPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerSecretRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextRotationTime = undefined;
      this._rotationPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextRotationTime = value.nextRotationTime;
      this._rotationPeriod = value.rotationPeriod;
    }
  }

  // next_rotation_time - computed: false, optional: true, required: false
  private _nextRotationTime?: string; 
  public get nextRotationTime() {
    return this.getStringAttribute('next_rotation_time');
  }
  public set nextRotationTime(value: string) {
    this._nextRotationTime = value;
  }
  public resetNextRotationTime() {
    this._nextRotationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRotationTimeInput() {
    return this._nextRotationTime;
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: string; 
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
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

export function secretManagerSecretTimeoutsToTerraform(struct?: SecretManagerSecretTimeoutsOutputReference | SecretManagerSecretTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class SecretManagerSecretTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecretManagerSecretTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerSecretTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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

export function secretManagerSecretTopicsToTerraform(struct?: SecretManagerSecretTopics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret.html google_secret_manager_secret}
*/
export class SecretManagerSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_secret_manager_secret";

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
    this._replication.internalValue = config.replication;
    this._rotation.internalValue = config.rotation;
    this._timeouts.internalValue = config.timeouts;
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
    return this._expireTime;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
    return this._project;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // replication - computed: false, optional: false, required: true
  private _replication = new SecretManagerSecretReplicationOutputReference(this as any, "replication", true);
  public get replication() {
    return this._replication;
  }
  public putReplication(value: SecretManagerSecretReplication) {
    this._replication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication.internalValue;
  }

  // rotation - computed: false, optional: true, required: false
  private _rotation = new SecretManagerSecretRotationOutputReference(this as any, "rotation", true);
  public get rotation() {
    return this._rotation;
  }
  public putRotation(value: SecretManagerSecretRotation) {
    this._rotation.internalValue = value;
  }
  public resetRotation() {
    this._rotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecretManagerSecretTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecretManagerSecretTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topics - computed: false, optional: true, required: false
  private _topics?: SecretManagerSecretTopics[]; 
  public get topics() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('topics') as any;
  }
  public set topics(value: SecretManagerSecretTopics[]) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
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
      replication: secretManagerSecretReplicationToTerraform(this._replication.internalValue),
      rotation: secretManagerSecretRotationToTerraform(this._rotation.internalValue),
      timeouts: secretManagerSecretTimeoutsToTerraform(this._timeouts.internalValue),
      topics: cdktf.listMapper(secretManagerSecretTopicsToTerraform)(this._topics),
    };
  }
}
