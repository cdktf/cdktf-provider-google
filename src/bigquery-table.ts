// https://www.terraform.io/docs/providers/google/r/bigquery_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigqueryTableConfig extends TerraformMetaArguments {
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
export interface BigqueryTableExternalDataConfigurationGoogleSheetsOptions {
  /** Range of a sheet to query from. Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20" */
  readonly range?: string;
  /** The number of rows at the top of the sheet that BigQuery will skip when reading the data. At least one of range or skip_leading_rows must be set. */
  readonly skipLeadingRows?: number;
}
export interface BigqueryTableExternalDataConfigurationHivePartitioningOptions {
  /** When set, what mode of hive partitioning to use when reading data. */
  readonly mode?: string;
  /** When hive partition detection is requested, a common for all source uris must be required. The prefix must end immediately before the partition key encoding begins. */
  readonly sourceUriPrefix?: string;
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
  /** The data format. Supported values are: "CSV", "GOOGLE_SHEETS", "NEWLINE_DELIMITED_JSON", "AVRO", "PARQUET", and "DATSTORE_BACKUP". To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly". */
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
export interface BigqueryTableRangePartitioningRange {
  /** End of the range partitioning, exclusive. */
  readonly end: number;
  /** The width of each range within the partition. */
  readonly interval: number;
  /** Start of the range partitioning, inclusive. */
  readonly start: number;
}
export interface BigqueryTableRangePartitioning {
  /** The field used to determine how to create a range-based partition. */
  readonly field: string;
  /** range block */
  readonly range: BigqueryTableRangePartitioningRange[];
}
export interface BigqueryTableTimePartitioning {
  /** Number of milliseconds for which to keep the storage for a partition. */
  readonly expirationMs?: number;
  /** The field used to determine how to create a time-based partition. If time-based partitioning is enabled without this value, the table is partitioned based on the load time. */
  readonly field?: string;
  /** If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. */
  readonly requirePartitionFilter?: boolean;
  /** The supported types are DAY and HOUR, which will generate one partition per day or hour based on data loading time. */
  readonly type: string;
}
export interface BigqueryTableView {
  /** A query that BigQuery executes when the view is referenced. */
  readonly query: string;
  /** Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL */
  readonly useLegacySql?: boolean;
}

// Resource

export class BigqueryTable extends TerraformResource {

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
    return this._clustering;
  }
  public set clustering(value: string[] | undefined) {
    this._clustering = value;
  }

  // creation_time - computed: true, optional: false, required: true
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId: string;
  public get datasetId() {
    return this._datasetId;
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: number;
  public get expirationTime() {
    return this._expirationTime ?? this.getNumberAttribute('expiration_time');
  }
  public set expirationTime(value: number | undefined) {
    this._expirationTime = value;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string;
  public get friendlyName() {
    return this._friendlyName;
  }
  public set friendlyName(value: string | undefined) {
    this._friendlyName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // last_modified_time - computed: true, optional: false, required: true
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // num_bytes - computed: true, optional: false, required: true
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_long_term_bytes - computed: true, optional: false, required: true
  public get numLongTermBytes() {
    return this.getNumberAttribute('num_long_term_bytes');
  }

  // num_rows - computed: true, optional: false, required: true
  public get numRows() {
    return this.getNumberAttribute('num_rows');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string;
  public get schema() {
    return this._schema ?? this.getStringAttribute('schema');
  }
  public set schema(value: string | undefined) {
    this._schema = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId: string;
  public get tableId() {
    return this._tableId;
  }
  public set tableId(value: string) {
    this._tableId = value;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration?: BigqueryTableEncryptionConfiguration[];
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public set encryptionConfiguration(value: BigqueryTableEncryptionConfiguration[] | undefined) {
    this._encryptionConfiguration = value;
  }

  // external_data_configuration - computed: false, optional: true, required: false
  private _externalDataConfiguration?: BigqueryTableExternalDataConfiguration[];
  public get externalDataConfiguration() {
    return this._externalDataConfiguration;
  }
  public set externalDataConfiguration(value: BigqueryTableExternalDataConfiguration[] | undefined) {
    this._externalDataConfiguration = value;
  }

  // range_partitioning - computed: false, optional: true, required: false
  private _rangePartitioning?: BigqueryTableRangePartitioning[];
  public get rangePartitioning() {
    return this._rangePartitioning;
  }
  public set rangePartitioning(value: BigqueryTableRangePartitioning[] | undefined) {
    this._rangePartitioning = value;
  }

  // time_partitioning - computed: false, optional: true, required: false
  private _timePartitioning?: BigqueryTableTimePartitioning[];
  public get timePartitioning() {
    return this._timePartitioning;
  }
  public set timePartitioning(value: BigqueryTableTimePartitioning[] | undefined) {
    this._timePartitioning = value;
  }

  // view - computed: false, optional: true, required: false
  private _view?: BigqueryTableView[];
  public get view() {
    return this._view;
  }
  public set view(value: BigqueryTableView[] | undefined) {
    this._view = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      clustering: this._clustering,
      dataset_id: this._datasetId,
      description: this._description,
      expiration_time: this._expirationTime,
      friendly_name: this._friendlyName,
      labels: this._labels,
      project: this._project,
      schema: this._schema,
      table_id: this._tableId,
      encryption_configuration: this._encryptionConfiguration,
      external_data_configuration: this._externalDataConfiguration,
      range_partitioning: this._rangePartitioning,
      time_partitioning: this._timePartitioning,
      view: this._view,
    };
  }
}
