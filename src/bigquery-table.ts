// https://www.terraform.io/docs/providers/google/r/bigquery_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies column names to use for data clustering. Up to four top-level columns are allowed, and should be specified in descending priority order.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#clustering BigqueryTable#clustering}
  */
  readonly clustering?: string[];
  /**
  * The dataset ID to create the table in. Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#dataset_id BigqueryTable#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#deletion_protection BigqueryTable#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The field description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#description BigqueryTable#description}
  */
  readonly description?: string;
  /**
  * The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#expiration_time BigqueryTable#expiration_time}
  */
  readonly expirationTime?: number;
  /**
  * A descriptive name for the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#friendly_name BigqueryTable#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#id BigqueryTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A mapping of labels to assign to the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#labels BigqueryTable#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The ID of the project in which the resource belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#project BigqueryTable#project}
  */
  readonly project?: string;
  /**
  * A JSON schema for the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#schema BigqueryTable#schema}
  */
  readonly schema?: string;
  /**
  * A unique ID for the resource. Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#table_id BigqueryTable#table_id}
  */
  readonly tableId: string;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#encryption_configuration BigqueryTable#encryption_configuration}
  */
  readonly encryptionConfiguration?: BigqueryTableEncryptionConfiguration;
  /**
  * external_data_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#external_data_configuration BigqueryTable#external_data_configuration}
  */
  readonly externalDataConfiguration?: BigqueryTableExternalDataConfiguration;
  /**
  * materialized_view block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#materialized_view BigqueryTable#materialized_view}
  */
  readonly materializedView?: BigqueryTableMaterializedView;
  /**
  * range_partitioning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#range_partitioning BigqueryTable#range_partitioning}
  */
  readonly rangePartitioning?: BigqueryTableRangePartitioning;
  /**
  * time_partitioning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#time_partitioning BigqueryTable#time_partitioning}
  */
  readonly timePartitioning?: BigqueryTableTimePartitioning;
  /**
  * view block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#view BigqueryTable#view}
  */
  readonly view?: BigqueryTableView;
}
export interface BigqueryTableEncryptionConfiguration {
  /**
  * The self link or full name of a key which should be used to encrypt this table. Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#kms_key_name BigqueryTable#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function bigqueryTableEncryptionConfigurationToTerraform(struct?: BigqueryTableEncryptionConfigurationOutputReference | BigqueryTableEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class BigqueryTableEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_version - computed: true, optional: false, required: false
  public get kmsKeyVersion() {
    return this.getStringAttribute('kms_key_version');
  }
}
export interface BigqueryTableExternalDataConfigurationCsvOptions {
  /**
  * Indicates if BigQuery should accept rows that are missing trailing optional columns.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#allow_jagged_rows BigqueryTable#allow_jagged_rows}
  */
  readonly allowJaggedRows?: boolean | cdktf.IResolvable;
  /**
  * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#allow_quoted_newlines BigqueryTable#allow_quoted_newlines}
  */
  readonly allowQuotedNewlines?: boolean | cdktf.IResolvable;
  /**
  * The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#encoding BigqueryTable#encoding}
  */
  readonly encoding?: string;
  /**
  * The separator for fields in a CSV file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#field_delimiter BigqueryTable#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * The value that is used to quote data sections in a CSV file. If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as \". Due to limitations with Terraform default values, this value is required to be explicitly set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#quote BigqueryTable#quote}
  */
  readonly quote: string;
  /**
  * The number of rows at the top of a CSV file that BigQuery will skip when reading the data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}
  */
  readonly skipLeadingRows?: number;
}

export function bigqueryTableExternalDataConfigurationCsvOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationCsvOptionsOutputReference | BigqueryTableExternalDataConfigurationCsvOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_jagged_rows: cdktf.booleanToTerraform(struct!.allowJaggedRows),
    allow_quoted_newlines: cdktf.booleanToTerraform(struct!.allowQuotedNewlines),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    quote: cdktf.stringToTerraform(struct!.quote),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
  }
}

