/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocSessionTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#id DataprocSessionTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels to associate with this session template.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#labels DataprocSessionTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location in which the session template will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#location DataprocSessionTemplate#location}
  */
  readonly location?: string;
  /**
  * The resource name of the session template in the following format:
  * projects/{project}/locations/{location}/sessionTemplates/{template_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#name DataprocSessionTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#project DataprocSessionTemplate#project}
  */
  readonly project?: string;
  /**
  * environment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#environment_config DataprocSessionTemplate#environment_config}
  */
  readonly environmentConfig?: DataprocSessionTemplateEnvironmentConfig;
  /**
  * jupyter_session block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#jupyter_session DataprocSessionTemplate#jupyter_session}
  */
  readonly jupyterSession?: DataprocSessionTemplateJupyterSession;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#runtime_config DataprocSessionTemplate#runtime_config}
  */
  readonly runtimeConfig?: DataprocSessionTemplateRuntimeConfig;
  /**
  * spark_connect_session block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#spark_connect_session DataprocSessionTemplate#spark_connect_session}
  */
  readonly sparkConnectSession?: DataprocSessionTemplateSparkConnectSession;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#timeouts DataprocSessionTemplate#timeouts}
  */
  readonly timeouts?: DataprocSessionTemplateTimeouts;
}
export interface DataprocSessionTemplateEnvironmentConfigExecutionConfig {
  /**
  * The Cloud KMS key to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#kms_key DataprocSessionTemplate#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Tags used for network traffic control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#network_tags DataprocSessionTemplate#network_tags}
  */
  readonly networkTags?: string[];
  /**
  * Service account that used to execute workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#service_account DataprocSessionTemplate#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * A Cloud Storage bucket used to stage workload dependencies, config files, and store
  * workload output and other ephemeral data, such as Spark history files. If you do not specify a staging bucket,
  * Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
  * and then create and manage project-level, per-location staging and temporary buckets.
  * This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#staging_bucket DataprocSessionTemplate#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * Subnetwork configuration for workload execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#subnetwork_uri DataprocSessionTemplate#subnetwork_uri}
  */
  readonly subnetworkUri?: string;
  /**
  * The duration after which the workload will be terminated.
  * When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
  * work to finish. If ttl is not specified for a session workload, the workload will be allowed to run until it
  * exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
  * it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
  * Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
  * the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
  * when ttl has been exceeded, whichever occurs first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#ttl DataprocSessionTemplate#ttl}
  */
  readonly ttl?: string;
}

