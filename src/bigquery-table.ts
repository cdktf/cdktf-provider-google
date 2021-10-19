// https://www.terraform.io/docs/providers/google/r/bigquery_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies column names to use for data clustering. Up to four top-level columns are allowed, and should be specified in descending priority order.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#clustering BigqueryTable#clustering}
  */
  readonly clustering?: string[];
  /**
  * The dataset ID to create the table in. Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#dataset_id BigqueryTable#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#deletion_protection BigqueryTable#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The field description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#description BigqueryTable#description}
  */
  readonly description?: string;
  /**
  * The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#expiration_time BigqueryTable#expiration_time}
  */
  readonly expirationTime?: number;
  /**
  * A descriptive name for the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#friendly_name BigqueryTable#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * A mapping of labels to assign to the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#labels BigqueryTable#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The ID of the project in which the resource belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#project BigqueryTable#project}
  */
  readonly project?: string;
  /**
  * A JSON schema for the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#schema BigqueryTable#schema}
  */
  readonly schema?: string;
  /**
  * A unique ID for the resource. Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#table_id BigqueryTable#table_id}
  */
  readonly tableId: string;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#encryption_configuration BigqueryTable#encryption_configuration}
  */
  readonly encryptionConfiguration?: BigqueryTableEncryptionConfiguration;
  /**
  * external_data_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#external_data_configuration BigqueryTable#external_data_configuration}
  */
  readonly externalDataConfiguration?: BigqueryTableExternalDataConfiguration;
  /**
  * materialized_view block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#materialized_view BigqueryTable#materialized_view}
  */
  readonly materializedView?: BigqueryTableMaterializedView;
  /**
  * range_partitioning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#range_partitioning BigqueryTable#range_partitioning}
  */
  readonly rangePartitioning?: BigqueryTableRangePartitioning;
  /**
  * time_partitioning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#time_partitioning BigqueryTable#time_partitioning}
  */
  readonly timePartitioning?: BigqueryTableTimePartitioning;
  /**
  * view block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#view BigqueryTable#view}
  */
  readonly view?: BigqueryTableView;
}
export interface BigqueryTableEncryptionConfiguration {
  /**
  * The self link or full name of a key which should be used to encrypt this table. Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#kms_key_name BigqueryTable#kms_key_name}
  */
  readonly kmsKeyName: string;
}

function bigqueryTableEncryptionConfigurationToTerraform(struct?: BigqueryTableEncryptionConfigurationOutputReference | BigqueryTableEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class BigqueryTableEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._kmsKeyName
  }
}
export interface BigqueryTableExternalDataConfigurationCsvOptions {
  /**
  * Indicates if BigQuery should accept rows that are missing trailing optional columns.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#allow_jagged_rows BigqueryTable#allow_jagged_rows}
  */
  readonly allowJaggedRows?: boolean | cdktf.IResolvable;
  /**
  * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#allow_quoted_newlines BigqueryTable#allow_quoted_newlines}
  */
  readonly allowQuotedNewlines?: boolean | cdktf.IResolvable;
  /**
  * The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#encoding BigqueryTable#encoding}
  */
  readonly encoding?: string;
  /**
  * The separator for fields in a CSV file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#field_delimiter BigqueryTable#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * The value that is used to quote data sections in a CSV file. If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as \". Due to limitations with Terraform default values, this value is required to be explicitly set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#quote BigqueryTable#quote}
  */
  readonly quote: string;
  /**
  * The number of rows at the top of a CSV file that BigQuery will skip when reading the data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#skip_leading_rows BigqueryTable#skip_leading_rows}
  */
  readonly skipLeadingRows?: number;
}