export class BigqueryTableExternalDataConfigurationCsvOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfigurationCsvOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowJaggedRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowJaggedRows = this._allowJaggedRows;
    }
    if (this._allowQuotedNewlines !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowQuotedNewlines = this._allowQuotedNewlines;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._quote !== undefined) {
      hasAnyValues = true;
      internalValueResult.quote = this._quote;
    }
    if (this._skipLeadingRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLeadingRows = this._skipLeadingRows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfigurationCsvOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowJaggedRows = undefined;
      this._allowQuotedNewlines = undefined;
      this._encoding = undefined;
      this._fieldDelimiter = undefined;
      this._quote = undefined;
      this._skipLeadingRows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowJaggedRows = value.allowJaggedRows;
      this._allowQuotedNewlines = value.allowQuotedNewlines;
      this._encoding = value.encoding;
      this._fieldDelimiter = value.fieldDelimiter;
      this._quote = value.quote;
      this._skipLeadingRows = value.skipLeadingRows;
    }
  }

  // allow_jagged_rows - computed: false, optional: true, required: false
  private _allowJaggedRows?: boolean | cdktf.IResolvable; 
  public get allowJaggedRows() {
    return this.getBooleanAttribute('allow_jagged_rows');
  }
  public set allowJaggedRows(value: boolean | cdktf.IResolvable) {
    this._allowJaggedRows = value;
  }
  public resetAllowJaggedRows() {
    this._allowJaggedRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowJaggedRowsInput() {
    return this._allowJaggedRows;
  }

  // allow_quoted_newlines - computed: false, optional: true, required: false
  private _allowQuotedNewlines?: boolean | cdktf.IResolvable; 
  public get allowQuotedNewlines() {
    return this.getBooleanAttribute('allow_quoted_newlines');
  }
  public set allowQuotedNewlines(value: boolean | cdktf.IResolvable) {
    this._allowQuotedNewlines = value;
  }
  public resetAllowQuotedNewlines() {
    this._allowQuotedNewlines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQuotedNewlinesInput() {
    return this._allowQuotedNewlines;
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

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // quote - computed: false, optional: false, required: true
  private _quote?: string; 
  public get quote() {
    return this.getStringAttribute('quote');
  }
  public set quote(value: string) {
    this._quote = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteInput() {
    return this._quote;
  }

  // skip_leading_rows - computed: false, optional: true, required: false
  private _skipLeadingRows?: number; 
  public get skipLeadingRows() {
    return this.getNumberAttribute('skip_leading_rows');
  }
  public set skipLeadingRows(value: number) {
    this._skipLeadingRows = value;
  }
  public resetSkipLeadingRows() {
    this._skipLeadingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLeadingRowsInput() {
    return this._skipLeadingRows;
  }
}
export interface BigqueryTableExternalDataConfigurationGoogleSheetsOptions {
  /**
  * Range of a sheet to query from. Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#range BigqueryTable#range}
  */
  readonly range?: string;
  /**
  * The number of rows at the top of the sheet that BigQuery will skip when reading the data. At least one of range or skip_leading_rows must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}
  */
  readonly skipLeadingRows?: number;
}

export function bigqueryTableExternalDataConfigurationGoogleSheetsOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference | BigqueryTableExternalDataConfigurationGoogleSheetsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
  }
}

export class BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfigurationGoogleSheetsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._skipLeadingRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLeadingRows = this._skipLeadingRows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfigurationGoogleSheetsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._range = undefined;
      this._skipLeadingRows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._range = value.range;
      this._skipLeadingRows = value.skipLeadingRows;
    }
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // skip_leading_rows - computed: false, optional: true, required: false
  private _skipLeadingRows?: number; 
  public get skipLeadingRows() {
    return this.getNumberAttribute('skip_leading_rows');
  }
  public set skipLeadingRows(value: number) {
    this._skipLeadingRows = value;
  }
  public resetSkipLeadingRows() {
    this._skipLeadingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLeadingRowsInput() {
    return this._skipLeadingRows;
  }
}
export interface BigqueryTableExternalDataConfigurationHivePartitioningOptions {
  /**
  * When set, what mode of hive partitioning to use when reading data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#mode BigqueryTable#mode}
  */
  readonly mode?: string;
  /**
  * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * When hive partition detection is requested, a common for all source uris must be required. The prefix must end immediately before the partition key encoding begins.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#source_uri_prefix BigqueryTable#source_uri_prefix}
  */
  readonly sourceUriPrefix?: string;
}

export function bigqueryTableExternalDataConfigurationHivePartitioningOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference | BigqueryTableExternalDataConfigurationHivePartitioningOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    require_partition_filter: cdktf.booleanToTerraform(struct!.requirePartitionFilter),
    source_uri_prefix: cdktf.stringToTerraform(struct!.sourceUriPrefix),
  }
}

