/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageInsightsDatasetConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user-defined ID of the DatasetConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#dataset_config_id StorageInsightsDatasetConfig#dataset_config_id}
  */
  readonly datasetConfigId: string;
  /**
  * An optional user-provided description for the dataset configuration with a maximum length of 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#description StorageInsightsDatasetConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#id StorageInsightsDatasetConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#include_newly_created_buckets StorageInsightsDatasetConfig#include_newly_created_buckets}
  */
  readonly includeNewlyCreatedBuckets?: boolean | cdktf.IResolvable;
  /**
  * A boolean terraform only flag to link/unlink dataset.
  * 
  * Setting this field to true while creation will automatically link the created dataset as an additional functionality.
  * -> **Note** A dataset config resource can only be destroyed once it is unlinked,
  * so users must set this field to false to unlink the dataset and destroy the dataset config resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#link_dataset StorageInsightsDatasetConfig#link_dataset}
  */
  readonly linkDataset?: boolean | cdktf.IResolvable;
  /**
  * The location of the DatasetConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#location StorageInsightsDatasetConfig#location}
  */
  readonly location: string;
  /**
  * Organization resource ID that the source projects should belong to.
  * Projects that do not belong to the provided organization are not considered when creating the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#organization_number StorageInsightsDatasetConfig#organization_number}
  */
  readonly organizationNumber?: string;
  /**
  * Defines the options for providing a source organization for the DatasetConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#organization_scope StorageInsightsDatasetConfig#organization_scope}
  */
  readonly organizationScope?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#project StorageInsightsDatasetConfig#project}
  */
  readonly project?: string;
  /**
  * Number of days of history that must be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#retention_period_days StorageInsightsDatasetConfig#retention_period_days}
  */
  readonly retentionPeriodDays: number;
  /**
  * exclude_cloud_storage_buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#exclude_cloud_storage_buckets StorageInsightsDatasetConfig#exclude_cloud_storage_buckets}
  */
  readonly excludeCloudStorageBuckets?: StorageInsightsDatasetConfigExcludeCloudStorageBuckets;
  /**
  * exclude_cloud_storage_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#exclude_cloud_storage_locations StorageInsightsDatasetConfig#exclude_cloud_storage_locations}
  */
  readonly excludeCloudStorageLocations?: StorageInsightsDatasetConfigExcludeCloudStorageLocations;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#identity StorageInsightsDatasetConfig#identity}
  */
  readonly identity: StorageInsightsDatasetConfigIdentity;
  /**
  * include_cloud_storage_buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#include_cloud_storage_buckets StorageInsightsDatasetConfig#include_cloud_storage_buckets}
  */
  readonly includeCloudStorageBuckets?: StorageInsightsDatasetConfigIncludeCloudStorageBuckets;
  /**
  * include_cloud_storage_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#include_cloud_storage_locations StorageInsightsDatasetConfig#include_cloud_storage_locations}
  */
  readonly includeCloudStorageLocations?: StorageInsightsDatasetConfigIncludeCloudStorageLocations;
  /**
  * source_folders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#source_folders StorageInsightsDatasetConfig#source_folders}
  */
  readonly sourceFolders?: StorageInsightsDatasetConfigSourceFolders;
  /**
  * source_projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#source_projects StorageInsightsDatasetConfig#source_projects}
  */
  readonly sourceProjects?: StorageInsightsDatasetConfigSourceProjects;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#timeouts StorageInsightsDatasetConfig#timeouts}
  */
  readonly timeouts?: StorageInsightsDatasetConfigTimeouts;
}
export interface StorageInsightsDatasetConfigLink {
}

