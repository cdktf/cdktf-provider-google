// https://www.terraform.io/docs/providers/google/r/storage_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#default_event_based_hold StorageBucket#default_event_based_hold}
  */
  readonly defaultEventBasedHold?: boolean | cdktf.IResolvable;
  /**
  * When deleting a bucket, this boolean option will delete all contained objects. If you try to delete a bucket that contains objects, Terraform will fail that run.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#force_destroy StorageBucket#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#id StorageBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#labels StorageBucket#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The Google Cloud Storage location
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#location StorageBucket#location}
  */
  readonly location: string;
  /**
  * The name of the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#name StorageBucket#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#project StorageBucket#project}
  */
  readonly project?: string;
  /**
  * Enables Requester Pays on a storage bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#requester_pays StorageBucket#requester_pays}
  */
  readonly requesterPays?: boolean | cdktf.IResolvable;
  /**
  * The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#storage_class StorageBucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Enables uniform bucket-level access on a bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#uniform_bucket_level_access StorageBucket#uniform_bucket_level_access}
  */
  readonly uniformBucketLevelAccess?: boolean | cdktf.IResolvable;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#cors StorageBucket#cors}
  */
  readonly cors?: StorageBucketCors[] | cdktf.IResolvable;
  /**
  * encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#encryption StorageBucket#encryption}
  */
  readonly encryption?: StorageBucketEncryption;
  /**
  * lifecycle_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#lifecycle_rule StorageBucket#lifecycle_rule}
  */
  readonly lifecycleRule?: StorageBucketLifecycleRule[] | cdktf.IResolvable;
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#logging StorageBucket#logging}
  */
  readonly logging?: StorageBucketLogging;
  /**
  * retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#retention_policy StorageBucket#retention_policy}
  */
  readonly retentionPolicy?: StorageBucketRetentionPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#timeouts StorageBucket#timeouts}
  */
  readonly timeouts?: StorageBucketTimeouts;
  /**
  * versioning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#versioning StorageBucket#versioning}
  */
  readonly versioning?: StorageBucketVersioning;
  /**
  * website block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#website StorageBucket#website}
  */
  readonly website?: StorageBucketWebsite;
}
export interface StorageBucketCors {
  /**
  * The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#max_age_seconds StorageBucket#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
  /**
  * The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#method StorageBucket#method}
  */
  readonly method?: string[];
  /**
  * The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#origin StorageBucket#origin}
  */
  readonly origin?: string[];
  /**
  * The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#response_header StorageBucket#response_header}
  */
  readonly responseHeader?: string[];
}

export function storageBucketCorsToTerraform(struct?: StorageBucketCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
    method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.method),
    origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.origin),
    response_header: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeader),
  }
}

export class StorageBucketCorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageBucketCors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._responseHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketCors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxAgeSeconds = undefined;
      this._method = undefined;
      this._origin = undefined;
      this._responseHeader = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxAgeSeconds = value.maxAgeSeconds;
      this._method = value.method;
      this._origin = value.origin;
      this._responseHeader = value.responseHeader;
    }
  }

  // max_age_seconds - computed: false, optional: true, required: false
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  public resetMaxAgeSeconds() {
    this._maxAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string[]; 
  public get method() {
    return this.getListAttribute('method');
  }
  public set method(value: string[]) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string[]; 
  public get origin() {
    return this.getListAttribute('origin');
  }
  public set origin(value: string[]) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader?: string[]; 
  public get responseHeader() {
    return this.getListAttribute('response_header');
  }
  public set responseHeader(value: string[]) {
    this._responseHeader = value;
  }
  public resetResponseHeader() {
    this._responseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader;
  }
}

