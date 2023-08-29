/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlloydbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the alloydb cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#cluster_id AlloydbCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * User-settable and human-readable display name for the Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#display_name AlloydbCluster#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#id AlloydbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the alloydb cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#labels AlloydbCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the alloydb cluster should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#location AlloydbCluster#location}
  */
  readonly location: string;
  /**
  * The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#network AlloydbCluster#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#project AlloydbCluster#project}
  */
  readonly project?: string;
  /**
  * automated_backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#automated_backup_policy AlloydbCluster#automated_backup_policy}
  */
  readonly automatedBackupPolicy?: AlloydbClusterAutomatedBackupPolicy;
  /**
  * continuous_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#continuous_backup_config AlloydbCluster#continuous_backup_config}
  */
  readonly continuousBackupConfig?: AlloydbClusterContinuousBackupConfig;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}
  */
  readonly encryptionConfig?: AlloydbClusterEncryptionConfig;
  /**
  * initial_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#initial_user AlloydbCluster#initial_user}
  */
  readonly initialUser?: AlloydbClusterInitialUser;
  /**
  * restore_backup_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#restore_backup_source AlloydbCluster#restore_backup_source}
  */
  readonly restoreBackupSource?: AlloydbClusterRestoreBackupSource;
  /**
  * restore_continuous_backup_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#restore_continuous_backup_source AlloydbCluster#restore_continuous_backup_source}
  */
  readonly restoreContinuousBackupSource?: AlloydbClusterRestoreContinuousBackupSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#timeouts AlloydbCluster#timeouts}
  */
  readonly timeouts?: AlloydbClusterTimeouts;
}
export interface AlloydbClusterBackupSource {
}

export function alloydbClusterBackupSourceToTerraform(struct?: AlloydbClusterBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AlloydbClusterBackupSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlloydbClusterBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_name - computed: true, optional: false, required: false
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
}

