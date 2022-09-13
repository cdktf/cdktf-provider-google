// https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocMetastoreServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#database_type DataprocMetastoreService#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#id DataprocMetastoreService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the metastore service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#labels DataprocMetastoreService#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the metastore service should reside.
The default value is 'global'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#location DataprocMetastoreService#location}
  */
  readonly location?: string;
  /**
  * The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#network DataprocMetastoreService#network}
  */
  readonly network?: string;
  /**
  * The TCP port at which the metastore service is reached. Default: 9083.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#port DataprocMetastoreService#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#project DataprocMetastoreService#project}
  */
  readonly project?: string;
  /**
  * The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#release_channel DataprocMetastoreService#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#service_id DataprocMetastoreService#service_id}
  */
  readonly serviceId: string;
  /**
  * The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#tier DataprocMetastoreService#tier}
  */
  readonly tier?: string;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#encryption_config DataprocMetastoreService#encryption_config}
  */
  readonly encryptionConfig?: DataprocMetastoreServiceEncryptionConfig;
  /**
  * hive_metastore_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#hive_metastore_config DataprocMetastoreService#hive_metastore_config}
  */
  readonly hiveMetastoreConfig?: DataprocMetastoreServiceHiveMetastoreConfig;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#maintenance_window DataprocMetastoreService#maintenance_window}
  */
  readonly maintenanceWindow?: DataprocMetastoreServiceMaintenanceWindow;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#timeouts DataprocMetastoreService#timeouts}
  */
  readonly timeouts?: DataprocMetastoreServiceTimeouts;
}
export interface DataprocMetastoreServiceEncryptionConfig {
  /**
  * The fully qualified customer provided Cloud KMS key name to use for customer data encryption.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#kms_key DataprocMetastoreService#kms_key}
  */
  readonly kmsKey: string;
}

export function dataprocMetastoreServiceEncryptionConfigToTerraform(struct?: DataprocMetastoreServiceEncryptionConfigOutputReference | DataprocMetastoreServiceEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export class DataprocMetastoreServiceEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: false, required: true
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab {
  /**
  * The relative resource name of a Secret Manager secret version, in the following form:

"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#cloud_secret DataprocMetastoreService#cloud_secret}
  */
  readonly cloudSecret: string;
}

export function dataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabToTerraform(struct?: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference | DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_secret: cdktf.stringToTerraform(struct!.cloudSecret),
  }
}

export class DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSecret = this._cloudSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudSecret = value.cloudSecret;
    }
  }

  // cloud_secret - computed: false, optional: false, required: true
  private _cloudSecret?: string; 
  public get cloudSecret() {
    return this.getStringAttribute('cloud_secret');
  }
  public set cloudSecret(value: string) {
    this._cloudSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSecretInput() {
    return this._cloudSecret;
  }
}
export interface DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig {
  /**
  * A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#krb5_config_gcs_uri DataprocMetastoreService#krb5_config_gcs_uri}
  */
  readonly krb5ConfigGcsUri: string;
  /**
  * A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form "primary/instance@REALM", but there is no exact format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#principal DataprocMetastoreService#principal}
  */
  readonly principal: string;
  /**
  * keytab block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#keytab DataprocMetastoreService#keytab}
  */
  readonly keytab: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;
}

export function dataprocMetastoreServiceHiveMetastoreConfigKerberosConfigToTerraform(struct?: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference | DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    krb5_config_gcs_uri: cdktf.stringToTerraform(struct!.krb5ConfigGcsUri),
    principal: cdktf.stringToTerraform(struct!.principal),
    keytab: dataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabToTerraform(struct!.keytab),
  }
}

export class DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._krb5ConfigGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ConfigGcsUri = this._krb5ConfigGcsUri;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._keytab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keytab = this._keytab?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._krb5ConfigGcsUri = undefined;
      this._principal = undefined;
      this._keytab.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._krb5ConfigGcsUri = value.krb5ConfigGcsUri;
      this._principal = value.principal;
      this._keytab.internalValue = value.keytab;
    }
  }

  // krb5_config_gcs_uri - computed: false, optional: false, required: true
  private _krb5ConfigGcsUri?: string; 
  public get krb5ConfigGcsUri() {
    return this.getStringAttribute('krb5_config_gcs_uri');
  }
  public set krb5ConfigGcsUri(value: string) {
    this._krb5ConfigGcsUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ConfigGcsUriInput() {
    return this._krb5ConfigGcsUri;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // keytab - computed: false, optional: false, required: true
  private _keytab = new DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference(this, "keytab");
  public get keytab() {
    return this._keytab;
  }
  public putKeytab(value: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab) {
    this._keytab.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabInput() {
    return this._keytab.internalValue;
  }
}
export interface DataprocMetastoreServiceHiveMetastoreConfig {
  /**
  * A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).
The mappings override system defaults (some keys cannot be overridden)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#config_overrides DataprocMetastoreService#config_overrides}
  */
  readonly configOverrides?: { [key: string]: string };
  /**
  * The Hive metastore schema version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#version DataprocMetastoreService#version}
  */
  readonly version: string;
  /**
  * kerberos_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#kerberos_config DataprocMetastoreService#kerberos_config}
  */
  readonly kerberosConfig?: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;
}

export function dataprocMetastoreServiceHiveMetastoreConfigToTerraform(struct?: DataprocMetastoreServiceHiveMetastoreConfigOutputReference | DataprocMetastoreServiceHiveMetastoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configOverrides),
    version: cdktf.stringToTerraform(struct!.version),
    kerberos_config: dataprocMetastoreServiceHiveMetastoreConfigKerberosConfigToTerraform(struct!.kerberosConfig),
  }
}

export class DataprocMetastoreServiceHiveMetastoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceHiveMetastoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._kerberosConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosConfig = this._kerberosConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceHiveMetastoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configOverrides = undefined;
      this._version = undefined;
      this._kerberosConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configOverrides = value.configOverrides;
      this._version = value.version;
      this._kerberosConfig.internalValue = value.kerberosConfig;
    }
  }

  // config_overrides - computed: true, optional: true, required: false
  private _configOverrides?: { [key: string]: string }; 
  public get configOverrides() {
    return this.getStringMapAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: string }) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // kerberos_config - computed: false, optional: true, required: false
  private _kerberosConfig = new DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference(this, "kerberos_config");
  public get kerberosConfig() {
    return this._kerberosConfig;
  }
  public putKerberosConfig(value: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig) {
    this._kerberosConfig.internalValue = value;
  }
  public resetKerberosConfig() {
    this._kerberosConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosConfigInput() {
    return this._kerberosConfig.internalValue;
  }
}
export interface DataprocMetastoreServiceMaintenanceWindow {
  /**
  * The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#day_of_week DataprocMetastoreService#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * The hour of day (0-23) when the window starts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#hour_of_day DataprocMetastoreService#hour_of_day}
  */
  readonly hourOfDay: number;
}

export function dataprocMetastoreServiceMaintenanceWindowToTerraform(struct?: DataprocMetastoreServiceMaintenanceWindowOutputReference | DataprocMetastoreServiceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
  }
}

export class DataprocMetastoreServiceMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._hourOfDay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._hourOfDay = value.hourOfDay;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }
}
export interface DataprocMetastoreServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#create DataprocMetastoreService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#delete DataprocMetastoreService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#update DataprocMetastoreService#update}
  */
  readonly update?: string;
}

export function dataprocMetastoreServiceTimeoutsToTerraform(struct?: DataprocMetastoreServiceTimeoutsOutputReference | DataprocMetastoreServiceTimeouts | cdktf.IResolvable): any {
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

export class DataprocMetastoreServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataprocMetastoreServiceTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service google_dataproc_metastore_service}
*/
export class DataprocMetastoreService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_metastore_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service google_dataproc_metastore_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocMetastoreServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocMetastoreServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_metastore_service',
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
    this._databaseType = config.databaseType;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._network = config.network;
    this._port = config.port;
    this._project = config.project;
    this._releaseChannel = config.releaseChannel;
    this._serviceId = config.serviceId;
    this._tier = config.tier;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._hiveMetastoreConfig.internalValue = config.hiveMetastoreConfig;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_gcs_uri - computed: true, optional: false, required: false
  public get artifactGcsUri() {
    return this.getStringAttribute('artifact_gcs_uri');
  }

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // endpoint_uri - computed: true, optional: false, required: false
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // release_channel - computed: false, optional: true, required: false
  private _releaseChannel?: string; 
  public get releaseChannel() {
    return this.getStringAttribute('release_channel');
  }
  public set releaseChannel(value: string) {
    this._releaseChannel = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new DataprocMetastoreServiceEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: DataprocMetastoreServiceEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // hive_metastore_config - computed: false, optional: true, required: false
  private _hiveMetastoreConfig = new DataprocMetastoreServiceHiveMetastoreConfigOutputReference(this, "hive_metastore_config");
  public get hiveMetastoreConfig() {
    return this._hiveMetastoreConfig;
  }
  public putHiveMetastoreConfig(value: DataprocMetastoreServiceHiveMetastoreConfig) {
    this._hiveMetastoreConfig.internalValue = value;
  }
  public resetHiveMetastoreConfig() {
    this._hiveMetastoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveMetastoreConfigInput() {
    return this._hiveMetastoreConfig.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new DataprocMetastoreServiceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DataprocMetastoreServiceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocMetastoreServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocMetastoreServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_type: cdktf.stringToTerraform(this._databaseType),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      network: cdktf.stringToTerraform(this._network),
      port: cdktf.numberToTerraform(this._port),
      project: cdktf.stringToTerraform(this._project),
      release_channel: cdktf.stringToTerraform(this._releaseChannel),
      service_id: cdktf.stringToTerraform(this._serviceId),
      tier: cdktf.stringToTerraform(this._tier),
      encryption_config: dataprocMetastoreServiceEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      hive_metastore_config: dataprocMetastoreServiceHiveMetastoreConfigToTerraform(this._hiveMetastoreConfig.internalValue),
      maintenance_window: dataprocMetastoreServiceMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      timeouts: dataprocMetastoreServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
