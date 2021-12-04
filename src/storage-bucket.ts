// https://www.terraform.io/docs/providers/google/r/storage_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables Bucket Policy Only access to a bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#bucket_policy_only StorageBucket#bucket_policy_only}
  */
  readonly bucketPolicyOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#default_event_based_hold StorageBucket#default_event_based_hold}
  */
  readonly defaultEventBasedHold?: boolean | cdktf.IResolvable;
  /**
  * When deleting a bucket, this boolean option will delete all contained objects. If you try to delete a bucket that contains objects, Terraform will fail that run.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#force_destroy StorageBucket#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * A set of key/value label pairs to assign to the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#labels StorageBucket#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The Google Cloud Storage location
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#location StorageBucket#location}
  */
  readonly location?: string;
  /**
  * The name of the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#name StorageBucket#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#project StorageBucket#project}
  */
  readonly project?: string;
  /**
  * Enables Requester Pays on a storage bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#requester_pays StorageBucket#requester_pays}
  */
  readonly requesterPays?: boolean | cdktf.IResolvable;
  /**
  * The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#storage_class StorageBucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Enables uniform bucket-level access on a bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#uniform_bucket_level_access StorageBucket#uniform_bucket_level_access}
  */
  readonly uniformBucketLevelAccess?: boolean | cdktf.IResolvable;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#cors StorageBucket#cors}
  */
  readonly cors?: StorageBucketCors[];
  /**
  * encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#encryption StorageBucket#encryption}
  */
  readonly encryption?: StorageBucketEncryption;
  /**
  * lifecycle_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#lifecycle_rule StorageBucket#lifecycle_rule}
  */
  readonly lifecycleRule?: StorageBucketLifecycleRule[];
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#logging StorageBucket#logging}
  */
  readonly logging?: StorageBucketLogging;
  /**
  * retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#retention_policy StorageBucket#retention_policy}
  */
  readonly retentionPolicy?: StorageBucketRetentionPolicy;
  /**
  * versioning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#versioning StorageBucket#versioning}
  */
  readonly versioning?: StorageBucketVersioning;
  /**
  * website block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#website StorageBucket#website}
  */
  readonly website?: StorageBucketWebsite;
}
export interface StorageBucketCors {
  /**
  * The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#max_age_seconds StorageBucket#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
  /**
  * The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#method StorageBucket#method}
  */
  readonly method?: string[];
  /**
  * The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#origin StorageBucket#origin}
  */
  readonly origin?: string[];
  /**
  * The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#response_header StorageBucket#response_header}
  */
  readonly responseHeader?: string[];
}

export function storageBucketCorsToTerraform(struct?: StorageBucketCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
    method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.method),
    origin: cdktf.listMapper(cdktf.stringToTerraform)(struct!.origin),
    response_header: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeader),
  }
}

export interface StorageBucketEncryption {
  /**
  * A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#default_kms_key_name StorageBucket#default_kms_key_name}
  */
  readonly defaultKmsKeyName: string;
}

export function storageBucketEncryptionToTerraform(struct?: StorageBucketEncryptionOutputReference | StorageBucketEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_kms_key_name: cdktf.stringToTerraform(struct!.defaultKmsKeyName),
  }
}

export class StorageBucketEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageBucketEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultKmsKeyName) {
      hasAnyValues = true;
      internalValueResult.defaultKmsKeyName = this._defaultKmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultKmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultKmsKeyName = value.defaultKmsKeyName;
    }
  }

  // default_kms_key_name - computed: false, optional: false, required: true
  private _defaultKmsKeyName?: string; 
  public get defaultKmsKeyName() {
    return this.getStringAttribute('default_kms_key_name');
  }
  public set defaultKmsKeyName(value: string) {
    this._defaultKmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultKmsKeyNameInput() {
    return this._defaultKmsKeyName;
  }
}
export interface StorageBucketLifecycleRuleAction {
  /**
  * The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#storage_class StorageBucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * The type of the action of this Lifecycle Rule. Supported values include: Delete and SetStorageClass.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#type StorageBucket#type}
  */
  readonly type: string;
}

