/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocMetastoreServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#database_type DataprocMetastoreService#database_type}
  */
  readonly databaseType?: string;
  /**
  * Indicates if the dataproc metastore should be protected against accidental deletions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#deletion_protection DataprocMetastoreService#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#id DataprocMetastoreService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the metastore service.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#labels DataprocMetastoreService#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the metastore service should reside.
  * The default value is 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#location DataprocMetastoreService#location}
  */
  readonly location?: string;
  /**
  * The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
  * 
  * "projects/{projectNumber}/global/networks/{network_id}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#network DataprocMetastoreService#network}
  */
  readonly network?: string;
  /**
  * The TCP port at which the metastore service is reached. Default: 9083.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#port DataprocMetastoreService#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#project DataprocMetastoreService#project}
  */
  readonly project?: string;
  /**
  * The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#release_channel DataprocMetastoreService#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
  * and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
  * 3 and 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#service_id DataprocMetastoreService#service_id}
  */
  readonly serviceId: string;
  /**
  * The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#tier DataprocMetastoreService#tier}
  */
  readonly tier?: string;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#encryption_config DataprocMetastoreService#encryption_config}
  */
  readonly encryptionConfig?: DataprocMetastoreServiceEncryptionConfig;
  /**
  * hive_metastore_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#hive_metastore_config DataprocMetastoreService#hive_metastore_config}
  */
  readonly hiveMetastoreConfig?: DataprocMetastoreServiceHiveMetastoreConfig;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#maintenance_window DataprocMetastoreService#maintenance_window}
  */
  readonly maintenanceWindow?: DataprocMetastoreServiceMaintenanceWindow;
  /**
  * metadata_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#metadata_integration DataprocMetastoreService#metadata_integration}
  */
  readonly metadataIntegration?: DataprocMetastoreServiceMetadataIntegration;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#network_config DataprocMetastoreService#network_config}
  */
  readonly networkConfig?: DataprocMetastoreServiceNetworkConfig;
  /**
  * scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#scaling_config DataprocMetastoreService#scaling_config}
  */
  readonly scalingConfig?: DataprocMetastoreServiceScalingConfig;
  /**
  * scheduled_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#scheduled_backup DataprocMetastoreService#scheduled_backup}
  */
  readonly scheduledBackup?: DataprocMetastoreServiceScheduledBackup;
  /**
  * telemetry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#telemetry_config DataprocMetastoreService#telemetry_config}
  */
  readonly telemetryConfig?: DataprocMetastoreServiceTelemetryConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#timeouts DataprocMetastoreService#timeouts}
  */
  readonly timeouts?: DataprocMetastoreServiceTimeouts;
}
export interface DataprocMetastoreServiceEncryptionConfig {
  /**
  * The fully qualified customer provided Cloud KMS key name to use for customer data encryption.
  * Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#kms_key DataprocMetastoreService#kms_key}
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


export function dataprocMetastoreServiceEncryptionConfigToHclTerraform(struct?: DataprocMetastoreServiceEncryptionConfigOutputReference | DataprocMetastoreServiceEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions {
  /**
  * A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides.
  * If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#config_overrides DataprocMetastoreService#config_overrides}
  */
  readonly configOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#key DataprocMetastoreService#key}
  */
  readonly key: string;
  /**
  * The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#version DataprocMetastoreService#version}
  */
  readonly version: string;
}

