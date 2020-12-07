// https://www.terraform.io/docs/providers/google/r/bigquery_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryTableConfig extends cdktf.TerraformMetaArguments {
  /** Specifies column names to use for data clustering. Up to four top-level columns are allowed, and should be specified in descending priority order. */
  readonly clustering?: string[];
  /** The dataset ID to create the table in. Changing this forces a new resource to be created. */
  readonly datasetId: string;
  /** The field description. */
  readonly description?: string;
  /** The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. */
  readonly expirationTime?: number;
  /** A descriptive name for the table. */
  readonly friendlyName?: string;
  /** A mapping of labels to assign to the resource. */
  readonly labels?: { [key: string]: string };
  /** The ID of the project in which the resource belongs. */
  readonly project?: string;
  /** A JSON schema for the table. */
  readonly schema?: string;
  /** A unique ID for the resource. Changing this forces a new resource to be created. */
  readonly tableId: string;
  /** encryption_configuration block */
  readonly encryptionConfiguration?: BigqueryTableEncryptionConfiguration[];
  /** external_data_configuration block */
  readonly externalDataConfiguration?: BigqueryTableExternalDataConfiguration[];
  /** materialized_view block */
  readonly materializedView?: BigqueryTableMaterializedView[];
  /** range_partitioning block */
  readonly rangePartitioning?: BigqueryTableRangePartitioning[];
  /** time_partitioning block */
  readonly timePartitioning?: BigqueryTableTimePartitioning[];
  /** view block */
  readonly view?: BigqueryTableView[];
}
export interface BigqueryTableEncryptionConfiguration {
  /** The self link or full name of a key which should be used to encrypt this table. Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource. */
  readonly kmsKeyName: string;
}

function bigqueryTableEncryptionConfigurationToTerraform(struct?: BigqueryTableEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export interface BigqueryTableExternalDataConfigurationCsvOptions {
  /** Indicates if BigQuery should accept rows that are missing trailing optional columns. */
  readonly allowJaggedRows?: boolean;
  /** Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false. */
  readonly allowQuotedNewlines?: boolean;
  /** The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. */
  readonly encoding?: string;
  /** The separator for fields in a CSV file. */
  readonly fieldDelimiter?: string;
  /** The value that is used to quote data sections in a CSV file. If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as \". Due to limitations with Terraform default values, this value is required to be explicitly set. */
  readonly quote: string;
  /** The number of rows at the top of a CSV file that BigQuery will skip when reading the data. */
  readonly skipLeadingRows?: number;
}

function bigqueryTableExternalDataConfigurationCsvOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationCsvOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_jagged_rows: cdktf.booleanToTerraform(struct!.allowJaggedRows),
    allow_quoted_newlines: cdktf.booleanToTerraform(struct!.allowQuotedNewlines),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    quote: cdktf.stringToTerraform(struct!.quote),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
  }
}

export interface BigqueryTableExternalDataConfigurationGoogleSheetsOptions {
  /** Range of a sheet to query from. Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20" */
  readonly range?: string;
  /** The number of rows at the top of the sheet that BigQuery will skip when reading the data. At least one of range or skip_leading_rows must be set. */
  readonly skipLeadingRows?: number;
}

function bigqueryTableExternalDataConfigurationGoogleSheetsOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationGoogleSheetsOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    range: cdktf.stringToTerraform(struct!.range),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
  }
}

export interface BigqueryTableExternalDataConfigurationHivePartitioningOptions {
  /** When set, what mode of hive partitioning to use when reading data. */
  readonly mode?: string;
  /** When hive partition detection is requested, a common for all source uris must be required. The prefix must end immediately before the partition key encoding begins. */
  readonly sourceUriPrefix?: string;
}

function bigqueryTableExternalDataConfigurationHivePartitioningOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationHivePartitioningOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    source_uri_prefix: cdktf.stringToTerraform(struct!.sourceUriPrefix),
  }
}

export interface BigqueryTableExternalDataConfiguration {
  /** Let BigQuery try to autodetect the schema and format of the table. */
  readonly autodetect: boolean;
  /** The compression type of the data source. Valid values are "NONE" or "GZIP". */
  readonly compression?: string;
  /** Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. */
  readonly ignoreUnknownValues?: boolean;
  /** The maximum number of bad records that BigQuery can ignore when reading data. */
  readonly maxBadRecords?: number;
  /** A JSON schema for the external table. Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables. */
  readonly schema?: string;
  /** The data format. Supported values are: "CSV", "GOOGLE_SHEETS", "NEWLINE_DELIMITED_JSON", "AVRO", "PARQUET", "ORC" and "DATASTORE_BACKUP". To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly". */
  readonly sourceFormat: string;
  /** A list of the fully-qualified URIs that point to your data in Google Cloud. */
  readonly sourceUris: string[];
  /** csv_options block */
  readonly csvOptions?: BigqueryTableExternalDataConfigurationCsvOptions[];
  /** google_sheets_options block */
  readonly googleSheetsOptions?: BigqueryTableExternalDataConfigurationGoogleSheetsOptions[];
  /** hive_partitioning_options block */
  readonly hivePartitioningOptions?: BigqueryTableExternalDataConfigurationHivePartitioningOptions[];
}

function bigqueryTableExternalDataConfigurationToTerraform(struct?: BigqueryTableExternalDataConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    autodetect: cdktf.booleanToTerraform(struct!.autodetect),
    compression: cdktf.stringToTerraform(struct!.compression),
    ignore_unknown_values: cdktf.booleanToTerraform(struct!.ignoreUnknownValues),
    max_bad_records: cdktf.numberToTerraform(struct!.maxBadRecords),
    schema: cdktf.stringToTerraform(struct!.schema),
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    source_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceUris),
    csv_options: cdktf.listMapper(bigqueryTableExternalDataConfigurationCsvOptionsToTerraform)(struct!.csvOptions),
    google_sheets_options: cdktf.listMapper(bigqueryTableExternalDataConfigurationGoogleSheetsOptionsToTerraform)(struct!.googleSheetsOptions),
    hive_partitioning_options: cdktf.listMapper(bigqueryTableExternalDataConfigurationHivePartitioningOptionsToTerraform)(struct!.hivePartitioningOptions),
  }
}