export function storageInsightsDatasetConfigLinkToTerraform(struct?: StorageInsightsDatasetConfigLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function storageInsightsDatasetConfigLinkToHclTerraform(struct?: StorageInsightsDatasetConfigLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StorageInsightsDatasetConfigLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageInsightsDatasetConfigLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsDatasetConfigLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // linked - computed: true, optional: false, required: false
  public get linked() {
    return this.getBooleanAttribute('linked');
  }
}

export class StorageInsightsDatasetConfigLinkList extends cdktf.ComplexList {

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
  public get(index: number): StorageInsightsDatasetConfigLinkOutputReference {
    return new StorageInsightsDatasetConfigLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets {
  /**
  * The list of cloud storage bucket names to exclude in the DatasetConfig.
  * Exactly one of the bucket_name and bucket_prefix_regex should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#bucket_name StorageInsightsDatasetConfig#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * The list of regex patterns for bucket names matching the regex.
  * Regex should follow the syntax specified in google/re2 on GitHub.
  * Exactly one of the bucket_name and bucket_prefix_regex should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#bucket_prefix_regex StorageInsightsDatasetConfig#bucket_prefix_regex}
  */
  readonly bucketPrefixRegex?: string;
}

export function storageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsToTerraform(struct?: StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix_regex: cdktf.stringToTerraform(struct!.bucketPrefixRegex),
  }
}


export function storageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsToHclTerraform(struct?: StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix_regex: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefixRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefixRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefixRegex = this._bucketPrefixRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketPrefixRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketPrefixRegex = value.bucketPrefixRegex;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix_regex - computed: false, optional: true, required: false
  private _bucketPrefixRegex?: string; 
  public get bucketPrefixRegex() {
    return this.getStringAttribute('bucket_prefix_regex');
  }
  public set bucketPrefixRegex(value: string) {
    this._bucketPrefixRegex = value;
  }
  public resetBucketPrefixRegex() {
    this._bucketPrefixRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixRegexInput() {
    return this._bucketPrefixRegex;
  }
}

export class StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList extends cdktf.ComplexList {
  public internalValue? : StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets[] | cdktf.IResolvable

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
  public get(index: number): StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference {
    return new StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageInsightsDatasetConfigExcludeCloudStorageBuckets {
  /**
  * cloud_storage_buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#cloud_storage_buckets StorageInsightsDatasetConfig#cloud_storage_buckets}
  */
  readonly cloudStorageBuckets: StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets[] | cdktf.IResolvable;
}

export function storageInsightsDatasetConfigExcludeCloudStorageBucketsToTerraform(struct?: StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference | StorageInsightsDatasetConfigExcludeCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_buckets: cdktf.listMapper(storageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsToTerraform, true)(struct!.cloudStorageBuckets),
  }
}


export function storageInsightsDatasetConfigExcludeCloudStorageBucketsToHclTerraform(struct?: StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference | StorageInsightsDatasetConfigExcludeCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_buckets: {
      value: cdktf.listMapperHcl(storageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsToHclTerraform, true)(struct!.cloudStorageBuckets),
      isBlock: true,
      type: "list",
      storageClassType: "StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsDatasetConfigExcludeCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStorageBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageBuckets = this._cloudStorageBuckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsDatasetConfigExcludeCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStorageBuckets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStorageBuckets.internalValue = value.cloudStorageBuckets;
    }
  }

  // cloud_storage_buckets - computed: false, optional: false, required: true
  private _cloudStorageBuckets = new StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(this, "cloud_storage_buckets", false);
  public get cloudStorageBuckets() {
    return this._cloudStorageBuckets;
  }
  public putCloudStorageBuckets(value: StorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets[] | cdktf.IResolvable) {
    this._cloudStorageBuckets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageBucketsInput() {
    return this._cloudStorageBuckets.internalValue;
  }
}
export interface StorageInsightsDatasetConfigExcludeCloudStorageLocations {
  /**
  * The list of cloud storage locations to exclude in the DatasetConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#locations StorageInsightsDatasetConfig#locations}
  */
  readonly locations: string[];
}

export function storageInsightsDatasetConfigExcludeCloudStorageLocationsToTerraform(struct?: StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference | StorageInsightsDatasetConfigExcludeCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function storageInsightsDatasetConfigExcludeCloudStorageLocationsToHclTerraform(struct?: StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference | StorageInsightsDatasetConfigExcludeCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsDatasetConfigExcludeCloudStorageLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsDatasetConfigExcludeCloudStorageLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
    }
  }

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }
}
export interface StorageInsightsDatasetConfigIdentity {
  /**
  * Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#type StorageInsightsDatasetConfig#type}
  */
  readonly type: string;
}

export function storageInsightsDatasetConfigIdentityToTerraform(struct?: StorageInsightsDatasetConfigIdentityOutputReference | StorageInsightsDatasetConfigIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function storageInsightsDatasetConfigIdentityToHclTerraform(struct?: StorageInsightsDatasetConfigIdentityOutputReference | StorageInsightsDatasetConfigIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class StorageInsightsDatasetConfigIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsDatasetConfigIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsDatasetConfigIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
export interface StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets {
  /**
  * The list of cloud storage bucket names to include in the DatasetConfig.
  * Exactly one of the bucket_name and bucket_prefix_regex should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#bucket_name StorageInsightsDatasetConfig#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * The list of regex patterns for bucket names matching the regex.
  * Regex should follow the syntax specified in google/re2 on GitHub.
  * Exactly one of the bucket_name and bucket_prefix_regex should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#bucket_prefix_regex StorageInsightsDatasetConfig#bucket_prefix_regex}
  */
  readonly bucketPrefixRegex?: string;
}

export function storageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsToTerraform(struct?: StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix_regex: cdktf.stringToTerraform(struct!.bucketPrefixRegex),
  }
}


export function storageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsToHclTerraform(struct?: StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix_regex: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefixRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefixRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefixRegex = this._bucketPrefixRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketPrefixRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketPrefixRegex = value.bucketPrefixRegex;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix_regex - computed: false, optional: true, required: false
  private _bucketPrefixRegex?: string; 
  public get bucketPrefixRegex() {
    return this.getStringAttribute('bucket_prefix_regex');
  }
  public set bucketPrefixRegex(value: string) {
    this._bucketPrefixRegex = value;
  }
  public resetBucketPrefixRegex() {
    this._bucketPrefixRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixRegexInput() {
    return this._bucketPrefixRegex;
  }
}

export class StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList extends cdktf.ComplexList {
  public internalValue? : StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets[] | cdktf.IResolvable

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
  public get(index: number): StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference {
    return new StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageInsightsDatasetConfigIncludeCloudStorageBuckets {
  /**
  * cloud_storage_buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#cloud_storage_buckets StorageInsightsDatasetConfig#cloud_storage_buckets}
  */
  readonly cloudStorageBuckets: StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets[] | cdktf.IResolvable;
}

export function storageInsightsDatasetConfigIncludeCloudStorageBucketsToTerraform(struct?: StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference | StorageInsightsDatasetConfigIncludeCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_buckets: cdktf.listMapper(storageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsToTerraform, true)(struct!.cloudStorageBuckets),
  }
}


export function storageInsightsDatasetConfigIncludeCloudStorageBucketsToHclTerraform(struct?: StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference | StorageInsightsDatasetConfigIncludeCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_buckets: {
      value: cdktf.listMapperHcl(storageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsToHclTerraform, true)(struct!.cloudStorageBuckets),
      isBlock: true,
      type: "list",
      storageClassType: "StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsDatasetConfigIncludeCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStorageBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageBuckets = this._cloudStorageBuckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsDatasetConfigIncludeCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStorageBuckets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStorageBuckets.internalValue = value.cloudStorageBuckets;
    }
  }

  // cloud_storage_buckets - computed: false, optional: false, required: true
  private _cloudStorageBuckets = new StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(this, "cloud_storage_buckets", false);
  public get cloudStorageBuckets() {
    return this._cloudStorageBuckets;
  }
  public putCloudStorageBuckets(value: StorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets[] | cdktf.IResolvable) {
    this._cloudStorageBuckets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageBucketsInput() {
    return this._cloudStorageBuckets.internalValue;
  }
}
export interface StorageInsightsDatasetConfigIncludeCloudStorageLocations {
  /**
  * The list of cloud storage locations to include in the DatasetConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#locations StorageInsightsDatasetConfig#locations}
  */
  readonly locations: string[];
}

export function storageInsightsDatasetConfigIncludeCloudStorageLocationsToTerraform(struct?: StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference | StorageInsightsDatasetConfigIncludeCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function storageInsightsDatasetConfigIncludeCloudStorageLocationsToHclTerraform(struct?: StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference | StorageInsightsDatasetConfigIncludeCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsDatasetConfigIncludeCloudStorageLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsDatasetConfigIncludeCloudStorageLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
    }
  }

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }
}
export interface StorageInsightsDatasetConfigSourceFolders {
  /**
  * The list of folder numbers to include in the DatasetConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#folder_numbers StorageInsightsDatasetConfig#folder_numbers}
  */
  readonly folderNumbers?: string[];
}

export function storageInsightsDatasetConfigSourceFoldersToTerraform(struct?: StorageInsightsDatasetConfigSourceFoldersOutputReference | StorageInsightsDatasetConfigSourceFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.folderNumbers),
  }
}


export function storageInsightsDatasetConfigSourceFoldersToHclTerraform(struct?: StorageInsightsDatasetConfigSourceFoldersOutputReference | StorageInsightsDatasetConfigSourceFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.folderNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsDatasetConfigSourceFoldersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsDatasetConfigSourceFolders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderNumbers = this._folderNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsDatasetConfigSourceFolders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._folderNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._folderNumbers = value.folderNumbers;
    }
  }

  // folder_numbers - computed: false, optional: true, required: false
  private _folderNumbers?: string[]; 
  public get folderNumbers() {
    return this.getListAttribute('folder_numbers');
  }
  public set folderNumbers(value: string[]) {
    this._folderNumbers = value;
  }
  public resetFolderNumbers() {
    this._folderNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderNumbersInput() {
    return this._folderNumbers;
  }
}
export interface StorageInsightsDatasetConfigSourceProjects {
  /**
  * The list of project numbers to include in the DatasetConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#project_numbers StorageInsightsDatasetConfig#project_numbers}
  */
  readonly projectNumbers?: string[];
}