export function storageBucketLifecycleRuleActionToTerraform(struct?: StorageBucketLifecycleRuleActionOutputReference | StorageBucketLifecycleRuleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StorageBucketLifecycleRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageBucketLifecycleRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClass) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketLifecycleRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageClass = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageClass = value.storageClass;
      this._type = value.type;
    }
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface StorageBucketLifecycleRuleCondition {
  /**
  * Minimum age of an object in days to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#age StorageBucket#age}
  */
  readonly age?: number;
  /**
  * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#created_before StorageBucket#created_before}
  */
  readonly createdBefore?: string;
  /**
  * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#custom_time_before StorageBucket#custom_time_before}
  */
  readonly customTimeBefore?: string;
  /**
  * Number of days elapsed since the user-specified timestamp set on an object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#days_since_custom_time StorageBucket#days_since_custom_time}
  */
  readonly daysSinceCustomTime?: number;
  /**
  * Number of days elapsed since the noncurrent timestamp of an object. This
										condition is relevant only for versioned objects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#days_since_noncurrent_time StorageBucket#days_since_noncurrent_time}
  */
  readonly daysSinceNoncurrentTime?: number;
  /**
  * Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#matches_storage_class StorageBucket#matches_storage_class}
  */
  readonly matchesStorageClass?: string[];
  /**
  * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#noncurrent_time_before StorageBucket#noncurrent_time_before}
  */
  readonly noncurrentTimeBefore?: string;
  /**
  * Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#num_newer_versions StorageBucket#num_newer_versions}
  */
  readonly numNewerVersions?: number;
  /**
  * Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#with_state StorageBucket#with_state}
  */
  readonly withState?: string;
}

export function storageBucketLifecycleRuleConditionToTerraform(struct?: StorageBucketLifecycleRuleConditionOutputReference | StorageBucketLifecycleRuleCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    created_before: cdktf.stringToTerraform(struct!.createdBefore),
    custom_time_before: cdktf.stringToTerraform(struct!.customTimeBefore),
    days_since_custom_time: cdktf.numberToTerraform(struct!.daysSinceCustomTime),
    days_since_noncurrent_time: cdktf.numberToTerraform(struct!.daysSinceNoncurrentTime),
    matches_storage_class: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchesStorageClass),
    noncurrent_time_before: cdktf.stringToTerraform(struct!.noncurrentTimeBefore),
    num_newer_versions: cdktf.numberToTerraform(struct!.numNewerVersions),
    with_state: cdktf.stringToTerraform(struct!.withState),
  }
}

