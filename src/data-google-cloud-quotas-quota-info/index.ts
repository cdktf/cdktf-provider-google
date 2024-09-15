/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/data-sources/cloud_quotas_quota_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleCloudQuotasQuotaInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/data-sources/cloud_quotas_quota_info#id DataGoogleCloudQuotasQuotaInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/data-sources/cloud_quotas_quota_info#parent DataGoogleCloudQuotasQuotaInfo#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/data-sources/cloud_quotas_quota_info#quota_id DataGoogleCloudQuotasQuotaInfo#quota_id}
  */
  readonly quotaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/data-sources/cloud_quotas_quota_info#service DataGoogleCloudQuotasQuotaInfo#service}
  */
  readonly service: string;
}
export interface DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails {
}

export function dataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsToTerraform(struct?: DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsToHclTerraform(struct?: DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference {
    return new DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudQuotasQuotaInfoDimensionsInfos {
}

export function dataGoogleCloudQuotasQuotaInfoDimensionsInfosToTerraform(struct?: DataGoogleCloudQuotasQuotaInfoDimensionsInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleCloudQuotasQuotaInfoDimensionsInfosToHclTerraform(struct?: DataGoogleCloudQuotasQuotaInfoDimensionsInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudQuotasQuotaInfoDimensionsInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudQuotasQuotaInfoDimensionsInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applicable_locations - computed: true, optional: false, required: false
  public get applicableLocations() {
    return this.getListAttribute('applicable_locations');
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new cdktf.StringMap(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
}

export class DataGoogleCloudQuotasQuotaInfoDimensionsInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference {
    return new DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility {
}

export function dataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityToTerraform(struct?: DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityToHclTerraform(struct?: DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ineligibility_reason - computed: true, optional: false, required: false
  public get ineligibilityReason() {
    return this.getStringAttribute('ineligibility_reason');
  }

  // is_eligible - computed: true, optional: false, required: false
  public get isEligible() {
    return this.getBooleanAttribute('is_eligible');
  }
}

export class DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference {
    return new DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/data-sources/cloud_quotas_quota_info google_cloud_quotas_quota_info}
*/
export class DataGoogleCloudQuotasQuotaInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_quotas_quota_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleCloudQuotasQuotaInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleCloudQuotasQuotaInfo to import
  * @param importFromId The id of the existing DataGoogleCloudQuotasQuotaInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/data-sources/cloud_quotas_quota_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleCloudQuotasQuotaInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_quotas_quota_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/data-sources/cloud_quotas_quota_info google_cloud_quotas_quota_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleCloudQuotasQuotaInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleCloudQuotasQuotaInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_quotas_quota_info',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.2.0',
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
    this._parent = config.parent;
    this._quotaId = config.quotaId;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_type - computed: true, optional: false, required: false
  public get containerType() {
    return this.getStringAttribute('container_type');
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }

  // dimensions_infos - computed: true, optional: false, required: false
  private _dimensionsInfos = new DataGoogleCloudQuotasQuotaInfoDimensionsInfosList(this, "dimensions_infos", false);
  public get dimensionsInfos() {
    return this._dimensionsInfos;
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

  // is_concurrent - computed: true, optional: false, required: false
  public get isConcurrent() {
    return this.getBooleanAttribute('is_concurrent');
  }

  // is_fixed - computed: true, optional: false, required: false
  public get isFixed() {
    return this.getBooleanAttribute('is_fixed');
  }

  // is_precise - computed: true, optional: false, required: false
  public get isPrecise() {
    return this.getBooleanAttribute('is_precise');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // metric_display_name - computed: true, optional: false, required: false
  public get metricDisplayName() {
    return this.getStringAttribute('metric_display_name');
  }

  // metric_unit - computed: true, optional: false, required: false
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // quota_display_name - computed: true, optional: false, required: false
  public get quotaDisplayName() {
    return this.getStringAttribute('quota_display_name');
  }

  // quota_id - computed: false, optional: false, required: true
  private _quotaId?: string; 
  public get quotaId() {
    return this.getStringAttribute('quota_id');
  }
  public set quotaId(value: string) {
    this._quotaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaIdInput() {
    return this._quotaId;
  }

  // quota_increase_eligibility - computed: true, optional: false, required: false
  private _quotaIncreaseEligibility = new DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList(this, "quota_increase_eligibility", false);
  public get quotaIncreaseEligibility() {
    return this._quotaIncreaseEligibility;
  }

  // refresh_interval - computed: true, optional: false, required: false
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_request_quota_uri - computed: true, optional: false, required: false
  public get serviceRequestQuotaUri() {
    return this.getStringAttribute('service_request_quota_uri');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      quota_id: cdktf.stringToTerraform(this._quotaId),
      service: cdktf.stringToTerraform(this._service),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_id: {
        value: cdktf.stringToHclTerraform(this._quotaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
