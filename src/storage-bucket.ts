// https://www.terraform.io/docs/providers/google/r/storage_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageBucketConfig extends TerraformMetaArguments {
  /** Enables Bucket Policy Only access to a bucket. */
  readonly bucketPolicyOnly?: boolean;
  readonly defaultEventBasedHold?: boolean;
  /** When deleting a bucket, this boolean option will delete all contained objects. If you try to delete a bucket that contains objects, Terraform will fail that run. */
  readonly forceDestroy?: boolean;
  /** A set of key/value label pairs to assign to the bucket. */
  readonly labels?: { [key: string]: string };
  /** The Google Cloud Storage location */
  readonly location?: string;
  /** The name of the bucket. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** Enables Requester Pays on a storage bucket. */
  readonly requesterPays?: boolean;
  /** The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. */
  readonly storageClass?: string;
  /** Enables uniform bucket-level access on a bucket. */
  readonly uniformBucketLevelAccess?: boolean;
  /** cors block */
  readonly cors?: StorageBucketCors[];
  /** encryption block */
  readonly encryption?: StorageBucketEncryption[];
  /** lifecycle_rule block */
  readonly lifecycleRule?: StorageBucketLifecycleRule[];
  /** logging block */
  readonly logging?: StorageBucketLogging[];
  /** retention_policy block */
  readonly retentionPolicy?: StorageBucketRetentionPolicy[];
  /** versioning block */
  readonly versioning?: StorageBucketVersioning[];
  /** website block */
  readonly website?: StorageBucketWebsite[];
}
export interface StorageBucketCors {
  /** The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses. */
  readonly maxAgeSeconds?: number;
  /** The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". */
  readonly method?: string[];
  /** The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin". */
  readonly origin?: string[];
  /** The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. */
  readonly responseHeader?: string[];
}
export interface StorageBucketEncryption {
  /** A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details. */
  readonly defaultKmsKeyName: string;
}
export interface StorageBucketLifecycleRuleAction {
  /** The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. */
  readonly storageClass?: string;
  /** The type of the action of this Lifecycle Rule. Supported values include: Delete and SetStorageClass. */
  readonly type: string;
}
export interface StorageBucketLifecycleRuleCondition {
  /** Minimum age of an object in days to satisfy this condition. */
  readonly age?: number;
  /** Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. */
  readonly createdBefore?: string;
  /** Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY. */
  readonly matchesStorageClass?: string[];
  /** Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition. */
  readonly numNewerVersions?: number;
  /** Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY". */
  readonly withState?: string;
}
export interface StorageBucketLifecycleRule {
  /** action block */
  readonly action: StorageBucketLifecycleRuleAction[];
  /** condition block */
  readonly condition: StorageBucketLifecycleRuleCondition[];
}
export interface StorageBucketLogging {
  /** The bucket that will receive log objects. */
  readonly logBucket: string;
  /** The object prefix for log objects. If it's not provided, by default Google Cloud Storage sets this to this bucket's name. */
  readonly logObjectPrefix?: string;
}
export interface StorageBucketRetentionPolicy {
  /** If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action. */
  readonly isLocked?: boolean;
  /** The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 3,155,760,000 seconds. */
  readonly retentionPeriod: number;
}
export interface StorageBucketVersioning {
  /** While set to true, versioning is fully enabled for this bucket. */
  readonly enabled: boolean;
}
export interface StorageBucketWebsite {
  /** Behaves as the bucket's directory index where missing objects are treated as potential directories. */
  readonly mainPageSuffix?: string;
  /** The custom object to return when a requested resource is not found. */
  readonly notFoundPage?: string;
}

// Resource