export function dataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsToTerraform(struct?: DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configOverrides),
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsToHclTerraform(struct?: DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configOverrides = undefined;
      this._key = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configOverrides = value.configOverrides;
      this._key = value.key;
      this._version = value.version;
    }
  }

  // config_overrides - computed: false, optional: true, required: false
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList extends cdktf.ComplexList {
  public internalValue? : DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[] | cdktf.IResolvable

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
  public get(index: number): DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference {
    return new DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab {
  /**
  * The relative resource name of a Secret Manager secret version, in the following form:
  * 
  * "projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#cloud_secret DataprocMetastoreService#cloud_secret}
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


export function dataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabToHclTerraform(struct?: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference | DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_secret: {
      value: cdktf.stringToHclTerraform(struct!.cloudSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#krb5_config_gcs_uri DataprocMetastoreService#krb5_config_gcs_uri}
  */
  readonly krb5ConfigGcsUri: string;
  /**
  * A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form "primary/instance@REALM", but there is no exact format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#principal DataprocMetastoreService#principal}
  */
  readonly principal: string;
  /**
  * keytab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#keytab DataprocMetastoreService#keytab}
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


export function dataprocMetastoreServiceHiveMetastoreConfigKerberosConfigToHclTerraform(struct?: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference | DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    krb5_config_gcs_uri: {
      value: cdktf.stringToHclTerraform(struct!.krb5ConfigGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keytab: {
      value: dataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabToHclTerraform(struct!.keytab),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * The mappings override system defaults (some keys cannot be overridden)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#config_overrides DataprocMetastoreService#config_overrides}
  */
  readonly configOverrides?: { [key: string]: string };
  /**
  * The protocol to use for the metastore service endpoint. If unspecified, defaults to 'THRIFT'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#endpoint_protocol DataprocMetastoreService#endpoint_protocol}
  */
  readonly endpointProtocol?: string;
  /**
  * The Hive metastore schema version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#version DataprocMetastoreService#version}
  */
  readonly version: string;
  /**
  * auxiliary_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#auxiliary_versions DataprocMetastoreService#auxiliary_versions}
  */
  readonly auxiliaryVersions?: DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[] | cdktf.IResolvable;
  /**
  * kerberos_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#kerberos_config DataprocMetastoreService#kerberos_config}
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
    endpoint_protocol: cdktf.stringToTerraform(struct!.endpointProtocol),
    version: cdktf.stringToTerraform(struct!.version),
    auxiliary_versions: cdktf.listMapper(dataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsToTerraform, true)(struct!.auxiliaryVersions),
    kerberos_config: dataprocMetastoreServiceHiveMetastoreConfigKerberosConfigToTerraform(struct!.kerberosConfig),
  }
}


export function dataprocMetastoreServiceHiveMetastoreConfigToHclTerraform(struct?: DataprocMetastoreServiceHiveMetastoreConfigOutputReference | DataprocMetastoreServiceHiveMetastoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    endpoint_protocol: {
      value: cdktf.stringToHclTerraform(struct!.endpointProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auxiliary_versions: {
      value: cdktf.listMapperHcl(dataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsToHclTerraform, true)(struct!.auxiliaryVersions),
      isBlock: true,
      type: "set",
      storageClassType: "DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList",
    },
    kerberos_config: {
      value: dataprocMetastoreServiceHiveMetastoreConfigKerberosConfigToHclTerraform(struct!.kerberosConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._endpointProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointProtocol = this._endpointProtocol;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._auxiliaryVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryVersions = this._auxiliaryVersions?.internalValue;
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
      this._endpointProtocol = undefined;
      this._version = undefined;
      this._auxiliaryVersions.internalValue = undefined;
      this._kerberosConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configOverrides = value.configOverrides;
      this._endpointProtocol = value.endpointProtocol;
      this._version = value.version;
      this._auxiliaryVersions.internalValue = value.auxiliaryVersions;
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

  // endpoint_protocol - computed: false, optional: true, required: false
  private _endpointProtocol?: string; 
  public get endpointProtocol() {
    return this.getStringAttribute('endpoint_protocol');
  }
  public set endpointProtocol(value: string) {
    this._endpointProtocol = value;
  }
  public resetEndpointProtocol() {
    this._endpointProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointProtocolInput() {
    return this._endpointProtocol;
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

  // auxiliary_versions - computed: false, optional: true, required: false
  private _auxiliaryVersions = new DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList(this, "auxiliary_versions", true);
  public get auxiliaryVersions() {
    return this._auxiliaryVersions;
  }
  public putAuxiliaryVersions(value: DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[] | cdktf.IResolvable) {
    this._auxiliaryVersions.internalValue = value;
  }
  public resetAuxiliaryVersions() {
    this._auxiliaryVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryVersionsInput() {
    return this._auxiliaryVersions.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#day_of_week DataprocMetastoreService#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * The hour of day (0-23) when the window starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#hour_of_day DataprocMetastoreService#hour_of_day}
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


export function dataprocMetastoreServiceMaintenanceWindowToHclTerraform(struct?: DataprocMetastoreServiceMaintenanceWindowOutputReference | DataprocMetastoreServiceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig {
  /**
  * Defines whether the metastore metadata should be synced to Data Catalog. The default value is to disable syncing metastore metadata to Data Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#enabled DataprocMetastoreService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataprocMetastoreServiceMetadataIntegrationDataCatalogConfigToTerraform(struct?: DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference | DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataprocMetastoreServiceMetadataIntegrationDataCatalogConfigToHclTerraform(struct?: DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference | DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig | undefined) {
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
export interface DataprocMetastoreServiceMetadataIntegration {
  /**
  * data_catalog_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#data_catalog_config DataprocMetastoreService#data_catalog_config}
  */
  readonly dataCatalogConfig: DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;
}

export function dataprocMetastoreServiceMetadataIntegrationToTerraform(struct?: DataprocMetastoreServiceMetadataIntegrationOutputReference | DataprocMetastoreServiceMetadataIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_catalog_config: dataprocMetastoreServiceMetadataIntegrationDataCatalogConfigToTerraform(struct!.dataCatalogConfig),
  }
}


export function dataprocMetastoreServiceMetadataIntegrationToHclTerraform(struct?: DataprocMetastoreServiceMetadataIntegrationOutputReference | DataprocMetastoreServiceMetadataIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_catalog_config: {
      value: dataprocMetastoreServiceMetadataIntegrationDataCatalogConfigToHclTerraform(struct!.dataCatalogConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceMetadataIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceMetadataIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCatalogConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCatalogConfig = this._dataCatalogConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceMetadataIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCatalogConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCatalogConfig.internalValue = value.dataCatalogConfig;
    }
  }

  // data_catalog_config - computed: false, optional: false, required: true
  private _dataCatalogConfig = new DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference(this, "data_catalog_config");
  public get dataCatalogConfig() {
    return this._dataCatalogConfig;
  }
  public putDataCatalogConfig(value: DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig) {
    this._dataCatalogConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogConfigInput() {
    return this._dataCatalogConfig.internalValue;
  }
}
export interface DataprocMetastoreServiceNetworkConfigConsumers {
  /**
  * The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint.
  * It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network.
  * There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:
  * 'projects/{projectNumber}/regions/{region_id}/subnetworks/{subnetwork_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#subnetwork DataprocMetastoreService#subnetwork}
  */
  readonly subnetwork: string;
}

export function dataprocMetastoreServiceNetworkConfigConsumersToTerraform(struct?: DataprocMetastoreServiceNetworkConfigConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function dataprocMetastoreServiceNetworkConfigConsumersToHclTerraform(struct?: DataprocMetastoreServiceNetworkConfigConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceNetworkConfigConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataprocMetastoreServiceNetworkConfigConsumers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceNetworkConfigConsumers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetwork = value.subnetwork;
    }
  }

  // endpoint_uri - computed: true, optional: false, required: false
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
  }

  // subnetwork - computed: false, optional: false, required: true
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}