export class StorageBucketLifecycleRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageBucketLifecycleRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._createdBefore) {
      hasAnyValues = true;
      internalValueResult.createdBefore = this._createdBefore;
    }
    if (this._customTimeBefore) {
      hasAnyValues = true;
      internalValueResult.customTimeBefore = this._customTimeBefore;
    }
    if (this._daysSinceCustomTime) {
      hasAnyValues = true;
      internalValueResult.daysSinceCustomTime = this._daysSinceCustomTime;
    }
    if (this._daysSinceNoncurrentTime) {
      hasAnyValues = true;
      internalValueResult.daysSinceNoncurrentTime = this._daysSinceNoncurrentTime;
    }
    if (this._matchesStorageClass) {
      hasAnyValues = true;
      internalValueResult.matchesStorageClass = this._matchesStorageClass;
    }
    if (this._noncurrentTimeBefore) {
      hasAnyValues = true;
      internalValueResult.noncurrentTimeBefore = this._noncurrentTimeBefore;
    }
    if (this._numNewerVersions) {
      hasAnyValues = true;
      internalValueResult.numNewerVersions = this._numNewerVersions;
    }
    if (this._withState) {
      hasAnyValues = true;
      internalValueResult.withState = this._withState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketLifecycleRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._age = undefined;
      this._createdBefore = undefined;
      this._customTimeBefore = undefined;
      this._daysSinceCustomTime = undefined;
      this._daysSinceNoncurrentTime = undefined;
      this._matchesStorageClass = undefined;
      this._noncurrentTimeBefore = undefined;
      this._numNewerVersions = undefined;
      this._withState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._age = value.age;
      this._createdBefore = value.createdBefore;
      this._customTimeBefore = value.customTimeBefore;
      this._daysSinceCustomTime = value.daysSinceCustomTime;
      this._daysSinceNoncurrentTime = value.daysSinceNoncurrentTime;
      this._matchesStorageClass = value.matchesStorageClass;
      this._noncurrentTimeBefore = value.noncurrentTimeBefore;
      this._numNewerVersions = value.numNewerVersions;
      this._withState = value.withState;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // created_before - computed: false, optional: true, required: false
  private _createdBefore?: string; 
  public get createdBefore() {
    return this.getStringAttribute('created_before');
  }
  public set createdBefore(value: string) {
    this._createdBefore = value;
  }
  public resetCreatedBefore() {
    this._createdBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeInput() {
    return this._createdBefore;
  }

  // custom_time_before - computed: false, optional: true, required: false
  private _customTimeBefore?: string; 
  public get customTimeBefore() {
    return this.getStringAttribute('custom_time_before');
  }
  public set customTimeBefore(value: string) {
    this._customTimeBefore = value;
  }
  public resetCustomTimeBefore() {
    this._customTimeBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimeBeforeInput() {
    return this._customTimeBefore;
  }

  // days_since_custom_time - computed: false, optional: true, required: false
  private _daysSinceCustomTime?: number; 
  public get daysSinceCustomTime() {
    return this.getNumberAttribute('days_since_custom_time');
  }
  public set daysSinceCustomTime(value: number) {
    this._daysSinceCustomTime = value;
  }
  public resetDaysSinceCustomTime() {
    this._daysSinceCustomTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysSinceCustomTimeInput() {
    return this._daysSinceCustomTime;
  }

  // days_since_noncurrent_time - computed: false, optional: true, required: false
  private _daysSinceNoncurrentTime?: number; 
  public get daysSinceNoncurrentTime() {
    return this.getNumberAttribute('days_since_noncurrent_time');
  }
  public set daysSinceNoncurrentTime(value: number) {
    this._daysSinceNoncurrentTime = value;
  }
  public resetDaysSinceNoncurrentTime() {
    this._daysSinceNoncurrentTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysSinceNoncurrentTimeInput() {
    return this._daysSinceNoncurrentTime;
  }

  // matches_storage_class - computed: false, optional: true, required: false
  private _matchesStorageClass?: string[]; 
  public get matchesStorageClass() {
    return this.getListAttribute('matches_storage_class');
  }
  public set matchesStorageClass(value: string[]) {
    this._matchesStorageClass = value;
  }
  public resetMatchesStorageClass() {
    this._matchesStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesStorageClassInput() {
    return this._matchesStorageClass;
  }

  // noncurrent_time_before - computed: false, optional: true, required: false
  private _noncurrentTimeBefore?: string; 
  public get noncurrentTimeBefore() {
    return this.getStringAttribute('noncurrent_time_before');
  }
  public set noncurrentTimeBefore(value: string) {
    this._noncurrentTimeBefore = value;
  }
  public resetNoncurrentTimeBefore() {
    this._noncurrentTimeBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentTimeBeforeInput() {
    return this._noncurrentTimeBefore;
  }

  // num_newer_versions - computed: false, optional: true, required: false
  private _numNewerVersions?: number; 
  public get numNewerVersions() {
    return this.getNumberAttribute('num_newer_versions');
  }
  public set numNewerVersions(value: number) {
    this._numNewerVersions = value;
  }
  public resetNumNewerVersions() {
    this._numNewerVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numNewerVersionsInput() {
    return this._numNewerVersions;
  }

  // with_state - computed: true, optional: true, required: false
  private _withState?: string; 
  public get withState() {
    return this.getStringAttribute('with_state');
  }
  public set withState(value: string) {
    this._withState = value;
  }
  public resetWithState() {
    this._withState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withStateInput() {
    return this._withState;
  }
}
export interface StorageBucketLifecycleRule {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#action StorageBucket#action}
  */
  readonly action: StorageBucketLifecycleRuleAction;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#condition StorageBucket#condition}
  */
  readonly condition: StorageBucketLifecycleRuleCondition;
}

export function storageBucketLifecycleRuleToTerraform(struct?: StorageBucketLifecycleRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: storageBucketLifecycleRuleActionToTerraform(struct!.action),
    condition: storageBucketLifecycleRuleConditionToTerraform(struct!.condition),
  }
}

export interface StorageBucketLogging {
  /**
  * The bucket that will receive log objects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#log_bucket StorageBucket#log_bucket}
  */
  readonly logBucket: string;
  /**
  * The object prefix for log objects. If it's not provided, by default Google Cloud Storage sets this to this bucket's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#log_object_prefix StorageBucket#log_object_prefix}
  */
  readonly logObjectPrefix?: string;
}

export function storageBucketLoggingToTerraform(struct?: StorageBucketLoggingOutputReference | StorageBucketLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_bucket: cdktf.stringToTerraform(struct!.logBucket),
    log_object_prefix: cdktf.stringToTerraform(struct!.logObjectPrefix),
  }
}

export class StorageBucketLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageBucketLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logBucket) {
      hasAnyValues = true;
      internalValueResult.logBucket = this._logBucket;
    }
    if (this._logObjectPrefix) {
      hasAnyValues = true;
      internalValueResult.logObjectPrefix = this._logObjectPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logBucket = undefined;
      this._logObjectPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logBucket = value.logBucket;
      this._logObjectPrefix = value.logObjectPrefix;
    }
  }

  // log_bucket - computed: false, optional: false, required: true
  private _logBucket?: string; 
  public get logBucket() {
    return this.getStringAttribute('log_bucket');
  }
  public set logBucket(value: string) {
    this._logBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBucketInput() {
    return this._logBucket;
  }

  // log_object_prefix - computed: true, optional: true, required: false
  private _logObjectPrefix?: string; 
  public get logObjectPrefix() {
    return this.getStringAttribute('log_object_prefix');
  }
  public set logObjectPrefix(value: string) {
    this._logObjectPrefix = value;
  }
  public resetLogObjectPrefix() {
    this._logObjectPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logObjectPrefixInput() {
    return this._logObjectPrefix;
  }
}
export interface StorageBucketRetentionPolicy {
  /**
  * If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#is_locked StorageBucket#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 3,155,760,000 seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#retention_period StorageBucket#retention_period}
  */
  readonly retentionPeriod: number;
}

export function storageBucketRetentionPolicyToTerraform(struct?: StorageBucketRetentionPolicyOutputReference | StorageBucketRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_locked: cdktf.booleanToTerraform(struct!.isLocked),
    retention_period: cdktf.numberToTerraform(struct!.retentionPeriod),
  }
}

export class StorageBucketRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageBucketRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLocked) {
      hasAnyValues = true;
      internalValueResult.isLocked = this._isLocked;
    }
    if (this._retentionPeriod) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isLocked = undefined;
      this._retentionPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isLocked = value.isLocked;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // is_locked - computed: false, optional: true, required: false
  private _isLocked?: boolean | cdktf.IResolvable; 
  public get isLocked() {
    return this.getBooleanAttribute('is_locked') as any;
  }
  public set isLocked(value: boolean | cdktf.IResolvable) {
    this._isLocked = value;
  }
  public resetIsLocked() {
    this._isLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockedInput() {
    return this._isLocked;
  }

  // retention_period - computed: false, optional: false, required: true
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}
export interface StorageBucketVersioning {
  /**
  * While set to true, versioning is fully enabled for this bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#enabled StorageBucket#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function storageBucketVersioningToTerraform(struct?: StorageBucketVersioningOutputReference | StorageBucketVersioning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class StorageBucketVersioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageBucketVersioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketVersioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface StorageBucketWebsite {
  /**
  * Behaves as the bucket's directory index where missing objects are treated as potential directories.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#main_page_suffix StorageBucket#main_page_suffix}
  */
  readonly mainPageSuffix?: string;
  /**
  * The custom object to return when a requested resource is not found.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html#not_found_page StorageBucket#not_found_page}
  */
  readonly notFoundPage?: string;
}

export function storageBucketWebsiteToTerraform(struct?: StorageBucketWebsiteOutputReference | StorageBucketWebsite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_page_suffix: cdktf.stringToTerraform(struct!.mainPageSuffix),
    not_found_page: cdktf.stringToTerraform(struct!.notFoundPage),
  }
}

export class StorageBucketWebsiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageBucketWebsite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainPageSuffix) {
      hasAnyValues = true;
      internalValueResult.mainPageSuffix = this._mainPageSuffix;
    }
    if (this._notFoundPage) {
      hasAnyValues = true;
      internalValueResult.notFoundPage = this._notFoundPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketWebsite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mainPageSuffix = undefined;
      this._notFoundPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mainPageSuffix = value.mainPageSuffix;
      this._notFoundPage = value.notFoundPage;
    }
  }

  // main_page_suffix - computed: false, optional: true, required: false
  private _mainPageSuffix?: string; 
  public get mainPageSuffix() {
    return this.getStringAttribute('main_page_suffix');
  }
  public set mainPageSuffix(value: string) {
    this._mainPageSuffix = value;
  }
  public resetMainPageSuffix() {
    this._mainPageSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainPageSuffixInput() {
    return this._mainPageSuffix;
  }

  // not_found_page - computed: false, optional: true, required: false
  private _notFoundPage?: string; 
  public get notFoundPage() {
    return this.getStringAttribute('not_found_page');
  }
  public set notFoundPage(value: string) {
    this._notFoundPage = value;
  }
  public resetNotFoundPage() {
    this._notFoundPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notFoundPageInput() {
    return this._notFoundPage;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html google_storage_bucket}
*/
export class StorageBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_storage_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/storage_bucket.html google_storage_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBucketConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucketPolicyOnly = config.bucketPolicyOnly;
    this._defaultEventBasedHold = config.defaultEventBasedHold;
    this._forceDestroy = config.forceDestroy;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._requesterPays = config.requesterPays;
    this._storageClass = config.storageClass;
    this._uniformBucketLevelAccess = config.uniformBucketLevelAccess;
    this._cors = config.cors;
    this._encryption.internalValue = config.encryption;
    this._lifecycleRule = config.lifecycleRule;
    this._logging.internalValue = config.logging;
    this._retentionPolicy.internalValue = config.retentionPolicy;
    this._versioning.internalValue = config.versioning;
    this._website.internalValue = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_policy_only - computed: true, optional: true, required: false
  private _bucketPolicyOnly?: boolean | cdktf.IResolvable; 
  public get bucketPolicyOnly() {
    return this.getBooleanAttribute('bucket_policy_only') as any;
  }
  public set bucketPolicyOnly(value: boolean | cdktf.IResolvable) {
    this._bucketPolicyOnly = value;
  }
  public resetBucketPolicyOnly() {
    this._bucketPolicyOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPolicyOnlyInput() {
    return this._bucketPolicyOnly;
  }

  // default_event_based_hold - computed: false, optional: true, required: false
  private _defaultEventBasedHold?: boolean | cdktf.IResolvable; 
  public get defaultEventBasedHold() {
    return this.getBooleanAttribute('default_event_based_hold') as any;
  }
  public set defaultEventBasedHold(value: boolean | cdktf.IResolvable) {
    this._defaultEventBasedHold = value;
  }
  public resetDefaultEventBasedHold() {
    this._defaultEventBasedHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEventBasedHoldInput() {
    return this._defaultEventBasedHold;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy') as any;
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // requester_pays - computed: false, optional: true, required: false
  private _requesterPays?: boolean | cdktf.IResolvable; 
  public get requesterPays() {
    return this.getBooleanAttribute('requester_pays') as any;
  }
  public set requesterPays(value: boolean | cdktf.IResolvable) {
    this._requesterPays = value;
  }
  public resetRequesterPays() {
    this._requesterPays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterPaysInput() {
    return this._requesterPays;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // uniform_bucket_level_access - computed: true, optional: true, required: false
  private _uniformBucketLevelAccess?: boolean | cdktf.IResolvable; 
  public get uniformBucketLevelAccess() {
    return this.getBooleanAttribute('uniform_bucket_level_access') as any;
  }
  public set uniformBucketLevelAccess(value: boolean | cdktf.IResolvable) {
    this._uniformBucketLevelAccess = value;
  }
  public resetUniformBucketLevelAccess() {
    this._uniformBucketLevelAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBucketLevelAccessInput() {
    return this._uniformBucketLevelAccess;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: StorageBucketCors[]; 
  public get cors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cors') as any;
  }
  public set cors(value: StorageBucketCors[]) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new StorageBucketEncryptionOutputReference(this as any, "encryption", true);
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: StorageBucketEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // lifecycle_rule - computed: false, optional: true, required: false
  private _lifecycleRule?: StorageBucketLifecycleRule[]; 
  public get lifecycleRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifecycle_rule') as any;
  }
  public set lifecycleRule(value: StorageBucketLifecycleRule[]) {
    this._lifecycleRule = value;
  }
  public resetLifecycleRule() {
    this._lifecycleRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleInput() {
    return this._lifecycleRule;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new StorageBucketLoggingOutputReference(this as any, "logging", true);
  public get logging() {
    return this._logging;
  }
  public putLogging(value: StorageBucketLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new StorageBucketRetentionPolicyOutputReference(this as any, "retention_policy", true);
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: StorageBucketRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning = new StorageBucketVersioningOutputReference(this as any, "versioning", true);
  public get versioning() {
    return this._versioning;
  }
  public putVersioning(value: StorageBucketVersioning) {
    this._versioning.internalValue = value;
  }
  public resetVersioning() {
    this._versioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning.internalValue;
  }

  // website - computed: false, optional: true, required: false
  private _website = new StorageBucketWebsiteOutputReference(this as any, "website", true);
  public get website() {
    return this._website;
  }
  public putWebsite(value: StorageBucketWebsite) {
    this._website.internalValue = value;
  }
  public resetWebsite() {
    this._website.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_policy_only: cdktf.booleanToTerraform(this._bucketPolicyOnly),
      default_event_based_hold: cdktf.booleanToTerraform(this._defaultEventBasedHold),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      requester_pays: cdktf.booleanToTerraform(this._requesterPays),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      uniform_bucket_level_access: cdktf.booleanToTerraform(this._uniformBucketLevelAccess),
      cors: cdktf.listMapper(storageBucketCorsToTerraform)(this._cors),
      encryption: storageBucketEncryptionToTerraform(this._encryption.internalValue),
      lifecycle_rule: cdktf.listMapper(storageBucketLifecycleRuleToTerraform)(this._lifecycleRule),
      logging: storageBucketLoggingToTerraform(this._logging.internalValue),
      retention_policy: storageBucketRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
      versioning: storageBucketVersioningToTerraform(this._versioning.internalValue),
      website: storageBucketWebsiteToTerraform(this._website.internalValue),
    };
  }
}
