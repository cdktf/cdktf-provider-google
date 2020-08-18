// https://www.terraform.io/docs/providers/google/r/bigquery_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigqueryJobConfig extends TerraformMetaArguments {
  /** The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters. */
  readonly jobId: string;
  /** Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. */
  readonly jobTimeoutMs?: string;
  /** The labels associated with this job. You can use these to organize and group your jobs. */
  readonly labels?: { [key: string]: string };
  /** The geographic location of the job. The default value is US. */
  readonly location?: string;
  readonly project?: string;
  /** copy block */
  readonly copy?: BigqueryJobCopy[];
  /** extract block */
  readonly extract?: BigqueryJobExtract[];
  /** load block */
  readonly load?: BigqueryJobLoad[];
  /** query block */
  readonly query?: BigqueryJobQuery[];
  /** timeouts block */
  readonly timeouts?: BigqueryJobTimeouts;
}
export interface BigqueryJobCopyDestinationEncryptionConfiguration {
  /** Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
The BigQuery Service Account associated with your project requires access to this encryption key. */
  readonly kmsKeyName: string;
}
export interface BigqueryJobCopyDestinationTable {
  /** The ID of the dataset containing this table. */
  readonly datasetId?: string;
  /** The ID of the project containing this table. */
  readonly projectId?: string;
  /** The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. */
  readonly tableId: string;
}
export interface BigqueryJobCopySourceTables {
  /** The ID of the dataset containing this table. */
  readonly datasetId?: string;
  /** The ID of the project containing this table. */
  readonly projectId?: string;
  /** The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. */
  readonly tableId: string;
}
export interface BigqueryJobCopy {
  /** Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"] */
  readonly createDisposition?: string;
  /** Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"] */
  readonly writeDisposition?: string;
  /** destination_encryption_configuration block */
  readonly destinationEncryptionConfiguration?: BigqueryJobCopyDestinationEncryptionConfiguration[];
  /** destination_table block */
  readonly destinationTable?: BigqueryJobCopyDestinationTable[];
  /** source_tables block */
  readonly sourceTables: BigqueryJobCopySourceTables[];
}
export interface BigqueryJobExtractSourceModel {
  /** The ID of the dataset containing this model. */
  readonly datasetId: string;
  /** The ID of the model. */
  readonly modelId: string;
  /** The ID of the project containing this model. */
  readonly projectId: string;
}
export interface BigqueryJobExtractSourceTable {
  /** The ID of the dataset containing this table. */
  readonly datasetId?: string;
  /** The ID of the project containing this table. */
  readonly projectId?: string;
  /** The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. */
  readonly tableId: string;
}
export interface BigqueryJobExtract {
  /** The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro. */
  readonly compression?: string;
  /** The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL. */
  readonly destinationFormat?: string;
  /** A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. */
  readonly destinationUris: string[];
  /** When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.
Default is ',' */
  readonly fieldDelimiter?: string;
  /** Whether to print out a header row in the results. Default is true. */
  readonly printHeader?: boolean;
  /** Whether to use logical types when extracting to AVRO format. */
  readonly useAvroLogicalTypes?: boolean;
  /** source_model block */
  readonly sourceModel?: BigqueryJobExtractSourceModel[];
  /** source_table block */
  readonly sourceTable?: BigqueryJobExtractSourceTable[];
}
export interface BigqueryJobLoadDestinationEncryptionConfiguration {
  /** Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
The BigQuery Service Account associated with your project requires access to this encryption key. */
  readonly kmsKeyName: string;
}
export interface BigqueryJobLoadDestinationTable {
  /** The ID of the dataset containing this table. */
  readonly datasetId?: string;
  /** The ID of the project containing this table. */
  readonly projectId?: string;
  /** The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. */
  readonly tableId: string;
}
export interface BigqueryJobLoadTimePartitioning {
  /** Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value. */
  readonly expirationMs?: string;
  /** If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value. */
  readonly field?: string;
  /** The only type supported is DAY, which will generate one partition per day. Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset. */
  readonly type: string;
}
export interface BigqueryJobLoad {
  /** Accept rows that are missing trailing optional columns. The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats. */
  readonly allowJaggedRows?: boolean;
  /** Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.
The default value is false. */
  readonly allowQuotedNewlines?: boolean;
  /** Indicates if we should automatically infer the options and schema for CSV and JSON sources. */
  readonly autodetect?: boolean;
  /** Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"] */
  readonly createDisposition?: string;
  /** The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties. */
  readonly encoding?: string;
  /** The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (','). */
  readonly fieldDelimiter?: string;
  /** Indicates if BigQuery should allow extra values that are not represented in the table schema.
If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names */
  readonly ignoreUnknownValues?: boolean;
  /** The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. */
  readonly maxBadRecords?: number;
  /** Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value. */
  readonly nullMarker?: string;
  /** If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.
Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result. */
  readonly projectionFields?: string[];
  /** The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. */
  readonly quote?: string;
  /** Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or
supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable. */
  readonly schemaUpdateOptions?: string[];
  /** The number of rows at the top of a CSV file that BigQuery will skip when loading the data.
The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema. */
  readonly skipLeadingRows?: number;
  /** The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". The default value is CSV. */
  readonly sourceFormat?: string;
  /** The fully-qualified URIs that point to your data in Google Cloud.
For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed. */
  readonly sourceUris: string[];
  /** Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"] */
  readonly writeDisposition?: string;
  /** destination_encryption_configuration block */
  readonly destinationEncryptionConfiguration?: BigqueryJobLoadDestinationEncryptionConfiguration[];
  /** destination_table block */
  readonly destinationTable: BigqueryJobLoadDestinationTable[];
  /** time_partitioning block */
  readonly timePartitioning?: BigqueryJobLoadTimePartitioning[];
}
export interface BigqueryJobQueryDefaultDataset {
  /** The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not. */
  readonly datasetId: string;
  /** The ID of the project containing this table. */
  readonly projectId?: string;
}
export interface BigqueryJobQueryDestinationEncryptionConfiguration {
  /** Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
The BigQuery Service Account associated with your project requires access to this encryption key. */
  readonly kmsKeyName: string;
}
export interface BigqueryJobQueryDestinationTable {
  /** The ID of the dataset containing this table. */
  readonly datasetId?: string;
  /** The ID of the project containing this table. */
  readonly projectId?: string;
  /** The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. */
  readonly tableId: string;
}
export interface BigqueryJobQueryScriptOptions {
  /** Determines which statement in the script represents the "key result",
used to populate the schema and query results of the script job. Possible values: ["LAST", "FIRST_SELECT"] */
  readonly keyResultStatement?: string;
  /** Limit on the number of bytes billed per statement. Exceeding this budget results in an error. */
  readonly statementByteBudget?: string;
  /** Timeout period for each statement in a script. */
  readonly statementTimeoutMs?: string;
}
export interface BigqueryJobQueryUserDefinedFunctionResources {
  /** An inline resource that contains code for a user-defined function (UDF).
Providing a inline code resource is equivalent to providing a URI for a file containing the same code. */
  readonly inlineCode?: string;
  /** A code resource to load from a Google Cloud Storage URI (gs://bucket/path). */
  readonly resourceUri?: string;
}
export interface BigqueryJobQuery {
  /** If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.
Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size. */
  readonly allowLargeResults?: boolean;
  /** Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"] */
  readonly createDisposition?: string;
  /** If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.
allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened. */
  readonly flattenResults?: boolean;
  /** Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default. */
  readonly maximumBillingTier?: number;
  /** Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default. */
  readonly maximumBytesBilled?: string;
  /** Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query. */
  readonly parameterMode?: string;
  /** Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"] */
  readonly priority?: string;
  /** SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL. */
  readonly query: string;
  /** Allows the schema of the destination table to be updated as a side effect of the query job.
Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable. */
  readonly schemaUpdateOptions?: string[];
  /** Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true.
If set to false, the query will use BigQuery's standard SQL. */
  readonly useLegacySql?: boolean;
  /** Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true. */
  readonly useQueryCache?: boolean;
  /** Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"] */
  readonly writeDisposition?: string;
  /** default_dataset block */
  readonly defaultDataset?: BigqueryJobQueryDefaultDataset[];
  /** destination_encryption_configuration block */
  readonly destinationEncryptionConfiguration?: BigqueryJobQueryDestinationEncryptionConfiguration[];
  /** destination_table block */
  readonly destinationTable?: BigqueryJobQueryDestinationTable[];
  /** script_options block */
  readonly scriptOptions?: BigqueryJobQueryScriptOptions[];
  /** user_defined_function_resources block */
  readonly userDefinedFunctionResources?: BigqueryJobQueryUserDefinedFunctionResources[];
}
export interface BigqueryJobTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class BigqueryJob extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BigqueryJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_job',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._jobId = config.jobId;
    this._jobTimeoutMs = config.jobTimeoutMs;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._copy = config.copy;
    this._extract = config.extract;
    this._load = config.load;
    this._query = config.query;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId: string;
  public get jobId() {
    return this._jobId;
  }
  public set jobId(value: string) {
    this._jobId = value;
  }

  // job_timeout_ms - computed: false, optional: true, required: false
  private _jobTimeoutMs?: string;
  public get jobTimeoutMs() {
    return this._jobTimeoutMs;
  }
  public set jobTimeoutMs(value: string | undefined) {
    this._jobTimeoutMs = value;
  }

  // job_type - computed: true, optional: false, required: true
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // user_email - computed: true, optional: false, required: true
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }

  // copy - computed: false, optional: true, required: false
  private _copy?: BigqueryJobCopy[];
  public get copy() {
    return this._copy;
  }
  public set copy(value: BigqueryJobCopy[] | undefined) {
    this._copy = value;
  }

  // extract - computed: false, optional: true, required: false
  private _extract?: BigqueryJobExtract[];
  public get extract() {
    return this._extract;
  }
  public set extract(value: BigqueryJobExtract[] | undefined) {
    this._extract = value;
  }

  // load - computed: false, optional: true, required: false
  private _load?: BigqueryJobLoad[];
  public get load() {
    return this._load;
  }
  public set load(value: BigqueryJobLoad[] | undefined) {
    this._load = value;
  }

  // query - computed: false, optional: true, required: false
  private _query?: BigqueryJobQuery[];
  public get query() {
    return this._query;
  }
  public set query(value: BigqueryJobQuery[] | undefined) {
    this._query = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigqueryJobTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BigqueryJobTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      job_id: this._jobId,
      job_timeout_ms: this._jobTimeoutMs,
      labels: this._labels,
      location: this._location,
      project: this._project,
      copy: this._copy,
      extract: this._extract,
      load: this._load,
      query: this._query,
      timeouts: this._timeouts,
    };
  }
}
