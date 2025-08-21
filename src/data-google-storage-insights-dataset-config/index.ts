/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/storage_insights_dataset_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleStorageInsightsDatasetConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user-defined ID of the DatasetConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/storage_insights_dataset_config#dataset_config_id DataGoogleStorageInsightsDatasetConfig#dataset_config_id}
  */
  readonly datasetConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/storage_insights_dataset_config#id DataGoogleStorageInsightsDatasetConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the DatasetConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/storage_insights_dataset_config#location DataGoogleStorageInsightsDatasetConfig#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/storage_insights_dataset_config#project DataGoogleStorageInsightsDatasetConfig#project}
  */
  readonly project?: string;
}
export interface DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets {
}

export function dataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsToTerraform(struct?: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsToHclTerraform(struct?: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix_regex - computed: true, optional: false, required: false
  public get bucketPrefixRegex() {
    return this.getStringAttribute('bucket_prefix_regex');
  }
}

export class DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference {
    return new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets {
}

export function dataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsToTerraform(struct?: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsToHclTerraform(struct?: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_storage_buckets - computed: true, optional: false, required: false
  private _cloudStorageBuckets = new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(this, "cloud_storage_buckets", false);
  public get cloudStorageBuckets() {
    return this._cloudStorageBuckets;
  }
}

export class DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference {
    return new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations {
}

export function dataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsToTerraform(struct?: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsToHclTerraform(struct?: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }
}

export class DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference {
    return new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageInsightsDatasetConfigIdentity {
}

export function dataGoogleStorageInsightsDatasetConfigIdentityToTerraform(struct?: DataGoogleStorageInsightsDatasetConfigIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageInsightsDatasetConfigIdentityToHclTerraform(struct?: DataGoogleStorageInsightsDatasetConfigIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageInsightsDatasetConfigIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageInsightsDatasetConfigIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageInsightsDatasetConfigIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleStorageInsightsDatasetConfigIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageInsightsDatasetConfigIdentityOutputReference {
    return new DataGoogleStorageInsightsDatasetConfigIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets {
}

export function dataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsToTerraform(struct?: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsToHclTerraform(struct?: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix_regex - computed: true, optional: false, required: false
  public get bucketPrefixRegex() {
    return this.getStringAttribute('bucket_prefix_regex');
  }
}

export class DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference {
    return new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets {
}

export function dataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsToTerraform(struct?: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsToHclTerraform(struct?: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_storage_buckets - computed: true, optional: false, required: false
  private _cloudStorageBuckets = new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(this, "cloud_storage_buckets", false);
  public get cloudStorageBuckets() {
    return this._cloudStorageBuckets;
  }
}

export class DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference {
    return new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations {
}

export function dataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsToTerraform(struct?: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsToHclTerraform(struct?: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }
}

export class DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference {
    return new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageInsightsDatasetConfigLink {
}

export function dataGoogleStorageInsightsDatasetConfigLinkToTerraform(struct?: DataGoogleStorageInsightsDatasetConfigLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageInsightsDatasetConfigLinkToHclTerraform(struct?: DataGoogleStorageInsightsDatasetConfigLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageInsightsDatasetConfigLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageInsightsDatasetConfigLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageInsightsDatasetConfigLink | undefined) {
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

export class DataGoogleStorageInsightsDatasetConfigLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageInsightsDatasetConfigLinkOutputReference {
    return new DataGoogleStorageInsightsDatasetConfigLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageInsightsDatasetConfigSourceFolders {
}

export function dataGoogleStorageInsightsDatasetConfigSourceFoldersToTerraform(struct?: DataGoogleStorageInsightsDatasetConfigSourceFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageInsightsDatasetConfigSourceFoldersToHclTerraform(struct?: DataGoogleStorageInsightsDatasetConfigSourceFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageInsightsDatasetConfigSourceFolders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageInsightsDatasetConfigSourceFolders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // folder_numbers - computed: true, optional: false, required: false
  public get folderNumbers() {
    return this.getListAttribute('folder_numbers');
  }
}

export class DataGoogleStorageInsightsDatasetConfigSourceFoldersList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference {
    return new DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageInsightsDatasetConfigSourceProjects {
}

export function dataGoogleStorageInsightsDatasetConfigSourceProjectsToTerraform(struct?: DataGoogleStorageInsightsDatasetConfigSourceProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageInsightsDatasetConfigSourceProjectsToHclTerraform(struct?: DataGoogleStorageInsightsDatasetConfigSourceProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageInsightsDatasetConfigSourceProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageInsightsDatasetConfigSourceProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_numbers - computed: true, optional: false, required: false
  public get projectNumbers() {
    return this.getListAttribute('project_numbers');
  }
}

export class DataGoogleStorageInsightsDatasetConfigSourceProjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference {
    return new DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/storage_insights_dataset_config google_storage_insights_dataset_config}
*/
export class DataGoogleStorageInsightsDatasetConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_insights_dataset_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleStorageInsightsDatasetConfig to import
  * @param importFromId The id of the existing DataGoogleStorageInsightsDatasetConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleStorageInsightsDatasetConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_insights_dataset_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/storage_insights_dataset_config google_storage_insights_dataset_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageInsightsDatasetConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageInsightsDatasetConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_insights_dataset_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.1',
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
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclude_cloud_storage_buckets - computed: true, optional: false, required: false
  private _excludeCloudStorageBuckets = new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList(this, "exclude_cloud_storage_buckets", false);
  public get excludeCloudStorageBuckets() {
    return this._excludeCloudStorageBuckets;
  }

  // exclude_cloud_storage_locations - computed: true, optional: false, required: false
  private _excludeCloudStorageLocations = new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList(this, "exclude_cloud_storage_locations", false);
  public get excludeCloudStorageLocations() {
    return this._excludeCloudStorageLocations;
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

  // identity - computed: true, optional: false, required: false
  private _identity = new DataGoogleStorageInsightsDatasetConfigIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }

  // include_cloud_storage_buckets - computed: true, optional: false, required: false
  private _includeCloudStorageBuckets = new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList(this, "include_cloud_storage_buckets", false);
  public get includeCloudStorageBuckets() {
    return this._includeCloudStorageBuckets;
  }

  // include_cloud_storage_locations - computed: true, optional: false, required: false
  private _includeCloudStorageLocations = new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList(this, "include_cloud_storage_locations", false);
  public get includeCloudStorageLocations() {
    return this._includeCloudStorageLocations;
  }

  // include_newly_created_buckets - computed: true, optional: false, required: false
  public get includeNewlyCreatedBuckets() {
    return this.getBooleanAttribute('include_newly_created_buckets');
  }

  // link - computed: true, optional: false, required: false
  private _link = new DataGoogleStorageInsightsDatasetConfigLinkList(this, "link", false);
  public get link() {
    return this._link;
  }

  // link_dataset - computed: true, optional: false, required: false
  public get linkDataset() {
    return this.getBooleanAttribute('link_dataset');
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

  // organization_number - computed: true, optional: false, required: false
  public get organizationNumber() {
    return this.getStringAttribute('organization_number');
  }

  // organization_scope - computed: true, optional: false, required: false
  public get organizationScope() {
    return this.getBooleanAttribute('organization_scope');
  }

  // project - computed: false, optional: true, required: false
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

  // retention_period_days - computed: true, optional: false, required: false
  public get retentionPeriodDays() {
    return this.getNumberAttribute('retention_period_days');
  }

  // source_folders - computed: true, optional: false, required: false
  private _sourceFolders = new DataGoogleStorageInsightsDatasetConfigSourceFoldersList(this, "source_folders", false);
  public get sourceFolders() {
    return this._sourceFolders;
  }

  // source_projects - computed: true, optional: false, required: false
  private _sourceProjects = new DataGoogleStorageInsightsDatasetConfigSourceProjectsList(this, "source_projects", false);
  public get sourceProjects() {
    return this._sourceProjects;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_config_id: cdktf.stringToTerraform(this._datasetConfigId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