export interface BigqueryTableMaterializedView {
  /** Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true. */
  readonly enableRefresh?: boolean;
  /** A query whose result is persisted. */
  readonly query: string;
  /** Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000 */
  readonly refreshIntervalMs?: number;
}

function bigqueryTableMaterializedViewToTerraform(struct?: BigqueryTableMaterializedView): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_refresh: cdktf.booleanToTerraform(struct!.enableRefresh),
    query: cdktf.stringToTerraform(struct!.query),
    refresh_interval_ms: cdktf.numberToTerraform(struct!.refreshIntervalMs),
  }
}

export interface BigqueryTableRangePartitioningRange {
  /** End of the range partitioning, exclusive. */
  readonly end: number;
  /** The width of each range within the partition. */
  readonly interval: number;
  /** Start of the range partitioning, inclusive. */
  readonly start: number;
}

function bigqueryTableRangePartitioningRangeToTerraform(struct?: BigqueryTableRangePartitioningRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    interval: cdktf.numberToTerraform(struct!.interval),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export interface BigqueryTableRangePartitioning {
  /** The field used to determine how to create a range-based partition. */
  readonly field: string;
  /** range block */
  readonly range: BigqueryTableRangePartitioningRange[];
}

function bigqueryTableRangePartitioningToTerraform(struct?: BigqueryTableRangePartitioning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    range: cdktf.listMapper(bigqueryTableRangePartitioningRangeToTerraform)(struct!.range),
  }
}

export interface BigqueryTableTimePartitioning {
  /** Number of milliseconds for which to keep the storage for a partition. */
  readonly expirationMs?: number;
  /** The field used to determine how to create a time-based partition. If time-based partitioning is enabled without this value, the table is partitioned based on the load time. */
  readonly field?: string;
  /** If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. */
  readonly requirePartitionFilter?: boolean;
  /** The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. */
  readonly type: string;
}

function bigqueryTableTimePartitioningToTerraform(struct?: BigqueryTableTimePartitioning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expiration_ms: cdktf.numberToTerraform(struct!.expirationMs),
    field: cdktf.stringToTerraform(struct!.field),
    require_partition_filter: cdktf.booleanToTerraform(struct!.requirePartitionFilter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface BigqueryTableView {
  /** A query that BigQuery executes when the view is referenced. */
  readonly query: string;
  /** Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL */
  readonly useLegacySql?: boolean;
}

function bigqueryTableViewToTerraform(struct?: BigqueryTableView): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    use_legacy_sql: cdktf.booleanToTerraform(struct!.useLegacySql),
  }
}


// Resource

export class BigqueryTable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _clustering?: string[];
  public get clustering() {
    return this.getListAttribute('clustering');
  }
  public set clustering(value: string[] ) {
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
  private _datasetId: string;
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

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
    return this._expirationTime
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string;
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string ) {
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
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
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
    return this._project
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
    return this._schema
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId: string;
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
  private _encryptionConfiguration?: BigqueryTableEncryptionConfiguration[];
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }
  public set encryptionConfiguration(value: BigqueryTableEncryptionConfiguration[] ) {
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
  private _externalDataConfiguration?: BigqueryTableExternalDataConfiguration[];
  public get externalDataConfiguration() {
    return this.interpolationForAttribute('external_data_configuration') as any;
  }
  public set externalDataConfiguration(value: BigqueryTableExternalDataConfiguration[] ) {
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
  private _materializedView?: BigqueryTableMaterializedView[];
  public get materializedView() {
    return this.interpolationForAttribute('materialized_view') as any;
  }
  public set materializedView(value: BigqueryTableMaterializedView[] ) {
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
  private _rangePartitioning?: BigqueryTableRangePartitioning[];
  public get rangePartitioning() {
    return this.interpolationForAttribute('range_partitioning') as any;
  }
  public set rangePartitioning(value: BigqueryTableRangePartitioning[] ) {
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
  private _timePartitioning?: BigqueryTableTimePartitioning[];
  public get timePartitioning() {
    return this.interpolationForAttribute('time_partitioning') as any;
  }
  public set timePartitioning(value: BigqueryTableTimePartitioning[] ) {
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
  private _view?: BigqueryTableView[];
  public get view() {
    return this.interpolationForAttribute('view') as any;
  }
  public set view(value: BigqueryTableView[] ) {
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
      description: cdktf.stringToTerraform(this._description),
      expiration_time: cdktf.numberToTerraform(this._expirationTime),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      schema: cdktf.stringToTerraform(this._schema),
      table_id: cdktf.stringToTerraform(this._tableId),
      encryption_configuration: cdktf.listMapper(bigqueryTableEncryptionConfigurationToTerraform)(this._encryptionConfiguration),
      external_data_configuration: cdktf.listMapper(bigqueryTableExternalDataConfigurationToTerraform)(this._externalDataConfiguration),
      materialized_view: cdktf.listMapper(bigqueryTableMaterializedViewToTerraform)(this._materializedView),
      range_partitioning: cdktf.listMapper(bigqueryTableRangePartitioningToTerraform)(this._rangePartitioning),
      time_partitioning: cdktf.listMapper(bigqueryTableTimePartitioningToTerraform)(this._timePartitioning),
      view: cdktf.listMapper(bigqueryTableViewToTerraform)(this._view),
    };
  }
}