export class DataprocMetastoreServiceNetworkConfigConsumersList extends cdktf.ComplexList {
  public internalValue? : DataprocMetastoreServiceNetworkConfigConsumers[] | cdktf.IResolvable

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
  public get(index: number): DataprocMetastoreServiceNetworkConfigConsumersOutputReference {
    return new DataprocMetastoreServiceNetworkConfigConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocMetastoreServiceNetworkConfig {
  /**
  * consumers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#consumers DataprocMetastoreService#consumers}
  */
  readonly consumers: DataprocMetastoreServiceNetworkConfigConsumers[] | cdktf.IResolvable;
}

export function dataprocMetastoreServiceNetworkConfigToTerraform(struct?: DataprocMetastoreServiceNetworkConfigOutputReference | DataprocMetastoreServiceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumers: cdktf.listMapper(dataprocMetastoreServiceNetworkConfigConsumersToTerraform, true)(struct!.consumers),
  }
}


export function dataprocMetastoreServiceNetworkConfigToHclTerraform(struct?: DataprocMetastoreServiceNetworkConfigOutputReference | DataprocMetastoreServiceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumers: {
      value: cdktf.listMapperHcl(dataprocMetastoreServiceNetworkConfigConsumersToHclTerraform, true)(struct!.consumers),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocMetastoreServiceNetworkConfigConsumersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumers = this._consumers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumers.internalValue = value.consumers;
    }
  }