export class AlloydbClusterBackupSourceList extends cdktf.ComplexList {

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
  public get(index: number): AlloydbClusterBackupSourceOutputReference {
    return new AlloydbClusterBackupSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterContinuousBackupInfoEncryptionInfo {
}

export function alloydbClusterContinuousBackupInfoEncryptionInfoToTerraform(struct?: AlloydbClusterContinuousBackupInfoEncryptionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlloydbClusterContinuousBackupInfoEncryptionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterContinuousBackupInfoEncryptionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key_versions - computed: true, optional: false, required: false
  public get kmsKeyVersions() {
    return this.getListAttribute('kms_key_versions');
  }
}

export class AlloydbClusterContinuousBackupInfoEncryptionInfoList extends cdktf.ComplexList {

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
  public get(index: number): AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference {
    return new AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterContinuousBackupInfo {
}

export function alloydbClusterContinuousBackupInfoToTerraform(struct?: AlloydbClusterContinuousBackupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AlloydbClusterContinuousBackupInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlloydbClusterContinuousBackupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterContinuousBackupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // earliest_restorable_time - computed: true, optional: false, required: false
  public get earliestRestorableTime() {
    return this.getStringAttribute('earliest_restorable_time');
  }

  // enabled_time - computed: true, optional: false, required: false
  public get enabledTime() {
    return this.getStringAttribute('enabled_time');
  }

  // encryption_info - computed: true, optional: false, required: false
  private _encryptionInfo = new AlloydbClusterContinuousBackupInfoEncryptionInfoList(this, "encryption_info", false);
  public get encryptionInfo() {
    return this._encryptionInfo;
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getListAttribute('schedule');
  }
}

export class AlloydbClusterContinuousBackupInfoList extends cdktf.ComplexList {

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
  public get(index: number): AlloydbClusterContinuousBackupInfoOutputReference {
    return new AlloydbClusterContinuousBackupInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterEncryptionInfo {
}

export function alloydbClusterEncryptionInfoToTerraform(struct?: AlloydbClusterEncryptionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AlloydbClusterEncryptionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlloydbClusterEncryptionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterEncryptionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key_versions - computed: true, optional: false, required: false
  public get kmsKeyVersions() {
    return this.getListAttribute('kms_key_versions');
  }
}

export class AlloydbClusterEncryptionInfoList extends cdktf.ComplexList {

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
  public get(index: number): AlloydbClusterEncryptionInfoOutputReference {
    return new AlloydbClusterEncryptionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterMigrationSource {
}

export function alloydbClusterMigrationSourceToTerraform(struct?: AlloydbClusterMigrationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AlloydbClusterMigrationSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlloydbClusterMigrationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterMigrationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class AlloydbClusterMigrationSourceList extends cdktf.ComplexList {

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
  public get(index: number): AlloydbClusterMigrationSourceOutputReference {
    return new AlloydbClusterMigrationSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterAutomatedBackupPolicyEncryptionConfig {
  /**
  * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function alloydbClusterAutomatedBackupPolicyEncryptionConfigToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference | AlloydbClusterAutomatedBackupPolicyEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterAutomatedBackupPolicyEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicyEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention {
  /**
  * The number of backups to retain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#count AlloydbCluster#count}
  */
  readonly count?: number;
}

export function alloydbClusterAutomatedBackupPolicyQuantityBasedRetentionToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference | AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export class AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface AlloydbClusterAutomatedBackupPolicyTimeBasedRetention {
  /**
  * The retention period.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#retention_period AlloydbCluster#retention_period}
  */
  readonly retentionPeriod?: string;
}

export function alloydbClusterAutomatedBackupPolicyTimeBasedRetentionToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference | AlloydbClusterAutomatedBackupPolicyTimeBasedRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_period: cdktf.stringToTerraform(struct!.retentionPeriod),
  }
}

export class AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterAutomatedBackupPolicyTimeBasedRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}
export interface AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#hours AlloydbCluster#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#minutes AlloydbCluster#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#nanos AlloydbCluster#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#seconds AlloydbCluster#seconds}
  */
  readonly seconds?: number;
}

export function alloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}

export class AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList extends cdktf.ComplexList {
  public internalValue? : AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[] | cdktf.IResolvable

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
  public get(index: number): AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference {
    return new AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbClusterAutomatedBackupPolicyWeeklySchedule {
  /**
  * The days of the week to perform a backup. At least one day of the week must be provided. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#days_of_week AlloydbCluster#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * start_times block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#start_times AlloydbCluster#start_times}
  */
  readonly startTimes: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[] | cdktf.IResolvable;
}

export function alloydbClusterAutomatedBackupPolicyWeeklyScheduleToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference | AlloydbClusterAutomatedBackupPolicyWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    start_times: cdktf.listMapper(alloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesToTerraform, true)(struct!.startTimes),
  }
}

export class AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterAutomatedBackupPolicyWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._startTimes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimes = this._startTimes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicyWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._startTimes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._startTimes.internalValue = value.startTimes;
    }
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // start_times - computed: false, optional: false, required: true
  private _startTimes = new AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList(this, "start_times", false);
  public get startTimes() {
    return this._startTimes;
  }
  public putStartTimes(value: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[] | cdktf.IResolvable) {
    this._startTimes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimesInput() {
    return this._startTimes.internalValue;
  }
}
export interface AlloydbClusterAutomatedBackupPolicy {
  /**
  * The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed.

The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#backup_window AlloydbCluster#backup_window}
  */
  readonly backupWindow?: string;
  /**
  * Whether automated backups are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#enabled AlloydbCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Labels to apply to backups created using this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#labels AlloydbCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#location AlloydbCluster#location}
  */
  readonly location?: string;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}
  */
  readonly encryptionConfig?: AlloydbClusterAutomatedBackupPolicyEncryptionConfig;
  /**
  * quantity_based_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#quantity_based_retention AlloydbCluster#quantity_based_retention}
  */
  readonly quantityBasedRetention?: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention;
  /**
  * time_based_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#time_based_retention AlloydbCluster#time_based_retention}
  */
  readonly timeBasedRetention?: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#weekly_schedule AlloydbCluster#weekly_schedule}
  */
  readonly weeklySchedule?: AlloydbClusterAutomatedBackupPolicyWeeklySchedule;
}

export function alloydbClusterAutomatedBackupPolicyToTerraform(struct?: AlloydbClusterAutomatedBackupPolicyOutputReference | AlloydbClusterAutomatedBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_window: cdktf.stringToTerraform(struct!.backupWindow),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    location: cdktf.stringToTerraform(struct!.location),
    encryption_config: alloydbClusterAutomatedBackupPolicyEncryptionConfigToTerraform(struct!.encryptionConfig),
    quantity_based_retention: alloydbClusterAutomatedBackupPolicyQuantityBasedRetentionToTerraform(struct!.quantityBasedRetention),
    time_based_retention: alloydbClusterAutomatedBackupPolicyTimeBasedRetentionToTerraform(struct!.timeBasedRetention),
    weekly_schedule: alloydbClusterAutomatedBackupPolicyWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}

export class AlloydbClusterAutomatedBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterAutomatedBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindow = this._backupWindow;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._quantityBasedRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityBasedRetention = this._quantityBasedRetention?.internalValue;
    }
    if (this._timeBasedRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedRetention = this._timeBasedRetention?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterAutomatedBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupWindow = undefined;
      this._enabled = undefined;
      this._labels = undefined;
      this._location = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._quantityBasedRetention.internalValue = undefined;
      this._timeBasedRetention.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupWindow = value.backupWindow;
      this._enabled = value.enabled;
      this._labels = value.labels;
      this._location = value.location;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._quantityBasedRetention.internalValue = value.quantityBasedRetention;
      this._timeBasedRetention.internalValue = value.timeBasedRetention;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // backup_window - computed: true, optional: true, required: false
  private _backupWindow?: string; 
  public get backupWindow() {
    return this.getStringAttribute('backup_window');
  }
  public set backupWindow(value: string) {
    this._backupWindow = value;
  }
  public resetBackupWindow() {
    this._backupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowInput() {
    return this._backupWindow;
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

  // location - computed: true, optional: true, required: false
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

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: AlloydbClusterAutomatedBackupPolicyEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // quantity_based_retention - computed: false, optional: true, required: false
  private _quantityBasedRetention = new AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference(this, "quantity_based_retention");
  public get quantityBasedRetention() {
    return this._quantityBasedRetention;
  }
  public putQuantityBasedRetention(value: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention) {
    this._quantityBasedRetention.internalValue = value;
  }
  public resetQuantityBasedRetention() {
    this._quantityBasedRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityBasedRetentionInput() {
    return this._quantityBasedRetention.internalValue;
  }

  // time_based_retention - computed: false, optional: true, required: false
  private _timeBasedRetention = new AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference(this, "time_based_retention");
  public get timeBasedRetention() {
    return this._timeBasedRetention;
  }
  public putTimeBasedRetention(value: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention) {
    this._timeBasedRetention.internalValue = value;
  }
  public resetTimeBasedRetention() {
    this._timeBasedRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedRetentionInput() {
    return this._timeBasedRetention.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: AlloydbClusterAutomatedBackupPolicyWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}
export interface AlloydbClusterContinuousBackupConfigEncryptionConfig {
  /**
  * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function alloydbClusterContinuousBackupConfigEncryptionConfigToTerraform(struct?: AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference | AlloydbClusterContinuousBackupConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterContinuousBackupConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterContinuousBackupConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface AlloydbClusterContinuousBackupConfig {
  /**
  * Whether continuous backup recovery is enabled. If not set, defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#enabled AlloydbCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The numbers of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window.

If not set, defaults to 14 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#recovery_window_days AlloydbCluster#recovery_window_days}
  */
  readonly recoveryWindowDays?: number;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}
  */
  readonly encryptionConfig?: AlloydbClusterContinuousBackupConfigEncryptionConfig;
}

export function alloydbClusterContinuousBackupConfigToTerraform(struct?: AlloydbClusterContinuousBackupConfigOutputReference | AlloydbClusterContinuousBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    recovery_window_days: cdktf.numberToTerraform(struct!.recoveryWindowDays),
    encryption_config: alloydbClusterContinuousBackupConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
  }
}

export class AlloydbClusterContinuousBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterContinuousBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._recoveryWindowDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindowDays = this._recoveryWindowDays;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterContinuousBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._recoveryWindowDays = undefined;
      this._encryptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._recoveryWindowDays = value.recoveryWindowDays;
      this._encryptionConfig.internalValue = value.encryptionConfig;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // recovery_window_days - computed: true, optional: true, required: false
  private _recoveryWindowDays?: number; 
  public get recoveryWindowDays() {
    return this.getNumberAttribute('recovery_window_days');
  }
  public set recoveryWindowDays(value: number) {
    this._recoveryWindowDays = value;
  }
  public resetRecoveryWindowDays() {
    this._recoveryWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowDaysInput() {
    return this._recoveryWindowDays;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: AlloydbClusterContinuousBackupConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }
}
export interface AlloydbClusterEncryptionConfig {
  /**
  * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function alloydbClusterEncryptionConfigToTerraform(struct?: AlloydbClusterEncryptionConfigOutputReference | AlloydbClusterEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class AlloydbClusterEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface AlloydbClusterInitialUser {
  /**
  * The initial password for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#password AlloydbCluster#password}
  */
  readonly password: string;
  /**
  * The database username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#user AlloydbCluster#user}
  */
  readonly user?: string;
}

export function alloydbClusterInitialUserToTerraform(struct?: AlloydbClusterInitialUserOutputReference | AlloydbClusterInitialUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class AlloydbClusterInitialUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterInitialUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterInitialUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._user = value.user;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface AlloydbClusterRestoreBackupSource {
  /**
  * The name of the backup that this cluster is restored from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#backup_name AlloydbCluster#backup_name}
  */
  readonly backupName: string;
}

export function alloydbClusterRestoreBackupSourceToTerraform(struct?: AlloydbClusterRestoreBackupSourceOutputReference | AlloydbClusterRestoreBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_name: cdktf.stringToTerraform(struct!.backupName),
  }
}

export class AlloydbClusterRestoreBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterRestoreBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupName = this._backupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterRestoreBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupName = value.backupName;
    }
  }

  // backup_name - computed: false, optional: false, required: true
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
  }
}
export interface AlloydbClusterRestoreContinuousBackupSource {
  /**
  * The name of the source cluster that this cluster is restored from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#cluster AlloydbCluster#cluster}
  */
  readonly cluster: string;
  /**
  * The point in time that this cluster is restored to, in RFC 3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#point_in_time AlloydbCluster#point_in_time}
  */
  readonly pointInTime: string;
}

export function alloydbClusterRestoreContinuousBackupSourceToTerraform(struct?: AlloydbClusterRestoreContinuousBackupSourceOutputReference | AlloydbClusterRestoreContinuousBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    point_in_time: cdktf.stringToTerraform(struct!.pointInTime),
  }
}

export class AlloydbClusterRestoreContinuousBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbClusterRestoreContinuousBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._pointInTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTime = this._pointInTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbClusterRestoreContinuousBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._pointInTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._pointInTime = value.pointInTime;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // point_in_time - computed: false, optional: false, required: true
  private _pointInTime?: string; 
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }
  public set pointInTime(value: string) {
    this._pointInTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeInput() {
    return this._pointInTime;
  }
}
export interface AlloydbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#create AlloydbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#delete AlloydbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster#update AlloydbCluster#update}
  */
  readonly update?: string;
}

