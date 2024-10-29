// https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocBatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID to use for the batch, which will become the final component of the batch's resource name.
  * This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#batch_id DataprocBatch#batch_id}
  */
  readonly batchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#id DataprocBatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels to associate with this batch.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#labels DataprocBatch#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location in which the batch will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#location DataprocBatch#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#project DataprocBatch#project}
  */
  readonly project?: string;
  /**
  * environment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#environment_config DataprocBatch#environment_config}
  */
  readonly environmentConfig?: DataprocBatchEnvironmentConfig;
  /**
  * pyspark_batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#pyspark_batch DataprocBatch#pyspark_batch}
  */
  readonly pysparkBatch?: DataprocBatchPysparkBatch;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#runtime_config DataprocBatch#runtime_config}
  */
  readonly runtimeConfig?: DataprocBatchRuntimeConfig;
  /**
  * spark_batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#spark_batch DataprocBatch#spark_batch}
  */
  readonly sparkBatch?: DataprocBatchSparkBatch;
  /**
  * spark_r_batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#spark_r_batch DataprocBatch#spark_r_batch}
  */
  readonly sparkRBatch?: DataprocBatchSparkRBatch;
  /**
  * spark_sql_batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#spark_sql_batch DataprocBatch#spark_sql_batch}
  */
  readonly sparkSqlBatch?: DataprocBatchSparkSqlBatch;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#timeouts DataprocBatch#timeouts}
  */
  readonly timeouts?: DataprocBatchTimeouts;
}
export interface DataprocBatchRuntimeInfoApproximateUsage {
}

export function dataprocBatchRuntimeInfoApproximateUsageToTerraform(struct?: DataprocBatchRuntimeInfoApproximateUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataprocBatchRuntimeInfoApproximateUsageToHclTerraform(struct?: DataprocBatchRuntimeInfoApproximateUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataprocBatchRuntimeInfoApproximateUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataprocBatchRuntimeInfoApproximateUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocBatchRuntimeInfoApproximateUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_type - computed: true, optional: false, required: false
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }

  // milli_accelerator_seconds - computed: true, optional: false, required: false
  public get milliAcceleratorSeconds() {
    return this.getStringAttribute('milli_accelerator_seconds');
  }

  // milli_dcu_seconds - computed: true, optional: false, required: false
  public get milliDcuSeconds() {
    return this.getStringAttribute('milli_dcu_seconds');
  }

  // shuffle_storage_gb_seconds - computed: true, optional: false, required: false
  public get shuffleStorageGbSeconds() {
    return this.getStringAttribute('shuffle_storage_gb_seconds');
  }
}

