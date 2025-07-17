/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/storage_control_project_intelligence_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleStorageControlProjectIntelligenceConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/storage_control_project_intelligence_config#id DataGoogleStorageControlProjectIntelligenceConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the GCP project. For GCP project, this field can be project name or project number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/storage_control_project_intelligence_config#name DataGoogleStorageControlProjectIntelligenceConfig#name}
  */
  readonly name: string;
}
export interface DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig {
}

export function dataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_edition - computed: true, optional: false, required: false
  public get effectiveEdition() {
    return this.getStringAttribute('effective_edition');
  }

  // intelligence_config - computed: true, optional: false, required: false
  public get intelligenceConfig() {
    return this.getStringAttribute('intelligence_config');
  }
}

export class DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_id_regexes - computed: true, optional: false, required: false
  public get bucketIdRegexes() {
    return this.getListAttribute('bucket_id_regexes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations {
}

export function dataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_id_regexes - computed: true, optional: false, required: false
  public get bucketIdRegexes() {
    return this.getListAttribute('bucket_id_regexes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations {
}

export function dataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceConfigFilter {
}

export function dataGoogleStorageControlProjectIntelligenceConfigFilterToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceConfigFilterToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceConfigFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceConfigFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_cloud_storage_buckets - computed: true, optional: false, required: false
  private _excludedCloudStorageBuckets = new DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList(this, "excluded_cloud_storage_buckets", false);
  public get excludedCloudStorageBuckets() {
    return this._excludedCloudStorageBuckets;
  }

  // excluded_cloud_storage_locations - computed: true, optional: false, required: false
  private _excludedCloudStorageLocations = new DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList(this, "excluded_cloud_storage_locations", false);
  public get excludedCloudStorageLocations() {
    return this._excludedCloudStorageLocations;
  }

  // included_cloud_storage_buckets - computed: true, optional: false, required: false
  private _includedCloudStorageBuckets = new DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList(this, "included_cloud_storage_buckets", false);
  public get includedCloudStorageBuckets() {
    return this._includedCloudStorageBuckets;
  }

  // included_cloud_storage_locations - computed: true, optional: false, required: false
  private _includedCloudStorageLocations = new DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList(this, "included_cloud_storage_locations", false);
  public get includedCloudStorageLocations() {
    return this._includedCloudStorageLocations;
  }
}

export class DataGoogleStorageControlProjectIntelligenceConfigFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceConfigTrialConfig {
}

export function dataGoogleStorageControlProjectIntelligenceConfigTrialConfigToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigTrialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceConfigTrialConfigToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceConfigTrialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceConfigTrialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceConfigTrialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
}

export class DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/storage_control_project_intelligence_config google_storage_control_project_intelligence_config}
*/
export class DataGoogleStorageControlProjectIntelligenceConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_control_project_intelligence_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleStorageControlProjectIntelligenceConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceConfig to import
  * @param importFromId The id of the existing DataGoogleStorageControlProjectIntelligenceConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/storage_control_project_intelligence_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_control_project_intelligence_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/storage_control_project_intelligence_config google_storage_control_project_intelligence_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageControlProjectIntelligenceConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageControlProjectIntelligenceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_control_project_intelligence_config',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edition_config - computed: true, optional: false, required: false
  public get editionConfig() {
    return this.getStringAttribute('edition_config');
  }

  // effective_intelligence_config - computed: true, optional: false, required: false
  private _effectiveIntelligenceConfig = new DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList(this, "effective_intelligence_config", false);
  public get effectiveIntelligenceConfig() {
    return this._effectiveIntelligenceConfig;
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataGoogleStorageControlProjectIntelligenceConfigFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
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

  // trial_config - computed: true, optional: false, required: false
  private _trialConfig = new DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList(this, "trial_config", false);
  public get trialConfig() {
    return this._trialConfig;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
