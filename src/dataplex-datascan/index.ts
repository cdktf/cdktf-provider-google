/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataplexDatascanConfig extends cdktf.TerraformMetaArguments {
  /**
  * DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#data_scan_id DataplexDatascan#data_scan_id}
  */
  readonly dataScanId: string;
  /**
  * Description of the scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#description DataplexDatascan#description}
  */
  readonly description?: string;
  /**
  * User friendly display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#display_name DataplexDatascan#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#id DataplexDatascan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the scan. A list of key->value pairs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#labels DataplexDatascan#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the data scan should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#location DataplexDatascan#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#project DataplexDatascan#project}
  */
  readonly project?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#data DataplexDatascan#data}
  */
  readonly data: DataplexDatascanData;
  /**
  * data_discovery_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#data_discovery_spec DataplexDatascan#data_discovery_spec}
  */
  readonly dataDiscoverySpec?: DataplexDatascanDataDiscoverySpec;
  /**
  * data_profile_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#data_profile_spec DataplexDatascan#data_profile_spec}
  */
  readonly dataProfileSpec?: DataplexDatascanDataProfileSpec;
  /**
  * data_quality_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#data_quality_spec DataplexDatascan#data_quality_spec}
  */
  readonly dataQualitySpec?: DataplexDatascanDataQualitySpec;
  /**
  * execution_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#execution_spec DataplexDatascan#execution_spec}
  */
  readonly executionSpec: DataplexDatascanExecutionSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#timeouts DataplexDatascan#timeouts}
  */
  readonly timeouts?: DataplexDatascanTimeouts;
}
export interface DataplexDatascanExecutionStatus {
}