export function storageInsightsDatasetConfigSourceProjectsToTerraform(struct?: StorageInsightsDatasetConfigSourceProjectsOutputReference | StorageInsightsDatasetConfigSourceProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectNumbers),
  }
}


export function storageInsightsDatasetConfigSourceProjectsToHclTerraform(struct?: StorageInsightsDatasetConfigSourceProjectsOutputReference | StorageInsightsDatasetConfigSourceProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageInsightsDatasetConfigSourceProjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInsightsDatasetConfigSourceProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectNumbers = this._projectNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInsightsDatasetConfigSourceProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectNumbers = value.projectNumbers;
    }
  }

  // project_numbers - computed: false, optional: true, required: false
  private _projectNumbers?: string[]; 
  public get projectNumbers() {
    return this.getListAttribute('project_numbers');
  }
  public set projectNumbers(value: string[]) {
    this._projectNumbers = value;
  }
  public resetProjectNumbers() {
    this._projectNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNumbersInput() {
    return this._projectNumbers;
  }
}
export interface StorageInsightsDatasetConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#create StorageInsightsDatasetConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#delete StorageInsightsDatasetConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#update StorageInsightsDatasetConfig#update}
  */
  readonly update?: string;
}

export function storageInsightsDatasetConfigTimeoutsToTerraform(struct?: StorageInsightsDatasetConfigTimeouts | cdktf.IResolvable): any {
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


export function storageInsightsDatasetConfigTimeoutsToHclTerraform(struct?: StorageInsightsDatasetConfigTimeouts | cdktf.IResolvable): any {
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

export class StorageInsightsDatasetConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageInsightsDatasetConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageInsightsDatasetConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config google_storage_insights_dataset_config}
*/
export class StorageInsightsDatasetConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_insights_dataset_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageInsightsDatasetConfig to import
  * @param importFromId The id of the existing StorageInsightsDatasetConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageInsightsDatasetConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_insights_dataset_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_insights_dataset_config google_storage_insights_dataset_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageInsightsDatasetConfigConfig
  */
  public constructor(scope: Construct, id: string, config: StorageInsightsDatasetConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_insights_dataset_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.0',
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
    this._datasetConfigId = config.datasetConfigId;
    this._description = config.description;
    this._id = config.id;
    this._includeNewlyCreatedBuckets = config.includeNewlyCreatedBuckets;
    this._linkDataset = config.linkDataset;
    this._location = config.location;
    this._organizationNumber = config.organizationNumber;
    this._organizationScope = config.organizationScope;
    this._project = config.project;
    this._retentionPeriodDays = config.retentionPeriodDays;
    this._excludeCloudStorageBuckets.internalValue = config.excludeCloudStorageBuckets;
    this._excludeCloudStorageLocations.internalValue = config.excludeCloudStorageLocations;
    this._identity.internalValue = config.identity;
    this._includeCloudStorageBuckets.internalValue = config.includeCloudStorageBuckets;
    this._includeCloudStorageLocations.internalValue = config.includeCloudStorageLocations;
    this._sourceFolders.internalValue = config.sourceFolders;
    this._sourceProjects.internalValue = config.sourceProjects;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dataset_config_id - computed: false, optional: false, required: true
  private _datasetConfigId?: string; 
  public get datasetConfigId() {
    return this.getStringAttribute('dataset_config_id');
  }
  public set datasetConfigId(value: string) {
    this._datasetConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetConfigIdInput() {
    return this._datasetConfigId;
  }

  // dataset_config_state - computed: true, optional: false, required: false
  public get datasetConfigState() {
    return this.getStringAttribute('dataset_config_state');
  }

  // description - computed: false, optional: true, required: false
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

  // include_newly_created_buckets - computed: false, optional: true, required: false
  private _includeNewlyCreatedBuckets?: boolean | cdktf.IResolvable; 
  public get includeNewlyCreatedBuckets() {
    return this.getBooleanAttribute('include_newly_created_buckets');
  }
  public set includeNewlyCreatedBuckets(value: boolean | cdktf.IResolvable) {
    this._includeNewlyCreatedBuckets = value;
  }
  public resetIncludeNewlyCreatedBuckets() {
    this._includeNewlyCreatedBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNewlyCreatedBucketsInput() {
    return this._includeNewlyCreatedBuckets;
  }

  // link - computed: true, optional: false, required: false
  private _link = new StorageInsightsDatasetConfigLinkList(this, "link", false);
  public get link() {
    return this._link;
  }

  // link_dataset - computed: false, optional: true, required: false
  private _linkDataset?: boolean | cdktf.IResolvable; 
  public get linkDataset() {
    return this.getBooleanAttribute('link_dataset');
  }
  public set linkDataset(value: boolean | cdktf.IResolvable) {
    this._linkDataset = value;
  }
  public resetLinkDataset() {
    this._linkDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDatasetInput() {
    return this._linkDataset;
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

  // organization_number - computed: true, optional: true, required: false
  private _organizationNumber?: string; 
  public get organizationNumber() {
    return this.getStringAttribute('organization_number');
  }
  public set organizationNumber(value: string) {
    this._organizationNumber = value;
  }
  public resetOrganizationNumber() {
    this._organizationNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNumberInput() {
    return this._organizationNumber;
  }

  // organization_scope - computed: false, optional: true, required: false
  private _organizationScope?: boolean | cdktf.IResolvable; 
  public get organizationScope() {
    return this.getBooleanAttribute('organization_scope');
  }
  public set organizationScope(value: boolean | cdktf.IResolvable) {
    this._organizationScope = value;
  }
  public resetOrganizationScope() {
    this._organizationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationScopeInput() {
    return this._organizationScope;
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

  // retention_period_days - computed: false, optional: false, required: true
  private _retentionPeriodDays?: number; 
  public get retentionPeriodDays() {
    return this.getNumberAttribute('retention_period_days');
  }
  public set retentionPeriodDays(value: number) {
    this._retentionPeriodDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodDaysInput() {
    return this._retentionPeriodDays;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // exclude_cloud_storage_buckets - computed: false, optional: true, required: false
  private _excludeCloudStorageBuckets = new StorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(this, "exclude_cloud_storage_buckets");
  public get excludeCloudStorageBuckets() {
    return this._excludeCloudStorageBuckets;
  }
  public putExcludeCloudStorageBuckets(value: StorageInsightsDatasetConfigExcludeCloudStorageBuckets) {
    this._excludeCloudStorageBuckets.internalValue = value;
  }
  public resetExcludeCloudStorageBuckets() {
    this._excludeCloudStorageBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCloudStorageBucketsInput() {
    return this._excludeCloudStorageBuckets.internalValue;
  }

  // exclude_cloud_storage_locations - computed: false, optional: true, required: false
  private _excludeCloudStorageLocations = new StorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(this, "exclude_cloud_storage_locations");
  public get excludeCloudStorageLocations() {
    return this._excludeCloudStorageLocations;
  }
  public putExcludeCloudStorageLocations(value: StorageInsightsDatasetConfigExcludeCloudStorageLocations) {
    this._excludeCloudStorageLocations.internalValue = value;
  }
  public resetExcludeCloudStorageLocations() {
    this._excludeCloudStorageLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCloudStorageLocationsInput() {
    return this._excludeCloudStorageLocations.internalValue;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new StorageInsightsDatasetConfigIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: StorageInsightsDatasetConfigIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // include_cloud_storage_buckets - computed: false, optional: true, required: false
  private _includeCloudStorageBuckets = new StorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(this, "include_cloud_storage_buckets");
  public get includeCloudStorageBuckets() {
    return this._includeCloudStorageBuckets;
  }
  public putIncludeCloudStorageBuckets(value: StorageInsightsDatasetConfigIncludeCloudStorageBuckets) {
    this._includeCloudStorageBuckets.internalValue = value;
  }
  public resetIncludeCloudStorageBuckets() {
    this._includeCloudStorageBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCloudStorageBucketsInput() {
    return this._includeCloudStorageBuckets.internalValue;
  }

  // include_cloud_storage_locations - computed: false, optional: true, required: false
  private _includeCloudStorageLocations = new StorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(this, "include_cloud_storage_locations");
  public get includeCloudStorageLocations() {
    return this._includeCloudStorageLocations;
  }
  public putIncludeCloudStorageLocations(value: StorageInsightsDatasetConfigIncludeCloudStorageLocations) {
    this._includeCloudStorageLocations.internalValue = value;
  }
  public resetIncludeCloudStorageLocations() {
    this._includeCloudStorageLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCloudStorageLocationsInput() {
    return this._includeCloudStorageLocations.internalValue;
  }

  // source_folders - computed: false, optional: true, required: false
  private _sourceFolders = new StorageInsightsDatasetConfigSourceFoldersOutputReference(this, "source_folders");
  public get sourceFolders() {
    return this._sourceFolders;
  }
  public putSourceFolders(value: StorageInsightsDatasetConfigSourceFolders) {
    this._sourceFolders.internalValue = value;
  }
  public resetSourceFolders() {
    this._sourceFolders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFoldersInput() {
    return this._sourceFolders.internalValue;
  }

  // source_projects - computed: false, optional: true, required: false
  private _sourceProjects = new StorageInsightsDatasetConfigSourceProjectsOutputReference(this, "source_projects");
  public get sourceProjects() {
    return this._sourceProjects;
  }
  public putSourceProjects(value: StorageInsightsDatasetConfigSourceProjects) {
    this._sourceProjects.internalValue = value;
  }
  public resetSourceProjects() {
    this._sourceProjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProjectsInput() {
    return this._sourceProjects.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageInsightsDatasetConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageInsightsDatasetConfigTimeouts) {
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
      dataset_config_id: cdktf.stringToTerraform(this._datasetConfigId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      include_newly_created_buckets: cdktf.booleanToTerraform(this._includeNewlyCreatedBuckets),
      link_dataset: cdktf.booleanToTerraform(this._linkDataset),
      location: cdktf.stringToTerraform(this._location),
      organization_number: cdktf.stringToTerraform(this._organizationNumber),
      organization_scope: cdktf.booleanToTerraform(this._organizationScope),
      project: cdktf.stringToTerraform(this._project),
      retention_period_days: cdktf.numberToTerraform(this._retentionPeriodDays),
      exclude_cloud_storage_buckets: storageInsightsDatasetConfigExcludeCloudStorageBucketsToTerraform(this._excludeCloudStorageBuckets.internalValue),
      exclude_cloud_storage_locations: storageInsightsDatasetConfigExcludeCloudStorageLocationsToTerraform(this._excludeCloudStorageLocations.internalValue),
      identity: storageInsightsDatasetConfigIdentityToTerraform(this._identity.internalValue),
      include_cloud_storage_buckets: storageInsightsDatasetConfigIncludeCloudStorageBucketsToTerraform(this._includeCloudStorageBuckets.internalValue),
      include_cloud_storage_locations: storageInsightsDatasetConfigIncludeCloudStorageLocationsToTerraform(this._includeCloudStorageLocations.internalValue),
      source_folders: storageInsightsDatasetConfigSourceFoldersToTerraform(this._sourceFolders.internalValue),
      source_projects: storageInsightsDatasetConfigSourceProjectsToTerraform(this._sourceProjects.internalValue),
      timeouts: storageInsightsDatasetConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataset_config_id: {
        value: cdktf.stringToHclTerraform(this._datasetConfigId),
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
      include_newly_created_buckets: {
        value: cdktf.booleanToHclTerraform(this._includeNewlyCreatedBuckets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link_dataset: {
        value: cdktf.booleanToHclTerraform(this._linkDataset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_number: {
        value: cdktf.stringToHclTerraform(this._organizationNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_scope: {
        value: cdktf.booleanToHclTerraform(this._organizationScope),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_period_days: {
        value: cdktf.numberToHclTerraform(this._retentionPeriodDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exclude_cloud_storage_buckets: {
        value: storageInsightsDatasetConfigExcludeCloudStorageBucketsToHclTerraform(this._excludeCloudStorageBuckets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsDatasetConfigExcludeCloudStorageBucketsList",
      },
      exclude_cloud_storage_locations: {
        value: storageInsightsDatasetConfigExcludeCloudStorageLocationsToHclTerraform(this._excludeCloudStorageLocations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsDatasetConfigExcludeCloudStorageLocationsList",
      },
      identity: {
        value: storageInsightsDatasetConfigIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsDatasetConfigIdentityList",
      },
      include_cloud_storage_buckets: {
        value: storageInsightsDatasetConfigIncludeCloudStorageBucketsToHclTerraform(this._includeCloudStorageBuckets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsDatasetConfigIncludeCloudStorageBucketsList",
      },
      include_cloud_storage_locations: {
        value: storageInsightsDatasetConfigIncludeCloudStorageLocationsToHclTerraform(this._includeCloudStorageLocations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsDatasetConfigIncludeCloudStorageLocationsList",
      },
      source_folders: {
        value: storageInsightsDatasetConfigSourceFoldersToHclTerraform(this._sourceFolders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsDatasetConfigSourceFoldersList",
      },
      source_projects: {
        value: storageInsightsDatasetConfigSourceProjectsToHclTerraform(this._sourceProjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageInsightsDatasetConfigSourceProjectsList",
      },
      timeouts: {
        value: storageInsightsDatasetConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageInsightsDatasetConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
