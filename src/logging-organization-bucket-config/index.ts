// https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingOrganizationBucketConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#bucket_id LoggingOrganizationBucketConfig#bucket_id}
  */
  readonly bucketId: string;
  /**
  * An optional description for this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#description LoggingOrganizationBucketConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#id LoggingOrganizationBucketConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#location LoggingOrganizationBucketConfig#location}
  */
  readonly location: string;
  /**
  * The parent resource that contains the logging bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#organization LoggingOrganizationBucketConfig#organization}
  */
  readonly organization: string;
  /**
  * Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#retention_days LoggingOrganizationBucketConfig#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * cmek_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#cmek_settings LoggingOrganizationBucketConfig#cmek_settings}
  */
  readonly cmekSettings?: LoggingOrganizationBucketConfigCmekSettings;
  /**
  * index_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#index_configs LoggingOrganizationBucketConfig#index_configs}
  */
  readonly indexConfigs?: LoggingOrganizationBucketConfigIndexConfigs[] | cdktf.IResolvable;
}
export interface LoggingOrganizationBucketConfigCmekSettings {
  /**
  * The resource name for the configured Cloud KMS key.
  * KMS key name format:
  * "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
  * To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
  * The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
  * See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#kms_key_name LoggingOrganizationBucketConfig#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function loggingOrganizationBucketConfigCmekSettingsToTerraform(struct?: LoggingOrganizationBucketConfigCmekSettingsOutputReference | LoggingOrganizationBucketConfigCmekSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function loggingOrganizationBucketConfigCmekSettingsToHclTerraform(struct?: LoggingOrganizationBucketConfigCmekSettingsOutputReference | LoggingOrganizationBucketConfigCmekSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingOrganizationBucketConfigCmekSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingOrganizationBucketConfigCmekSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingOrganizationBucketConfigCmekSettings | undefined) {
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
export interface LoggingOrganizationBucketConfigIndexConfigs {
  /**
  * The LogEntry field path to index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#field_path LoggingOrganizationBucketConfig#field_path}
  */
  readonly fieldPath: string;
  /**
  * The type of data in this index
  * Note that some paths are automatically indexed, and other paths are not eligible for indexing. See [indexing documentation]( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
  * For example: jsonPayload.request.status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#type LoggingOrganizationBucketConfig#type}
  */
  readonly type: string;
}

export function loggingOrganizationBucketConfigIndexConfigsToTerraform(struct?: LoggingOrganizationBucketConfigIndexConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function loggingOrganizationBucketConfigIndexConfigsToHclTerraform(struct?: LoggingOrganizationBucketConfigIndexConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingOrganizationBucketConfigIndexConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingOrganizationBucketConfigIndexConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingOrganizationBucketConfigIndexConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPath = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPath = value.fieldPath;
      this._type = value.type;
    }
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

export class LoggingOrganizationBucketConfigIndexConfigsList extends cdktf.ComplexList {
  public internalValue? : LoggingOrganizationBucketConfigIndexConfigs[] | cdktf.IResolvable

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
  public get(index: number): LoggingOrganizationBucketConfigIndexConfigsOutputReference {
    return new LoggingOrganizationBucketConfigIndexConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config google_logging_organization_bucket_config}
*/
export class LoggingOrganizationBucketConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_logging_organization_bucket_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoggingOrganizationBucketConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoggingOrganizationBucketConfig to import
  * @param importFromId The id of the existing LoggingOrganizationBucketConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoggingOrganizationBucketConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_logging_organization_bucket_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/logging_organization_bucket_config google_logging_organization_bucket_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingOrganizationBucketConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LoggingOrganizationBucketConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_organization_bucket_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.12.0',
        providerVersionConstraint: '~> 5.0'
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
    this._id = config.id;
    this._location = config.location;
    this._organization = config.organization;
    this._retentionDays = config.retentionDays;
    this._cmekSettings.internalValue = config.cmekSettings;
    this._indexConfigs.internalValue = config.indexConfigs;
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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
  private _cmekSettings = new LoggingOrganizationBucketConfigCmekSettingsOutputReference(this, "cmek_settings");
  public get cmekSettings() {
    return this._cmekSettings;
  }
  public putCmekSettings(value: LoggingOrganizationBucketConfigCmekSettings) {
    this._cmekSettings.internalValue = value;
  }
  public resetCmekSettings() {
    this._cmekSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmekSettingsInput() {
    return this._cmekSettings.internalValue;
  }

  // index_configs - computed: false, optional: true, required: false
  private _indexConfigs = new LoggingOrganizationBucketConfigIndexConfigsList(this, "index_configs", true);
  public get indexConfigs() {
    return this._indexConfigs;
  }
  public putIndexConfigs(value: LoggingOrganizationBucketConfigIndexConfigs[] | cdktf.IResolvable) {
    this._indexConfigs.internalValue = value;
  }
  public resetIndexConfigs() {
    this._indexConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexConfigsInput() {
    return this._indexConfigs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      organization: cdktf.stringToTerraform(this._organization),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      cmek_settings: loggingOrganizationBucketConfigCmekSettingsToTerraform(this._cmekSettings.internalValue),
      index_configs: cdktf.listMapper(loggingOrganizationBucketConfigIndexConfigsToTerraform, true)(this._indexConfigs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cmek_settings: {
        value: loggingOrganizationBucketConfigCmekSettingsToHclTerraform(this._cmekSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingOrganizationBucketConfigCmekSettingsList",
      },
      index_configs: {
        value: cdktf.listMapperHcl(loggingOrganizationBucketConfigIndexConfigsToHclTerraform, true)(this._indexConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoggingOrganizationBucketConfigIndexConfigsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