export class BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfigurationHivePartitioningOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._requirePartitionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePartitionFilter = this._requirePartitionFilter;
    }
    if (this._sourceUriPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUriPrefix = this._sourceUriPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfigurationHivePartitioningOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._requirePartitionFilter = undefined;
      this._sourceUriPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._requirePartitionFilter = value.requirePartitionFilter;
      this._sourceUriPrefix = value.sourceUriPrefix;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter');
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter;
  }

  // source_uri_prefix - computed: false, optional: true, required: false
  private _sourceUriPrefix?: string; 
  public get sourceUriPrefix() {
    return this.getStringAttribute('source_uri_prefix');
  }
  public set sourceUriPrefix(value: string) {
    this._sourceUriPrefix = value;
  }
  public resetSourceUriPrefix() {
    this._sourceUriPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriPrefixInput() {
    return this._sourceUriPrefix;
  }
}
export interface BigqueryTableExternalDataConfiguration {
  /**
  * Let BigQuery try to autodetect the schema and format of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#autodetect BigqueryTable#autodetect}
  */
  readonly autodetect: boolean | cdktf.IResolvable;
  /**
  * The compression type of the data source. Valid values are "NONE" or "GZIP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#compression BigqueryTable#compression}
  */
  readonly compression?: string;
  /**
  * The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. The connectionId can have the form "{{project}}.{{location}}.{{connection_id}}" or "projects/{{project}}/locations/{{location}}/connections/{{connection_id}}".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#connection_id BigqueryTable#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#ignore_unknown_values BigqueryTable#ignore_unknown_values}
  */
  readonly ignoreUnknownValues?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of bad records that BigQuery can ignore when reading data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#max_bad_records BigqueryTable#max_bad_records}
  */
  readonly maxBadRecords?: number;
  /**
  * A JSON schema for the external table. Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#schema BigqueryTable#schema}
  */
  readonly schema?: string;
  /**
  * The data format. Supported values are: "CSV", "GOOGLE_SHEETS", "NEWLINE_DELIMITED_JSON", "AVRO", "PARQUET", "ORC" and "DATASTORE_BACKUP". To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#source_format BigqueryTable#source_format}
  */
  readonly sourceFormat: string;
  /**
  * A list of the fully-qualified URIs that point to your data in Google Cloud.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#source_uris BigqueryTable#source_uris}
  */
  readonly sourceUris: string[];
  /**
  * csv_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#csv_options BigqueryTable#csv_options}
  */
  readonly csvOptions?: BigqueryTableExternalDataConfigurationCsvOptions;
  /**
  * google_sheets_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#google_sheets_options BigqueryTable#google_sheets_options}
  */
  readonly googleSheetsOptions?: BigqueryTableExternalDataConfigurationGoogleSheetsOptions;
  /**
  * hive_partitioning_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#hive_partitioning_options BigqueryTable#hive_partitioning_options}
  */
  readonly hivePartitioningOptions?: BigqueryTableExternalDataConfigurationHivePartitioningOptions;
}