export class DataprocBatchRuntimeInfoApproximateUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataprocBatchRuntimeInfoApproximateUsageOutputReference {
    return new DataprocBatchRuntimeInfoApproximateUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocBatchRuntimeInfoCurrentUsage {
}

export function dataprocBatchRuntimeInfoCurrentUsageToTerraform(struct?: DataprocBatchRuntimeInfoCurrentUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataprocBatchRuntimeInfoCurrentUsageToHclTerraform(struct?: DataprocBatchRuntimeInfoCurrentUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataprocBatchRuntimeInfoCurrentUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataprocBatchRuntimeInfoCurrentUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocBatchRuntimeInfoCurrentUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_type - computed: true, optional: false, required: false
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }

  // milli_accelerator - computed: true, optional: false, required: false
  public get milliAccelerator() {
    return this.getStringAttribute('milli_accelerator');
  }

  // milli_dcu - computed: true, optional: false, required: false
  public get milliDcu() {
    return this.getStringAttribute('milli_dcu');
  }

  // milli_dcu_premium - computed: true, optional: false, required: false
  public get milliDcuPremium() {
    return this.getStringAttribute('milli_dcu_premium');
  }

  // shuffle_storage_gb - computed: true, optional: false, required: false
  public get shuffleStorageGb() {
    return this.getStringAttribute('shuffle_storage_gb');
  }

  // shuffle_storage_gb_premium - computed: true, optional: false, required: false
  public get shuffleStorageGbPremium() {
    return this.getStringAttribute('shuffle_storage_gb_premium');
  }

  // snapshot_time - computed: true, optional: false, required: false
  public get snapshotTime() {
    return this.getStringAttribute('snapshot_time');
  }
}

export class DataprocBatchRuntimeInfoCurrentUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataprocBatchRuntimeInfoCurrentUsageOutputReference {
    return new DataprocBatchRuntimeInfoCurrentUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocBatchRuntimeInfo {
}

export function dataprocBatchRuntimeInfoToTerraform(struct?: DataprocBatchRuntimeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataprocBatchRuntimeInfoToHclTerraform(struct?: DataprocBatchRuntimeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataprocBatchRuntimeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataprocBatchRuntimeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocBatchRuntimeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approximate_usage - computed: true, optional: false, required: false
  private _approximateUsage = new DataprocBatchRuntimeInfoApproximateUsageList(this, "approximate_usage", false);
  public get approximateUsage() {
    return this._approximateUsage;
  }

  // current_usage - computed: true, optional: false, required: false
  private _currentUsage = new DataprocBatchRuntimeInfoCurrentUsageList(this, "current_usage", false);
  public get currentUsage() {
    return this._currentUsage;
  }

  // diagnostic_output_uri - computed: true, optional: false, required: false
  public get diagnosticOutputUri() {
    return this.getStringAttribute('diagnostic_output_uri');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new cdktf.StringMap(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

  // output_uri - computed: true, optional: false, required: false
  public get outputUri() {
    return this.getStringAttribute('output_uri');
  }
}

export class DataprocBatchRuntimeInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataprocBatchRuntimeInfoOutputReference {
    return new DataprocBatchRuntimeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocBatchStateHistory {
}

export function dataprocBatchStateHistoryToTerraform(struct?: DataprocBatchStateHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataprocBatchStateHistoryToHclTerraform(struct?: DataprocBatchStateHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataprocBatchStateHistoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataprocBatchStateHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocBatchStateHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // state_start_time - computed: true, optional: false, required: false
  public get stateStartTime() {
    return this.getStringAttribute('state_start_time');
  }
}

export class DataprocBatchStateHistoryList extends cdktf.ComplexList {

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
  public get(index: number): DataprocBatchStateHistoryOutputReference {
    return new DataprocBatchStateHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocBatchEnvironmentConfigExecutionConfig {
  /**
  * The Cloud KMS key to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#kms_key DataprocBatch#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Tags used for network traffic control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#network_tags DataprocBatch#network_tags}
  */
  readonly networkTags?: string[];
  /**
  * Network configuration for workload execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#network_uri DataprocBatch#network_uri}
  */
  readonly networkUri?: string;
  /**
  * Service account that used to execute workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#service_account DataprocBatch#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * A Cloud Storage bucket used to stage workload dependencies, config files, and store
  * workload output and other ephemeral data, such as Spark history files. If you do not specify a staging bucket,
  * Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
  * and then create and manage project-level, per-location staging and temporary buckets.
  * This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#staging_bucket DataprocBatch#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * Subnetwork configuration for workload execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#subnetwork_uri DataprocBatch#subnetwork_uri}
  */
  readonly subnetworkUri?: string;
  /**
  * The duration after which the workload will be terminated.
  * When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
  * work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it
  * exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
  * it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
  * Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
  * the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
  * when ttl has been exceeded, whichever occurs first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#ttl DataprocBatch#ttl}
  */
  readonly ttl?: string;
}

export function dataprocBatchEnvironmentConfigExecutionConfigToTerraform(struct?: DataprocBatchEnvironmentConfigExecutionConfigOutputReference | DataprocBatchEnvironmentConfigExecutionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkTags),
    network_uri: cdktf.stringToTerraform(struct!.networkUri),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    staging_bucket: cdktf.stringToTerraform(struct!.stagingBucket),
    subnetwork_uri: cdktf.stringToTerraform(struct!.subnetworkUri),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataprocBatchEnvironmentConfigExecutionConfigToHclTerraform(struct?: DataprocBatchEnvironmentConfigExecutionConfigOutputReference | DataprocBatchEnvironmentConfigExecutionConfig): any {
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
    network_uri: {
      value: cdktf.stringToHclTerraform(struct!.networkUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataprocBatchEnvironmentConfigExecutionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocBatchEnvironmentConfigExecutionConfig | undefined {
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
    if (this._networkUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUri = this._networkUri;
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

  public set internalValue(value: DataprocBatchEnvironmentConfigExecutionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
      this._networkTags = undefined;
      this._networkUri = undefined;
      this._serviceAccount = undefined;
      this._stagingBucket = undefined;
      this._subnetworkUri = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
      this._networkTags = value.networkTags;
      this._networkUri = value.networkUri;
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

  // network_uri - computed: false, optional: true, required: false
  private _networkUri?: string; 
  public get networkUri() {
    return this.getStringAttribute('network_uri');
  }
  public set networkUri(value: string) {
    this._networkUri = value;
  }
  public resetNetworkUri() {
    this._networkUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUriInput() {
    return this._networkUri;
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
export interface DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig {
  /**
  * Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#dataproc_cluster DataprocBatch#dataproc_cluster}
  */
  readonly dataprocCluster?: string;
}

export function dataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToTerraform(struct?: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference | DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataproc_cluster: cdktf.stringToTerraform(struct!.dataprocCluster),
  }
}


export function dataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToHclTerraform(struct?: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference | DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig): any {
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

export class DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocCluster = this._dataprocCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig | undefined) {
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
export interface DataprocBatchEnvironmentConfigPeripheralsConfig {
  /**
  * Resource name of an existing Dataproc Metastore service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#metastore_service DataprocBatch#metastore_service}
  */
  readonly metastoreService?: string;
  /**
  * spark_history_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#spark_history_server_config DataprocBatch#spark_history_server_config}
  */
  readonly sparkHistoryServerConfig?: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;
}

export function dataprocBatchEnvironmentConfigPeripheralsConfigToTerraform(struct?: DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference | DataprocBatchEnvironmentConfigPeripheralsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metastore_service: cdktf.stringToTerraform(struct!.metastoreService),
    spark_history_server_config: dataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToTerraform(struct!.sparkHistoryServerConfig),
  }
}


export function dataprocBatchEnvironmentConfigPeripheralsConfigToHclTerraform(struct?: DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference | DataprocBatchEnvironmentConfigPeripheralsConfig): any {
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
      value: dataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToHclTerraform(struct!.sparkHistoryServerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocBatchEnvironmentConfigPeripheralsConfig | undefined {
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

  public set internalValue(value: DataprocBatchEnvironmentConfigPeripheralsConfig | undefined) {
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
  private _sparkHistoryServerConfig = new DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(this, "spark_history_server_config");
  public get sparkHistoryServerConfig() {
    return this._sparkHistoryServerConfig;
  }
  public putSparkHistoryServerConfig(value: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig) {
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
export interface DataprocBatchEnvironmentConfig {
  /**
  * execution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#execution_config DataprocBatch#execution_config}
  */
  readonly executionConfig?: DataprocBatchEnvironmentConfigExecutionConfig;
  /**
  * peripherals_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#peripherals_config DataprocBatch#peripherals_config}
  */
  readonly peripheralsConfig?: DataprocBatchEnvironmentConfigPeripheralsConfig;
}

export function dataprocBatchEnvironmentConfigToTerraform(struct?: DataprocBatchEnvironmentConfigOutputReference | DataprocBatchEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_config: dataprocBatchEnvironmentConfigExecutionConfigToTerraform(struct!.executionConfig),
    peripherals_config: dataprocBatchEnvironmentConfigPeripheralsConfigToTerraform(struct!.peripheralsConfig),
  }
}


export function dataprocBatchEnvironmentConfigToHclTerraform(struct?: DataprocBatchEnvironmentConfigOutputReference | DataprocBatchEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_config: {
      value: dataprocBatchEnvironmentConfigExecutionConfigToHclTerraform(struct!.executionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocBatchEnvironmentConfigExecutionConfigList",
    },
    peripherals_config: {
      value: dataprocBatchEnvironmentConfigPeripheralsConfigToHclTerraform(struct!.peripheralsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocBatchEnvironmentConfigPeripheralsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocBatchEnvironmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocBatchEnvironmentConfig | undefined {
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

  public set internalValue(value: DataprocBatchEnvironmentConfig | undefined) {
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
  private _executionConfig = new DataprocBatchEnvironmentConfigExecutionConfigOutputReference(this, "execution_config");
  public get executionConfig() {
    return this._executionConfig;
  }
  public putExecutionConfig(value: DataprocBatchEnvironmentConfigExecutionConfig) {
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
  private _peripheralsConfig = new DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference(this, "peripherals_config");
  public get peripheralsConfig() {
    return this._peripheralsConfig;
  }
  public putPeripheralsConfig(value: DataprocBatchEnvironmentConfigPeripheralsConfig) {
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
export interface DataprocBatchPysparkBatch {
  /**
  * HCFS URIs of archives to be extracted into the working directory of each executor.
  * Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * The arguments to pass to the driver. Do not include arguments that can be set as batch
  * properties, such as --conf, since a collision can occur that causes an incorrect batch submission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#args DataprocBatch#args}
  */
  readonly args?: string[];
  /**
  * HCFS URIs of files to be placed in the working directory of each executor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#main_python_file_uri DataprocBatch#main_python_file_uri}
  */
  readonly mainPythonFileUri?: string;
  /**
  * HCFS file URIs of Python files to pass to the PySpark framework.
  * Supported file types: .py, .egg, and .zip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#python_file_uris DataprocBatch#python_file_uris}
  */
  readonly pythonFileUris?: string[];
}

export function dataprocBatchPysparkBatchToTerraform(struct?: DataprocBatchPysparkBatchOutputReference | DataprocBatchPysparkBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    main_python_file_uri: cdktf.stringToTerraform(struct!.mainPythonFileUri),
    python_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pythonFileUris),
  }
}


export function dataprocBatchPysparkBatchToHclTerraform(struct?: DataprocBatchPysparkBatchOutputReference | DataprocBatchPysparkBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar_file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jarFileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    main_python_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.mainPythonFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    python_file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pythonFileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocBatchPysparkBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocBatchPysparkBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._mainPythonFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainPythonFileUri = this._mainPythonFileUri;
    }
    if (this._pythonFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonFileUris = this._pythonFileUris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocBatchPysparkBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._args = undefined;
      this._fileUris = undefined;
      this._jarFileUris = undefined;
      this._mainPythonFileUri = undefined;
      this._pythonFileUris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._args = value.args;
      this._fileUris = value.fileUris;
      this._jarFileUris = value.jarFileUris;
      this._mainPythonFileUri = value.mainPythonFileUri;
      this._pythonFileUris = value.pythonFileUris;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[]; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[]) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[]; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[]) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris;
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
  }

  // main_python_file_uri - computed: false, optional: true, required: false
  private _mainPythonFileUri?: string; 
  public get mainPythonFileUri() {
    return this.getStringAttribute('main_python_file_uri');
  }
  public set mainPythonFileUri(value: string) {
    this._mainPythonFileUri = value;
  }
  public resetMainPythonFileUri() {
    this._mainPythonFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainPythonFileUriInput() {
    return this._mainPythonFileUri;
  }

  // python_file_uris - computed: false, optional: true, required: false
  private _pythonFileUris?: string[]; 
  public get pythonFileUris() {
    return this.getListAttribute('python_file_uris');
  }
  public set pythonFileUris(value: string[]) {
    this._pythonFileUris = value;
  }
  public resetPythonFileUris() {
    this._pythonFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFileUrisInput() {
    return this._pythonFileUris;
  }
}
export interface DataprocBatchRuntimeConfig {
  /**
  * Optional custom container image for the job runtime environment. If not specified, a default container image will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#container_image DataprocBatch#container_image}
  */
  readonly containerImage?: string;
  /**
  * A mapping of property names to values, which are used to configure workload execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#properties DataprocBatch#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Version of the batch runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#version DataprocBatch#version}
  */
  readonly version?: string;
}

export function dataprocBatchRuntimeConfigToTerraform(struct?: DataprocBatchRuntimeConfigOutputReference | DataprocBatchRuntimeConfig): any {
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


export function dataprocBatchRuntimeConfigToHclTerraform(struct?: DataprocBatchRuntimeConfigOutputReference | DataprocBatchRuntimeConfig): any {
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

export class DataprocBatchRuntimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocBatchRuntimeConfig | undefined {
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

  public set internalValue(value: DataprocBatchRuntimeConfig | undefined) {
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

  // version - computed: true, optional: true, required: false
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
export interface DataprocBatchSparkBatch {
  /**
  * HCFS URIs of archives to be extracted into the working directory of each executor.
  * Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * The arguments to pass to the driver. Do not include arguments that can be set as batch
  * properties, such as --conf, since a collision can occur that causes an incorrect batch submission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#args DataprocBatch#args}
  */
  readonly args?: string[];
  /**
  * HCFS URIs of files to be placed in the working directory of each executor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The name of the driver main class. The jar file that contains the class must be in the
  * classpath or specified in jarFileUris.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#main_class DataprocBatch#main_class}
  */
  readonly mainClass?: string;
  /**
  * The HCFS URI of the jar file that contains the main class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#main_jar_file_uri DataprocBatch#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
}

export function dataprocBatchSparkBatchToTerraform(struct?: DataprocBatchSparkBatchOutputReference | DataprocBatchSparkBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
  }
}


export function dataprocBatchSparkBatchToHclTerraform(struct?: DataprocBatchSparkBatchOutputReference | DataprocBatchSparkBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar_file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jarFileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    main_class: {
      value: cdktf.stringToHclTerraform(struct!.mainClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_jar_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.mainJarFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocBatchSparkBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocBatchSparkBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._mainClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass;
    }
    if (this._mainJarFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainJarFileUri = this._mainJarFileUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocBatchSparkBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._args = undefined;
      this._fileUris = undefined;
      this._jarFileUris = undefined;
      this._mainClass = undefined;
      this._mainJarFileUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._args = value.args;
      this._fileUris = value.fileUris;
      this._jarFileUris = value.jarFileUris;
      this._mainClass = value.mainClass;
      this._mainJarFileUri = value.mainJarFileUri;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[]; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[]) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[]; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[]) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris;
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
  }

  // main_class - computed: false, optional: true, required: false
  private _mainClass?: string; 
  public get mainClass() {
    return this.getStringAttribute('main_class');
  }
  public set mainClass(value: string) {
    this._mainClass = value;
  }
  public resetMainClass() {
    this._mainClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassInput() {
    return this._mainClass;
  }

  // main_jar_file_uri - computed: false, optional: true, required: false
  private _mainJarFileUri?: string; 
  public get mainJarFileUri() {
    return this.getStringAttribute('main_jar_file_uri');
  }
  public set mainJarFileUri(value: string) {
    this._mainJarFileUri = value;
  }
  public resetMainJarFileUri() {
    this._mainJarFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainJarFileUriInput() {
    return this._mainJarFileUri;
  }
}
export interface DataprocBatchSparkRBatch {
  /**
  * HCFS URIs of archives to be extracted into the working directory of each executor.
  * Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * The arguments to pass to the driver. Do not include arguments that can be set as batch
  * properties, such as --conf, since a collision can occur that causes an incorrect batch submission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#args DataprocBatch#args}
  */
  readonly args?: string[];
  /**
  * HCFS URIs of files to be placed in the working directory of each executor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * The HCFS URI of the main R file to use as the driver. Must be a .R or .r file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#main_r_file_uri DataprocBatch#main_r_file_uri}
  */
  readonly mainRFileUri?: string;
}

export function dataprocBatchSparkRBatchToTerraform(struct?: DataprocBatchSparkRBatchOutputReference | DataprocBatchSparkRBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    main_r_file_uri: cdktf.stringToTerraform(struct!.mainRFileUri),
  }
}


export function dataprocBatchSparkRBatchToHclTerraform(struct?: DataprocBatchSparkRBatchOutputReference | DataprocBatchSparkRBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    main_r_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.mainRFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocBatchSparkRBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocBatchSparkRBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._mainRFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainRFileUri = this._mainRFileUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocBatchSparkRBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._args = undefined;
      this._fileUris = undefined;
      this._mainRFileUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._args = value.args;
      this._fileUris = value.fileUris;
      this._mainRFileUri = value.mainRFileUri;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[]; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[]) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[]; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[]) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris;
  }

  // main_r_file_uri - computed: false, optional: true, required: false
  private _mainRFileUri?: string; 
  public get mainRFileUri() {
    return this.getStringAttribute('main_r_file_uri');
  }
  public set mainRFileUri(value: string) {
    this._mainRFileUri = value;
  }
  public resetMainRFileUri() {
    this._mainRFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainRFileUriInput() {
    return this._mainRFileUri;
  }
}
export interface DataprocBatchSparkSqlBatch {
  /**
  * HCFS URIs of jar files to be added to the Spark CLASSPATH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The HCFS URI of the script that contains Spark SQL queries to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#query_file_uri DataprocBatch#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#query_variables DataprocBatch#query_variables}
  */
  readonly queryVariables?: { [key: string]: string };
}

export function dataprocBatchSparkSqlBatchToTerraform(struct?: DataprocBatchSparkSqlBatchOutputReference | DataprocBatchSparkSqlBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryVariables),
  }
}


export function dataprocBatchSparkSqlBatchToHclTerraform(struct?: DataprocBatchSparkSqlBatchOutputReference | DataprocBatchSparkSqlBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jar_file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jarFileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.queryFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocBatchSparkSqlBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocBatchSparkSqlBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._queryFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFileUri = this._queryFileUri;
    }
    if (this._queryVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryVariables = this._queryVariables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocBatchSparkSqlBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jarFileUris = undefined;
      this._queryFileUri = undefined;
      this._queryVariables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jarFileUris = value.jarFileUris;
      this._queryFileUri = value.queryFileUri;
      this._queryVariables = value.queryVariables;
    }
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
  }

  // query_file_uri - computed: false, optional: true, required: false
  private _queryFileUri?: string; 
  public get queryFileUri() {
    return this.getStringAttribute('query_file_uri');
  }
  public set queryFileUri(value: string) {
    this._queryFileUri = value;
  }
  public resetQueryFileUri() {
    this._queryFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFileUriInput() {
    return this._queryFileUri;
  }

  // query_variables - computed: false, optional: true, required: false
  private _queryVariables?: { [key: string]: string }; 
  public get queryVariables() {
    return this.getStringMapAttribute('query_variables');
  }
  public set queryVariables(value: { [key: string]: string }) {
    this._queryVariables = value;
  }
  public resetQueryVariables() {
    this._queryVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryVariablesInput() {
    return this._queryVariables;
  }
}
export interface DataprocBatchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#create DataprocBatch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#delete DataprocBatch#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#update DataprocBatch#update}
  */
  readonly update?: string;
}

export function dataprocBatchTimeoutsToTerraform(struct?: DataprocBatchTimeouts | cdktf.IResolvable): any {
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


export function dataprocBatchTimeoutsToHclTerraform(struct?: DataprocBatchTimeouts | cdktf.IResolvable): any {
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

export class DataprocBatchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataprocBatchTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataprocBatchTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch google_dataproc_batch}
*/
export class DataprocBatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_batch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataprocBatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataprocBatch to import
  * @param importFromId The id of the existing DataprocBatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataprocBatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataproc_batch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/dataproc_batch google_dataproc_batch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocBatchConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataprocBatchConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_batch',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.9.0',
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
    this._batchId = config.batchId;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._environmentConfig.internalValue = config.environmentConfig;
    this._pysparkBatch.internalValue = config.pysparkBatch;
    this._runtimeConfig.internalValue = config.runtimeConfig;
    this._sparkBatch.internalValue = config.sparkBatch;
    this._sparkRBatch.internalValue = config.sparkRBatch;
    this._sparkSqlBatch.internalValue = config.sparkSqlBatch;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_id - computed: false, optional: true, required: false
  private _batchId?: string; 
  public get batchId() {
    return this.getStringAttribute('batch_id');
  }
  public set batchId(value: string) {
    this._batchId = value;
  }
  public resetBatchId() {
    this._batchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchIdInput() {
    return this._batchId;
  }

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
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

  // runtime_info - computed: true, optional: false, required: false
  private _runtimeInfo = new DataprocBatchRuntimeInfoList(this, "runtime_info", false);
  public get runtimeInfo() {
    return this._runtimeInfo;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_history - computed: true, optional: false, required: false
  private _stateHistory = new DataprocBatchStateHistoryList(this, "state_history", false);
  public get stateHistory() {
    return this._stateHistory;
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // state_time - computed: true, optional: false, required: false
  public get stateTime() {
    return this.getStringAttribute('state_time');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // environment_config - computed: false, optional: true, required: false
  private _environmentConfig = new DataprocBatchEnvironmentConfigOutputReference(this, "environment_config");
  public get environmentConfig() {
    return this._environmentConfig;
  }
  public putEnvironmentConfig(value: DataprocBatchEnvironmentConfig) {
    this._environmentConfig.internalValue = value;
  }
  public resetEnvironmentConfig() {
    this._environmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentConfigInput() {
    return this._environmentConfig.internalValue;
  }

  // pyspark_batch - computed: false, optional: true, required: false
  private _pysparkBatch = new DataprocBatchPysparkBatchOutputReference(this, "pyspark_batch");
  public get pysparkBatch() {
    return this._pysparkBatch;
  }
  public putPysparkBatch(value: DataprocBatchPysparkBatch) {
    this._pysparkBatch.internalValue = value;
  }
  public resetPysparkBatch() {
    this._pysparkBatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pysparkBatchInput() {
    return this._pysparkBatch.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new DataprocBatchRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: DataprocBatchRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }

  // spark_batch - computed: false, optional: true, required: false
  private _sparkBatch = new DataprocBatchSparkBatchOutputReference(this, "spark_batch");
  public get sparkBatch() {
    return this._sparkBatch;
  }
  public putSparkBatch(value: DataprocBatchSparkBatch) {
    this._sparkBatch.internalValue = value;
  }
  public resetSparkBatch() {
    this._sparkBatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkBatchInput() {
    return this._sparkBatch.internalValue;
  }

  // spark_r_batch - computed: false, optional: true, required: false
  private _sparkRBatch = new DataprocBatchSparkRBatchOutputReference(this, "spark_r_batch");
  public get sparkRBatch() {
    return this._sparkRBatch;
  }
  public putSparkRBatch(value: DataprocBatchSparkRBatch) {
    this._sparkRBatch.internalValue = value;
  }
  public resetSparkRBatch() {
    this._sparkRBatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkRBatchInput() {
    return this._sparkRBatch.internalValue;
  }

  // spark_sql_batch - computed: false, optional: true, required: false
  private _sparkSqlBatch = new DataprocBatchSparkSqlBatchOutputReference(this, "spark_sql_batch");
  public get sparkSqlBatch() {
    return this._sparkSqlBatch;
  }
  public putSparkSqlBatch(value: DataprocBatchSparkSqlBatch) {
    this._sparkSqlBatch.internalValue = value;
  }
  public resetSparkSqlBatch() {
    this._sparkSqlBatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSqlBatchInput() {
    return this._sparkSqlBatch.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocBatchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocBatchTimeouts) {
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
      batch_id: cdktf.stringToTerraform(this._batchId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      environment_config: dataprocBatchEnvironmentConfigToTerraform(this._environmentConfig.internalValue),
      pyspark_batch: dataprocBatchPysparkBatchToTerraform(this._pysparkBatch.internalValue),
      runtime_config: dataprocBatchRuntimeConfigToTerraform(this._runtimeConfig.internalValue),
      spark_batch: dataprocBatchSparkBatchToTerraform(this._sparkBatch.internalValue),
      spark_r_batch: dataprocBatchSparkRBatchToTerraform(this._sparkRBatch.internalValue),
      spark_sql_batch: dataprocBatchSparkSqlBatchToTerraform(this._sparkSqlBatch.internalValue),
      timeouts: dataprocBatchTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batch_id: {
        value: cdktf.stringToHclTerraform(this._batchId),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_config: {
        value: dataprocBatchEnvironmentConfigToHclTerraform(this._environmentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocBatchEnvironmentConfigList",
      },
      pyspark_batch: {
        value: dataprocBatchPysparkBatchToHclTerraform(this._pysparkBatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocBatchPysparkBatchList",
      },
      runtime_config: {
        value: dataprocBatchRuntimeConfigToHclTerraform(this._runtimeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocBatchRuntimeConfigList",
      },
      spark_batch: {
        value: dataprocBatchSparkBatchToHclTerraform(this._sparkBatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocBatchSparkBatchList",
      },
      spark_r_batch: {
        value: dataprocBatchSparkRBatchToHclTerraform(this._sparkRBatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocBatchSparkRBatchList",
      },
      spark_sql_batch: {
        value: dataprocBatchSparkSqlBatchToHclTerraform(this._sparkSqlBatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocBatchSparkSqlBatchList",
      },
      timeouts: {
        value: dataprocBatchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataprocBatchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