export class StorageBucket extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._encryption = config.encryption;
    this._lifecycleRule = config.lifecycleRule;
    this._logging = config.logging;
    this._retentionPolicy = config.retentionPolicy;
    this._versioning = config.versioning;
    this._website = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_policy_only - computed: true, optional: true, required: false
  private _bucketPolicyOnly?: boolean;
  public get bucketPolicyOnly() {
    return this.getBooleanAttribute('bucket_policy_only');
  }
  public set bucketPolicyOnly(value: boolean) {
    this._bucketPolicyOnly = value;
  }
  public resetBucketPolicyOnly() {
    this._bucketPolicyOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPolicyOnlyInput() {
    return this._bucketPolicyOnly
  }

  // default_event_based_hold - computed: false, optional: true, required: false
  private _defaultEventBasedHold?: boolean;
  public get defaultEventBasedHold() {
    return this.getBooleanAttribute('default_event_based_hold');
  }
  public set defaultEventBasedHold(value: boolean ) {
    this._defaultEventBasedHold = value;
  }
  public resetDefaultEventBasedHold() {
    this._defaultEventBasedHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEventBasedHoldInput() {
    return this._defaultEventBasedHold
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
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

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // requester_pays - computed: false, optional: true, required: false
  private _requesterPays?: boolean;
  public get requesterPays() {
    return this.getBooleanAttribute('requester_pays');
  }
  public set requesterPays(value: boolean ) {
    this._requesterPays = value;
  }
  public resetRequesterPays() {
    this._requesterPays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterPaysInput() {
    return this._requesterPays
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
  public set storageClass(value: string ) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass
  }

  // uniform_bucket_level_access - computed: true, optional: true, required: false
  private _uniformBucketLevelAccess?: boolean;
  public get uniformBucketLevelAccess() {
    return this.getBooleanAttribute('uniform_bucket_level_access');
  }
  public set uniformBucketLevelAccess(value: boolean) {
    this._uniformBucketLevelAccess = value;
  }
  public resetUniformBucketLevelAccess() {
    this._uniformBucketLevelAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBucketLevelAccessInput() {
    return this._uniformBucketLevelAccess
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: StorageBucketCors[];
  public get cors() {
    return this.interpolationForAttribute('cors') as any;
  }
  public set cors(value: StorageBucketCors[] ) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: StorageBucketEncryption[];
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }
  public set encryption(value: StorageBucketEncryption[] ) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption
  }

  // lifecycle_rule - computed: false, optional: true, required: false
  private _lifecycleRule?: StorageBucketLifecycleRule[];
  public get lifecycleRule() {
    return this.interpolationForAttribute('lifecycle_rule') as any;
  }
  public set lifecycleRule(value: StorageBucketLifecycleRule[] ) {
    this._lifecycleRule = value;
  }
  public resetLifecycleRule() {
    this._lifecycleRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleInput() {
    return this._lifecycleRule
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: StorageBucketLogging[];
  public get logging() {
    return this.interpolationForAttribute('logging') as any;
  }
  public set logging(value: StorageBucketLogging[] ) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy?: StorageBucketRetentionPolicy[];
  public get retentionPolicy() {
    return this.interpolationForAttribute('retention_policy') as any;
  }
  public set retentionPolicy(value: StorageBucketRetentionPolicy[] ) {
    this._retentionPolicy = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning?: StorageBucketVersioning[];
  public get versioning() {
    return this.interpolationForAttribute('versioning') as any;
  }
  public set versioning(value: StorageBucketVersioning[] ) {
    this._versioning = value;
  }
  public resetVersioning() {
    this._versioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning
  }

  // website - computed: false, optional: true, required: false
  private _website?: StorageBucketWebsite[];
  public get website() {
    return this.interpolationForAttribute('website') as any;
  }
  public set website(value: StorageBucketWebsite[] ) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_policy_only: this._bucketPolicyOnly,
      default_event_based_hold: this._defaultEventBasedHold,
      force_destroy: this._forceDestroy,
      labels: this._labels,
      location: this._location,
      name: this._name,
      project: this._project,
      requester_pays: this._requesterPays,
      storage_class: this._storageClass,
      uniform_bucket_level_access: this._uniformBucketLevelAccess,
      cors: this._cors,
      encryption: this._encryption,
      lifecycle_rule: this._lifecycleRule,
      logging: this._logging,
      retention_policy: this._retentionPolicy,
      versioning: this._versioning,
      website: this._website,
    };
  }
}