export function bigqueryTableExternalDataConfigurationToTerraform(struct?: BigqueryTableExternalDataConfigurationOutputReference | BigqueryTableExternalDataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autodetect: cdktf.booleanToTerraform(struct!.autodetect),
    compression: cdktf.stringToTerraform(struct!.compression),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    ignore_unknown_values: cdktf.booleanToTerraform(struct!.ignoreUnknownValues),
    max_bad_records: cdktf.numberToTerraform(struct!.maxBadRecords),
    schema: cdktf.stringToTerraform(struct!.schema),
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    source_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUris),
    csv_options: bigqueryTableExternalDataConfigurationCsvOptionsToTerraform(struct!.csvOptions),
    google_sheets_options: bigqueryTableExternalDataConfigurationGoogleSheetsOptionsToTerraform(struct!.googleSheetsOptions),
    hive_partitioning_options: bigqueryTableExternalDataConfigurationHivePartitioningOptionsToTerraform(struct!.hivePartitioningOptions),
  }
}

export class BigqueryTableExternalDataConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autodetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodetect = this._autodetect;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._ignoreUnknownValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnknownValues = this._ignoreUnknownValues;
    }
    if (this._maxBadRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBadRecords = this._maxBadRecords;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._sourceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFormat = this._sourceFormat;
    }
    if (this._sourceUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUris = this._sourceUris;
    }
    if (this._csvOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvOptions = this._csvOptions?.internalValue;
    }
    if (this._googleSheetsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleSheetsOptions = this._googleSheetsOptions?.internalValue;
    }
    if (this._hivePartitioningOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hivePartitioningOptions = this._hivePartitioningOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autodetect = undefined;
      this._compression = undefined;
      this._connectionId = undefined;
      this._ignoreUnknownValues = undefined;
      this._maxBadRecords = undefined;
      this._schema = undefined;
      this._sourceFormat = undefined;
      this._sourceUris = undefined;
      this._csvOptions.internalValue = undefined;
      this._googleSheetsOptions.internalValue = undefined;
      this._hivePartitioningOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autodetect = value.autodetect;
      this._compression = value.compression;
      this._connectionId = value.connectionId;
      this._ignoreUnknownValues = value.ignoreUnknownValues;
      this._maxBadRecords = value.maxBadRecords;
      this._schema = value.schema;
      this._sourceFormat = value.sourceFormat;
      this._sourceUris = value.sourceUris;
      this._csvOptions.internalValue = value.csvOptions;
      this._googleSheetsOptions.internalValue = value.googleSheetsOptions;
      this._hivePartitioningOptions.internalValue = value.hivePartitioningOptions;
    }
  }

  // autodetect - computed: false, optional: false, required: true
  private _autodetect?: boolean | cdktf.IResolvable; 
  public get autodetect() {
    return this.getBooleanAttribute('autodetect');
  }
  public set autodetect(value: boolean | cdktf.IResolvable) {
    this._autodetect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autodetectInput() {
    return this._autodetect;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // ignore_unknown_values - computed: false, optional: true, required: false
  private _ignoreUnknownValues?: boolean | cdktf.IResolvable; 
  public get ignoreUnknownValues() {
    return this.getBooleanAttribute('ignore_unknown_values');
  }
  public set ignoreUnknownValues(value: boolean | cdktf.IResolvable) {
    this._ignoreUnknownValues = value;
  }
  public resetIgnoreUnknownValues() {
    this._ignoreUnknownValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnknownValuesInput() {
    return this._ignoreUnknownValues;
  }

  // max_bad_records - computed: false, optional: true, required: false
  private _maxBadRecords?: number; 
  public get maxBadRecords() {
    return this.getNumberAttribute('max_bad_records');
  }
  public set maxBadRecords(value: number) {
    this._maxBadRecords = value;
  }
  public resetMaxBadRecords() {
    this._maxBadRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBadRecordsInput() {
    return this._maxBadRecords;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // source_format - computed: false, optional: false, required: true
  private _sourceFormat?: string; 
  public get sourceFormat() {
    return this.getStringAttribute('source_format');
  }
  public set sourceFormat(value: string) {
    this._sourceFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFormatInput() {
    return this._sourceFormat;
  }

  // source_uris - computed: false, optional: false, required: true
  private _sourceUris?: string[]; 
  public get sourceUris() {
    return this.getListAttribute('source_uris');
  }
  public set sourceUris(value: string[]) {
    this._sourceUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrisInput() {
    return this._sourceUris;
  }

  // csv_options - computed: false, optional: true, required: false
  private _csvOptions = new BigqueryTableExternalDataConfigurationCsvOptionsOutputReference(this, "csv_options");
  public get csvOptions() {
    return this._csvOptions;
  }
  public putCsvOptions(value: BigqueryTableExternalDataConfigurationCsvOptions) {
    this._csvOptions.internalValue = value;
  }
  public resetCsvOptions() {
    this._csvOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvOptionsInput() {
    return this._csvOptions.internalValue;
  }

  // google_sheets_options - computed: false, optional: true, required: false
  private _googleSheetsOptions = new BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(this, "google_sheets_options");
  public get googleSheetsOptions() {
    return this._googleSheetsOptions;
  }
  public putGoogleSheetsOptions(value: BigqueryTableExternalDataConfigurationGoogleSheetsOptions) {
    this._googleSheetsOptions.internalValue = value;
  }
  public resetGoogleSheetsOptions() {
    this._googleSheetsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleSheetsOptionsInput() {
    return this._googleSheetsOptions.internalValue;
  }

  // hive_partitioning_options - computed: false, optional: true, required: false
  private _hivePartitioningOptions = new BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(this, "hive_partitioning_options");
  public get hivePartitioningOptions() {
    return this._hivePartitioningOptions;
  }
  public putHivePartitioningOptions(value: BigqueryTableExternalDataConfigurationHivePartitioningOptions) {
    this._hivePartitioningOptions.internalValue = value;
  }
  public resetHivePartitioningOptions() {
    this._hivePartitioningOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hivePartitioningOptionsInput() {
    return this._hivePartitioningOptions.internalValue;
  }
}
export interface BigqueryTableMaterializedView {
  /**
  * Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#enable_refresh BigqueryTable#enable_refresh}
  */
  readonly enableRefresh?: boolean | cdktf.IResolvable;
  /**
  * A query whose result is persisted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#query BigqueryTable#query}
  */
  readonly query: string;
  /**
  * Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#refresh_interval_ms BigqueryTable#refresh_interval_ms}
  */
  readonly refreshIntervalMs?: number;
}

export function bigqueryTableMaterializedViewToTerraform(struct?: BigqueryTableMaterializedViewOutputReference | BigqueryTableMaterializedView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_refresh: cdktf.booleanToTerraform(struct!.enableRefresh),
    query: cdktf.stringToTerraform(struct!.query),
    refresh_interval_ms: cdktf.numberToTerraform(struct!.refreshIntervalMs),
  }
}

export class BigqueryTableMaterializedViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableMaterializedView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRefresh = this._enableRefresh;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._refreshIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshIntervalMs = this._refreshIntervalMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableMaterializedView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableRefresh = undefined;
      this._query = undefined;
      this._refreshIntervalMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableRefresh = value.enableRefresh;
      this._query = value.query;
      this._refreshIntervalMs = value.refreshIntervalMs;
    }
  }

  // enable_refresh - computed: false, optional: true, required: false
  private _enableRefresh?: boolean | cdktf.IResolvable; 
  public get enableRefresh() {
    return this.getBooleanAttribute('enable_refresh');
  }
  public set enableRefresh(value: boolean | cdktf.IResolvable) {
    this._enableRefresh = value;
  }
  public resetEnableRefresh() {
    this._enableRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRefreshInput() {
    return this._enableRefresh;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // refresh_interval_ms - computed: false, optional: true, required: false
  private _refreshIntervalMs?: number; 
  public get refreshIntervalMs() {
    return this.getNumberAttribute('refresh_interval_ms');
  }
  public set refreshIntervalMs(value: number) {
    this._refreshIntervalMs = value;
  }
  public resetRefreshIntervalMs() {
    this._refreshIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalMsInput() {
    return this._refreshIntervalMs;
  }
}
export interface BigqueryTableRangePartitioningRange {
  /**
  * End of the range partitioning, exclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#end BigqueryTable#end}
  */
  readonly end: number;
  /**
  * The width of each range within the partition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#interval BigqueryTable#interval}
  */
  readonly interval: number;
  /**
  * Start of the range partitioning, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#start BigqueryTable#start}
  */
  readonly start: number;
}

export function bigqueryTableRangePartitioningRangeToTerraform(struct?: BigqueryTableRangePartitioningRangeOutputReference | BigqueryTableRangePartitioningRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    interval: cdktf.numberToTerraform(struct!.interval),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export class BigqueryTableRangePartitioningRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableRangePartitioningRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableRangePartitioningRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._interval = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._interval = value.interval;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface BigqueryTableRangePartitioning {
  /**
  * The field used to determine how to create a range-based partition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#field BigqueryTable#field}
  */
  readonly field: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#range BigqueryTable#range}
  */
  readonly range: BigqueryTableRangePartitioningRange;
}

export function bigqueryTableRangePartitioningToTerraform(struct?: BigqueryTableRangePartitioningOutputReference | BigqueryTableRangePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    range: bigqueryTableRangePartitioningRangeToTerraform(struct!.range),
  }
}

export class BigqueryTableRangePartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableRangePartitioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableRangePartitioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._range.internalValue = value.range;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // range - computed: false, optional: false, required: true
  private _range = new BigqueryTableRangePartitioningRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: BigqueryTableRangePartitioningRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface BigqueryTableTimePartitioning {
  /**
  * Number of milliseconds for which to keep the storage for a partition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#expiration_ms BigqueryTable#expiration_ms}
  */
  readonly expirationMs?: number;
  /**
  * The field used to determine how to create a time-based partition. If time-based partitioning is enabled without this value, the table is partitioned based on the load time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#field BigqueryTable#field}
  */
  readonly field?: string;
  /**
  * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#type BigqueryTable#type}
  */
  readonly type: string;
}

export function bigqueryTableTimePartitioningToTerraform(struct?: BigqueryTableTimePartitioningOutputReference | BigqueryTableTimePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_ms: cdktf.numberToTerraform(struct!.expirationMs),
    field: cdktf.stringToTerraform(struct!.field),
    require_partition_filter: cdktf.booleanToTerraform(struct!.requirePartitionFilter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class BigqueryTableTimePartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableTimePartitioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationMs = this._expirationMs;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._requirePartitionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePartitionFilter = this._requirePartitionFilter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableTimePartitioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationMs = undefined;
      this._field = undefined;
      this._requirePartitionFilter = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationMs = value.expirationMs;
      this._field = value.field;
      this._requirePartitionFilter = value.requirePartitionFilter;
      this._type = value.type;
    }
  }

  // expiration_ms - computed: true, optional: true, required: false
  private _expirationMs?: number; 
  public get expirationMs() {
    return this.getNumberAttribute('expiration_ms');
  }
  public set expirationMs(value: number) {
    this._expirationMs = value;
  }
  public resetExpirationMs() {
    this._expirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationMsInput() {
    return this._expirationMs;
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

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter');
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter;
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
export interface BigqueryTableView {
  /**
  * A query that BigQuery executes when the view is referenced.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#query BigqueryTable#query}
  */
  readonly query: string;
  /**
  * Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table#use_legacy_sql BigqueryTable#use_legacy_sql}
  */
  readonly useLegacySql?: boolean | cdktf.IResolvable;
}

export function bigqueryTableViewToTerraform(struct?: BigqueryTableViewOutputReference | BigqueryTableView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    use_legacy_sql: cdktf.booleanToTerraform(struct!.useLegacySql),
  }
}

export class BigqueryTableViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._useLegacySql !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLegacySql = this._useLegacySql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
      this._useLegacySql = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
      this._useLegacySql = value.useLegacySql;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // use_legacy_sql - computed: false, optional: true, required: false
  private _useLegacySql?: boolean | cdktf.IResolvable; 
  public get useLegacySql() {
    return this.getBooleanAttribute('use_legacy_sql');
  }
  public set useLegacySql(value: boolean | cdktf.IResolvable) {
    this._useLegacySql = value;
  }
  public resetUseLegacySql() {
    this._useLegacySql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacySqlInput() {
    return this._useLegacySql;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_table google_bigquery_table}
*/
export class BigqueryTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/bigquery_table google_bigquery_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryTableConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_table',
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
    this._clustering = config.clustering;
    this._datasetId = config.datasetId;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._expirationTime = config.expirationTime;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._schema = config.schema;
    this._tableId = config.tableId;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._externalDataConfiguration.internalValue = config.externalDataConfiguration;
    this._materializedView.internalValue = config.materializedView;
    this._rangePartitioning.internalValue = config.rangePartitioning;
    this._timePartitioning.internalValue = config.timePartitioning;
    this._view.internalValue = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clustering - computed: false, optional: true, required: false
  private _clustering?: string[]; 
  public get clustering() {
    return this.getListAttribute('clustering');
  }
  public set clustering(value: string[]) {
    this._clustering = value;
  }
  public resetClustering() {
    this._clustering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringInput() {
    return this._clustering;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: number; 
  public get expirationTime() {
    return this.getNumberAttribute('expiration_time');
  }
  public set expirationTime(value: number) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_long_term_bytes - computed: true, optional: false, required: false
  public get numLongTermBytes() {
    return this.getNumberAttribute('num_long_term_bytes');
  }

  // num_rows - computed: true, optional: false, required: false
  public get numRows() {
    return this.getNumberAttribute('num_rows');
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new BigqueryTableEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: BigqueryTableEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // external_data_configuration - computed: false, optional: true, required: false
  private _externalDataConfiguration = new BigqueryTableExternalDataConfigurationOutputReference(this, "external_data_configuration");
  public get externalDataConfiguration() {
    return this._externalDataConfiguration;
  }
  public putExternalDataConfiguration(value: BigqueryTableExternalDataConfiguration) {
    this._externalDataConfiguration.internalValue = value;
  }
  public resetExternalDataConfiguration() {
    this._externalDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataConfigurationInput() {
    return this._externalDataConfiguration.internalValue;
  }

  // materialized_view - computed: false, optional: true, required: false
  private _materializedView = new BigqueryTableMaterializedViewOutputReference(this, "materialized_view");
  public get materializedView() {
    return this._materializedView;
  }
  public putMaterializedView(value: BigqueryTableMaterializedView) {
    this._materializedView.internalValue = value;
  }
  public resetMaterializedView() {
    this._materializedView.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewInput() {
    return this._materializedView.internalValue;
  }

  // range_partitioning - computed: false, optional: true, required: false
  private _rangePartitioning = new BigqueryTableRangePartitioningOutputReference(this, "range_partitioning");
  public get rangePartitioning() {
    return this._rangePartitioning;
  }
  public putRangePartitioning(value: BigqueryTableRangePartitioning) {
    this._rangePartitioning.internalValue = value;
  }
  public resetRangePartitioning() {
    this._rangePartitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangePartitioningInput() {
    return this._rangePartitioning.internalValue;
  }

  // time_partitioning - computed: false, optional: true, required: false
  private _timePartitioning = new BigqueryTableTimePartitioningOutputReference(this, "time_partitioning");
  public get timePartitioning() {
    return this._timePartitioning;
  }
  public putTimePartitioning(value: BigqueryTableTimePartitioning) {
    this._timePartitioning.internalValue = value;
  }
  public resetTimePartitioning() {
    this._timePartitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePartitioningInput() {
    return this._timePartitioning.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view = new BigqueryTableViewOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: BigqueryTableView) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clustering: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clustering),
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      expiration_time: cdktf.numberToTerraform(this._expirationTime),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      schema: cdktf.stringToTerraform(this._schema),
      table_id: cdktf.stringToTerraform(this._tableId),
      encryption_configuration: bigqueryTableEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      external_data_configuration: bigqueryTableExternalDataConfigurationToTerraform(this._externalDataConfiguration.internalValue),
      materialized_view: bigqueryTableMaterializedViewToTerraform(this._materializedView.internalValue),
      range_partitioning: bigqueryTableRangePartitioningToTerraform(this._rangePartitioning.internalValue),
      time_partitioning: bigqueryTableTimePartitioningToTerraform(this._timePartitioning.internalValue),
      view: bigqueryTableViewToTerraform(this._view.internalValue),
    };
  }
}