export function dataplexDatascanExecutionStatusToTerraform(struct?: DataplexDatascanExecutionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataplexDatascanExecutionStatusToHclTerraform(struct?: DataplexDatascanExecutionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataplexDatascanExecutionStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplexDatascanExecutionStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanExecutionStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latest_job_end_time - computed: true, optional: false, required: false
  public get latestJobEndTime() {
    return this.getStringAttribute('latest_job_end_time');
  }

  // latest_job_start_time - computed: true, optional: false, required: false
  public get latestJobStartTime() {
    return this.getStringAttribute('latest_job_start_time');
  }
}

export class DataplexDatascanExecutionStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataplexDatascanExecutionStatusOutputReference {
    return new DataplexDatascanExecutionStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanData {
  /**
  * The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#entity DataplexDatascan#entity}
  */
  readonly entity?: string;
  /**
  * The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be:
  * Cloud Storage bucket (//storage.googleapis.com/projects/PROJECT_ID/buckets/BUCKET_ID) for DataDiscoveryScan OR BigQuery table of type "TABLE" (/bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID) for DataProfileScan/DataQualityScan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#resource DataplexDatascan#resource}
  */
  readonly resource?: string;
}

export function dataplexDatascanDataToTerraform(struct?: DataplexDatascanDataOutputReference | DataplexDatascanData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity: cdktf.stringToTerraform(struct!.entity),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataplexDatascanDataToHclTerraform(struct?: DataplexDatascanDataOutputReference | DataplexDatascanData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity: {
      value: cdktf.stringToHclTerraform(struct!.entity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entity !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entity = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entity = value.entity;
      this._resource = value.resource;
    }
  }

  // entity - computed: false, optional: true, required: false
  private _entity?: string; 
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  public resetEntity() {
    this._entity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig {
  /**
  * The BigQuery connection used to create BigLake tables. Must be in the form 'projects/{projectId}/locations/{locationId}/connections/{connection_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#connection DataplexDatascan#connection}
  */
  readonly connection?: string;
  /**
  * The location of the BigQuery dataset to publish BigLake external or non-BigLake external tables to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#location DataplexDatascan#location}
  */
  readonly location?: string;
  /**
  * The project of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. If not specified, the project of the Cloud Storage bucket will be used. The format is "projects/{project_id_or_number}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#project DataplexDatascan#project}
  */
  readonly project?: string;
  /**
  * Determines whether to publish discovered tables as BigLake external tables or non-BigLake external tables. Possible values: ["TABLE_TYPE_UNSPECIFIED", "EXTERNAL", "BIGLAKE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#table_type DataplexDatascan#table_type}
  */
  readonly tableType?: string;
}

export function dataplexDatascanDataDiscoverySpecBigqueryPublishingConfigToTerraform(struct?: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference | DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: cdktf.stringToTerraform(struct!.connection),
    location: cdktf.stringToTerraform(struct!.location),
    project: cdktf.stringToTerraform(struct!.project),
    table_type: cdktf.stringToTerraform(struct!.tableType),
  }
}


export function dataplexDatascanDataDiscoverySpecBigqueryPublishingConfigToHclTerraform(struct?: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference | DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: cdktf.stringToHclTerraform(struct!.connection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_type: {
      value: cdktf.stringToHclTerraform(struct!.tableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._tableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableType = this._tableType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connection = undefined;
      this._location = undefined;
      this._project = undefined;
      this._tableType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connection = value.connection;
      this._location = value.location;
      this._project = value.project;
      this._tableType = value.tableType;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection?: string; 
  public get connection() {
    return this.getStringAttribute('connection');
  }
  public set connection(value: string) {
    this._connection = value;
  }
  public resetConnection() {
    this._connection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection;
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

  // table_type - computed: false, optional: true, required: false
  private _tableType?: string; 
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
  public set tableType(value: string) {
    this._tableType = value;
  }
  public resetTableType() {
    this._tableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypeInput() {
    return this._tableType;
  }
}
export interface DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions {
  /**
  * The delimiter that is used to separate values. The default is ',' (comma).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#delimiter DataplexDatascan#delimiter}
  */
  readonly delimiter?: string;
  /**
  * The character encoding of the data. The default is UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#encoding DataplexDatascan#encoding}
  */
  readonly encoding?: string;
  /**
  * The number of rows to interpret as header rows that should be skipped when reading data rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#header_rows DataplexDatascan#header_rows}
  */
  readonly headerRows?: number;
  /**
  * The character used to quote column values. Accepts '"' (double quotation mark) or ``` (single quotation mark). If unspecified, defaults to '"' (double quotation mark).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#quote DataplexDatascan#quote}
  */
  readonly quote?: string;
  /**
  * Whether to disable the inference of data types for CSV data. If true, all columns are registered as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#type_inference_disabled DataplexDatascan#type_inference_disabled}
  */
  readonly typeInferenceDisabled?: boolean | cdktf.IResolvable;
}

export function dataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsToTerraform(struct?: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference | DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    header_rows: cdktf.numberToTerraform(struct!.headerRows),
    quote: cdktf.stringToTerraform(struct!.quote),
    type_inference_disabled: cdktf.booleanToTerraform(struct!.typeInferenceDisabled),
  }
}


export function dataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsToHclTerraform(struct?: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference | DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_rows: {
      value: cdktf.numberToHclTerraform(struct!.headerRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quote: {
      value: cdktf.stringToHclTerraform(struct!.quote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_inference_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.typeInferenceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._headerRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRows = this._headerRows;
    }
    if (this._quote !== undefined) {
      hasAnyValues = true;
      internalValueResult.quote = this._quote;
    }
    if (this._typeInferenceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeInferenceDisabled = this._typeInferenceDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._encoding = undefined;
      this._headerRows = undefined;
      this._quote = undefined;
      this._typeInferenceDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._encoding = value.encoding;
      this._headerRows = value.headerRows;
      this._quote = value.quote;
      this._typeInferenceDisabled = value.typeInferenceDisabled;
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

  // quote - computed: false, optional: true, required: false
  private _quote?: string; 
  public get quote() {
    return this.getStringAttribute('quote');
  }
  public set quote(value: string) {
    this._quote = value;
  }
  public resetQuote() {
    this._quote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteInput() {
    return this._quote;
  }

  // type_inference_disabled - computed: false, optional: true, required: false
  private _typeInferenceDisabled?: boolean | cdktf.IResolvable; 
  public get typeInferenceDisabled() {
    return this.getBooleanAttribute('type_inference_disabled');
  }
  public set typeInferenceDisabled(value: boolean | cdktf.IResolvable) {
    this._typeInferenceDisabled = value;
  }
  public resetTypeInferenceDisabled() {
    this._typeInferenceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInferenceDisabledInput() {
    return this._typeInferenceDisabled;
  }
}
export interface DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions {
  /**
  * The character encoding of the data. The default is UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#encoding DataplexDatascan#encoding}
  */
  readonly encoding?: string;
  /**
  * Whether to disable the inference of data types for JSON data. If true, all columns are registered as their primitive types (strings, number, or boolean).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#type_inference_disabled DataplexDatascan#type_inference_disabled}
  */
  readonly typeInferenceDisabled?: boolean | cdktf.IResolvable;
}

export function dataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsToTerraform(struct?: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference | DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    type_inference_disabled: cdktf.booleanToTerraform(struct!.typeInferenceDisabled),
  }
}


export function dataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsToHclTerraform(struct?: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference | DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_inference_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.typeInferenceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._typeInferenceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeInferenceDisabled = this._typeInferenceDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encoding = undefined;
      this._typeInferenceDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encoding = value.encoding;
      this._typeInferenceDisabled = value.typeInferenceDisabled;
    }
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

  // type_inference_disabled - computed: false, optional: true, required: false
  private _typeInferenceDisabled?: boolean | cdktf.IResolvable; 
  public get typeInferenceDisabled() {
    return this.getBooleanAttribute('type_inference_disabled');
  }
  public set typeInferenceDisabled(value: boolean | cdktf.IResolvable) {
    this._typeInferenceDisabled = value;
  }
  public resetTypeInferenceDisabled() {
    this._typeInferenceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInferenceDisabledInput() {
    return this._typeInferenceDisabled;
  }
}
export interface DataplexDatascanDataDiscoverySpecStorageConfig {
  /**
  * Defines the data to exclude during discovery. Provide a list of patterns that identify the data to exclude. For Cloud Storage bucket assets, these patterns are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these patterns are interpreted as patterns to match table names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#exclude_patterns DataplexDatascan#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * Defines the data to include during discovery when only a subset of the data should be considered. Provide a list of patterns that identify the data to include. For Cloud Storage bucket assets, these patterns are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these patterns are interpreted as patterns to match table names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#include_patterns DataplexDatascan#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * csv_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#csv_options DataplexDatascan#csv_options}
  */
  readonly csvOptions?: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions;
  /**
  * json_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#json_options DataplexDatascan#json_options}
  */
  readonly jsonOptions?: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions;
}

export function dataplexDatascanDataDiscoverySpecStorageConfigToTerraform(struct?: DataplexDatascanDataDiscoverySpecStorageConfigOutputReference | DataplexDatascanDataDiscoverySpecStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
    csv_options: dataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsToTerraform(struct!.csvOptions),
    json_options: dataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsToTerraform(struct!.jsonOptions),
  }
}


export function dataplexDatascanDataDiscoverySpecStorageConfigToHclTerraform(struct?: DataplexDatascanDataDiscoverySpecStorageConfigOutputReference | DataplexDatascanDataDiscoverySpecStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    csv_options: {
      value: dataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsToHclTerraform(struct!.csvOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsList",
    },
    json_options: {
      value: dataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsToHclTerraform(struct!.jsonOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataDiscoverySpecStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataDiscoverySpecStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
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

  public set internalValue(value: DataplexDatascanDataDiscoverySpecStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
      this._csvOptions.internalValue = undefined;
      this._jsonOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
      this._csvOptions.internalValue = value.csvOptions;
      this._jsonOptions.internalValue = value.jsonOptions;
    }
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

  // csv_options - computed: false, optional: true, required: false
  private _csvOptions = new DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference(this, "csv_options");
  public get csvOptions() {
    return this._csvOptions;
  }
  public putCsvOptions(value: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions) {
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
  private _jsonOptions = new DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference(this, "json_options");
  public get jsonOptions() {
    return this._jsonOptions;
  }
  public putJsonOptions(value: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions) {
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
export interface DataplexDatascanDataDiscoverySpec {
  /**
  * bigquery_publishing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#bigquery_publishing_config DataplexDatascan#bigquery_publishing_config}
  */
  readonly bigqueryPublishingConfig?: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#storage_config DataplexDatascan#storage_config}
  */
  readonly storageConfig?: DataplexDatascanDataDiscoverySpecStorageConfig;
}

export function dataplexDatascanDataDiscoverySpecToTerraform(struct?: DataplexDatascanDataDiscoverySpecOutputReference | DataplexDatascanDataDiscoverySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_publishing_config: dataplexDatascanDataDiscoverySpecBigqueryPublishingConfigToTerraform(struct!.bigqueryPublishingConfig),
    storage_config: dataplexDatascanDataDiscoverySpecStorageConfigToTerraform(struct!.storageConfig),
  }
}


export function dataplexDatascanDataDiscoverySpecToHclTerraform(struct?: DataplexDatascanDataDiscoverySpecOutputReference | DataplexDatascanDataDiscoverySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_publishing_config: {
      value: dataplexDatascanDataDiscoverySpecBigqueryPublishingConfigToHclTerraform(struct!.bigqueryPublishingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigList",
    },
    storage_config: {
      value: dataplexDatascanDataDiscoverySpecStorageConfigToHclTerraform(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataDiscoverySpecStorageConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataDiscoverySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataDiscoverySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryPublishingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryPublishingConfig = this._bigqueryPublishingConfig?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataDiscoverySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryPublishingConfig.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryPublishingConfig.internalValue = value.bigqueryPublishingConfig;
      this._storageConfig.internalValue = value.storageConfig;
    }
  }

  // bigquery_publishing_config - computed: false, optional: true, required: false
  private _bigqueryPublishingConfig = new DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference(this, "bigquery_publishing_config");
  public get bigqueryPublishingConfig() {
    return this._bigqueryPublishingConfig;
  }
  public putBigqueryPublishingConfig(value: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig) {
    this._bigqueryPublishingConfig.internalValue = value;
  }
  public resetBigqueryPublishingConfig() {
    this._bigqueryPublishingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryPublishingConfigInput() {
    return this._bigqueryPublishingConfig.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new DataplexDatascanDataDiscoverySpecStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: DataplexDatascanDataDiscoverySpecStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }
}
export interface DataplexDatascanDataProfileSpecExcludeFields {
  /**
  * Expected input is a list of fully qualified names of fields as in the schema.
  * Only top-level field names for nested fields are supported.
  * For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#field_names DataplexDatascan#field_names}
  */
  readonly fieldNames?: string[];
}

export function dataplexDatascanDataProfileSpecExcludeFieldsToTerraform(struct?: DataplexDatascanDataProfileSpecExcludeFieldsOutputReference | DataplexDatascanDataProfileSpecExcludeFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldNames),
  }
}


export function dataplexDatascanDataProfileSpecExcludeFieldsToHclTerraform(struct?: DataplexDatascanDataProfileSpecExcludeFieldsOutputReference | DataplexDatascanDataProfileSpecExcludeFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataProfileSpecExcludeFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataProfileSpecExcludeFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNames = this._fieldNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileSpecExcludeFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldNames = value.fieldNames;
    }
  }

  // field_names - computed: false, optional: true, required: false
  private _fieldNames?: string[]; 
  public get fieldNames() {
    return this.getListAttribute('field_names');
  }
  public set fieldNames(value: string[]) {
    this._fieldNames = value;
  }
  public resetFieldNames() {
    this._fieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNamesInput() {
    return this._fieldNames;
  }
}
export interface DataplexDatascanDataProfileSpecIncludeFields {
  /**
  * Expected input is a list of fully qualified names of fields as in the schema.
  * Only top-level field names for nested fields are supported.
  * For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#field_names DataplexDatascan#field_names}
  */
  readonly fieldNames?: string[];
}

export function dataplexDatascanDataProfileSpecIncludeFieldsToTerraform(struct?: DataplexDatascanDataProfileSpecIncludeFieldsOutputReference | DataplexDatascanDataProfileSpecIncludeFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldNames),
  }
}


export function dataplexDatascanDataProfileSpecIncludeFieldsToHclTerraform(struct?: DataplexDatascanDataProfileSpecIncludeFieldsOutputReference | DataplexDatascanDataProfileSpecIncludeFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataProfileSpecIncludeFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataProfileSpecIncludeFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNames = this._fieldNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileSpecIncludeFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldNames = value.fieldNames;
    }
  }

  // field_names - computed: false, optional: true, required: false
  private _fieldNames?: string[]; 
  public get fieldNames() {
    return this.getListAttribute('field_names');
  }
  public set fieldNames(value: string[]) {
    this._fieldNames = value;
  }
  public resetFieldNames() {
    this._fieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNamesInput() {
    return this._fieldNames;
  }
}
export interface DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport {
  /**
  * The BigQuery table to export DataProfileScan results to.
  * Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#results_table DataplexDatascan#results_table}
  */
  readonly resultsTable?: string;
}

export function dataplexDatascanDataProfileSpecPostScanActionsBigqueryExportToTerraform(struct?: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference | DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    results_table: cdktf.stringToTerraform(struct!.resultsTable),
  }
}


export function dataplexDatascanDataProfileSpecPostScanActionsBigqueryExportToHclTerraform(struct?: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference | DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    results_table: {
      value: cdktf.stringToHclTerraform(struct!.resultsTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resultsTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultsTable = this._resultsTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resultsTable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resultsTable = value.resultsTable;
    }
  }

  // results_table - computed: false, optional: true, required: false
  private _resultsTable?: string; 
  public get resultsTable() {
    return this.getStringAttribute('results_table');
  }
  public set resultsTable(value: string) {
    this._resultsTable = value;
  }
  public resetResultsTable() {
    this._resultsTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsTableInput() {
    return this._resultsTable;
  }
}
export interface DataplexDatascanDataProfileSpecPostScanActions {
  /**
  * bigquery_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#bigquery_export DataplexDatascan#bigquery_export}
  */
  readonly bigqueryExport?: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport;
}

export function dataplexDatascanDataProfileSpecPostScanActionsToTerraform(struct?: DataplexDatascanDataProfileSpecPostScanActionsOutputReference | DataplexDatascanDataProfileSpecPostScanActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_export: dataplexDatascanDataProfileSpecPostScanActionsBigqueryExportToTerraform(struct!.bigqueryExport),
  }
}


export function dataplexDatascanDataProfileSpecPostScanActionsToHclTerraform(struct?: DataplexDatascanDataProfileSpecPostScanActionsOutputReference | DataplexDatascanDataProfileSpecPostScanActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_export: {
      value: dataplexDatascanDataProfileSpecPostScanActionsBigqueryExportToHclTerraform(struct!.bigqueryExport),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataProfileSpecPostScanActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataProfileSpecPostScanActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryExport = this._bigqueryExport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileSpecPostScanActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryExport.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryExport.internalValue = value.bigqueryExport;
    }
  }

  // bigquery_export - computed: false, optional: true, required: false
  private _bigqueryExport = new DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference(this, "bigquery_export");
  public get bigqueryExport() {
    return this._bigqueryExport;
  }
  public putBigqueryExport(value: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport) {
    this._bigqueryExport.internalValue = value;
  }
  public resetBigqueryExport() {
    this._bigqueryExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryExportInput() {
    return this._bigqueryExport.internalValue;
  }
}
export interface DataplexDatascanDataProfileSpec {
  /**
  * A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}
  */
  readonly rowFilter?: string;
  /**
  * The percentage of the records to be selected from the dataset for DataScan.
  * Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
  * Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}
  */
  readonly samplingPercent?: number;
  /**
  * exclude_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#exclude_fields DataplexDatascan#exclude_fields}
  */
  readonly excludeFields?: DataplexDatascanDataProfileSpecExcludeFields;
  /**
  * include_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#include_fields DataplexDatascan#include_fields}
  */
  readonly includeFields?: DataplexDatascanDataProfileSpecIncludeFields;
  /**
  * post_scan_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#post_scan_actions DataplexDatascan#post_scan_actions}
  */
  readonly postScanActions?: DataplexDatascanDataProfileSpecPostScanActions;
}

export function dataplexDatascanDataProfileSpecToTerraform(struct?: DataplexDatascanDataProfileSpecOutputReference | DataplexDatascanDataProfileSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    row_filter: cdktf.stringToTerraform(struct!.rowFilter),
    sampling_percent: cdktf.numberToTerraform(struct!.samplingPercent),
    exclude_fields: dataplexDatascanDataProfileSpecExcludeFieldsToTerraform(struct!.excludeFields),
    include_fields: dataplexDatascanDataProfileSpecIncludeFieldsToTerraform(struct!.includeFields),
    post_scan_actions: dataplexDatascanDataProfileSpecPostScanActionsToTerraform(struct!.postScanActions),
  }
}


export function dataplexDatascanDataProfileSpecToHclTerraform(struct?: DataplexDatascanDataProfileSpecOutputReference | DataplexDatascanDataProfileSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    row_filter: {
      value: cdktf.stringToHclTerraform(struct!.rowFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_percent: {
      value: cdktf.numberToHclTerraform(struct!.samplingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclude_fields: {
      value: dataplexDatascanDataProfileSpecExcludeFieldsToHclTerraform(struct!.excludeFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataProfileSpecExcludeFieldsList",
    },
    include_fields: {
      value: dataplexDatascanDataProfileSpecIncludeFieldsToHclTerraform(struct!.includeFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataProfileSpecIncludeFieldsList",
    },
    post_scan_actions: {
      value: dataplexDatascanDataProfileSpecPostScanActionsToHclTerraform(struct!.postScanActions),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataProfileSpecPostScanActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataProfileSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataProfileSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter;
    }
    if (this._samplingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPercent = this._samplingPercent;
    }
    if (this._excludeFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFields = this._excludeFields?.internalValue;
    }
    if (this._includeFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFields = this._includeFields?.internalValue;
    }
    if (this._postScanActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScanActions = this._postScanActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataProfileSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rowFilter = undefined;
      this._samplingPercent = undefined;
      this._excludeFields.internalValue = undefined;
      this._includeFields.internalValue = undefined;
      this._postScanActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rowFilter = value.rowFilter;
      this._samplingPercent = value.samplingPercent;
      this._excludeFields.internalValue = value.excludeFields;
      this._includeFields.internalValue = value.includeFields;
      this._postScanActions.internalValue = value.postScanActions;
    }
  }

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter?: string; 
  public get rowFilter() {
    return this.getStringAttribute('row_filter');
  }
  public set rowFilter(value: string) {
    this._rowFilter = value;
  }
  public resetRowFilter() {
    this._rowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter;
  }

  // sampling_percent - computed: false, optional: true, required: false
  private _samplingPercent?: number; 
  public get samplingPercent() {
    return this.getNumberAttribute('sampling_percent');
  }
  public set samplingPercent(value: number) {
    this._samplingPercent = value;
  }
  public resetSamplingPercent() {
    this._samplingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentInput() {
    return this._samplingPercent;
  }

  // exclude_fields - computed: false, optional: true, required: false
  private _excludeFields = new DataplexDatascanDataProfileSpecExcludeFieldsOutputReference(this, "exclude_fields");
  public get excludeFields() {
    return this._excludeFields;
  }
  public putExcludeFields(value: DataplexDatascanDataProfileSpecExcludeFields) {
    this._excludeFields.internalValue = value;
  }
  public resetExcludeFields() {
    this._excludeFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFieldsInput() {
    return this._excludeFields.internalValue;
  }

  // include_fields - computed: false, optional: true, required: false
  private _includeFields = new DataplexDatascanDataProfileSpecIncludeFieldsOutputReference(this, "include_fields");
  public get includeFields() {
    return this._includeFields;
  }
  public putIncludeFields(value: DataplexDatascanDataProfileSpecIncludeFields) {
    this._includeFields.internalValue = value;
  }
  public resetIncludeFields() {
    this._includeFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFieldsInput() {
    return this._includeFields.internalValue;
  }

  // post_scan_actions - computed: false, optional: true, required: false
  private _postScanActions = new DataplexDatascanDataProfileSpecPostScanActionsOutputReference(this, "post_scan_actions");
  public get postScanActions() {
    return this._postScanActions;
  }
  public putPostScanActions(value: DataplexDatascanDataProfileSpecPostScanActions) {
    this._postScanActions.internalValue = value;
  }
  public resetPostScanActions() {
    this._postScanActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScanActionsInput() {
    return this._postScanActions.internalValue;
  }
}
export interface DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport {
  /**
  * The BigQuery table to export DataQualityScan results to.
  * Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#results_table DataplexDatascan#results_table}
  */
  readonly resultsTable?: string;
}

export function dataplexDatascanDataQualitySpecPostScanActionsBigqueryExportToTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference | DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    results_table: cdktf.stringToTerraform(struct!.resultsTable),
  }
}


export function dataplexDatascanDataQualitySpecPostScanActionsBigqueryExportToHclTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference | DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    results_table: {
      value: cdktf.stringToHclTerraform(struct!.resultsTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resultsTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultsTable = this._resultsTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resultsTable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resultsTable = value.resultsTable;
    }
  }

  // results_table - computed: false, optional: true, required: false
  private _resultsTable?: string; 
  public get resultsTable() {
    return this.getStringAttribute('results_table');
  }
  public set resultsTable(value: string) {
    this._resultsTable = value;
  }
  public resetResultsTable() {
    this._resultsTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsTableInput() {
    return this._resultsTable;
  }
}
export interface DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger {
}

export function dataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerToTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference | DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerToHclTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference | DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger {
}

export function dataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerToTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference | DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerToHclTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference | DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients {
  /**
  * The email recipients who will receive the DataQualityScan results report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#emails DataplexDatascan#emails}
  */
  readonly emails?: string[];
}

export function dataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsToTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference | DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
  }
}


export function dataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsToHclTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference | DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emails = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emails = value.emails;
    }
  }

  // emails - computed: false, optional: true, required: false
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }
}
export interface DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger {
  /**
  * The score range is in [0,100].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#score_threshold DataplexDatascan#score_threshold}
  */
  readonly scoreThreshold?: number;
}

export function dataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerToTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference | DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score_threshold: cdktf.numberToTerraform(struct!.scoreThreshold),
  }
}


export function dataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerToHclTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference | DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score_threshold: {
      value: cdktf.numberToHclTerraform(struct!.scoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoreThreshold = this._scoreThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scoreThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scoreThreshold = value.scoreThreshold;
    }
  }

  // score_threshold - computed: false, optional: true, required: false
  private _scoreThreshold?: number; 
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }
  public set scoreThreshold(value: number) {
    this._scoreThreshold = value;
  }
  public resetScoreThreshold() {
    this._scoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreThresholdInput() {
    return this._scoreThreshold;
  }
}
export interface DataplexDatascanDataQualitySpecPostScanActionsNotificationReport {
  /**
  * job_end_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#job_end_trigger DataplexDatascan#job_end_trigger}
  */
  readonly jobEndTrigger?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger;
  /**
  * job_failure_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#job_failure_trigger DataplexDatascan#job_failure_trigger}
  */
  readonly jobFailureTrigger?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger;
  /**
  * recipients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#recipients DataplexDatascan#recipients}
  */
  readonly recipients: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients;
  /**
  * score_threshold_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#score_threshold_trigger DataplexDatascan#score_threshold_trigger}
  */
  readonly scoreThresholdTrigger?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger;
}

export function dataplexDatascanDataQualitySpecPostScanActionsNotificationReportToTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference | DataplexDatascanDataQualitySpecPostScanActionsNotificationReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_end_trigger: dataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerToTerraform(struct!.jobEndTrigger),
    job_failure_trigger: dataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerToTerraform(struct!.jobFailureTrigger),
    recipients: dataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsToTerraform(struct!.recipients),
    score_threshold_trigger: dataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerToTerraform(struct!.scoreThresholdTrigger),
  }
}


export function dataplexDatascanDataQualitySpecPostScanActionsNotificationReportToHclTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference | DataplexDatascanDataQualitySpecPostScanActionsNotificationReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_end_trigger: {
      value: dataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerToHclTerraform(struct!.jobEndTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerList",
    },
    job_failure_trigger: {
      value: dataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerToHclTerraform(struct!.jobFailureTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerList",
    },
    recipients: {
      value: dataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsToHclTerraform(struct!.recipients),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsList",
    },
    score_threshold_trigger: {
      value: dataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerToHclTerraform(struct!.scoreThresholdTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecPostScanActionsNotificationReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobEndTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobEndTrigger = this._jobEndTrigger?.internalValue;
    }
    if (this._jobFailureTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobFailureTrigger = this._jobFailureTrigger?.internalValue;
    }
    if (this._recipients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients?.internalValue;
    }
    if (this._scoreThresholdTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoreThresholdTrigger = this._scoreThresholdTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobEndTrigger.internalValue = undefined;
      this._jobFailureTrigger.internalValue = undefined;
      this._recipients.internalValue = undefined;
      this._scoreThresholdTrigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobEndTrigger.internalValue = value.jobEndTrigger;
      this._jobFailureTrigger.internalValue = value.jobFailureTrigger;
      this._recipients.internalValue = value.recipients;
      this._scoreThresholdTrigger.internalValue = value.scoreThresholdTrigger;
    }
  }

  // job_end_trigger - computed: false, optional: true, required: false
  private _jobEndTrigger = new DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference(this, "job_end_trigger");
  public get jobEndTrigger() {
    return this._jobEndTrigger;
  }
  public putJobEndTrigger(value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger) {
    this._jobEndTrigger.internalValue = value;
  }
  public resetJobEndTrigger() {
    this._jobEndTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobEndTriggerInput() {
    return this._jobEndTrigger.internalValue;
  }

  // job_failure_trigger - computed: false, optional: true, required: false
  private _jobFailureTrigger = new DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference(this, "job_failure_trigger");
  public get jobFailureTrigger() {
    return this._jobFailureTrigger;
  }
  public putJobFailureTrigger(value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger) {
    this._jobFailureTrigger.internalValue = value;
  }
  public resetJobFailureTrigger() {
    this._jobFailureTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobFailureTriggerInput() {
    return this._jobFailureTrigger.internalValue;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients = new DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference(this, "recipients");
  public get recipients() {
    return this._recipients;
  }
  public putRecipients(value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients) {
    this._recipients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients.internalValue;
  }

  // score_threshold_trigger - computed: false, optional: true, required: false
  private _scoreThresholdTrigger = new DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference(this, "score_threshold_trigger");
  public get scoreThresholdTrigger() {
    return this._scoreThresholdTrigger;
  }
  public putScoreThresholdTrigger(value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger) {
    this._scoreThresholdTrigger.internalValue = value;
  }
  public resetScoreThresholdTrigger() {
    this._scoreThresholdTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreThresholdTriggerInput() {
    return this._scoreThresholdTrigger.internalValue;
  }
}
export interface DataplexDatascanDataQualitySpecPostScanActions {
  /**
  * bigquery_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#bigquery_export DataplexDatascan#bigquery_export}
  */
  readonly bigqueryExport?: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport;
  /**
  * notification_report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#notification_report DataplexDatascan#notification_report}
  */
  readonly notificationReport?: DataplexDatascanDataQualitySpecPostScanActionsNotificationReport;
}

export function dataplexDatascanDataQualitySpecPostScanActionsToTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsOutputReference | DataplexDatascanDataQualitySpecPostScanActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_export: dataplexDatascanDataQualitySpecPostScanActionsBigqueryExportToTerraform(struct!.bigqueryExport),
    notification_report: dataplexDatascanDataQualitySpecPostScanActionsNotificationReportToTerraform(struct!.notificationReport),
  }
}


export function dataplexDatascanDataQualitySpecPostScanActionsToHclTerraform(struct?: DataplexDatascanDataQualitySpecPostScanActionsOutputReference | DataplexDatascanDataQualitySpecPostScanActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_export: {
      value: dataplexDatascanDataQualitySpecPostScanActionsBigqueryExportToHclTerraform(struct!.bigqueryExport),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportList",
    },
    notification_report: {
      value: dataplexDatascanDataQualitySpecPostScanActionsNotificationReportToHclTerraform(struct!.notificationReport),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecPostScanActionsNotificationReportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecPostScanActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecPostScanActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryExport = this._bigqueryExport?.internalValue;
    }
    if (this._notificationReport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationReport = this._notificationReport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecPostScanActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryExport.internalValue = undefined;
      this._notificationReport.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryExport.internalValue = value.bigqueryExport;
      this._notificationReport.internalValue = value.notificationReport;
    }
  }

  // bigquery_export - computed: false, optional: true, required: false
  private _bigqueryExport = new DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference(this, "bigquery_export");
  public get bigqueryExport() {
    return this._bigqueryExport;
  }
  public putBigqueryExport(value: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport) {
    this._bigqueryExport.internalValue = value;
  }
  public resetBigqueryExport() {
    this._bigqueryExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryExportInput() {
    return this._bigqueryExport.internalValue;
  }

  // notification_report - computed: false, optional: true, required: false
  private _notificationReport = new DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference(this, "notification_report");
  public get notificationReport() {
    return this._notificationReport;
  }
  public putNotificationReport(value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReport) {
    this._notificationReport.internalValue = value;
  }
  public resetNotificationReport() {
    this._notificationReport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationReportInput() {
    return this._notificationReport.internalValue;
  }
}
export interface DataplexDatascanDataQualitySpecRulesNonNullExpectation {
}

export function dataplexDatascanDataQualitySpecRulesNonNullExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference | DataplexDatascanDataQualitySpecRulesNonNullExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataplexDatascanDataQualitySpecRulesNonNullExpectationToHclTerraform(struct?: DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference | DataplexDatascanDataQualitySpecRulesNonNullExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesNonNullExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesNonNullExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataplexDatascanDataQualitySpecRulesRangeExpectation {
  /**
  * The maximum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}
  */
  readonly maxValue?: string;
  /**
  * The minimum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}
  */
  readonly minValue?: string;
  /**
  * Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
  * Only relevant if a maxValue has been defined. Default = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}
  */
  readonly strictMaxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.
  * Only relevant if a minValue has been defined. Default = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}
  */
  readonly strictMinEnabled?: boolean | cdktf.IResolvable;
}

export function dataplexDatascanDataQualitySpecRulesRangeExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference | DataplexDatascanDataQualitySpecRulesRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    strict_max_enabled: cdktf.booleanToTerraform(struct!.strictMaxEnabled),
    strict_min_enabled: cdktf.booleanToTerraform(struct!.strictMinEnabled),
  }
}


export function dataplexDatascanDataQualitySpecRulesRangeExpectationToHclTerraform(struct?: DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference | DataplexDatascanDataQualitySpecRulesRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_max_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.strictMaxEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_min_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.strictMinEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesRangeExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._strictMaxEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMaxEnabled = this._strictMaxEnabled;
    }
    if (this._strictMinEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMinEnabled = this._strictMinEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesRangeExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._strictMaxEnabled = undefined;
      this._strictMinEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._strictMaxEnabled = value.strictMaxEnabled;
      this._strictMinEnabled = value.strictMinEnabled;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // strict_max_enabled - computed: false, optional: true, required: false
  private _strictMaxEnabled?: boolean | cdktf.IResolvable; 
  public get strictMaxEnabled() {
    return this.getBooleanAttribute('strict_max_enabled');
  }
  public set strictMaxEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMaxEnabled = value;
  }
  public resetStrictMaxEnabled() {
    this._strictMaxEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMaxEnabledInput() {
    return this._strictMaxEnabled;
  }

  // strict_min_enabled - computed: false, optional: true, required: false
  private _strictMinEnabled?: boolean | cdktf.IResolvable; 
  public get strictMinEnabled() {
    return this.getBooleanAttribute('strict_min_enabled');
  }
  public set strictMinEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMinEnabled = value;
  }
  public resetStrictMinEnabled() {
    this._strictMinEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMinEnabledInput() {
    return this._strictMinEnabled;
  }
}
export interface DataplexDatascanDataQualitySpecRulesRegexExpectation {
  /**
  * A regular expression the column value is expected to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#regex DataplexDatascan#regex}
  */
  readonly regex: string;
}

export function dataplexDatascanDataQualitySpecRulesRegexExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference | DataplexDatascanDataQualitySpecRulesRegexExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataplexDatascanDataQualitySpecRulesRegexExpectationToHclTerraform(struct?: DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference | DataplexDatascanDataQualitySpecRulesRegexExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesRegexExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesRegexExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
    }
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataplexDatascanDataQualitySpecRulesRowConditionExpectation {
  /**
  * The SQL expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}
  */
  readonly sqlExpression: string;
}

export function dataplexDatascanDataQualitySpecRulesRowConditionExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference | DataplexDatascanDataQualitySpecRulesRowConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
  }
}


export function dataplexDatascanDataQualitySpecRulesRowConditionExpectationToHclTerraform(struct?: DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference | DataplexDatascanDataQualitySpecRulesRowConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sql_expression: {
      value: cdktf.stringToHclTerraform(struct!.sqlExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesRowConditionExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesRowConditionExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlExpression = value.sqlExpression;
    }
  }

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }
}
export interface DataplexDatascanDataQualitySpecRulesSetExpectation {
  /**
  * Expected values for the column value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#values DataplexDatascan#values}
  */
  readonly values: string[];
}

export function dataplexDatascanDataQualitySpecRulesSetExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference | DataplexDatascanDataQualitySpecRulesSetExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataplexDatascanDataQualitySpecRulesSetExpectationToHclTerraform(struct?: DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference | DataplexDatascanDataQualitySpecRulesSetExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesSetExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesSetExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DataplexDatascanDataQualitySpecRulesSqlAssertion {
  /**
  * The SQL statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sql_statement DataplexDatascan#sql_statement}
  */
  readonly sqlStatement: string;
}

export function dataplexDatascanDataQualitySpecRulesSqlAssertionToTerraform(struct?: DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference | DataplexDatascanDataQualitySpecRulesSqlAssertion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sql_statement: cdktf.stringToTerraform(struct!.sqlStatement),
  }
}


export function dataplexDatascanDataQualitySpecRulesSqlAssertionToHclTerraform(struct?: DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference | DataplexDatascanDataQualitySpecRulesSqlAssertion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sql_statement: {
      value: cdktf.stringToHclTerraform(struct!.sqlStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesSqlAssertion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlStatement = this._sqlStatement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesSqlAssertion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlStatement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlStatement = value.sqlStatement;
    }
  }

  // sql_statement - computed: false, optional: false, required: true
  private _sqlStatement?: string; 
  public get sqlStatement() {
    return this.getStringAttribute('sql_statement');
  }
  public set sqlStatement(value: string) {
    this._sqlStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlStatementInput() {
    return this._sqlStatement;
  }
}
export interface DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation {
  /**
  * The maximum column statistic value allowed for a row to pass this validation.
  * At least one of minValue and maxValue need to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}
  */
  readonly maxValue?: string;
  /**
  * The minimum column statistic value allowed for a row to pass this validation.
  * At least one of minValue and maxValue need to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}
  */
  readonly minValue?: string;
  /**
  * column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#statistic DataplexDatascan#statistic}
  */
  readonly statistic: string;
  /**
  * Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
  * Only relevant if a maxValue has been defined. Default = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}
  */
  readonly strictMaxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.
  * Only relevant if a minValue has been defined. Default = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}
  */
  readonly strictMinEnabled?: boolean | cdktf.IResolvable;
}

export function dataplexDatascanDataQualitySpecRulesStatisticRangeExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference | DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    strict_max_enabled: cdktf.booleanToTerraform(struct!.strictMaxEnabled),
    strict_min_enabled: cdktf.booleanToTerraform(struct!.strictMinEnabled),
  }
}


export function dataplexDatascanDataQualitySpecRulesStatisticRangeExpectationToHclTerraform(struct?: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference | DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_max_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.strictMaxEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_min_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.strictMinEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._strictMaxEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMaxEnabled = this._strictMaxEnabled;
    }
    if (this._strictMinEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMinEnabled = this._strictMinEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._statistic = undefined;
      this._strictMaxEnabled = undefined;
      this._strictMinEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._statistic = value.statistic;
      this._strictMaxEnabled = value.strictMaxEnabled;
      this._strictMinEnabled = value.strictMinEnabled;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // statistic - computed: false, optional: false, required: true
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // strict_max_enabled - computed: false, optional: true, required: false
  private _strictMaxEnabled?: boolean | cdktf.IResolvable; 
  public get strictMaxEnabled() {
    return this.getBooleanAttribute('strict_max_enabled');
  }
  public set strictMaxEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMaxEnabled = value;
  }
  public resetStrictMaxEnabled() {
    this._strictMaxEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMaxEnabledInput() {
    return this._strictMaxEnabled;
  }

  // strict_min_enabled - computed: false, optional: true, required: false
  private _strictMinEnabled?: boolean | cdktf.IResolvable; 
  public get strictMinEnabled() {
    return this.getBooleanAttribute('strict_min_enabled');
  }
  public set strictMinEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMinEnabled = value;
  }
  public resetStrictMinEnabled() {
    this._strictMinEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMinEnabledInput() {
    return this._strictMinEnabled;
  }
}
export interface DataplexDatascanDataQualitySpecRulesTableConditionExpectation {
  /**
  * The SQL expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}
  */
  readonly sqlExpression: string;
}

export function dataplexDatascanDataQualitySpecRulesTableConditionExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference | DataplexDatascanDataQualitySpecRulesTableConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
  }
}


export function dataplexDatascanDataQualitySpecRulesTableConditionExpectationToHclTerraform(struct?: DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference | DataplexDatascanDataQualitySpecRulesTableConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sql_expression: {
      value: cdktf.stringToHclTerraform(struct!.sqlExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesTableConditionExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesTableConditionExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlExpression = value.sqlExpression;
    }
  }

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }
}
export interface DataplexDatascanDataQualitySpecRulesUniquenessExpectation {
}

export function dataplexDatascanDataQualitySpecRulesUniquenessExpectationToTerraform(struct?: DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference | DataplexDatascanDataQualitySpecRulesUniquenessExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataplexDatascanDataQualitySpecRulesUniquenessExpectationToHclTerraform(struct?: DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference | DataplexDatascanDataQualitySpecRulesUniquenessExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpecRulesUniquenessExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRulesUniquenessExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataplexDatascanDataQualitySpecRules {
  /**
  * The unnested column which this rule is evaluated against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#column DataplexDatascan#column}
  */
  readonly column?: string;
  /**
  * Description of the rule.
  * The maximum length is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#description DataplexDatascan#description}
  */
  readonly description?: string;
  /**
  * The dimension name a rule belongs to. Custom dimension name is supported with all uppercase letters and maximum length of 30 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#dimension DataplexDatascan#dimension}
  */
  readonly dimension: string;
  /**
  * Rows with null values will automatically fail a rule, unless ignoreNull is true. In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#ignore_null DataplexDatascan#ignore_null}
  */
  readonly ignoreNull?: boolean | cdktf.IResolvable;
  /**
  * A mutable name for the rule.
  * The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
  * The maximum length is 63 characters.
  * Must start with a letter.
  * Must end with a number or a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#name DataplexDatascan#name}
  */
  readonly name?: string;
  /**
  * Whether the Rule is active or suspended. Default = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#suspended DataplexDatascan#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#threshold DataplexDatascan#threshold}
  */
  readonly threshold?: number;
  /**
  * non_null_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#non_null_expectation DataplexDatascan#non_null_expectation}
  */
  readonly nonNullExpectation?: DataplexDatascanDataQualitySpecRulesNonNullExpectation;
  /**
  * range_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#range_expectation DataplexDatascan#range_expectation}
  */
  readonly rangeExpectation?: DataplexDatascanDataQualitySpecRulesRangeExpectation;
  /**
  * regex_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#regex_expectation DataplexDatascan#regex_expectation}
  */
  readonly regexExpectation?: DataplexDatascanDataQualitySpecRulesRegexExpectation;
  /**
  * row_condition_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#row_condition_expectation DataplexDatascan#row_condition_expectation}
  */
  readonly rowConditionExpectation?: DataplexDatascanDataQualitySpecRulesRowConditionExpectation;
  /**
  * set_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#set_expectation DataplexDatascan#set_expectation}
  */
  readonly setExpectation?: DataplexDatascanDataQualitySpecRulesSetExpectation;
  /**
  * sql_assertion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sql_assertion DataplexDatascan#sql_assertion}
  */
  readonly sqlAssertion?: DataplexDatascanDataQualitySpecRulesSqlAssertion;
  /**
  * statistic_range_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#statistic_range_expectation DataplexDatascan#statistic_range_expectation}
  */
  readonly statisticRangeExpectation?: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation;
  /**
  * table_condition_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#table_condition_expectation DataplexDatascan#table_condition_expectation}
  */
  readonly tableConditionExpectation?: DataplexDatascanDataQualitySpecRulesTableConditionExpectation;
  /**
  * uniqueness_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#uniqueness_expectation DataplexDatascan#uniqueness_expectation}
  */
  readonly uniquenessExpectation?: DataplexDatascanDataQualitySpecRulesUniquenessExpectation;
}

export function dataplexDatascanDataQualitySpecRulesToTerraform(struct?: DataplexDatascanDataQualitySpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    description: cdktf.stringToTerraform(struct!.description),
    dimension: cdktf.stringToTerraform(struct!.dimension),
    ignore_null: cdktf.booleanToTerraform(struct!.ignoreNull),
    name: cdktf.stringToTerraform(struct!.name),
    suspended: cdktf.booleanToTerraform(struct!.suspended),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    non_null_expectation: dataplexDatascanDataQualitySpecRulesNonNullExpectationToTerraform(struct!.nonNullExpectation),
    range_expectation: dataplexDatascanDataQualitySpecRulesRangeExpectationToTerraform(struct!.rangeExpectation),
    regex_expectation: dataplexDatascanDataQualitySpecRulesRegexExpectationToTerraform(struct!.regexExpectation),
    row_condition_expectation: dataplexDatascanDataQualitySpecRulesRowConditionExpectationToTerraform(struct!.rowConditionExpectation),
    set_expectation: dataplexDatascanDataQualitySpecRulesSetExpectationToTerraform(struct!.setExpectation),
    sql_assertion: dataplexDatascanDataQualitySpecRulesSqlAssertionToTerraform(struct!.sqlAssertion),
    statistic_range_expectation: dataplexDatascanDataQualitySpecRulesStatisticRangeExpectationToTerraform(struct!.statisticRangeExpectation),
    table_condition_expectation: dataplexDatascanDataQualitySpecRulesTableConditionExpectationToTerraform(struct!.tableConditionExpectation),
    uniqueness_expectation: dataplexDatascanDataQualitySpecRulesUniquenessExpectationToTerraform(struct!.uniquenessExpectation),
  }
}


export function dataplexDatascanDataQualitySpecRulesToHclTerraform(struct?: DataplexDatascanDataQualitySpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktf.stringToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_null: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspended: {
      value: cdktf.booleanToHclTerraform(struct!.suspended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_null_expectation: {
      value: dataplexDatascanDataQualitySpecRulesNonNullExpectationToHclTerraform(struct!.nonNullExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecRulesNonNullExpectationList",
    },
    range_expectation: {
      value: dataplexDatascanDataQualitySpecRulesRangeExpectationToHclTerraform(struct!.rangeExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecRulesRangeExpectationList",
    },
    regex_expectation: {
      value: dataplexDatascanDataQualitySpecRulesRegexExpectationToHclTerraform(struct!.regexExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecRulesRegexExpectationList",
    },
    row_condition_expectation: {
      value: dataplexDatascanDataQualitySpecRulesRowConditionExpectationToHclTerraform(struct!.rowConditionExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecRulesRowConditionExpectationList",
    },
    set_expectation: {
      value: dataplexDatascanDataQualitySpecRulesSetExpectationToHclTerraform(struct!.setExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecRulesSetExpectationList",
    },
    sql_assertion: {
      value: dataplexDatascanDataQualitySpecRulesSqlAssertionToHclTerraform(struct!.sqlAssertion),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecRulesSqlAssertionList",
    },
    statistic_range_expectation: {
      value: dataplexDatascanDataQualitySpecRulesStatisticRangeExpectationToHclTerraform(struct!.statisticRangeExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationList",
    },
    table_condition_expectation: {
      value: dataplexDatascanDataQualitySpecRulesTableConditionExpectationToHclTerraform(struct!.tableConditionExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecRulesTableConditionExpectationList",
    },
    uniqueness_expectation: {
      value: dataplexDatascanDataQualitySpecRulesUniquenessExpectationToHclTerraform(struct!.uniquenessExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecRulesUniquenessExpectationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplexDatascanDataQualitySpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._ignoreNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNull = this._ignoreNull;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._suspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspended = this._suspended;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._nonNullExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonNullExpectation = this._nonNullExpectation?.internalValue;
    }
    if (this._rangeExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeExpectation = this._rangeExpectation?.internalValue;
    }
    if (this._regexExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexExpectation = this._regexExpectation?.internalValue;
    }
    if (this._rowConditionExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowConditionExpectation = this._rowConditionExpectation?.internalValue;
    }
    if (this._setExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExpectation = this._setExpectation?.internalValue;
    }
    if (this._sqlAssertion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlAssertion = this._sqlAssertion?.internalValue;
    }
    if (this._statisticRangeExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticRangeExpectation = this._statisticRangeExpectation?.internalValue;
    }
    if (this._tableConditionExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConditionExpectation = this._tableConditionExpectation?.internalValue;
    }
    if (this._uniquenessExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniquenessExpectation = this._uniquenessExpectation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._description = undefined;
      this._dimension = undefined;
      this._ignoreNull = undefined;
      this._name = undefined;
      this._suspended = undefined;
      this._threshold = undefined;
      this._nonNullExpectation.internalValue = undefined;
      this._rangeExpectation.internalValue = undefined;
      this._regexExpectation.internalValue = undefined;
      this._rowConditionExpectation.internalValue = undefined;
      this._setExpectation.internalValue = undefined;
      this._sqlAssertion.internalValue = undefined;
      this._statisticRangeExpectation.internalValue = undefined;
      this._tableConditionExpectation.internalValue = undefined;
      this._uniquenessExpectation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._description = value.description;
      this._dimension = value.dimension;
      this._ignoreNull = value.ignoreNull;
      this._name = value.name;
      this._suspended = value.suspended;
      this._threshold = value.threshold;
      this._nonNullExpectation.internalValue = value.nonNullExpectation;
      this._rangeExpectation.internalValue = value.rangeExpectation;
      this._regexExpectation.internalValue = value.regexExpectation;
      this._rowConditionExpectation.internalValue = value.rowConditionExpectation;
      this._setExpectation.internalValue = value.setExpectation;
      this._sqlAssertion.internalValue = value.sqlAssertion;
      this._statisticRangeExpectation.internalValue = value.statisticRangeExpectation;
      this._tableConditionExpectation.internalValue = value.tableConditionExpectation;
      this._uniquenessExpectation.internalValue = value.uniquenessExpectation;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
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

  // dimension - computed: false, optional: false, required: true
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // ignore_null - computed: false, optional: true, required: false
  private _ignoreNull?: boolean | cdktf.IResolvable; 
  public get ignoreNull() {
    return this.getBooleanAttribute('ignore_null');
  }
  public set ignoreNull(value: boolean | cdktf.IResolvable) {
    this._ignoreNull = value;
  }
  public resetIgnoreNull() {
    this._ignoreNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNullInput() {
    return this._ignoreNull;
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

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // non_null_expectation - computed: false, optional: true, required: false
  private _nonNullExpectation = new DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference(this, "non_null_expectation");
  public get nonNullExpectation() {
    return this._nonNullExpectation;
  }
  public putNonNullExpectation(value: DataplexDatascanDataQualitySpecRulesNonNullExpectation) {
    this._nonNullExpectation.internalValue = value;
  }
  public resetNonNullExpectation() {
    this._nonNullExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonNullExpectationInput() {
    return this._nonNullExpectation.internalValue;
  }

  // range_expectation - computed: false, optional: true, required: false
  private _rangeExpectation = new DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference(this, "range_expectation");
  public get rangeExpectation() {
    return this._rangeExpectation;
  }
  public putRangeExpectation(value: DataplexDatascanDataQualitySpecRulesRangeExpectation) {
    this._rangeExpectation.internalValue = value;
  }
  public resetRangeExpectation() {
    this._rangeExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeExpectationInput() {
    return this._rangeExpectation.internalValue;
  }

  // regex_expectation - computed: false, optional: true, required: false
  private _regexExpectation = new DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference(this, "regex_expectation");
  public get regexExpectation() {
    return this._regexExpectation;
  }
  public putRegexExpectation(value: DataplexDatascanDataQualitySpecRulesRegexExpectation) {
    this._regexExpectation.internalValue = value;
  }
  public resetRegexExpectation() {
    this._regexExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexExpectationInput() {
    return this._regexExpectation.internalValue;
  }

  // row_condition_expectation - computed: false, optional: true, required: false
  private _rowConditionExpectation = new DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference(this, "row_condition_expectation");
  public get rowConditionExpectation() {
    return this._rowConditionExpectation;
  }
  public putRowConditionExpectation(value: DataplexDatascanDataQualitySpecRulesRowConditionExpectation) {
    this._rowConditionExpectation.internalValue = value;
  }
  public resetRowConditionExpectation() {
    this._rowConditionExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowConditionExpectationInput() {
    return this._rowConditionExpectation.internalValue;
  }

  // set_expectation - computed: false, optional: true, required: false
  private _setExpectation = new DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference(this, "set_expectation");
  public get setExpectation() {
    return this._setExpectation;
  }
  public putSetExpectation(value: DataplexDatascanDataQualitySpecRulesSetExpectation) {
    this._setExpectation.internalValue = value;
  }
  public resetSetExpectation() {
    this._setExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExpectationInput() {
    return this._setExpectation.internalValue;
  }

  // sql_assertion - computed: false, optional: true, required: false
  private _sqlAssertion = new DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference(this, "sql_assertion");
  public get sqlAssertion() {
    return this._sqlAssertion;
  }
  public putSqlAssertion(value: DataplexDatascanDataQualitySpecRulesSqlAssertion) {
    this._sqlAssertion.internalValue = value;
  }
  public resetSqlAssertion() {
    this._sqlAssertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAssertionInput() {
    return this._sqlAssertion.internalValue;
  }

  // statistic_range_expectation - computed: false, optional: true, required: false
  private _statisticRangeExpectation = new DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference(this, "statistic_range_expectation");
  public get statisticRangeExpectation() {
    return this._statisticRangeExpectation;
  }
  public putStatisticRangeExpectation(value: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation) {
    this._statisticRangeExpectation.internalValue = value;
  }
  public resetStatisticRangeExpectation() {
    this._statisticRangeExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticRangeExpectationInput() {
    return this._statisticRangeExpectation.internalValue;
  }

  // table_condition_expectation - computed: false, optional: true, required: false
  private _tableConditionExpectation = new DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference(this, "table_condition_expectation");
  public get tableConditionExpectation() {
    return this._tableConditionExpectation;
  }
  public putTableConditionExpectation(value: DataplexDatascanDataQualitySpecRulesTableConditionExpectation) {
    this._tableConditionExpectation.internalValue = value;
  }
  public resetTableConditionExpectation() {
    this._tableConditionExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConditionExpectationInput() {
    return this._tableConditionExpectation.internalValue;
  }

  // uniqueness_expectation - computed: false, optional: true, required: false
  private _uniquenessExpectation = new DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference(this, "uniqueness_expectation");
  public get uniquenessExpectation() {
    return this._uniquenessExpectation;
  }
  public putUniquenessExpectation(value: DataplexDatascanDataQualitySpecRulesUniquenessExpectation) {
    this._uniquenessExpectation.internalValue = value;
  }
  public resetUniquenessExpectation() {
    this._uniquenessExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniquenessExpectationInput() {
    return this._uniquenessExpectation.internalValue;
  }
}

export class DataplexDatascanDataQualitySpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataplexDatascanDataQualitySpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataplexDatascanDataQualitySpecRulesOutputReference {
    return new DataplexDatascanDataQualitySpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexDatascanDataQualitySpec {
  /**
  * If set, the latest DataScan job result will be published to Dataplex Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#catalog_publishing_enabled DataplexDatascan#catalog_publishing_enabled}
  */
  readonly catalogPublishingEnabled?: boolean | cdktf.IResolvable;
  /**
  * A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}
  */
  readonly rowFilter?: string;
  /**
  * The percentage of the records to be selected from the dataset for DataScan.
  * Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
  * Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}
  */
  readonly samplingPercent?: number;
  /**
  * post_scan_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#post_scan_actions DataplexDatascan#post_scan_actions}
  */
  readonly postScanActions?: DataplexDatascanDataQualitySpecPostScanActions;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#rules DataplexDatascan#rules}
  */
  readonly rules?: DataplexDatascanDataQualitySpecRules[] | cdktf.IResolvable;
}

export function dataplexDatascanDataQualitySpecToTerraform(struct?: DataplexDatascanDataQualitySpecOutputReference | DataplexDatascanDataQualitySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_publishing_enabled: cdktf.booleanToTerraform(struct!.catalogPublishingEnabled),
    row_filter: cdktf.stringToTerraform(struct!.rowFilter),
    sampling_percent: cdktf.numberToTerraform(struct!.samplingPercent),
    post_scan_actions: dataplexDatascanDataQualitySpecPostScanActionsToTerraform(struct!.postScanActions),
    rules: cdktf.listMapper(dataplexDatascanDataQualitySpecRulesToTerraform, true)(struct!.rules),
  }
}


export function dataplexDatascanDataQualitySpecToHclTerraform(struct?: DataplexDatascanDataQualitySpecOutputReference | DataplexDatascanDataQualitySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_publishing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.catalogPublishingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    row_filter: {
      value: cdktf.stringToHclTerraform(struct!.rowFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_percent: {
      value: cdktf.numberToHclTerraform(struct!.samplingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_scan_actions: {
      value: dataplexDatascanDataQualitySpecPostScanActionsToHclTerraform(struct!.postScanActions),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecPostScanActionsList",
    },
    rules: {
      value: cdktf.listMapperHcl(dataplexDatascanDataQualitySpecRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanDataQualitySpecRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanDataQualitySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanDataQualitySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogPublishingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogPublishingEnabled = this._catalogPublishingEnabled;
    }
    if (this._rowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter;
    }
    if (this._samplingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPercent = this._samplingPercent;
    }
    if (this._postScanActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScanActions = this._postScanActions?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanDataQualitySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogPublishingEnabled = undefined;
      this._rowFilter = undefined;
      this._samplingPercent = undefined;
      this._postScanActions.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogPublishingEnabled = value.catalogPublishingEnabled;
      this._rowFilter = value.rowFilter;
      this._samplingPercent = value.samplingPercent;
      this._postScanActions.internalValue = value.postScanActions;
      this._rules.internalValue = value.rules;
    }
  }

  // catalog_publishing_enabled - computed: false, optional: true, required: false
  private _catalogPublishingEnabled?: boolean | cdktf.IResolvable; 
  public get catalogPublishingEnabled() {
    return this.getBooleanAttribute('catalog_publishing_enabled');
  }
  public set catalogPublishingEnabled(value: boolean | cdktf.IResolvable) {
    this._catalogPublishingEnabled = value;
  }
  public resetCatalogPublishingEnabled() {
    this._catalogPublishingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogPublishingEnabledInput() {
    return this._catalogPublishingEnabled;
  }

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter?: string; 
  public get rowFilter() {
    return this.getStringAttribute('row_filter');
  }
  public set rowFilter(value: string) {
    this._rowFilter = value;
  }
  public resetRowFilter() {
    this._rowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter;
  }

  // sampling_percent - computed: false, optional: true, required: false
  private _samplingPercent?: number; 
  public get samplingPercent() {
    return this.getNumberAttribute('sampling_percent');
  }
  public set samplingPercent(value: number) {
    this._samplingPercent = value;
  }
  public resetSamplingPercent() {
    this._samplingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentInput() {
    return this._samplingPercent;
  }

  // post_scan_actions - computed: false, optional: true, required: false
  private _postScanActions = new DataplexDatascanDataQualitySpecPostScanActionsOutputReference(this, "post_scan_actions");
  public get postScanActions() {
    return this._postScanActions;
  }
  public putPostScanActions(value: DataplexDatascanDataQualitySpecPostScanActions) {
    this._postScanActions.internalValue = value;
  }
  public resetPostScanActions() {
    this._postScanActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScanActionsInput() {
    return this._postScanActions.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataplexDatascanDataQualitySpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataplexDatascanDataQualitySpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface DataplexDatascanExecutionSpecTriggerOnDemand {
}

export function dataplexDatascanExecutionSpecTriggerOnDemandToTerraform(struct?: DataplexDatascanExecutionSpecTriggerOnDemandOutputReference | DataplexDatascanExecutionSpecTriggerOnDemand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataplexDatascanExecutionSpecTriggerOnDemandToHclTerraform(struct?: DataplexDatascanExecutionSpecTriggerOnDemandOutputReference | DataplexDatascanExecutionSpecTriggerOnDemand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataplexDatascanExecutionSpecTriggerOnDemandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanExecutionSpecTriggerOnDemand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanExecutionSpecTriggerOnDemand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataplexDatascanExecutionSpecTriggerSchedule {
  /**
  * Cron schedule for running scans periodically. This field is required for Schedule scans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#cron DataplexDatascan#cron}
  */
  readonly cron: string;
}

export function dataplexDatascanExecutionSpecTriggerScheduleToTerraform(struct?: DataplexDatascanExecutionSpecTriggerScheduleOutputReference | DataplexDatascanExecutionSpecTriggerSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
  }
}


export function dataplexDatascanExecutionSpecTriggerScheduleToHclTerraform(struct?: DataplexDatascanExecutionSpecTriggerScheduleOutputReference | DataplexDatascanExecutionSpecTriggerSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanExecutionSpecTriggerScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanExecutionSpecTriggerSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanExecutionSpecTriggerSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cron = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cron = value.cron;
    }
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }
}
export interface DataplexDatascanExecutionSpecTrigger {
  /**
  * on_demand block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#on_demand DataplexDatascan#on_demand}
  */
  readonly onDemand?: DataplexDatascanExecutionSpecTriggerOnDemand;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#schedule DataplexDatascan#schedule}
  */
  readonly schedule?: DataplexDatascanExecutionSpecTriggerSchedule;
}

export function dataplexDatascanExecutionSpecTriggerToTerraform(struct?: DataplexDatascanExecutionSpecTriggerOutputReference | DataplexDatascanExecutionSpecTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_demand: dataplexDatascanExecutionSpecTriggerOnDemandToTerraform(struct!.onDemand),
    schedule: dataplexDatascanExecutionSpecTriggerScheduleToTerraform(struct!.schedule),
  }
}


export function dataplexDatascanExecutionSpecTriggerToHclTerraform(struct?: DataplexDatascanExecutionSpecTriggerOutputReference | DataplexDatascanExecutionSpecTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_demand: {
      value: dataplexDatascanExecutionSpecTriggerOnDemandToHclTerraform(struct!.onDemand),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanExecutionSpecTriggerOnDemandList",
    },
    schedule: {
      value: dataplexDatascanExecutionSpecTriggerScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanExecutionSpecTriggerScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanExecutionSpecTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanExecutionSpecTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDemand?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemand = this._onDemand?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanExecutionSpecTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDemand.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDemand.internalValue = value.onDemand;
      this._schedule.internalValue = value.schedule;
    }
  }

  // on_demand - computed: false, optional: true, required: false
  private _onDemand = new DataplexDatascanExecutionSpecTriggerOnDemandOutputReference(this, "on_demand");
  public get onDemand() {
    return this._onDemand;
  }
  public putOnDemand(value: DataplexDatascanExecutionSpecTriggerOnDemand) {
    this._onDemand.internalValue = value;
  }
  public resetOnDemand() {
    this._onDemand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandInput() {
    return this._onDemand.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataplexDatascanExecutionSpecTriggerScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataplexDatascanExecutionSpecTriggerSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface DataplexDatascanExecutionSpec {
  /**
  * The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. If not specified, a data scan will run for all data in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#field DataplexDatascan#field}
  */
  readonly field?: string;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#trigger DataplexDatascan#trigger}
  */
  readonly trigger: DataplexDatascanExecutionSpecTrigger;
}

export function dataplexDatascanExecutionSpecToTerraform(struct?: DataplexDatascanExecutionSpecOutputReference | DataplexDatascanExecutionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    trigger: dataplexDatascanExecutionSpecTriggerToTerraform(struct!.trigger),
  }
}


export function dataplexDatascanExecutionSpecToHclTerraform(struct?: DataplexDatascanExecutionSpecOutputReference | DataplexDatascanExecutionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger: {
      value: dataplexDatascanExecutionSpecTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexDatascanExecutionSpecTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexDatascanExecutionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexDatascanExecutionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexDatascanExecutionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._trigger.internalValue = value.trigger;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new DataplexDatascanExecutionSpecTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: DataplexDatascanExecutionSpecTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface DataplexDatascanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#create DataplexDatascan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#delete DataplexDatascan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#update DataplexDatascan#update}
  */
  readonly update?: string;
}

export function dataplexDatascanTimeoutsToTerraform(struct?: DataplexDatascanTimeouts | cdktf.IResolvable): any {
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


export function dataplexDatascanTimeoutsToHclTerraform(struct?: DataplexDatascanTimeouts | cdktf.IResolvable): any {
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

export class DataplexDatascanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplexDatascanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataplexDatascanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan google_dataplex_datascan}
*/
export class DataplexDatascan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_datascan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataplexDatascan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataplexDatascan to import
  * @param importFromId The id of the existing DataplexDatascan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataplexDatascan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataplex_datascan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan google_dataplex_datascan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataplexDatascanConfig
  */
  public constructor(scope: Construct, id: string, config: DataplexDatascanConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_datascan',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
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
    this._dataScanId = config.dataScanId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._data.internalValue = config.data;
    this._dataDiscoverySpec.internalValue = config.dataDiscoverySpec;
    this._dataProfileSpec.internalValue = config.dataProfileSpec;
    this._dataQualitySpec.internalValue = config.dataQualitySpec;
    this._executionSpec.internalValue = config.executionSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_scan_id - computed: false, optional: false, required: true
  private _dataScanId?: string; 
  public get dataScanId() {
    return this.getStringAttribute('data_scan_id');
  }
  public set dataScanId(value: string) {
    this._dataScanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataScanIdInput() {
    return this._dataScanId;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // execution_status - computed: true, optional: false, required: false
  private _executionStatus = new DataplexDatascanExecutionStatusList(this, "execution_status", false);
  public get executionStatus() {
    return this._executionStatus;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // data - computed: false, optional: false, required: true
  private _data = new DataplexDatascanDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataplexDatascanData) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // data_discovery_spec - computed: false, optional: true, required: false
  private _dataDiscoverySpec = new DataplexDatascanDataDiscoverySpecOutputReference(this, "data_discovery_spec");
  public get dataDiscoverySpec() {
    return this._dataDiscoverySpec;
  }
  public putDataDiscoverySpec(value: DataplexDatascanDataDiscoverySpec) {
    this._dataDiscoverySpec.internalValue = value;
  }
  public resetDataDiscoverySpec() {
    this._dataDiscoverySpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiscoverySpecInput() {
    return this._dataDiscoverySpec.internalValue;
  }

  // data_profile_spec - computed: false, optional: true, required: false
  private _dataProfileSpec = new DataplexDatascanDataProfileSpecOutputReference(this, "data_profile_spec");
  public get dataProfileSpec() {
    return this._dataProfileSpec;
  }
  public putDataProfileSpec(value: DataplexDatascanDataProfileSpec) {
    this._dataProfileSpec.internalValue = value;
  }
  public resetDataProfileSpec() {
    this._dataProfileSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProfileSpecInput() {
    return this._dataProfileSpec.internalValue;
  }

  // data_quality_spec - computed: false, optional: true, required: false
  private _dataQualitySpec = new DataplexDatascanDataQualitySpecOutputReference(this, "data_quality_spec");
  public get dataQualitySpec() {
    return this._dataQualitySpec;
  }
  public putDataQualitySpec(value: DataplexDatascanDataQualitySpec) {
    this._dataQualitySpec.internalValue = value;
  }
  public resetDataQualitySpec() {
    this._dataQualitySpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualitySpecInput() {
    return this._dataQualitySpec.internalValue;
  }

  // execution_spec - computed: false, optional: false, required: true
  private _executionSpec = new DataplexDatascanExecutionSpecOutputReference(this, "execution_spec");
  public get executionSpec() {
    return this._executionSpec;
  }
  public putExecutionSpec(value: DataplexDatascanExecutionSpec) {
    this._executionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionSpecInput() {
    return this._executionSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataplexDatascanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataplexDatascanTimeouts) {
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
      data_scan_id: cdktf.stringToTerraform(this._dataScanId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      data: dataplexDatascanDataToTerraform(this._data.internalValue),
      data_discovery_spec: dataplexDatascanDataDiscoverySpecToTerraform(this._dataDiscoverySpec.internalValue),
      data_profile_spec: dataplexDatascanDataProfileSpecToTerraform(this._dataProfileSpec.internalValue),
      data_quality_spec: dataplexDatascanDataQualitySpecToTerraform(this._dataQualitySpec.internalValue),
      execution_spec: dataplexDatascanExecutionSpecToTerraform(this._executionSpec.internalValue),
      timeouts: dataplexDatascanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_scan_id: {
        value: cdktf.stringToHclTerraform(this._dataScanId),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      data: {
        value: dataplexDatascanDataToHclTerraform(this._data.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexDatascanDataList",
      },
      data_discovery_spec: {
        value: dataplexDatascanDataDiscoverySpecToHclTerraform(this._dataDiscoverySpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexDatascanDataDiscoverySpecList",
      },
      data_profile_spec: {
        value: dataplexDatascanDataProfileSpecToHclTerraform(this._dataProfileSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexDatascanDataProfileSpecList",
      },
      data_quality_spec: {
        value: dataplexDatascanDataQualitySpecToHclTerraform(this._dataQualitySpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexDatascanDataQualitySpecList",
      },
      execution_spec: {
        value: dataplexDatascanExecutionSpecToHclTerraform(this._executionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexDatascanExecutionSpecList",
      },
      timeouts: {
        value: dataplexDatascanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataplexDatascanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
