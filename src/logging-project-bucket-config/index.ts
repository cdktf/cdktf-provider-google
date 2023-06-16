// https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingProjectBucketConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config#bucket_id LoggingProjectBucketConfig#bucket_id}
  */
  readonly bucketId: string;
  /**
  * An optional description for this bucket.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config#description LoggingProjectBucketConfig#description}
  */
  readonly description?: string;
  /**
  * Enable log analytics for the bucket. Cannot be disabled once enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config#enable_analytics LoggingProjectBucketConfig#enable_analytics}
  */
  readonly enableAnalytics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config#id LoggingProjectBucketConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the bucket.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config#location LoggingProjectBucketConfig#location}
  */
  readonly location: string;
  /**
  * The parent project that contains the logging bucket.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config#project LoggingProjectBucketConfig#project}
  */
  readonly project: string;
  /**
  * Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config#retention_days LoggingProjectBucketConfig#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * cmek_settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config#cmek_settings LoggingProjectBucketConfig#cmek_settings}
  */
  readonly cmekSettings?: LoggingProjectBucketConfigCmekSettings;
}
export interface LoggingProjectBucketConfigCmekSettings {
  /**
  * The resource name for the configured Cloud KMS key.
KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config#kms_key_name LoggingProjectBucketConfig#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function loggingProjectBucketConfigCmekSettingsToTerraform(struct?: LoggingProjectBucketConfigCmekSettingsOutputReference | LoggingProjectBucketConfigCmekSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class LoggingProjectBucketConfigCmekSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingProjectBucketConfigCmekSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingProjectBucketConfigCmekSettings | undefined) {
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

  // kms_key_version_name - computed: true, optional: false, required: false
  public get kmsKeyVersionName() {
    return this.getStringAttribute('kms_key_version_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config google_logging_project_bucket_config}
*/
export class LoggingProjectBucketConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_logging_project_bucket_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/logging_project_bucket_config google_logging_project_bucket_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingProjectBucketConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LoggingProjectBucketConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_project_bucket_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.69.1',
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
    this._bucketId = config.bucketId;
    this._description = config.description;
    this._enableAnalytics = config.enableAnalytics;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._retentionDays = config.retentionDays;
    this._cmekSettings.internalValue = config.cmekSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_analytics - computed: false, optional: true, required: false
  private _enableAnalytics?: boolean | cdktf.IResolvable; 
  public get enableAnalytics() {
    return this.getBooleanAttribute('enable_analytics');
  }
  public set enableAnalytics(value: boolean | cdktf.IResolvable) {
    this._enableAnalytics = value;
  }
  public resetEnableAnalytics() {
    this._enableAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnalyticsInput() {
    return this._enableAnalytics;
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

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // cmek_settings - computed: false, optional: true, required: false
  private _cmekSettings = new LoggingProjectBucketConfigCmekSettingsOutputReference(this, "cmek_settings");
  public get cmekSettings() {
    return this._cmekSettings;
  }
  public putCmekSettings(value: LoggingProjectBucketConfigCmekSettings) {
    this._cmekSettings.internalValue = value;
  }
  public resetCmekSettings() {
    this._cmekSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmekSettingsInput() {
    return this._cmekSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      description: cdktf.stringToTerraform(this._description),
      enable_analytics: cdktf.booleanToTerraform(this._enableAnalytics),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      cmek_settings: loggingProjectBucketConfigCmekSettingsToTerraform(this._cmekSettings.internalValue),
    };
  }
}