function bigqueryTableExternalDataConfigurationCsvOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationCsvOptionsOutputReference | BigqueryTableExternalDataConfigurationCsvOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_jagged_rows - computed: false, optional: true, required: false
  private _allowJaggedRows?: boolean | cdktf.IResolvable | undefined; 
  public get allowJaggedRows() {
    return this.getBooleanAttribute('allow_jagged_rows') as any;
  }
  public set allowJaggedRows(value: boolean | cdktf.IResolvable | undefined) {
    this._allowJaggedRows = value;
  }
  public resetAllowJaggedRows() {
    this._allowJaggedRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowJaggedRowsInput() {
    return this._allowJaggedRows
  }

  // allow_quoted_newlines - computed: false, optional: true, required: false
  private _allowQuotedNewlines?: boolean | cdktf.IResolvable | undefined; 
  public get allowQuotedNewlines() {
    return this.getBooleanAttribute('allow_quoted_newlines') as any;
  }
  public set allowQuotedNewlines(value: boolean | cdktf.IResolvable | undefined) {
    this._allowQuotedNewlines = value;
  }
  public resetAllowQuotedNewlines() {
    this._allowQuotedNewlines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQuotedNewlinesInput() {
    return this._allowQuotedNewlines
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string | undefined; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string | undefined) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string | undefined; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string | undefined) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter
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
    return this._quote
  }

  // skip_leading_rows - computed: false, optional: true, required: false
  private _skipLeadingRows?: number | undefined; 
  public get skipLeadingRows() {
    return this.getNumberAttribute('skip_leading_rows');
  }
  public set skipLeadingRows(value: number | undefined) {
    this._skipLeadingRows = value;
  }
  public resetSkipLeadingRows() {
    this._skipLeadingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLeadingRowsInput() {
    return this._skipLeadingRows
  }
}
export interface BigqueryTableExternalDataConfigurationGoogleSheetsOptions {
  /**
  * Range of a sheet to query from. Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#range BigqueryTable#range}
  */
  readonly range?: string;
  /**
  * The number of rows at the top of the sheet that BigQuery will skip when reading the data. At least one of range or skip_leading_rows must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#skip_leading_rows BigqueryTable#skip_leading_rows}
  */
  readonly skipLeadingRows?: number;
}

function bigqueryTableExternalDataConfigurationGoogleSheetsOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference | BigqueryTableExternalDataConfigurationGoogleSheetsOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
  }
}

export class BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // range - computed: false, optional: true, required: false
  private _range?: string | undefined; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string | undefined) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
  }

  // skip_leading_rows - computed: false, optional: true, required: false
  private _skipLeadingRows?: number | undefined; 
  public get skipLeadingRows() {
    return this.getNumberAttribute('skip_leading_rows');
  }
  public set skipLeadingRows(value: number | undefined) {
    this._skipLeadingRows = value;
  }
  public resetSkipLeadingRows() {
    this._skipLeadingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLeadingRowsInput() {
    return this._skipLeadingRows
  }
}
export interface BigqueryTableExternalDataConfigurationHivePartitioningOptions {
  /**
  * When set, what mode of hive partitioning to use when reading data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#mode BigqueryTable#mode}
  */
  readonly mode?: string;
  /**
  * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#require_partition_filter BigqueryTable#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * When hive partition detection is requested, a common for all source uris must be required. The prefix must end immediately before the partition key encoding begins.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#source_uri_prefix BigqueryTable#source_uri_prefix}
  */
  readonly sourceUriPrefix?: string;
}