export class StorageBucketCorsList extends cdktf.ComplexList {
  public internalValue? : StorageBucketCors[] | cdktf.IResolvable

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
  public get(index: number): StorageBucketCorsOutputReference {
    return new StorageBucketCorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageBucketEncryption {
  /**
  * A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#default_kms_key_name StorageBucket#default_kms_key_name}
  */
  readonly defaultKmsKeyName: string;
}

export function storageBucketEncryptionToTerraform(struct?: StorageBucketEncryptionOutputReference | StorageBucketEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultKmsKeyName !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#storage_class StorageBucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * The type of the action of this Lifecycle Rule. Supported values include: Delete and SetStorageClass.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#type StorageBucket#type}
  */
  readonly type: string;
}

export function storageBucketLifecycleRuleActionToTerraform(struct?: StorageBucketLifecycleRuleActionOutputReference | StorageBucketLifecycleRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketLifecycleRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._type !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#age StorageBucket#age}
  */
  readonly age?: number;
  /**
  * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#created_before StorageBucket#created_before}
  */
  readonly createdBefore?: string;
  /**
  * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#custom_time_before StorageBucket#custom_time_before}
  */
  readonly customTimeBefore?: string;
  /**
  * Number of days elapsed since the user-specified timestamp set on an object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#days_since_custom_time StorageBucket#days_since_custom_time}
  */
  readonly daysSinceCustomTime?: number;
  /**
  * Number of days elapsed since the noncurrent timestamp of an object. This
										condition is relevant only for versioned objects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#days_since_noncurrent_time StorageBucket#days_since_noncurrent_time}
  */
  readonly daysSinceNoncurrentTime?: number;
  /**
  * One or more matching name prefixes to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#matches_prefix StorageBucket#matches_prefix}
  */
  readonly matchesPrefix?: string[];
  /**
  * Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#matches_storage_class StorageBucket#matches_storage_class}
  */
  readonly matchesStorageClass?: string[];
  /**
  * One or more matching name suffixes to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#matches_suffix StorageBucket#matches_suffix}
  */
  readonly matchesSuffix?: string[];
  /**
  * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#noncurrent_time_before StorageBucket#noncurrent_time_before}
  */
  readonly noncurrentTimeBefore?: string;
  /**
  * Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#num_newer_versions StorageBucket#num_newer_versions}
  */
  readonly numNewerVersions?: number;
  /**
  * Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#with_state StorageBucket#with_state}
  */
  readonly withState?: string;
}

export function storageBucketLifecycleRuleConditionToTerraform(struct?: StorageBucketLifecycleRuleConditionOutputReference | StorageBucketLifecycleRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    created_before: cdktf.stringToTerraform(struct!.createdBefore),
    custom_time_before: cdktf.stringToTerraform(struct!.customTimeBefore),
    days_since_custom_time: cdktf.numberToTerraform(struct!.daysSinceCustomTime),
    days_since_noncurrent_time: cdktf.numberToTerraform(struct!.daysSinceNoncurrentTime),
    matches_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchesPrefix),
    matches_storage_class: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchesStorageClass),
    matches_suffix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchesSuffix),
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketLifecycleRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._createdBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBefore = this._createdBefore;
    }
    if (this._customTimeBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTimeBefore = this._customTimeBefore;
    }
    if (this._daysSinceCustomTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysSinceCustomTime = this._daysSinceCustomTime;
    }
    if (this._daysSinceNoncurrentTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysSinceNoncurrentTime = this._daysSinceNoncurrentTime;
    }
    if (this._matchesPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchesPrefix = this._matchesPrefix;
    }
    if (this._matchesStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchesStorageClass = this._matchesStorageClass;
    }
    if (this._matchesSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchesSuffix = this._matchesSuffix;
    }
    if (this._noncurrentTimeBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentTimeBefore = this._noncurrentTimeBefore;
    }
    if (this._numNewerVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numNewerVersions = this._numNewerVersions;
    }
    if (this._withState !== undefined) {
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
      this._matchesPrefix = undefined;
      this._matchesStorageClass = undefined;
      this._matchesSuffix = undefined;
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
      this._matchesPrefix = value.matchesPrefix;
      this._matchesStorageClass = value.matchesStorageClass;
      this._matchesSuffix = value.matchesSuffix;
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

  // matches_prefix - computed: false, optional: true, required: false
  private _matchesPrefix?: string[]; 
  public get matchesPrefix() {
    return this.getListAttribute('matches_prefix');
  }
  public set matchesPrefix(value: string[]) {
    this._matchesPrefix = value;
  }
  public resetMatchesPrefix() {
    this._matchesPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesPrefixInput() {
    return this._matchesPrefix;
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

  // matches_suffix - computed: false, optional: true, required: false
  private _matchesSuffix?: string[]; 
  public get matchesSuffix() {
    return this.getListAttribute('matches_suffix');
  }
  public set matchesSuffix(value: string[]) {
    this._matchesSuffix = value;
  }
  public resetMatchesSuffix() {
    this._matchesSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesSuffixInput() {
    return this._matchesSuffix;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#action StorageBucket#action}
  */
  readonly action: StorageBucketLifecycleRuleAction;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#condition StorageBucket#condition}
  */
  readonly condition: StorageBucketLifecycleRuleCondition;
}

export function storageBucketLifecycleRuleToTerraform(struct?: StorageBucketLifecycleRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: storageBucketLifecycleRuleActionToTerraform(struct!.action),
    condition: storageBucketLifecycleRuleConditionToTerraform(struct!.condition),
  }
}

export class StorageBucketLifecycleRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageBucketLifecycleRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketLifecycleRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._condition.internalValue = value.condition;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new StorageBucketLifecycleRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: StorageBucketLifecycleRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new StorageBucketLifecycleRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: StorageBucketLifecycleRuleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class StorageBucketLifecycleRuleList extends cdktf.ComplexList {
  public internalValue? : StorageBucketLifecycleRule[] | cdktf.IResolvable

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
  public get(index: number): StorageBucketLifecycleRuleOutputReference {
    return new StorageBucketLifecycleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageBucketLogging {
  /**
  * The bucket that will receive log objects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#log_bucket StorageBucket#log_bucket}
  */
  readonly logBucket: string;
  /**
  * The object prefix for log objects. If it's not provided, by default Google Cloud Storage sets this to this bucket's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#log_object_prefix StorageBucket#log_object_prefix}
  */
  readonly logObjectPrefix?: string;
}

export function storageBucketLoggingToTerraform(struct?: StorageBucketLoggingOutputReference | StorageBucketLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBucket = this._logBucket;
    }
    if (this._logObjectPrefix !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#is_locked StorageBucket#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 3,155,760,000 seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#retention_period StorageBucket#retention_period}
  */
  readonly retentionPeriod: number;
}

export function storageBucketRetentionPolicyToTerraform(struct?: StorageBucketRetentionPolicyOutputReference | StorageBucketRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLocked = this._isLocked;
    }
    if (this._retentionPeriod !== undefined) {
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
    return this.getBooleanAttribute('is_locked');
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
export interface StorageBucketTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#create StorageBucket#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#read StorageBucket#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#update StorageBucket#update}
  */
  readonly update?: string;
}

export function storageBucketTimeoutsToTerraform(struct?: StorageBucketTimeoutsOutputReference | StorageBucketTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class StorageBucketTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBucketTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface StorageBucketVersioning {
  /**
  * While set to true, versioning is fully enabled for this bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#enabled StorageBucket#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function storageBucketVersioningToTerraform(struct?: StorageBucketVersioningOutputReference | StorageBucketVersioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketVersioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
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
    return this.getBooleanAttribute('enabled');
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#main_page_suffix StorageBucket#main_page_suffix}
  */
  readonly mainPageSuffix?: string;
  /**
  * The custom object to return when a requested resource is not found.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket#not_found_page StorageBucket#not_found_page}
  */
  readonly notFoundPage?: string;
}

export function storageBucketWebsiteToTerraform(struct?: StorageBucketWebsiteOutputReference | StorageBucketWebsite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBucketWebsite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainPageSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainPageSuffix = this._mainPageSuffix;
    }
    if (this._notFoundPage !== undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_bucket google_storage_bucket}
*/
export class StorageBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/storage_bucket google_storage_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBucketConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._defaultEventBasedHold = config.defaultEventBasedHold;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._requesterPays = config.requesterPays;
    this._storageClass = config.storageClass;
    this._uniformBucketLevelAccess = config.uniformBucketLevelAccess;
    this._cors.internalValue = config.cors;
    this._encryption.internalValue = config.encryption;
    this._lifecycleRule.internalValue = config.lifecycleRule;
    this._logging.internalValue = config.logging;
    this._retentionPolicy.internalValue = config.retentionPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._versioning.internalValue = config.versioning;
    this._website.internalValue = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_event_based_hold - computed: false, optional: true, required: false
  private _defaultEventBasedHold?: boolean | cdktf.IResolvable; 
  public get defaultEventBasedHold() {
    return this.getBooleanAttribute('default_event_based_hold');
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
    return this.getBooleanAttribute('force_destroy');
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
    return this.getBooleanAttribute('requester_pays');
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
    return this.getBooleanAttribute('uniform_bucket_level_access');
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
  private _cors = new StorageBucketCorsList(this, "cors", false);
  public get cors() {
    return this._cors;
  }
  public putCors(value: StorageBucketCors[] | cdktf.IResolvable) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new StorageBucketEncryptionOutputReference(this, "encryption");
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
  private _lifecycleRule = new StorageBucketLifecycleRuleList(this, "lifecycle_rule", false);
  public get lifecycleRule() {
    return this._lifecycleRule;
  }
  public putLifecycleRule(value: StorageBucketLifecycleRule[] | cdktf.IResolvable) {
    this._lifecycleRule.internalValue = value;
  }
  public resetLifecycleRule() {
    this._lifecycleRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleInput() {
    return this._lifecycleRule.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new StorageBucketLoggingOutputReference(this, "logging");
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
  private _retentionPolicy = new StorageBucketRetentionPolicyOutputReference(this, "retention_policy");
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageBucketTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageBucketTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning = new StorageBucketVersioningOutputReference(this, "versioning");
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
  private _website = new StorageBucketWebsiteOutputReference(this, "website");
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
      default_event_based_hold: cdktf.booleanToTerraform(this._defaultEventBasedHold),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      requester_pays: cdktf.booleanToTerraform(this._requesterPays),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      uniform_bucket_level_access: cdktf.booleanToTerraform(this._uniformBucketLevelAccess),
      cors: cdktf.listMapper(storageBucketCorsToTerraform, true)(this._cors.internalValue),
      encryption: storageBucketEncryptionToTerraform(this._encryption.internalValue),
      lifecycle_rule: cdktf.listMapper(storageBucketLifecycleRuleToTerraform, true)(this._lifecycleRule.internalValue),
      logging: storageBucketLoggingToTerraform(this._logging.internalValue),
      retention_policy: storageBucketRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
      timeouts: storageBucketTimeoutsToTerraform(this._timeouts.internalValue),
      versioning: storageBucketVersioningToTerraform(this._versioning.internalValue),
      website: storageBucketWebsiteToTerraform(this._website.internalValue),
    };
  }
}