export function dataprocSessionTemplateEnvironmentConfigExecutionConfigToTerraform(struct?: DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference | DataprocSessionTemplateEnvironmentConfigExecutionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkTags),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    staging_bucket: cdktf.stringToTerraform(struct!.stagingBucket),
    subnetwork_uri: cdktf.stringToTerraform(struct!.subnetworkUri),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataprocSessionTemplateEnvironmentConfigExecutionConfigToHclTerraform(struct?: DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference | DataprocSessionTemplateEnvironmentConfigExecutionConfig): any {
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
    network_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    staging_bucket: {
      value: cdktf.stringToHclTerraform(struct!.stagingBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork_uri: {
      value: cdktf.stringToHclTerraform(struct!.subnetworkUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocSessionTemplateEnvironmentConfigExecutionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._networkTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._stagingBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingBucket = this._stagingBucket;
    }
    if (this._subnetworkUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworkUri = this._subnetworkUri;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocSessionTemplateEnvironmentConfigExecutionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
      this._networkTags = undefined;
      this._serviceAccount = undefined;
      this._stagingBucket = undefined;
      this._subnetworkUri = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
      this._networkTags = value.networkTags;
      this._serviceAccount = value.serviceAccount;
      this._stagingBucket = value.stagingBucket;
      this._subnetworkUri = value.subnetworkUri;
      this._ttl = value.ttl;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags?: string[]; 
  public get networkTags() {
    return this.getListAttribute('network_tags');
  }
  public set networkTags(value: string[]) {
    this._networkTags = value;
  }
  public resetNetworkTags() {
    this._networkTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // staging_bucket - computed: false, optional: true, required: false
  private _stagingBucket?: string; 
  public get stagingBucket() {
    return this.getStringAttribute('staging_bucket');
  }
  public set stagingBucket(value: string) {
    this._stagingBucket = value;
  }
  public resetStagingBucket() {
    this._stagingBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingBucketInput() {
    return this._stagingBucket;
  }

  // subnetwork_uri - computed: false, optional: true, required: false
  private _subnetworkUri?: string; 
  public get subnetworkUri() {
    return this.getStringAttribute('subnetwork_uri');
  }
  public set subnetworkUri(value: string) {
    this._subnetworkUri = value;
  }
  public resetSubnetworkUri() {
    this._subnetworkUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkUriInput() {
    return this._subnetworkUri;
  }

  // ttl - computed: true, optional: true, required: false
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
}
export interface DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig {
  /**
  * Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#dataproc_cluster DataprocSessionTemplate#dataproc_cluster}
  */
  readonly dataprocCluster?: string;
}

export function dataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToTerraform(struct?: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference | DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataproc_cluster: cdktf.stringToTerraform(struct!.dataprocCluster),
  }
}


export function dataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToHclTerraform(struct?: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference | DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataproc_cluster: {
      value: cdktf.stringToHclTerraform(struct!.dataprocCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocCluster = this._dataprocCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataprocCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataprocCluster = value.dataprocCluster;
    }
  }

  // dataproc_cluster - computed: false, optional: true, required: false
  private _dataprocCluster?: string; 
  public get dataprocCluster() {
    return this.getStringAttribute('dataproc_cluster');
  }
  public set dataprocCluster(value: string) {
    this._dataprocCluster = value;
  }
  public resetDataprocCluster() {
    this._dataprocCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocClusterInput() {
    return this._dataprocCluster;
  }
}
export interface DataprocSessionTemplateEnvironmentConfigPeripheralsConfig {
  /**
  * Resource name of an existing Dataproc Metastore service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#metastore_service DataprocSessionTemplate#metastore_service}
  */
  readonly metastoreService?: string;
  /**
  * spark_history_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#spark_history_server_config DataprocSessionTemplate#spark_history_server_config}
  */
  readonly sparkHistoryServerConfig?: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;
}

export function dataprocSessionTemplateEnvironmentConfigPeripheralsConfigToTerraform(struct?: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference | DataprocSessionTemplateEnvironmentConfigPeripheralsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metastore_service: cdktf.stringToTerraform(struct!.metastoreService),
    spark_history_server_config: dataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToTerraform(struct!.sparkHistoryServerConfig),
  }
}


export function dataprocSessionTemplateEnvironmentConfigPeripheralsConfigToHclTerraform(struct?: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference | DataprocSessionTemplateEnvironmentConfigPeripheralsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metastore_service: {
      value: cdktf.stringToHclTerraform(struct!.metastoreService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_history_server_config: {
      value: dataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToHclTerraform(struct!.sparkHistoryServerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocSessionTemplateEnvironmentConfigPeripheralsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metastoreService !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreService = this._metastoreService;
    }
    if (this._sparkHistoryServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkHistoryServerConfig = this._sparkHistoryServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocSessionTemplateEnvironmentConfigPeripheralsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metastoreService = undefined;
      this._sparkHistoryServerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metastoreService = value.metastoreService;
      this._sparkHistoryServerConfig.internalValue = value.sparkHistoryServerConfig;
    }
  }

  // metastore_service - computed: false, optional: true, required: false
  private _metastoreService?: string; 
  public get metastoreService() {
    return this.getStringAttribute('metastore_service');
  }
  public set metastoreService(value: string) {
    this._metastoreService = value;
  }
  public resetMetastoreService() {
    this._metastoreService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreServiceInput() {
    return this._metastoreService;
  }

  // spark_history_server_config - computed: false, optional: true, required: false
  private _sparkHistoryServerConfig = new DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(this, "spark_history_server_config");
  public get sparkHistoryServerConfig() {
    return this._sparkHistoryServerConfig;
  }
  public putSparkHistoryServerConfig(value: DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig) {
    this._sparkHistoryServerConfig.internalValue = value;
  }
  public resetSparkHistoryServerConfig() {
    this._sparkHistoryServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkHistoryServerConfigInput() {
    return this._sparkHistoryServerConfig.internalValue;
  }
}
export interface DataprocSessionTemplateEnvironmentConfig {
  /**
  * execution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#execution_config DataprocSessionTemplate#execution_config}
  */
  readonly executionConfig?: DataprocSessionTemplateEnvironmentConfigExecutionConfig;
  /**
  * peripherals_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#peripherals_config DataprocSessionTemplate#peripherals_config}
  */
  readonly peripheralsConfig?: DataprocSessionTemplateEnvironmentConfigPeripheralsConfig;
}

export function dataprocSessionTemplateEnvironmentConfigToTerraform(struct?: DataprocSessionTemplateEnvironmentConfigOutputReference | DataprocSessionTemplateEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_config: dataprocSessionTemplateEnvironmentConfigExecutionConfigToTerraform(struct!.executionConfig),
    peripherals_config: dataprocSessionTemplateEnvironmentConfigPeripheralsConfigToTerraform(struct!.peripheralsConfig),
  }
}


export function dataprocSessionTemplateEnvironmentConfigToHclTerraform(struct?: DataprocSessionTemplateEnvironmentConfigOutputReference | DataprocSessionTemplateEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_config: {
      value: dataprocSessionTemplateEnvironmentConfigExecutionConfigToHclTerraform(struct!.executionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocSessionTemplateEnvironmentConfigExecutionConfigList",
    },
    peripherals_config: {
      value: dataprocSessionTemplateEnvironmentConfigPeripheralsConfigToHclTerraform(struct!.peripheralsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocSessionTemplateEnvironmentConfigPeripheralsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocSessionTemplateEnvironmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocSessionTemplateEnvironmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionConfig = this._executionConfig?.internalValue;
    }
    if (this._peripheralsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peripheralsConfig = this._peripheralsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocSessionTemplateEnvironmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionConfig.internalValue = undefined;
      this._peripheralsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionConfig.internalValue = value.executionConfig;
      this._peripheralsConfig.internalValue = value.peripheralsConfig;
    }
  }

  // execution_config - computed: false, optional: true, required: false
  private _executionConfig = new DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference(this, "execution_config");
  public get executionConfig() {
    return this._executionConfig;
  }
  public putExecutionConfig(value: DataprocSessionTemplateEnvironmentConfigExecutionConfig) {
    this._executionConfig.internalValue = value;
  }
  public resetExecutionConfig() {
    this._executionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionConfigInput() {
    return this._executionConfig.internalValue;
  }

  // peripherals_config - computed: false, optional: true, required: false
  private _peripheralsConfig = new DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference(this, "peripherals_config");
  public get peripheralsConfig() {
    return this._peripheralsConfig;
  }
  public putPeripheralsConfig(value: DataprocSessionTemplateEnvironmentConfigPeripheralsConfig) {
    this._peripheralsConfig.internalValue = value;
  }
  public resetPeripheralsConfig() {
    this._peripheralsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peripheralsConfigInput() {
    return this._peripheralsConfig.internalValue;
  }
}
export interface DataprocSessionTemplateJupyterSession {
  /**
  * Display name, shown in the Jupyter kernelspec card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#display_name DataprocSessionTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#kernel DataprocSessionTemplate#kernel}
  */
  readonly kernel?: string;
}

export function dataprocSessionTemplateJupyterSessionToTerraform(struct?: DataprocSessionTemplateJupyterSessionOutputReference | DataprocSessionTemplateJupyterSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    kernel: cdktf.stringToTerraform(struct!.kernel),
  }
}


export function dataprocSessionTemplateJupyterSessionToHclTerraform(struct?: DataprocSessionTemplateJupyterSessionOutputReference | DataprocSessionTemplateJupyterSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel: {
      value: cdktf.stringToHclTerraform(struct!.kernel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocSessionTemplateJupyterSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocSessionTemplateJupyterSession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._kernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernel = this._kernel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocSessionTemplateJupyterSession | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._kernel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._kernel = value.kernel;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // kernel - computed: false, optional: true, required: false
  private _kernel?: string; 
  public get kernel() {
    return this.getStringAttribute('kernel');
  }
  public set kernel(value: string) {
    this._kernel = value;
  }
  public resetKernel() {
    this._kernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel;
  }
}
export interface DataprocSessionTemplateRuntimeConfig {
  /**
  * Optional custom container image for the job runtime environment. If not specified, a default container image will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#container_image DataprocSessionTemplate#container_image}
  */
  readonly containerImage?: string;
  /**
  * A mapping of property names to values, which are used to configure workload execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#properties DataprocSessionTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Version of the session runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#version DataprocSessionTemplate#version}
  */
  readonly version?: string;
}

export function dataprocSessionTemplateRuntimeConfigToTerraform(struct?: DataprocSessionTemplateRuntimeConfigOutputReference | DataprocSessionTemplateRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_image: cdktf.stringToTerraform(struct!.containerImage),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataprocSessionTemplateRuntimeConfigToHclTerraform(struct?: DataprocSessionTemplateRuntimeConfigOutputReference | DataprocSessionTemplateRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_image: {
      value: cdktf.stringToHclTerraform(struct!.containerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataprocSessionTemplateRuntimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocSessionTemplateRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImage = this._containerImage;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocSessionTemplateRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerImage = undefined;
      this._properties = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerImage = value.containerImage;
      this._properties = value.properties;
      this._version = value.version;
    }
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage?: string; 
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }
  public set containerImage(value: string) {
    this._containerImage = value;
  }
  public resetContainerImage() {
    this._containerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage;
  }

  // effective_properties - computed: true, optional: false, required: false
  private _effectiveProperties = new cdktf.StringMap(this, "effective_properties");
  public get effectiveProperties() {
    return this._effectiveProperties;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataprocSessionTemplateSparkConnectSession {
}

export function dataprocSessionTemplateSparkConnectSessionToTerraform(struct?: DataprocSessionTemplateSparkConnectSessionOutputReference | DataprocSessionTemplateSparkConnectSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataprocSessionTemplateSparkConnectSessionToHclTerraform(struct?: DataprocSessionTemplateSparkConnectSessionOutputReference | DataprocSessionTemplateSparkConnectSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataprocSessionTemplateSparkConnectSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocSessionTemplateSparkConnectSession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocSessionTemplateSparkConnectSession | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataprocSessionTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#create DataprocSessionTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#delete DataprocSessionTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#update DataprocSessionTemplate#update}
  */
  readonly update?: string;
}

export function dataprocSessionTemplateTimeoutsToTerraform(struct?: DataprocSessionTemplateTimeouts | cdktf.IResolvable): any {
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


export function dataprocSessionTemplateTimeoutsToHclTerraform(struct?: DataprocSessionTemplateTimeouts | cdktf.IResolvable): any {
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

export class DataprocSessionTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataprocSessionTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataprocSessionTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template google_dataproc_session_template}
*/
export class DataprocSessionTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_session_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataprocSessionTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataprocSessionTemplate to import
  * @param importFromId The id of the existing DataprocSessionTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataprocSessionTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataproc_session_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template google_dataproc_session_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocSessionTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocSessionTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_session_template',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.44.0',
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
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._environmentConfig.internalValue = config.environmentConfig;
    this._jupyterSession.internalValue = config.jupyterSession;
    this._runtimeConfig.internalValue = config.runtimeConfig;
    this._sparkConnectSession.internalValue = config.sparkConnectSession;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // environment_config - computed: false, optional: true, required: false
  private _environmentConfig = new DataprocSessionTemplateEnvironmentConfigOutputReference(this, "environment_config");
  public get environmentConfig() {
    return this._environmentConfig;
  }
  public putEnvironmentConfig(value: DataprocSessionTemplateEnvironmentConfig) {
    this._environmentConfig.internalValue = value;
  }
  public resetEnvironmentConfig() {
    this._environmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentConfigInput() {
    return this._environmentConfig.internalValue;
  }

  // jupyter_session - computed: false, optional: true, required: false
  private _jupyterSession = new DataprocSessionTemplateJupyterSessionOutputReference(this, "jupyter_session");
  public get jupyterSession() {
    return this._jupyterSession;
  }
  public putJupyterSession(value: DataprocSessionTemplateJupyterSession) {
    this._jupyterSession.internalValue = value;
  }
  public resetJupyterSession() {
    this._jupyterSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterSessionInput() {
    return this._jupyterSession.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new DataprocSessionTemplateRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: DataprocSessionTemplateRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }

  // spark_connect_session - computed: false, optional: true, required: false
  private _sparkConnectSession = new DataprocSessionTemplateSparkConnectSessionOutputReference(this, "spark_connect_session");
  public get sparkConnectSession() {
    return this._sparkConnectSession;
  }
  public putSparkConnectSession(value: DataprocSessionTemplateSparkConnectSession) {
    this._sparkConnectSession.internalValue = value;
  }
  public resetSparkConnectSession() {
    this._sparkConnectSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConnectSessionInput() {
    return this._sparkConnectSession.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocSessionTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocSessionTemplateTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      environment_config: dataprocSessionTemplateEnvironmentConfigToTerraform(this._environmentConfig.internalValue),
      jupyter_session: dataprocSessionTemplateJupyterSessionToTerraform(this._jupyterSession.internalValue),
      runtime_config: dataprocSessionTemplateRuntimeConfigToTerraform(this._runtimeConfig.internalValue),
      spark_connect_session: dataprocSessionTemplateSparkConnectSessionToTerraform(this._sparkConnectSession.internalValue),
      timeouts: dataprocSessionTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_config: {
        value: dataprocSessionTemplateEnvironmentConfigToHclTerraform(this._environmentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocSessionTemplateEnvironmentConfigList",
      },
      jupyter_session: {
        value: dataprocSessionTemplateJupyterSessionToHclTerraform(this._jupyterSession.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocSessionTemplateJupyterSessionList",
      },
      runtime_config: {
        value: dataprocSessionTemplateRuntimeConfigToHclTerraform(this._runtimeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocSessionTemplateRuntimeConfigList",
      },
      spark_connect_session: {
        value: dataprocSessionTemplateSparkConnectSessionToHclTerraform(this._sparkConnectSession.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocSessionTemplateSparkConnectSessionList",
      },
      timeouts: {
        value: dataprocSessionTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataprocSessionTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