function bigqueryTableExternalDataConfigurationHivePartitioningOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference | BigqueryTableExternalDataConfigurationHivePartitioningOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string | undefined; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string | undefined) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable | undefined; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter') as any;
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable | undefined) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter
  }

  // source_uri_prefix - computed: false, optional: true, required: false
  private _sourceUriPrefix?: string | undefined; 
  public get sourceUriPrefix() {
    return this.getStringAttribute('source_uri_prefix');
  }
  public set sourceUriPrefix(value: string | undefined) {
    this._sourceUriPrefix = value;
  }
  public resetSourceUriPrefix() {
    this._sourceUriPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriPrefixInput() {
    return this._sourceUriPrefix
  }
}
export interface BigqueryTableExternalDataConfiguration {
  /**
  * Let BigQuery try to autodetect the schema and format of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#autodetect BigqueryTable#autodetect}
  */
  readonly autodetect: boolean | cdktf.IResolvable;
  /**
  * The compression type of the data source. Valid values are "NONE" or "GZIP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#compression BigqueryTable#compression}
  */
  readonly compression?: string;
  /**
  * Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#ignore_unknown_values BigqueryTable#ignore_unknown_values}
  */
  readonly ignoreUnknownValues?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of bad records that BigQuery can ignore when reading data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#max_bad_records BigqueryTable#max_bad_records}
  */
  readonly maxBadRecords?: number;
  /**
  * A JSON schema for the external table. Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#schema BigqueryTable#schema}
  */
  readonly schema?: string;
  /**
  * The data format. Supported values are: "CSV", "GOOGLE_SHEETS", "NEWLINE_DELIMITED_JSON", "AVRO", "PARQUET", "ORC" and "DATASTORE_BACKUP". To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#source_format BigqueryTable#source_format}
  */
  readonly sourceFormat: string;
  /**
  * A list of the fully-qualified URIs that point to your data in Google Cloud.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#source_uris BigqueryTable#source_uris}
  */
  readonly sourceUris: string[];
  /**
  * csv_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#csv_options BigqueryTable#csv_options}
  */
  readonly csvOptions?: BigqueryTableExternalDataConfigurationCsvOptions;
  /**
  * google_sheets_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#google_sheets_options BigqueryTable#google_sheets_options}
  */
  readonly googleSheetsOptions?: BigqueryTableExternalDataConfigurationGoogleSheetsOptions;
  /**
  * hive_partitioning_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#hive_partitioning_options BigqueryTable#hive_partitioning_options}
  */
  readonly hivePartitioningOptions?: BigqueryTableExternalDataConfigurationHivePartitioningOptions;
}

function bigqueryTableExternalDataConfigurationToTerraform(struct?: BigqueryTableExternalDataConfigurationOutputReference | BigqueryTableExternalDataConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autodetect: cdktf.booleanToTerraform(struct!.autodetect),
    compression: cdktf.stringToTerraform(struct!.compression),
    ignore_unknown_values: cdktf.booleanToTerraform(struct!.ignoreUnknownValues),
    max_bad_records: cdktf.numberToTerraform(struct!.maxBadRecords),
    schema: cdktf.stringToTerraform(struct!.schema),
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    source_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceUris),
    csv_options: bigqueryTableExternalDataConfigurationCsvOptionsToTerraform(struct!.csvOptions),
    google_sheets_options: bigqueryTableExternalDataConfigurationGoogleSheetsOptionsToTerraform(struct!.googleSheetsOptions),
    hive_partitioning_options: bigqueryTableExternalDataConfigurationHivePartitioningOptionsToTerraform(struct!.hivePartitioningOptions),
  }
}

export class BigqueryTableExternalDataConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // autodetect - computed: false, optional: false, required: true
  private _autodetect?: boolean | cdktf.IResolvable; 
  public get autodetect() {
    return this.getBooleanAttribute('autodetect') as any;
  }
  public set autodetect(value: boolean | cdktf.IResolvable) {
    this._autodetect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autodetectInput() {
    return this._autodetect
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string | undefined; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string | undefined) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression
  }

  // ignore_unknown_values - computed: false, optional: true, required: false
  private _ignoreUnknownValues?: boolean | cdktf.IResolvable | undefined; 
  public get ignoreUnknownValues() {
    return this.getBooleanAttribute('ignore_unknown_values') as any;
  }
  public set ignoreUnknownValues(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreUnknownValues = value;
  }
  public resetIgnoreUnknownValues() {
    this._ignoreUnknownValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnknownValuesInput() {
    return this._ignoreUnknownValues
  }

  // max_bad_records - computed: false, optional: true, required: false
  private _maxBadRecords?: number | undefined; 
  public get maxBadRecords() {
    return this.getNumberAttribute('max_bad_records');
  }
  public set maxBadRecords(value: number | undefined) {
    this._maxBadRecords = value;
  }
  public resetMaxBadRecords() {
    this._maxBadRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBadRecordsInput() {
    return this._maxBadRecords
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string | undefined; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string | undefined) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
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
    return this._sourceFormat
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
    return this._sourceUris
  }

  // csv_options - computed: false, optional: true, required: false
  private _csvOptions?: BigqueryTableExternalDataConfigurationCsvOptions | undefined; 
  private __csvOptionsOutput = new BigqueryTableExternalDataConfigurationCsvOptionsOutputReference(this as any, "csv_options", true);
  public get csvOptions() {
    return this.__csvOptionsOutput;
  }
  public putCsvOptions(value: BigqueryTableExternalDataConfigurationCsvOptions | undefined) {
    this._csvOptions = value;
  }
  public resetCsvOptions() {
    this._csvOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvOptionsInput() {
    return this._csvOptions
  }

  // google_sheets_options - computed: false, optional: true, required: false
  private _googleSheetsOptions?: BigqueryTableExternalDataConfigurationGoogleSheetsOptions | undefined; 
  private __googleSheetsOptionsOutput = new BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(this as any, "google_sheets_options", true);
  public get googleSheetsOptions() {
    return this.__googleSheetsOptionsOutput;
  }
  public putGoogleSheetsOptions(value: BigqueryTableExternalDataConfigurationGoogleSheetsOptions | undefined) {
    this._googleSheetsOptions = value;
  }
  public resetGoogleSheetsOptions() {
    this._googleSheetsOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleSheetsOptionsInput() {
    return this._googleSheetsOptions
  }

  // hive_partitioning_options - computed: false, optional: true, required: false
  private _hivePartitioningOptions?: BigqueryTableExternalDataConfigurationHivePartitioningOptions | undefined; 
  private __hivePartitioningOptionsOutput = new BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(this as any, "hive_partitioning_options", true);
  public get hivePartitioningOptions() {
    return this.__hivePartitioningOptionsOutput;
  }
  public putHivePartitioningOptions(value: BigqueryTableExternalDataConfigurationHivePartitioningOptions | undefined) {
    this._hivePartitioningOptions = value;
  }
  public resetHivePartitioningOptions() {
    this._hivePartitioningOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hivePartitioningOptionsInput() {
    return this._hivePartitioningOptions
  }
}
export interface BigqueryTableMaterializedView {
  /**
  * Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#enable_refresh BigqueryTable#enable_refresh}
  */
  readonly enableRefresh?: boolean | cdktf.IResolvable;
  /**
  * A query whose result is persisted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#query BigqueryTable#query}
  */
  readonly query: string;
  /**
  * Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#refresh_interval_ms BigqueryTable#refresh_interval_ms}
  */
  readonly refreshIntervalMs?: number;
}

function bigqueryTableMaterializedViewToTerraform(struct?: BigqueryTableMaterializedViewOutputReference | BigqueryTableMaterializedView): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_refresh - computed: false, optional: true, required: false
  private _enableRefresh?: boolean | cdktf.IResolvable | undefined; 
  public get enableRefresh() {
    return this.getBooleanAttribute('enable_refresh') as any;
  }
  public set enableRefresh(value: boolean | cdktf.IResolvable | undefined) {
    this._enableRefresh = value;
  }
  public resetEnableRefresh() {
    this._enableRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRefreshInput() {
    return this._enableRefresh
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
    return this._query
  }

  // refresh_interval_ms - computed: false, optional: true, required: false
  private _refreshIntervalMs?: number | undefined; 
  public get refreshIntervalMs() {
    return this.getNumberAttribute('refresh_interval_ms');
  }
  public set refreshIntervalMs(value: number | undefined) {
    this._refreshIntervalMs = value;
  }
  public resetRefreshIntervalMs() {
    this._refreshIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalMsInput() {
    return this._refreshIntervalMs
  }
}
export interface BigqueryTableRangePartitioningRange {
  /**
  * End of the range partitioning, exclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#end BigqueryTable#end}
  */
  readonly end: number;
  /**
  * The width of each range within the partition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#interval BigqueryTable#interval}
  */
  readonly interval: number;
  /**
  * Start of the range partitioning, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#start BigqueryTable#start}
  */
  readonly start: number;
}

function bigqueryTableRangePartitioningRangeToTerraform(struct?: BigqueryTableRangePartitioningRangeOutputReference | BigqueryTableRangePartitioningRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._end
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
    return this._interval
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
    return this._start
  }
}
export interface BigqueryTableRangePartitioning {
  /**
  * The field used to determine how to create a range-based partition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#field BigqueryTable#field}
  */
  readonly field: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#range BigqueryTable#range}
  */
  readonly range: BigqueryTableRangePartitioningRange;
}

function bigqueryTableRangePartitioningToTerraform(struct?: BigqueryTableRangePartitioningOutputReference | BigqueryTableRangePartitioning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    range: bigqueryTableRangePartitioningRangeToTerraform(struct!.range),
  }
}

export class BigqueryTableRangePartitioningOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._field
  }

  // range - computed: false, optional: false, required: true
  private _range?: BigqueryTableRangePartitioningRange; 
  private __rangeOutput = new BigqueryTableRangePartitioningRangeOutputReference(this as any, "range", true);
  public get range() {
    return this.__rangeOutput;
  }
  public putRange(value: BigqueryTableRangePartitioningRange) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
  }
}
export interface BigqueryTableTimePartitioning {
  /**
  * Number of milliseconds for which to keep the storage for a partition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#expiration_ms BigqueryTable#expiration_ms}
  */
  readonly expirationMs?: number;
  /**
  * The field used to determine how to create a time-based partition. If time-based partitioning is enabled without this value, the table is partitioned based on the load time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#field BigqueryTable#field}
  */
  readonly field?: string;
  /**
  * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#require_partition_filter BigqueryTable#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#type BigqueryTable#type}
  */
  readonly type: string;
}

