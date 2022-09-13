// https://www.terraform.io/docs/providers/google/r/secret_manager_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretManagerSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#expire_time SecretManagerSecret#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#id SecretManagerSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#labels SecretManagerSecret#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#project SecretManagerSecret#project}
  */
  readonly project?: string;
  /**
  * This must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#secret_id SecretManagerSecret#secret_id}
  */
  readonly secretId: string;
  /**
  * The TTL for the Secret.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#ttl SecretManagerSecret#ttl}
  */
  readonly ttl?: string;
  /**
  * replication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#replication SecretManagerSecret#replication}
  */
  readonly replication: SecretManagerSecretReplication;
  /**
  * rotation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#rotation SecretManagerSecret#rotation}
  */
  readonly rotation?: SecretManagerSecretRotation;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#timeouts SecretManagerSecret#timeouts}
  */
  readonly timeouts?: SecretManagerSecretTimeouts;
  /**
  * topics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#topics SecretManagerSecret#topics}
  */
  readonly topics?: SecretManagerSecretTopics[] | cdktf.IResolvable;
}
export interface SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination secret.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function secretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionToTerraform(struct?: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference | SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#location SecretManagerSecret#location}
  */
  readonly location: string;
  /**
  * customer_managed_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}
  */
  readonly customerManagedEncryption?: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption;
}

export function secretManagerSecretReplicationUserManagedReplicasToTerraform(struct?: SecretManagerSecretReplicationUserManagedReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    customer_managed_encryption: secretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionToTerraform(struct!.customerManagedEncryption),
  }
}

export class SecretManagerSecretReplicationUserManagedReplicasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecretManagerSecretReplicationUserManagedReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._customerManagedEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedEncryption = this._customerManagedEncryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerSecretReplicationUserManagedReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._customerManagedEncryption.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._customerManagedEncryption.internalValue = value.customerManagedEncryption;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // customer_managed_encryption - computed: false, optional: true, required: false
  private _customerManagedEncryption = new SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(this, "customer_managed_encryption");
  public get customerManagedEncryption() {
    return this._customerManagedEncryption;
  }
  public putCustomerManagedEncryption(value: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption) {
    this._customerManagedEncryption.internalValue = value;
  }
  public resetCustomerManagedEncryption() {
    this._customerManagedEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedEncryptionInput() {
    return this._customerManagedEncryption.internalValue;
  }
}

export class SecretManagerSecretReplicationUserManagedReplicasList extends cdktf.ComplexList {
  public internalValue? : SecretManagerSecretReplicationUserManagedReplicas[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecretManagerSecretReplicationUserManagedReplicasOutputReference {
    return new SecretManagerSecretReplicationUserManagedReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecretManagerSecretReplicationUserManaged {
  /**
  * replicas block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#replicas SecretManagerSecret#replicas}
  */
  readonly replicas: SecretManagerSecretReplicationUserManagedReplicas[] | cdktf.IResolvable;
}

export function secretManagerSecretReplicationUserManagedToTerraform(struct?: SecretManagerSecretReplicationUserManagedOutputReference | SecretManagerSecretReplicationUserManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replicas: cdktf.listMapper(secretManagerSecretReplicationUserManagedReplicasToTerraform, true)(struct!.replicas),
  }
}

export class SecretManagerSecretReplicationUserManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretManagerSecretReplicationUserManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerSecretReplicationUserManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replicas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replicas.internalValue = value.replicas;
    }
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas = new SecretManagerSecretReplicationUserManagedReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: SecretManagerSecretReplicationUserManagedReplicas[] | cdktf.IResolvable) {
    this._replicas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
  }
}
export interface SecretManagerSecretReplication {
  /**
  * The Secret will automatically be replicated without any restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#automatic SecretManagerSecret#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * user_managed block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#user_managed SecretManagerSecret#user_managed}
  */
  readonly userManaged?: SecretManagerSecretReplicationUserManaged;
}

export function secretManagerSecretReplicationToTerraform(struct?: SecretManagerSecretReplicationOutputReference | SecretManagerSecretReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretManagerSecretReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic;
    }
    if (this._userManaged?.internalValue !== undefined) {
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
    return this.getBooleanAttribute('automatic');
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
  private _userManaged = new SecretManagerSecretReplicationUserManagedOutputReference(this, "user_managed");
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#next_rotation_time SecretManagerSecret#next_rotation_time}
  */
  readonly nextRotationTime?: string;
  /**
  * The Duration between rotation notifications. Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years).
If rotationPeriod is set, 'next_rotation_time' must be set. 'next_rotation_time' will be advanced by this period when the service automatically sends rotation notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#rotation_period SecretManagerSecret#rotation_period}
  */
  readonly rotationPeriod?: string;
}

export function secretManagerSecretRotationToTerraform(struct?: SecretManagerSecretRotationOutputReference | SecretManagerSecretRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretManagerSecretRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextRotationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextRotationTime = this._nextRotationTime;
    }
    if (this._rotationPeriod !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#create SecretManagerSecret#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#delete SecretManagerSecret#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#update SecretManagerSecret#update}
  */
  readonly update?: string;
}

export function secretManagerSecretTimeoutsToTerraform(struct?: SecretManagerSecretTimeoutsOutputReference | SecretManagerSecretTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretManagerSecretTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerSecretTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret#name SecretManagerSecret#name}
  */
  readonly name: string;
}

export function secretManagerSecretTopicsToTerraform(struct?: SecretManagerSecretTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class SecretManagerSecretTopicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecretManagerSecretTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerSecretTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class SecretManagerSecretTopicsList extends cdktf.ComplexList {
  public internalValue? : SecretManagerSecretTopics[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecretManagerSecretTopicsOutputReference {
    return new SecretManagerSecretTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret google_secret_manager_secret}
*/
export class SecretManagerSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_secret_manager_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/secret_manager_secret google_secret_manager_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretManagerSecretConfig
  */
  public constructor(scope: Construct, id: string, config: SecretManagerSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secret_manager_secret',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expireTime = config.expireTime;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._secretId = config.secretId;
    this._ttl = config.ttl;
    this._replication.internalValue = config.replication;
    this._rotation.internalValue = config.rotation;
    this._timeouts.internalValue = config.timeouts;
    this._topics.internalValue = config.topics;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
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
  private _replication = new SecretManagerSecretReplicationOutputReference(this, "replication");
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
  private _rotation = new SecretManagerSecretRotationOutputReference(this, "rotation");
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
  private _timeouts = new SecretManagerSecretTimeoutsOutputReference(this, "timeouts");
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
  private _topics = new SecretManagerSecretTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: SecretManagerSecretTopics[] | cdktf.IResolvable) {
    this._topics.internalValue = value;
  }
  public resetTopics() {
    this._topics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expire_time: cdktf.stringToTerraform(this._expireTime),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      secret_id: cdktf.stringToTerraform(this._secretId),
      ttl: cdktf.stringToTerraform(this._ttl),
      replication: secretManagerSecretReplicationToTerraform(this._replication.internalValue),
      rotation: secretManagerSecretRotationToTerraform(this._rotation.internalValue),
      timeouts: secretManagerSecretTimeoutsToTerraform(this._timeouts.internalValue),
      topics: cdktf.listMapper(secretManagerSecretTopicsToTerraform, true)(this._topics.internalValue),
    };
  }
}
