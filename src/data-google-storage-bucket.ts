// https://www.terraform.io/docs/providers/google/d/storage_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleStorageBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_bucket.html#name DataGoogleStorageBucket#name}
  */
  readonly name: string;
}
export class DataGoogleStorageBucketCors extends cdktf.ComplexComputedList {

  // max_age_seconds - computed: true, optional: false, required: false
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getListAttribute('method');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getListAttribute('origin');
  }

  // response_header - computed: true, optional: false, required: false
  public get responseHeader() {
    return this.getListAttribute('response_header');
  }
}
export class DataGoogleStorageBucketEncryption extends cdktf.ComplexComputedList {

  // default_kms_key_name - computed: true, optional: false, required: false
  public get defaultKmsKeyName() {
    return this.getStringAttribute('default_kms_key_name');
  }
}
export class DataGoogleStorageBucketLifecycleRuleAction extends cdktf.ComplexComputedList {

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleStorageBucketLifecycleRuleCondition extends cdktf.ComplexComputedList {

  // age - computed: true, optional: false, required: false
  public get age() {
    return this.getNumberAttribute('age');
  }

  // created_before - computed: true, optional: false, required: false
  public get createdBefore() {
    return this.getStringAttribute('created_before');
  }

  // custom_time_before - computed: true, optional: false, required: false
  public get customTimeBefore() {
    return this.getStringAttribute('custom_time_before');
  }

  // days_since_custom_time - computed: true, optional: false, required: false
  public get daysSinceCustomTime() {
    return this.getNumberAttribute('days_since_custom_time');
  }

  // days_since_noncurrent_time - computed: true, optional: false, required: false
  public get daysSinceNoncurrentTime() {
    return this.getNumberAttribute('days_since_noncurrent_time');
  }

  // matches_storage_class - computed: true, optional: false, required: false
  public get matchesStorageClass() {
    return this.getListAttribute('matches_storage_class');
  }

  // noncurrent_time_before - computed: true, optional: false, required: false
  public get noncurrentTimeBefore() {
    return this.getStringAttribute('noncurrent_time_before');
  }

  // num_newer_versions - computed: true, optional: false, required: false
  public get numNewerVersions() {
    return this.getNumberAttribute('num_newer_versions');
  }

  // with_state - computed: true, optional: false, required: false
  public get withState() {
    return this.getStringAttribute('with_state');
  }
}
export class DataGoogleStorageBucketLifecycleRule extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('action') as any;
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('condition') as any;
  }
}
export class DataGoogleStorageBucketLogging extends cdktf.ComplexComputedList {

  // log_bucket - computed: true, optional: false, required: false
  public get logBucket() {
    return this.getStringAttribute('log_bucket');
  }

  // log_object_prefix - computed: true, optional: false, required: false
  public get logObjectPrefix() {
    return this.getStringAttribute('log_object_prefix');
  }
}
export class DataGoogleStorageBucketRetentionPolicy extends cdktf.ComplexComputedList {

  // is_locked - computed: true, optional: false, required: false
  public get isLocked() {
    return this.getBooleanAttribute('is_locked') as any;
  }

  // retention_period - computed: true, optional: false, required: false
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
}
export class DataGoogleStorageBucketVersioning extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
}
export class DataGoogleStorageBucketWebsite extends cdktf.ComplexComputedList {

  // main_page_suffix - computed: true, optional: false, required: false
  public get mainPageSuffix() {
    return this.getStringAttribute('main_page_suffix');
  }

  // not_found_page - computed: true, optional: false, required: false
  public get notFoundPage() {
    return this.getStringAttribute('not_found_page');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/storage_bucket.html google_storage_bucket}
*/
export class DataGoogleStorageBucket extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_storage_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/storage_bucket.html google_storage_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageBucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageBucketConfig) {
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_policy_only - computed: true, optional: false, required: false
  public get bucketPolicyOnly() {
    return this.getBooleanAttribute('bucket_policy_only') as any;
  }

  // cors - computed: true, optional: false, required: false
  public cors(index: string) {
    return new DataGoogleStorageBucketCors(this, 'cors', index);
  }

  // default_event_based_hold - computed: true, optional: false, required: false
  public get defaultEventBasedHold() {
    return this.getBooleanAttribute('default_event_based_hold') as any;
  }

  // encryption - computed: true, optional: false, required: false
  public encryption(index: string) {
    return new DataGoogleStorageBucketEncryption(this, 'encryption', index);
  }

  // force_destroy - computed: true, optional: false, required: false
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // lifecycle_rule - computed: true, optional: false, required: false
  public lifecycleRule(index: string) {
    return new DataGoogleStorageBucketLifecycleRule(this, 'lifecycle_rule', index);
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // logging - computed: true, optional: false, required: false
  public logging(index: string) {
    return new DataGoogleStorageBucketLogging(this, 'logging', index);
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
    return this._name
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // requester_pays - computed: true, optional: false, required: false
  public get requesterPays() {
    return this.getBooleanAttribute('requester_pays') as any;
  }

  // retention_policy - computed: true, optional: false, required: false
  public retentionPolicy(index: string) {
    return new DataGoogleStorageBucketRetentionPolicy(this, 'retention_policy', index);
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // uniform_bucket_level_access - computed: true, optional: false, required: false
  public get uniformBucketLevelAccess() {
    return this.getBooleanAttribute('uniform_bucket_level_access') as any;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // versioning - computed: true, optional: false, required: false
  public versioning(index: string) {
    return new DataGoogleStorageBucketVersioning(this, 'versioning', index);
  }

  // website - computed: true, optional: false, required: false
  public website(index: string) {
    return new DataGoogleStorageBucketWebsite(this, 'website', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