  // consumers - computed: false, optional: false, required: true
  private _consumers = new DataprocMetastoreServiceNetworkConfigConsumersList(this, "consumers", false);
  public get consumers() {
    return this._consumers;
  }
  public putConsumers(value: DataprocMetastoreServiceNetworkConfigConsumers[] | cdktf.IResolvable) {
    this._consumers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumersInput() {
    return this._consumers.internalValue;
  }
}
export interface DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig {
  /**
  * The maximum scaling factor that the service will autoscale to. The default value is 6.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#max_scaling_factor DataprocMetastoreService#max_scaling_factor}
  */
  readonly maxScalingFactor?: number;
  /**
  * The minimum scaling factor that the service will autoscale to. The default value is 0.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#min_scaling_factor DataprocMetastoreService#min_scaling_factor}
  */
  readonly minScalingFactor?: number;
}

export function dataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigToTerraform(struct?: DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference | DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_scaling_factor: cdktf.numberToTerraform(struct!.maxScalingFactor),
    min_scaling_factor: cdktf.numberToTerraform(struct!.minScalingFactor),
  }
}


export function dataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigToHclTerraform(struct?: DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference | DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_scaling_factor: {
      value: cdktf.numberToHclTerraform(struct!.maxScalingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_scaling_factor: {
      value: cdktf.numberToHclTerraform(struct!.minScalingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxScalingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScalingFactor = this._maxScalingFactor;
    }
    if (this._minScalingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScalingFactor = this._minScalingFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxScalingFactor = undefined;
      this._minScalingFactor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxScalingFactor = value.maxScalingFactor;
      this._minScalingFactor = value.minScalingFactor;
    }
  }

  // max_scaling_factor - computed: true, optional: true, required: false
  private _maxScalingFactor?: number; 
  public get maxScalingFactor() {
    return this.getNumberAttribute('max_scaling_factor');
  }
  public set maxScalingFactor(value: number) {
    this._maxScalingFactor = value;
  }
  public resetMaxScalingFactor() {
    this._maxScalingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScalingFactorInput() {
    return this._maxScalingFactor;
  }

  // min_scaling_factor - computed: true, optional: true, required: false
  private _minScalingFactor?: number; 
  public get minScalingFactor() {
    return this.getNumberAttribute('min_scaling_factor');
  }
  public set minScalingFactor(value: number) {
    this._minScalingFactor = value;
  }
  public resetMinScalingFactor() {
    this._minScalingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minScalingFactorInput() {
    return this._minScalingFactor;
  }
}
export interface DataprocMetastoreServiceScalingConfigAutoscalingConfig {
  /**
  * Defines whether autoscaling is enabled. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#autoscaling_enabled DataprocMetastoreService#autoscaling_enabled}
  */
  readonly autoscalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * limit_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#limit_config DataprocMetastoreService#limit_config}
  */
  readonly limitConfig?: DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig;
}

export function dataprocMetastoreServiceScalingConfigAutoscalingConfigToTerraform(struct?: DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference | DataprocMetastoreServiceScalingConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_enabled: cdktf.booleanToTerraform(struct!.autoscalingEnabled),
    limit_config: dataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigToTerraform(struct!.limitConfig),
  }
}


export function dataprocMetastoreServiceScalingConfigAutoscalingConfigToHclTerraform(struct?: DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference | DataprocMetastoreServiceScalingConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoscalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_config: {
      value: dataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigToHclTerraform(struct!.limitConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceScalingConfigAutoscalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingEnabled = this._autoscalingEnabled;
    }
    if (this._limitConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitConfig = this._limitConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceScalingConfigAutoscalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingEnabled = undefined;
      this._limitConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingEnabled = value.autoscalingEnabled;
      this._limitConfig.internalValue = value.limitConfig;
    }
  }

  // autoscaling_enabled - computed: false, optional: true, required: false
  private _autoscalingEnabled?: boolean | cdktf.IResolvable; 
  public get autoscalingEnabled() {
    return this.getBooleanAttribute('autoscaling_enabled');
  }
  public set autoscalingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscalingEnabled = value;
  }
  public resetAutoscalingEnabled() {
    this._autoscalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingEnabledInput() {
    return this._autoscalingEnabled;
  }

  // autoscaling_factor - computed: true, optional: false, required: false
  public get autoscalingFactor() {
    return this.getNumberAttribute('autoscaling_factor');
  }

  // limit_config - computed: false, optional: true, required: false
  private _limitConfig = new DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference(this, "limit_config");
  public get limitConfig() {
    return this._limitConfig;
  }
  public putLimitConfig(value: DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig) {
    this._limitConfig.internalValue = value;
  }
  public resetLimitConfig() {
    this._limitConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitConfigInput() {
    return this._limitConfig.internalValue;
  }
}
export interface DataprocMetastoreServiceScalingConfig {
  /**
  * Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#instance_size DataprocMetastoreService#instance_size}
  */
  readonly instanceSize?: string;
  /**
  * Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#scaling_factor DataprocMetastoreService#scaling_factor}
  */
  readonly scalingFactor?: number;
  /**
  * autoscaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#autoscaling_config DataprocMetastoreService#autoscaling_config}
  */
  readonly autoscalingConfig?: DataprocMetastoreServiceScalingConfigAutoscalingConfig;
}

export function dataprocMetastoreServiceScalingConfigToTerraform(struct?: DataprocMetastoreServiceScalingConfigOutputReference | DataprocMetastoreServiceScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_size: cdktf.stringToTerraform(struct!.instanceSize),
    scaling_factor: cdktf.numberToTerraform(struct!.scalingFactor),
    autoscaling_config: dataprocMetastoreServiceScalingConfigAutoscalingConfigToTerraform(struct!.autoscalingConfig),
  }
}


export function dataprocMetastoreServiceScalingConfigToHclTerraform(struct?: DataprocMetastoreServiceScalingConfigOutputReference | DataprocMetastoreServiceScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_size: {
      value: cdktf.stringToHclTerraform(struct!.instanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_factor: {
      value: cdktf.numberToHclTerraform(struct!.scalingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscaling_config: {
      value: dataprocMetastoreServiceScalingConfigAutoscalingConfigToHclTerraform(struct!.autoscalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocMetastoreServiceScalingConfigAutoscalingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSize = this._instanceSize;
    }
    if (this._scalingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingFactor = this._scalingFactor;
    }
    if (this._autoscalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingConfig = this._autoscalingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceSize = undefined;
      this._scalingFactor = undefined;
      this._autoscalingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceSize = value.instanceSize;
      this._scalingFactor = value.scalingFactor;
      this._autoscalingConfig.internalValue = value.autoscalingConfig;
    }
  }

  // instance_size - computed: false, optional: true, required: false
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  public resetInstanceSize() {
    this._instanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // scaling_factor - computed: false, optional: true, required: false
  private _scalingFactor?: number; 
  public get scalingFactor() {
    return this.getNumberAttribute('scaling_factor');
  }
  public set scalingFactor(value: number) {
    this._scalingFactor = value;
  }
  public resetScalingFactor() {
    this._scalingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingFactorInput() {
    return this._scalingFactor;
  }

  // autoscaling_config - computed: false, optional: true, required: false
  private _autoscalingConfig = new DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference(this, "autoscaling_config");
  public get autoscalingConfig() {
    return this._autoscalingConfig;
  }
  public putAutoscalingConfig(value: DataprocMetastoreServiceScalingConfigAutoscalingConfig) {
    this._autoscalingConfig.internalValue = value;
  }
  public resetAutoscalingConfig() {
    this._autoscalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigInput() {
    return this._autoscalingConfig.internalValue;
  }
}
export interface DataprocMetastoreServiceScheduledBackup {
  /**
  * A Cloud Storage URI of a folder, in the format gs://<bucket_name>/<path_inside_bucket>. A sub-folder <backup_folder> containing backup files will be stored below it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#backup_location DataprocMetastoreService#backup_location}
  */
  readonly backupLocation: string;
  /**
  * The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#cron_schedule DataprocMetastoreService#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Defines whether the scheduled backup is enabled. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#enabled DataprocMetastoreService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), e.g. America/Los_Angeles or Africa/Abidjan. If left unspecified, the default is UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#time_zone DataprocMetastoreService#time_zone}
  */
  readonly timeZone?: string;
}

export function dataprocMetastoreServiceScheduledBackupToTerraform(struct?: DataprocMetastoreServiceScheduledBackupOutputReference | DataprocMetastoreServiceScheduledBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_location: cdktf.stringToTerraform(struct!.backupLocation),
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function dataprocMetastoreServiceScheduledBackupToHclTerraform(struct?: DataprocMetastoreServiceScheduledBackupOutputReference | DataprocMetastoreServiceScheduledBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_location: {
      value: cdktf.stringToHclTerraform(struct!.backupLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceScheduledBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceScheduledBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupLocation = this._backupLocation;
    }
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceScheduledBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupLocation = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupLocation = value.backupLocation;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._timeZone = value.timeZone;
    }
  }

  // backup_location - computed: false, optional: false, required: true
  private _backupLocation?: string; 
  public get backupLocation() {
    return this.getStringAttribute('backup_location');
  }
  public set backupLocation(value: string) {
    this._backupLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLocationInput() {
    return this._backupLocation;
  }

  // cron_schedule - computed: false, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface DataprocMetastoreServiceTelemetryConfig {
  /**
  * The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#log_format DataprocMetastoreService#log_format}
  */
  readonly logFormat?: string;
}

export function dataprocMetastoreServiceTelemetryConfigToTerraform(struct?: DataprocMetastoreServiceTelemetryConfigOutputReference | DataprocMetastoreServiceTelemetryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_format: cdktf.stringToTerraform(struct!.logFormat),
  }
}


export function dataprocMetastoreServiceTelemetryConfigToHclTerraform(struct?: DataprocMetastoreServiceTelemetryConfigOutputReference | DataprocMetastoreServiceTelemetryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceTelemetryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocMetastoreServiceTelemetryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocMetastoreServiceTelemetryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logFormat = value.logFormat;
    }
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }
}
export interface DataprocMetastoreServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#create DataprocMetastoreService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#delete DataprocMetastoreService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#update DataprocMetastoreService#update}
  */
  readonly update?: string;
}

export function dataprocMetastoreServiceTimeoutsToTerraform(struct?: DataprocMetastoreServiceTimeouts | cdktf.IResolvable): any {
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


export function dataprocMetastoreServiceTimeoutsToHclTerraform(struct?: DataprocMetastoreServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocMetastoreServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service google_dataproc_metastore_service}
*/
export class DataprocMetastoreService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_metastore_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataprocMetastoreService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataprocMetastoreService to import
  * @param importFromId The id of the existing DataprocMetastoreService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataprocMetastoreService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataproc_metastore_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/dataproc_metastore_service google_dataproc_metastore_service} Resource
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
        providerVersion: '6.41.0',
        providerVersionConstraint: '~> 6.0'
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
    this._deletionProtection = config.deletionProtection;
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
    this._metadataIntegration.internalValue = config.metadataIntegration;
    this._networkConfig.internalValue = config.networkConfig;
    this._scalingConfig.internalValue = config.scalingConfig;
    this._scheduledBackup.internalValue = config.scheduledBackup;
    this._telemetryConfig.internalValue = config.telemetryConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_gcs_uri - computed: true, optional: false, required: false
  public get artifactGcsUri() {
    return this.getStringAttribute('artifact_gcs_uri');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
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

  // metadata_integration - computed: false, optional: true, required: false
  private _metadataIntegration = new DataprocMetastoreServiceMetadataIntegrationOutputReference(this, "metadata_integration");
  public get metadataIntegration() {
    return this._metadataIntegration;
  }
  public putMetadataIntegration(value: DataprocMetastoreServiceMetadataIntegration) {
    this._metadataIntegration.internalValue = value;
  }
  public resetMetadataIntegration() {
    this._metadataIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataIntegrationInput() {
    return this._metadataIntegration.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new DataprocMetastoreServiceNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: DataprocMetastoreServiceNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // scaling_config - computed: false, optional: true, required: false
  private _scalingConfig = new DataprocMetastoreServiceScalingConfigOutputReference(this, "scaling_config");
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: DataprocMetastoreServiceScalingConfig) {
    this._scalingConfig.internalValue = value;
  }
  public resetScalingConfig() {
    this._scalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // scheduled_backup - computed: false, optional: true, required: false
  private _scheduledBackup = new DataprocMetastoreServiceScheduledBackupOutputReference(this, "scheduled_backup");
  public get scheduledBackup() {
    return this._scheduledBackup;
  }
  public putScheduledBackup(value: DataprocMetastoreServiceScheduledBackup) {
    this._scheduledBackup.internalValue = value;
  }
  public resetScheduledBackup() {
    this._scheduledBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledBackupInput() {
    return this._scheduledBackup.internalValue;
  }

  // telemetry_config - computed: false, optional: true, required: false
  private _telemetryConfig = new DataprocMetastoreServiceTelemetryConfigOutputReference(this, "telemetry_config");
  public get telemetryConfig() {
    return this._telemetryConfig;
  }
  public putTelemetryConfig(value: DataprocMetastoreServiceTelemetryConfig) {
    this._telemetryConfig.internalValue = value;
  }
  public resetTelemetryConfig() {
    this._telemetryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryConfigInput() {
    return this._telemetryConfig.internalValue;
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
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
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
      metadata_integration: dataprocMetastoreServiceMetadataIntegrationToTerraform(this._metadataIntegration.internalValue),
      network_config: dataprocMetastoreServiceNetworkConfigToTerraform(this._networkConfig.internalValue),
      scaling_config: dataprocMetastoreServiceScalingConfigToTerraform(this._scalingConfig.internalValue),
      scheduled_backup: dataprocMetastoreServiceScheduledBackupToTerraform(this._scheduledBackup.internalValue),
      telemetry_config: dataprocMetastoreServiceTelemetryConfigToTerraform(this._telemetryConfig.internalValue),
      timeouts: dataprocMetastoreServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_channel: {
        value: cdktf.stringToHclTerraform(this._releaseChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_config: {
        value: dataprocMetastoreServiceEncryptionConfigToHclTerraform(this._encryptionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocMetastoreServiceEncryptionConfigList",
      },
      hive_metastore_config: {
        value: dataprocMetastoreServiceHiveMetastoreConfigToHclTerraform(this._hiveMetastoreConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocMetastoreServiceHiveMetastoreConfigList",
      },
      maintenance_window: {
        value: dataprocMetastoreServiceMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocMetastoreServiceMaintenanceWindowList",
      },
      metadata_integration: {
        value: dataprocMetastoreServiceMetadataIntegrationToHclTerraform(this._metadataIntegration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocMetastoreServiceMetadataIntegrationList",
      },
      network_config: {
        value: dataprocMetastoreServiceNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocMetastoreServiceNetworkConfigList",
      },
      scaling_config: {
        value: dataprocMetastoreServiceScalingConfigToHclTerraform(this._scalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocMetastoreServiceScalingConfigList",
      },
      scheduled_backup: {
        value: dataprocMetastoreServiceScheduledBackupToHclTerraform(this._scheduledBackup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocMetastoreServiceScheduledBackupList",
      },
      telemetry_config: {
        value: dataprocMetastoreServiceTelemetryConfigToHclTerraform(this._telemetryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocMetastoreServiceTelemetryConfigList",
      },
      timeouts: {
        value: dataprocMetastoreServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataprocMetastoreServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
