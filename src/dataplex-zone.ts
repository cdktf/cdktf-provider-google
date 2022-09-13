// https://www.terraform.io/docs/providers/google/r/dataplex_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataplexZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Description of the zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#description DataplexZone#description}
  */
  readonly description?: string;
  /**
  * Optional. User friendly display name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#display_name DataplexZone#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#id DataplexZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. User defined labels for the zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#labels DataplexZone#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The lake for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#lake DataplexZone#lake}
  */
  readonly lake: string;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#location DataplexZone#location}
  */
  readonly location: string;
  /**
  * The name of the zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#name DataplexZone#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#project DataplexZone#project}
  */
  readonly project?: string;
  /**
  * Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#type DataplexZone#type}
  */
  readonly type: string;
  /**
  * discovery_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#discovery_spec DataplexZone#discovery_spec}
  */
  readonly discoverySpec: DataplexZoneDiscoverySpec;
  /**
  * resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#resource_spec DataplexZone#resource_spec}
  */
  readonly resourceSpec: DataplexZoneResourceSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#timeouts DataplexZone#timeouts}
  */
  readonly timeouts?: DataplexZoneTimeouts;
}
export interface DataplexZoneAssetStatus {
}

export function dataplexZoneAssetStatusToTerraform(struct?: DataplexZoneAssetStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataplexZoneAssetStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplexZoneAssetStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexZoneAssetStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_assets - computed: true, optional: false, required: false
  public get activeAssets() {
    return this.getNumberAttribute('active_assets');
  }

  // security_policy_applying_assets - computed: true, optional: false, required: false
  public get securityPolicyApplyingAssets() {
    return this.getNumberAttribute('security_policy_applying_assets');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataplexZoneAssetStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataplexZoneAssetStatusOutputReference {
    return new DataplexZoneAssetStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexZoneDiscoverySpecCsvOptions {
  /**
  * Optional. The delimiter being used to separate values. This defaults to ','.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#delimiter DataplexZone#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#disable_type_inference DataplexZone#disable_type_inference}
  */
  readonly disableTypeInference?: boolean | cdktf.IResolvable;
  /**
  * Optional. The character encoding of the data. The default is UTF-8.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#encoding DataplexZone#encoding}
  */
  readonly encoding?: string;
  /**
  * Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#header_rows DataplexZone#header_rows}
  */
  readonly headerRows?: number;
}

export function dataplexZoneDiscoverySpecCsvOptionsToTerraform(struct?: DataplexZoneDiscoverySpecCsvOptionsOutputReference | DataplexZoneDiscoverySpecCsvOptions): any {
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

export class DataplexZoneDiscoverySpecCsvOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexZoneDiscoverySpecCsvOptions | undefined {
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

  public set internalValue(value: DataplexZoneDiscoverySpecCsvOptions | undefined) {
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
export interface DataplexZoneDiscoverySpecJsonOptions {
  /**
  * Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#disable_type_inference DataplexZone#disable_type_inference}
  */
  readonly disableTypeInference?: boolean | cdktf.IResolvable;
  /**
  * Optional. The character encoding of the data. The default is UTF-8.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#encoding DataplexZone#encoding}
  */
  readonly encoding?: string;
}

export function dataplexZoneDiscoverySpecJsonOptionsToTerraform(struct?: DataplexZoneDiscoverySpecJsonOptionsOutputReference | DataplexZoneDiscoverySpecJsonOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_type_inference: cdktf.booleanToTerraform(struct!.disableTypeInference),
    encoding: cdktf.stringToTerraform(struct!.encoding),
  }
}

export class DataplexZoneDiscoverySpecJsonOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexZoneDiscoverySpecJsonOptions | undefined {
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

  public set internalValue(value: DataplexZoneDiscoverySpecJsonOptions | undefined) {
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
export interface DataplexZoneDiscoverySpec {
  /**
  * Required. Whether discovery is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#enabled DataplexZone#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#exclude_patterns DataplexZone#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#include_patterns DataplexZone#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#schedule DataplexZone#schedule}
  */
  readonly schedule?: string;
  /**
  * csv_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#csv_options DataplexZone#csv_options}
  */
  readonly csvOptions?: DataplexZoneDiscoverySpecCsvOptions;
  /**
  * json_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#json_options DataplexZone#json_options}
  */
  readonly jsonOptions?: DataplexZoneDiscoverySpecJsonOptions;
}

export function dataplexZoneDiscoverySpecToTerraform(struct?: DataplexZoneDiscoverySpecOutputReference | DataplexZoneDiscoverySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    csv_options: dataplexZoneDiscoverySpecCsvOptionsToTerraform(struct!.csvOptions),
    json_options: dataplexZoneDiscoverySpecJsonOptionsToTerraform(struct!.jsonOptions),
  }
}

export class DataplexZoneDiscoverySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexZoneDiscoverySpec | undefined {
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

  public set internalValue(value: DataplexZoneDiscoverySpec | undefined) {
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

  // schedule - computed: true, optional: true, required: false
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
  private _csvOptions = new DataplexZoneDiscoverySpecCsvOptionsOutputReference(this, "csv_options");
  public get csvOptions() {
    return this._csvOptions;
  }
  public putCsvOptions(value: DataplexZoneDiscoverySpecCsvOptions) {
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
  private _jsonOptions = new DataplexZoneDiscoverySpecJsonOptionsOutputReference(this, "json_options");
  public get jsonOptions() {
    return this._jsonOptions;
  }
  public putJsonOptions(value: DataplexZoneDiscoverySpecJsonOptions) {
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
export interface DataplexZoneResourceSpec {
  /**
  * Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. Possible values: LOCATION_TYPE_UNSPECIFIED, SINGLE_REGION, MULTI_REGION
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#location_type DataplexZone#location_type}
  */
  readonly locationType: string;
}

export function dataplexZoneResourceSpecToTerraform(struct?: DataplexZoneResourceSpecOutputReference | DataplexZoneResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_type: cdktf.stringToTerraform(struct!.locationType),
  }
}

export class DataplexZoneResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexZoneResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexZoneResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locationType = value.locationType;
    }
  }

  // location_type - computed: false, optional: false, required: true
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
  }
}
export interface DataplexZoneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#create DataplexZone#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#delete DataplexZone#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#update DataplexZone#update}
  */
  readonly update?: string;
}

export function dataplexZoneTimeoutsToTerraform(struct?: DataplexZoneTimeoutsOutputReference | DataplexZoneTimeouts | cdktf.IResolvable): any {
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

export class DataplexZoneTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexZoneTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataplexZoneTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone google_dataplex_zone}
*/
export class DataplexZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_zone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone google_dataplex_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataplexZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataplexZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_zone',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._lake = config.lake;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._type = config.type;
    this._discoverySpec.internalValue = config.discoverySpec;
    this._resourceSpec.internalValue = config.resourceSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_status - computed: true, optional: false, required: false
  private _assetStatus = new DataplexZoneAssetStatusList(this, "asset_status", false);
  public get assetStatus() {
    return this._assetStatus;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // discovery_spec - computed: false, optional: false, required: true
  private _discoverySpec = new DataplexZoneDiscoverySpecOutputReference(this, "discovery_spec");
  public get discoverySpec() {
    return this._discoverySpec;
  }
  public putDiscoverySpec(value: DataplexZoneDiscoverySpec) {
    this._discoverySpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverySpecInput() {
    return this._discoverySpec.internalValue;
  }

  // resource_spec - computed: false, optional: false, required: true
  private _resourceSpec = new DataplexZoneResourceSpecOutputReference(this, "resource_spec");
  public get resourceSpec() {
    return this._resourceSpec;
  }
  public putResourceSpec(value: DataplexZoneResourceSpec) {
    this._resourceSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSpecInput() {
    return this._resourceSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataplexZoneTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataplexZoneTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      lake: cdktf.stringToTerraform(this._lake),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      discovery_spec: dataplexZoneDiscoverySpecToTerraform(this._discoverySpec.internalValue),
      resource_spec: dataplexZoneResourceSpecToTerraform(this._resourceSpec.internalValue),
      timeouts: dataplexZoneTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