export function alloydbClusterTimeoutsToTerraform(struct?: AlloydbClusterTimeouts | cdktf.IResolvable): any {
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

export class AlloydbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlloydbClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlloydbClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster google_alloydb_cluster}
*/
export class AlloydbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_alloydb_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/alloydb_cluster google_alloydb_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlloydbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AlloydbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_alloydb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.80.0',
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
    this._clusterId = config.clusterId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._network = config.network;
    this._project = config.project;
    this._automatedBackupPolicy.internalValue = config.automatedBackupPolicy;
    this._continuousBackupConfig.internalValue = config.continuousBackupConfig;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._initialUser.internalValue = config.initialUser;
    this._restoreBackupSource.internalValue = config.restoreBackupSource;
    this._restoreContinuousBackupSource.internalValue = config.restoreContinuousBackupSource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_source - computed: true, optional: false, required: false
  private _backupSource = new AlloydbClusterBackupSourceList(this, "backup_source", false);
  public get backupSource() {
    return this._backupSource;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // continuous_backup_info - computed: true, optional: false, required: false
  private _continuousBackupInfo = new AlloydbClusterContinuousBackupInfoList(this, "continuous_backup_info", false);
  public get continuousBackupInfo() {
    return this._continuousBackupInfo;
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
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

  // encryption_info - computed: true, optional: false, required: false
  private _encryptionInfo = new AlloydbClusterEncryptionInfoList(this, "encryption_info", false);
  public get encryptionInfo() {
    return this._encryptionInfo;
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

  // migration_source - computed: true, optional: false, required: false
  private _migrationSource = new AlloydbClusterMigrationSourceList(this, "migration_source", false);
  public get migrationSource() {
    return this._migrationSource;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // automated_backup_policy - computed: false, optional: true, required: false
  private _automatedBackupPolicy = new AlloydbClusterAutomatedBackupPolicyOutputReference(this, "automated_backup_policy");
  public get automatedBackupPolicy() {
    return this._automatedBackupPolicy;
  }
  public putAutomatedBackupPolicy(value: AlloydbClusterAutomatedBackupPolicy) {
    this._automatedBackupPolicy.internalValue = value;
  }
  public resetAutomatedBackupPolicy() {
    this._automatedBackupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedBackupPolicyInput() {
    return this._automatedBackupPolicy.internalValue;
  }

  // continuous_backup_config - computed: false, optional: true, required: false
  private _continuousBackupConfig = new AlloydbClusterContinuousBackupConfigOutputReference(this, "continuous_backup_config");
  public get continuousBackupConfig() {
    return this._continuousBackupConfig;
  }
  public putContinuousBackupConfig(value: AlloydbClusterContinuousBackupConfig) {
    this._continuousBackupConfig.internalValue = value;
  }
  public resetContinuousBackupConfig() {
    this._continuousBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousBackupConfigInput() {
    return this._continuousBackupConfig.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new AlloydbClusterEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: AlloydbClusterEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // initial_user - computed: false, optional: true, required: false
  private _initialUser = new AlloydbClusterInitialUserOutputReference(this, "initial_user");
  public get initialUser() {
    return this._initialUser;
  }
  public putInitialUser(value: AlloydbClusterInitialUser) {
    this._initialUser.internalValue = value;
  }
  public resetInitialUser() {
    this._initialUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialUserInput() {
    return this._initialUser.internalValue;
  }

  // restore_backup_source - computed: false, optional: true, required: false
  private _restoreBackupSource = new AlloydbClusterRestoreBackupSourceOutputReference(this, "restore_backup_source");
  public get restoreBackupSource() {
    return this._restoreBackupSource;
  }
  public putRestoreBackupSource(value: AlloydbClusterRestoreBackupSource) {
    this._restoreBackupSource.internalValue = value;
  }
  public resetRestoreBackupSource() {
    this._restoreBackupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreBackupSourceInput() {
    return this._restoreBackupSource.internalValue;
  }

  // restore_continuous_backup_source - computed: false, optional: true, required: false
  private _restoreContinuousBackupSource = new AlloydbClusterRestoreContinuousBackupSourceOutputReference(this, "restore_continuous_backup_source");
  public get restoreContinuousBackupSource() {
    return this._restoreContinuousBackupSource;
  }
  public putRestoreContinuousBackupSource(value: AlloydbClusterRestoreContinuousBackupSource) {
    this._restoreContinuousBackupSource.internalValue = value;
  }
  public resetRestoreContinuousBackupSource() {
    this._restoreContinuousBackupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreContinuousBackupSourceInput() {
    return this._restoreContinuousBackupSource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlloydbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlloydbClusterTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      automated_backup_policy: alloydbClusterAutomatedBackupPolicyToTerraform(this._automatedBackupPolicy.internalValue),
      continuous_backup_config: alloydbClusterContinuousBackupConfigToTerraform(this._continuousBackupConfig.internalValue),
      encryption_config: alloydbClusterEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      initial_user: alloydbClusterInitialUserToTerraform(this._initialUser.internalValue),
      restore_backup_source: alloydbClusterRestoreBackupSourceToTerraform(this._restoreBackupSource.internalValue),
      restore_continuous_backup_source: alloydbClusterRestoreContinuousBackupSourceToTerraform(this._restoreContinuousBackupSource.internalValue),
      timeouts: alloydbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