function bigqueryTableTimePartitioningToTerraform(struct?: BigqueryTableTimePartitioningOutputReference | BigqueryTableTimePartitioning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // expiration_ms - computed: true, optional: true, required: false
  private _expirationMs?: number | undefined; 
  public get expirationMs() {
    return this.getNumberAttribute('expiration_ms');
  }
  public set expirationMs(value: number | undefined) {
    this._expirationMs = value;
  }
  public resetExpirationMs() {
    this._expirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationMsInput() {
    return this._expirationMs
  }

  // field - computed: false, optional: true, required: false
  private _field?: string | undefined; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string | undefined) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field
  }

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable | undefined; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter') as any;
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable | undefined) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter
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
    return this._type
  }
}
export interface BigqueryTableView {
  /**
  * A query that BigQuery executes when the view is referenced.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#query BigqueryTable#query}
  */
  readonly query: string;
  /**
  * Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html#use_legacy_sql BigqueryTable#use_legacy_sql}
  */
  readonly useLegacySql?: boolean | cdktf.IResolvable;
}

function bigqueryTableViewToTerraform(struct?: BigqueryTableViewOutputReference | BigqueryTableView): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    use_legacy_sql: cdktf.booleanToTerraform(struct!.useLegacySql),
  }
}

export class BigqueryTableViewOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._query
  }

  // use_legacy_sql - computed: false, optional: true, required: false
  private _useLegacySql?: boolean | cdktf.IResolvable | undefined; 
  public get useLegacySql() {
    return this.getBooleanAttribute('use_legacy_sql') as any;
  }
  public set useLegacySql(value: boolean | cdktf.IResolvable | undefined) {
    this._useLegacySql = value;
  }
  public resetUseLegacySql() {
    this._useLegacySql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacySqlInput() {
    return this._useLegacySql
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html google_bigquery_table}
*/
export class BigqueryTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_bigquery_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/bigquery_table.html google_bigquery_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryTableConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_table',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clustering = config.clustering;
    this._datasetId = config.datasetId;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._expirationTime = config.expirationTime;
    this._friendlyName = config.friendlyName;
    this._labels = config.labels;
    this._project = config.project;
    this._schema = config.schema;
    this._tableId = config.tableId;
    this._encryptionConfiguration = config.encryptionConfiguration;
    this._externalDataConfiguration = config.externalDataConfiguration;
    this._materializedView = config.materializedView;
    this._rangePartitioning = config.rangePartitioning;
    this._timePartitioning = config.timePartitioning;
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clustering - computed: false, optional: true, required: false
  private _clustering?: string[] | undefined; 
  public get clustering() {
    return this.getListAttribute('clustering');
  }
  public set clustering(value: string[] | undefined) {
    this._clustering = value;
  }
  public resetClustering() {
    this._clustering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringInput() {
    return this._clustering
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
    return this._datasetId
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable | undefined; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection') as any;
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable | undefined) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: number | undefined; 
  public get expirationTime() {
    return this.getNumberAttribute('expiration_time');
  }
  public set expirationTime(value: number | undefined) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string | undefined; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string | undefined) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string | undefined; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string | undefined) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
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
    return this._tableId
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration?: BigqueryTableEncryptionConfiguration | undefined; 
  private __encryptionConfigurationOutput = new BigqueryTableEncryptionConfigurationOutputReference(this as any, "encryption_configuration", true);
  public get encryptionConfiguration() {
    return this.__encryptionConfigurationOutput;
  }
  public putEncryptionConfiguration(value: BigqueryTableEncryptionConfiguration | undefined) {
    this._encryptionConfiguration = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration
  }

  // external_data_configuration - computed: false, optional: true, required: false
  private _externalDataConfiguration?: BigqueryTableExternalDataConfiguration | undefined; 
  private __externalDataConfigurationOutput = new BigqueryTableExternalDataConfigurationOutputReference(this as any, "external_data_configuration", true);
  public get externalDataConfiguration() {
    return this.__externalDataConfigurationOutput;
  }
  public putExternalDataConfiguration(value: BigqueryTableExternalDataConfiguration | undefined) {
    this._externalDataConfiguration = value;
  }
  public resetExternalDataConfiguration() {
    this._externalDataConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataConfigurationInput() {
    return this._externalDataConfiguration
  }

  // materialized_view - computed: false, optional: true, required: false
  private _materializedView?: BigqueryTableMaterializedView | undefined; 
  private __materializedViewOutput = new BigqueryTableMaterializedViewOutputReference(this as any, "materialized_view", true);
  public get materializedView() {
    return this.__materializedViewOutput;
  }
  public putMaterializedView(value: BigqueryTableMaterializedView | undefined) {
    this._materializedView = value;
  }
  public resetMaterializedView() {
    this._materializedView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewInput() {
    return this._materializedView
  }

  // range_partitioning - computed: false, optional: true, required: false
  private _rangePartitioning?: BigqueryTableRangePartitioning | undefined; 
  private __rangePartitioningOutput = new BigqueryTableRangePartitioningOutputReference(this as any, "range_partitioning", true);
  public get rangePartitioning() {
    return this.__rangePartitioningOutput;
  }
  public putRangePartitioning(value: BigqueryTableRangePartitioning | undefined) {
    this._rangePartitioning = value;
  }
  public resetRangePartitioning() {
    this._rangePartitioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangePartitioningInput() {
    return this._rangePartitioning
  }

  // time_partitioning - computed: false, optional: true, required: false
  private _timePartitioning?: BigqueryTableTimePartitioning | undefined; 
  private __timePartitioningOutput = new BigqueryTableTimePartitioningOutputReference(this as any, "time_partitioning", true);
  public get timePartitioning() {
    return this.__timePartitioningOutput;
  }
  public putTimePartitioning(value: BigqueryTableTimePartitioning | undefined) {
    this._timePartitioning = value;
  }
  public resetTimePartitioning() {
    this._timePartitioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePartitioningInput() {
    return this._timePartitioning
  }

  // view - computed: false, optional: true, required: false
  private _view?: BigqueryTableView | undefined; 
  private __viewOutput = new BigqueryTableViewOutputReference(this as any, "view", true);
  public get view() {
    return this.__viewOutput;
  }
  public putView(value: BigqueryTableView | undefined) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clustering: cdktf.listMapper(cdktf.stringToTerraform)(this._clustering),
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      expiration_time: cdktf.numberToTerraform(this._expirationTime),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      schema: cdktf.stringToTerraform(this._schema),
      table_id: cdktf.stringToTerraform(this._tableId),
      encryption_configuration: bigqueryTableEncryptionConfigurationToTerraform(this._encryptionConfiguration),
      external_data_configuration: bigqueryTableExternalDataConfigurationToTerraform(this._externalDataConfiguration),
      materialized_view: bigqueryTableMaterializedViewToTerraform(this._materializedView),
      range_partitioning: bigqueryTableRangePartitioningToTerraform(this._rangePartitioning),
      time_partitioning: bigqueryTableTimePartitioningToTerraform(this._timePartitioning),
      view: bigqueryTableViewToTerraform(this._view),
    };
  }
}
