// https://www.terraform.io/docs/providers/google/r/dataplex_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataplexAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The zone for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#dataplex_zone DataplexAsset#dataplex_zone}
  */
  readonly dataplexZone: string;
  /**
  * Optional. Description of the asset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#description DataplexAsset#description}
  */
  readonly description?: string;
  /**
  * Optional. User friendly display name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#display_name DataplexAsset#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#id DataplexAsset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. User defined labels for the asset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#labels DataplexAsset#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The lake for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#lake DataplexAsset#lake}
  */
  readonly lake: string;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#location DataplexAsset#location}
  */
  readonly location: string;
  /**
  * The name of the asset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#name DataplexAsset#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#project DataplexAsset#project}
  */
  readonly project?: string;
  /**
  * discovery_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#discovery_spec DataplexAsset#discovery_spec}
  */
  readonly discoverySpec: DataplexAssetDiscoverySpec;
  /**
  * resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#resource_spec DataplexAsset#resource_spec}
  */
  readonly resourceSpec: DataplexAssetResourceSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#timeouts DataplexAsset#timeouts}
  */
  readonly timeouts?: DataplexAssetTimeouts;
}
export interface DataplexAssetDiscoveryStatusStats {
}

export function dataplexAssetDiscoveryStatusStatsToTerraform(struct?: DataplexAssetDiscoveryStatusStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexAssetDiscoveryStatusStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplexAssetDiscoveryStatusStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexAssetDiscoveryStatusStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_items - computed: true, optional: false, required: false
  public get dataItems() {
    return this.getNumberAttribute('data_items');
  }

  // data_size - computed: true, optional: false, required: false
  public get dataSize() {
    return this.getNumberAttribute('data_size');
  }

  // filesets - computed: true, optional: false, required: false
  public get filesets() {
    return this.getNumberAttribute('filesets');
  }

  // tables - computed: true, optional: false, required: false
  public get tables() {
    return this.getNumberAttribute('tables');
  }
}

export class DataplexAssetDiscoveryStatusStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataplexAssetDiscoveryStatusStatsOutputReference {
    return new DataplexAssetDiscoveryStatusStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexAssetDiscoveryStatus {
}

export function dataplexAssetDiscoveryStatusToTerraform(struct?: DataplexAssetDiscoveryStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexAssetDiscoveryStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplexAssetDiscoveryStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexAssetDiscoveryStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_run_duration - computed: true, optional: false, required: false
  public get lastRunDuration() {
    return this.getStringAttribute('last_run_duration');
  }

  // last_run_time - computed: true, optional: false, required: false
  public get lastRunTime() {
    return this.getStringAttribute('last_run_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stats - computed: true, optional: false, required: false
  private _stats = new DataplexAssetDiscoveryStatusStatsList(this, "stats", false);
  public get stats() {
    return this._stats;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataplexAssetDiscoveryStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataplexAssetDiscoveryStatusOutputReference {
    return new DataplexAssetDiscoveryStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexAssetResourceStatus {
}

export function dataplexAssetResourceStatusToTerraform(struct?: DataplexAssetResourceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexAssetResourceStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplexAssetResourceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexAssetResourceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataplexAssetResourceStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataplexAssetResourceStatusOutputReference {
    return new DataplexAssetResourceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexAssetSecurityStatus {
}

export function dataplexAssetSecurityStatusToTerraform(struct?: DataplexAssetSecurityStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexAssetSecurityStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplexAssetSecurityStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexAssetSecurityStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataplexAssetSecurityStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataplexAssetSecurityStatusOutputReference {
    return new DataplexAssetSecurityStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexAssetDiscoverySpecCsvOptions {
  /**
  * Optional. The delimiter being used to separate values. This defaults to ','.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#delimiter DataplexAsset#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#disable_type_inference DataplexAsset#disable_type_inference}
  */
  readonly disableTypeInference?: boolean | cdktf.IResolvable;
  /**
  * Optional. The character encoding of the data. The default is UTF-8.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#encoding DataplexAsset#encoding}
  */
  readonly encoding?: string;
  /**
  * Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#header_rows DataplexAsset#header_rows}
  */
  readonly headerRows?: number;
}

export function dataplexAssetDiscoverySpecCsvOptionsToTerraform(struct?: DataplexAssetDiscoverySpecCsvOptionsOutputReference | DataplexAssetDiscoverySpecCsvOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    disable_type_inference: cdktf.booleanToTerraform(struct!.disableTypeInference),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    header_rows: cdktf.numberToTerraform(struct!.headerRows),
  }
}

export class DataplexAssetDiscoverySpecCsvOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexAssetDiscoverySpecCsvOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._disableTypeInference !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTypeInference = this._disableTypeInference;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._headerRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRows = this._headerRows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexAssetDiscoverySpecCsvOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._disableTypeInference = undefined;
      this._encoding = undefined;
      this._headerRows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._disableTypeInference = value.disableTypeInference;
      this._encoding = value.encoding;
      this._headerRows = value.headerRows;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // disable_type_inference - computed: false, optional: true, required: false
  private _disableTypeInference?: boolean | cdktf.IResolvable; 
  public get disableTypeInference() {
    return this.getBooleanAttribute('disable_type_inference');
  }
  public set disableTypeInference(value: boolean | cdktf.IResolvable) {
    this._disableTypeInference = value;
  }
  public resetDisableTypeInference() {
    this._disableTypeInference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTypeInferenceInput() {
    return this._disableTypeInference;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // header_rows - computed: false, optional: true, required: false
  private _headerRows?: number; 
  public get headerRows() {
    return this.getNumberAttribute('header_rows');
  }
  public set headerRows(value: number) {
    this._headerRows = value;
  }
  public resetHeaderRows() {
    this._headerRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRowsInput() {
    return this._headerRows;
  }
}
export interface DataplexAssetDiscoverySpecJsonOptions {
  /**
  * Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#disable_type_inference DataplexAsset#disable_type_inference}
  */
  readonly disableTypeInference?: boolean | cdktf.IResolvable;
  /**
  * Optional. The character encoding of the data. The default is UTF-8.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#encoding DataplexAsset#encoding}
  */
  readonly encoding?: string;
}

export function dataplexAssetDiscoverySpecJsonOptionsToTerraform(struct?: DataplexAssetDiscoverySpecJsonOptionsOutputReference | DataplexAssetDiscoverySpecJsonOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_type_inference: cdktf.booleanToTerraform(struct!.disableTypeInference),
    encoding: cdktf.stringToTerraform(struct!.encoding),
  }
}

export class DataplexAssetDiscoverySpecJsonOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexAssetDiscoverySpecJsonOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableTypeInference !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTypeInference = this._disableTypeInference;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexAssetDiscoverySpecJsonOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableTypeInference = undefined;
      this._encoding = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableTypeInference = value.disableTypeInference;
      this._encoding = value.encoding;
    }
  }

  // disable_type_inference - computed: false, optional: true, required: false
  private _disableTypeInference?: boolean | cdktf.IResolvable; 
  public get disableTypeInference() {
    return this.getBooleanAttribute('disable_type_inference');
  }
  public set disableTypeInference(value: boolean | cdktf.IResolvable) {
    this._disableTypeInference = value;
  }
  public resetDisableTypeInference() {
    this._disableTypeInference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTypeInferenceInput() {
    return this._disableTypeInference;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }
}
export interface DataplexAssetDiscoverySpec {
  /**
  * Required. Whether discovery is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#enabled DataplexAsset#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#exclude_patterns DataplexAsset#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#include_patterns DataplexAsset#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#schedule DataplexAsset#schedule}
  */
  readonly schedule?: string;
  /**
  * csv_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#csv_options DataplexAsset#csv_options}
  */
  readonly csvOptions?: DataplexAssetDiscoverySpecCsvOptions;
  /**
  * json_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#json_options DataplexAsset#json_options}
  */
  readonly jsonOptions?: DataplexAssetDiscoverySpecJsonOptions;
}

export function dataplexAssetDiscoverySpecToTerraform(struct?: DataplexAssetDiscoverySpecOutputReference | DataplexAssetDiscoverySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    csv_options: dataplexAssetDiscoverySpecCsvOptionsToTerraform(struct!.csvOptions),
    json_options: dataplexAssetDiscoverySpecJsonOptionsToTerraform(struct!.jsonOptions),
  }
}

export class DataplexAssetDiscoverySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexAssetDiscoverySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._csvOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvOptions = this._csvOptions?.internalValue;
    }
    if (this._jsonOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonOptions = this._jsonOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexAssetDiscoverySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
      this._schedule = undefined;
      this._csvOptions.internalValue = undefined;
      this._jsonOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
      this._schedule = value.schedule;
      this._csvOptions.internalValue = value.csvOptions;
      this._jsonOptions.internalValue = value.jsonOptions;
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

  // exclude_patterns - computed: false, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return this.getListAttribute('exclude_patterns');
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: false, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return this.getListAttribute('include_patterns');
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // csv_options - computed: false, optional: true, required: false
  private _csvOptions = new DataplexAssetDiscoverySpecCsvOptionsOutputReference(this, "csv_options");
  public get csvOptions() {
    return this._csvOptions;
  }
  public putCsvOptions(value: DataplexAssetDiscoverySpecCsvOptions) {
    this._csvOptions.internalValue = value;
  }
  public resetCsvOptions() {
    this._csvOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvOptionsInput() {
    return this._csvOptions.internalValue;
  }

  // json_options - computed: false, optional: true, required: false
  private _jsonOptions = new DataplexAssetDiscoverySpecJsonOptionsOutputReference(this, "json_options");
  public get jsonOptions() {
    return this._jsonOptions;
  }
  public putJsonOptions(value: DataplexAssetDiscoverySpecJsonOptions) {
    this._jsonOptions.internalValue = value;
  }
  public resetJsonOptions() {
    this._jsonOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonOptionsInput() {
    return this._jsonOptions.internalValue;
  }
}
export interface DataplexAssetResourceSpec {
  /**
  * Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: `projects/{project_number}/buckets/{bucket_id}` `projects/{project_number}/datasets/{dataset_id}`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#name DataplexAsset#name}
  */
  readonly name?: string;
  /**
  * Required. Immutable. Type of resource. Possible values: STORAGE_BUCKET, BIGQUERY_DATASET
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#type DataplexAsset#type}
  */
  readonly type: string;
}

export function dataplexAssetResourceSpecToTerraform(struct?: DataplexAssetResourceSpecOutputReference | DataplexAssetResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataplexAssetResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexAssetResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexAssetResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
export interface DataplexAssetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#create DataplexAsset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#delete DataplexAsset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#update DataplexAsset#update}
  */
  readonly update?: string;
}

export function dataplexAssetTimeoutsToTerraform(struct?: DataplexAssetTimeoutsOutputReference | DataplexAssetTimeouts | cdktf.IResolvable): any {
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

export class DataplexAssetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexAssetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataplexAssetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset google_dataplex_asset}
*/
export class DataplexAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_asset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset google_dataplex_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataplexAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DataplexAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_asset',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._dataplexZone = config.dataplexZone;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._lake = config.lake;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._discoverySpec.internalValue = config.discoverySpec;
    this._resourceSpec.internalValue = config.resourceSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dataplex_zone - computed: false, optional: false, required: true
  private _dataplexZone?: string; 
  public get dataplexZone() {
    return this.getStringAttribute('dataplex_zone');
  }
  public set dataplexZone(value: string) {
    this._dataplexZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplexZoneInput() {
    return this._dataplexZone;
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

  // discovery_status - computed: true, optional: false, required: false
  private _discoveryStatus = new DataplexAssetDiscoveryStatusList(this, "discovery_status", false);
  public get discoveryStatus() {
    return this._discoveryStatus;
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

  // lake - computed: false, optional: false, required: true
  private _lake?: string; 
  public get lake() {
    return this.getStringAttribute('lake');
  }
  public set lake(value: string) {
    this._lake = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeInput() {
    return this._lake;
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

  // resource_status - computed: true, optional: false, required: false
  private _resourceStatus = new DataplexAssetResourceStatusList(this, "resource_status", false);
  public get resourceStatus() {
    return this._resourceStatus;
  }

  // security_status - computed: true, optional: false, required: false
  private _securityStatus = new DataplexAssetSecurityStatusList(this, "security_status", false);
  public get securityStatus() {
    return this._securityStatus;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // discovery_spec - computed: false, optional: false, required: true
  private _discoverySpec = new DataplexAssetDiscoverySpecOutputReference(this, "discovery_spec");
  public get discoverySpec() {
    return this._discoverySpec;
  }
  public putDiscoverySpec(value: DataplexAssetDiscoverySpec) {
    this._discoverySpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverySpecInput() {
    return this._discoverySpec.internalValue;
  }

  // resource_spec - computed: false, optional: false, required: true
  private _resourceSpec = new DataplexAssetResourceSpecOutputReference(this, "resource_spec");
  public get resourceSpec() {
    return this._resourceSpec;
  }
  public putResourceSpec(value: DataplexAssetResourceSpec) {
    this._resourceSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSpecInput() {
    return this._resourceSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataplexAssetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataplexAssetTimeouts) {
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
      dataplex_zone: cdktf.stringToTerraform(this._dataplexZone),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      lake: cdktf.stringToTerraform(this._lake),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      discovery_spec: dataplexAssetDiscoverySpecToTerraform(this._discoverySpec.internalValue),
      resource_spec: dataplexAssetResourceSpecToTerraform(this._resourceSpec.internalValue),
      timeouts: dataplexAssetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
