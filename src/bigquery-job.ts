// https://www.terraform.io/docs/providers/google/r/bigquery_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#job_id BigqueryJob#job_id}
  */
  readonly jobId: string;
  /**
  * Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#job_timeout_ms BigqueryJob#job_timeout_ms}
  */
  readonly jobTimeoutMs?: string;
  /**
  * The labels associated with this job. You can use these to organize and group your jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#labels BigqueryJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The geographic location of the job. The default value is US.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#location BigqueryJob#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#project BigqueryJob#project}
  */
  readonly project?: string;
  /**
  * copy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#copy BigqueryJob#copy}
  */
  readonly copy?: BigqueryJobCopy[];
  /**
  * extract block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#extract BigqueryJob#extract}
  */
  readonly extract?: BigqueryJobExtract[];
  /**
  * load block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#load BigqueryJob#load}
  */
  readonly load?: BigqueryJobLoad[];
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#query BigqueryJob#query}
  */
  readonly query?: BigqueryJobQuery[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#timeouts BigqueryJob#timeouts}
  */
  readonly timeouts?: BigqueryJobTimeouts;
}
export class BigqueryJobStatusErrorResult extends cdktf.ComplexComputedList {

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}
export class BigqueryJobStatusErrors extends cdktf.ComplexComputedList {

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}
export class BigqueryJobStatus extends cdktf.ComplexComputedList {

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.interpolationForAttribute('error_result') as any;
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.interpolationForAttribute('errors') as any;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface BigqueryJobCopyDestinationEncryptionConfiguration {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
The BigQuery Service Account associated with your project requires access to this encryption key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#kms_key_name BigqueryJob#kms_key_name}
  */
  readonly kmsKeyName: string;
}

function bigqueryJobCopyDestinationEncryptionConfigurationToTerraform(struct?: BigqueryJobCopyDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export interface BigqueryJobCopyDestinationTable {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#dataset_id BigqueryJob#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#project_id BigqueryJob#project_id}
  */
  readonly projectId?: string;
  /**
  * The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#table_id BigqueryJob#table_id}
  */
  readonly tableId: string;
}

function bigqueryJobCopyDestinationTableToTerraform(struct?: BigqueryJobCopyDestinationTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export interface BigqueryJobCopySourceTables {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#dataset_id BigqueryJob#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#project_id BigqueryJob#project_id}
  */
  readonly projectId?: string;
  /**
  * The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#table_id BigqueryJob#table_id}
  */
  readonly tableId: string;
}

function bigqueryJobCopySourceTablesToTerraform(struct?: BigqueryJobCopySourceTables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export interface BigqueryJobCopy {
  /**
  * Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#create_disposition BigqueryJob#create_disposition}
  */
  readonly createDisposition?: string;
  /**
  * Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#write_disposition BigqueryJob#write_disposition}
  */
  readonly writeDisposition?: string;
  /**
  * destination_encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}
  */
  readonly destinationEncryptionConfiguration?: BigqueryJobCopyDestinationEncryptionConfiguration[];
  /**
  * destination_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_table BigqueryJob#destination_table}
  */
  readonly destinationTable?: BigqueryJobCopyDestinationTable[];
  /**
  * source_tables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#source_tables BigqueryJob#source_tables}
  */
  readonly sourceTables: BigqueryJobCopySourceTables[];
}

function bigqueryJobCopyToTerraform(struct?: BigqueryJobCopy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create_disposition: cdktf.stringToTerraform(struct!.createDisposition),
    write_disposition: cdktf.stringToTerraform(struct!.writeDisposition),
    destination_encryption_configuration: cdktf.listMapper(bigqueryJobCopyDestinationEncryptionConfigurationToTerraform)(struct!.destinationEncryptionConfiguration),
    destination_table: cdktf.listMapper(bigqueryJobCopyDestinationTableToTerraform)(struct!.destinationTable),
    source_tables: cdktf.listMapper(bigqueryJobCopySourceTablesToTerraform)(struct!.sourceTables),
  }
}

export interface BigqueryJobExtractSourceModel {
  /**
  * The ID of the dataset containing this model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#dataset_id BigqueryJob#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#model_id BigqueryJob#model_id}
  */
  readonly modelId: string;
  /**
  * The ID of the project containing this model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#project_id BigqueryJob#project_id}
  */
  readonly projectId: string;
}

function bigqueryJobExtractSourceModelToTerraform(struct?: BigqueryJobExtractSourceModel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    model_id: cdktf.stringToTerraform(struct!.modelId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export interface BigqueryJobExtractSourceTable {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#dataset_id BigqueryJob#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#project_id BigqueryJob#project_id}
  */
  readonly projectId?: string;
  /**
  * The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#table_id BigqueryJob#table_id}
  */
  readonly tableId: string;
}

function bigqueryJobExtractSourceTableToTerraform(struct?: BigqueryJobExtractSourceTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export interface BigqueryJobExtract {
  /**
  * The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#compression BigqueryJob#compression}
  */
  readonly compression?: string;
  /**
  * The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_format BigqueryJob#destination_format}
  */
  readonly destinationFormat?: string;
  /**
  * A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_uris BigqueryJob#destination_uris}
  */
  readonly destinationUris: string[];
  /**
  * When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.
Default is ','
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#field_delimiter BigqueryJob#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Whether to print out a header row in the results. Default is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#print_header BigqueryJob#print_header}
  */
  readonly printHeader?: boolean;
  /**
  * Whether to use logical types when extracting to AVRO format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#use_avro_logical_types BigqueryJob#use_avro_logical_types}
  */
  readonly useAvroLogicalTypes?: boolean;
  /**
  * source_model block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#source_model BigqueryJob#source_model}
  */
  readonly sourceModel?: BigqueryJobExtractSourceModel[];
  /**
  * source_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#source_table BigqueryJob#source_table}
  */
  readonly sourceTable?: BigqueryJobExtractSourceTable[];
}

function bigqueryJobExtractToTerraform(struct?: BigqueryJobExtract): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    destination_format: cdktf.stringToTerraform(struct!.destinationFormat),
    destination_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationUris),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    print_header: cdktf.booleanToTerraform(struct!.printHeader),
    use_avro_logical_types: cdktf.booleanToTerraform(struct!.useAvroLogicalTypes),
    source_model: cdktf.listMapper(bigqueryJobExtractSourceModelToTerraform)(struct!.sourceModel),
    source_table: cdktf.listMapper(bigqueryJobExtractSourceTableToTerraform)(struct!.sourceTable),
  }
}

export interface BigqueryJobLoadDestinationEncryptionConfiguration {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
The BigQuery Service Account associated with your project requires access to this encryption key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#kms_key_name BigqueryJob#kms_key_name}
  */
  readonly kmsKeyName: string;
}

function bigqueryJobLoadDestinationEncryptionConfigurationToTerraform(struct?: BigqueryJobLoadDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export interface BigqueryJobLoadDestinationTable {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#dataset_id BigqueryJob#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#project_id BigqueryJob#project_id}
  */
  readonly projectId?: string;
  /**
  * The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#table_id BigqueryJob#table_id}
  */
  readonly tableId: string;
}

function bigqueryJobLoadDestinationTableToTerraform(struct?: BigqueryJobLoadDestinationTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export interface BigqueryJobLoadTimePartitioning {
  /**
  * Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#expiration_ms BigqueryJob#expiration_ms}
  */
  readonly expirationMs?: string;
  /**
  * If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#field BigqueryJob#field}
  */
  readonly field?: string;
  /**
  * The only type supported is DAY, which will generate one partition per day. Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#type BigqueryJob#type}
  */
  readonly type: string;
}

function bigqueryJobLoadTimePartitioningToTerraform(struct?: BigqueryJobLoadTimePartitioning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expiration_ms: cdktf.stringToTerraform(struct!.expirationMs),
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface BigqueryJobLoad {
  /**
  * Accept rows that are missing trailing optional columns. The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#allow_jagged_rows BigqueryJob#allow_jagged_rows}
  */
  readonly allowJaggedRows?: boolean;
  /**
  * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.
The default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#allow_quoted_newlines BigqueryJob#allow_quoted_newlines}
  */
  readonly allowQuotedNewlines?: boolean;
  /**
  * Indicates if we should automatically infer the options and schema for CSV and JSON sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#autodetect BigqueryJob#autodetect}
  */
  readonly autodetect?: boolean;
  /**
  * Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#create_disposition BigqueryJob#create_disposition}
  */
  readonly createDisposition?: string;
  /**
  * The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#encoding BigqueryJob#encoding}
  */
  readonly encoding?: string;
  /**
  * The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#field_delimiter BigqueryJob#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Indicates if BigQuery should allow extra values that are not represented in the table schema.
If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#ignore_unknown_values BigqueryJob#ignore_unknown_values}
  */
  readonly ignoreUnknownValues?: boolean;
  /**
  * The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#max_bad_records BigqueryJob#max_bad_records}
  */
  readonly maxBadRecords?: number;
  /**
  * Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#null_marker BigqueryJob#null_marker}
  */
  readonly nullMarker?: string;
  /**
  * If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.
Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#projection_fields BigqueryJob#projection_fields}
  */
  readonly projectionFields?: string[];
  /**
  * The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#quote BigqueryJob#quote}
  */
  readonly quote?: string;
  /**
  * Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or
supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#schema_update_options BigqueryJob#schema_update_options}
  */
  readonly schemaUpdateOptions?: string[];
  /**
  * The number of rows at the top of a CSV file that BigQuery will skip when loading the data.
The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#skip_leading_rows BigqueryJob#skip_leading_rows}
  */
  readonly skipLeadingRows?: number;
  /**
  * The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#source_format BigqueryJob#source_format}
  */
  readonly sourceFormat?: string;
  /**
  * The fully-qualified URIs that point to your data in Google Cloud.
For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#source_uris BigqueryJob#source_uris}
  */
  readonly sourceUris: string[];
  /**
  * Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#write_disposition BigqueryJob#write_disposition}
  */
  readonly writeDisposition?: string;
  /**
  * destination_encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}
  */
  readonly destinationEncryptionConfiguration?: BigqueryJobLoadDestinationEncryptionConfiguration[];
  /**
  * destination_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_table BigqueryJob#destination_table}
  */
  readonly destinationTable: BigqueryJobLoadDestinationTable[];
  /**
  * time_partitioning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#time_partitioning BigqueryJob#time_partitioning}
  */
  readonly timePartitioning?: BigqueryJobLoadTimePartitioning[];
}

function bigqueryJobLoadToTerraform(struct?: BigqueryJobLoad): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_jagged_rows: cdktf.booleanToTerraform(struct!.allowJaggedRows),
    allow_quoted_newlines: cdktf.booleanToTerraform(struct!.allowQuotedNewlines),
    autodetect: cdktf.booleanToTerraform(struct!.autodetect),
    create_disposition: cdktf.stringToTerraform(struct!.createDisposition),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    ignore_unknown_values: cdktf.booleanToTerraform(struct!.ignoreUnknownValues),
    max_bad_records: cdktf.numberToTerraform(struct!.maxBadRecords),
    null_marker: cdktf.stringToTerraform(struct!.nullMarker),
    projection_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.projectionFields),
    quote: cdktf.stringToTerraform(struct!.quote),
    schema_update_options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.schemaUpdateOptions),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    source_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceUris),
    write_disposition: cdktf.stringToTerraform(struct!.writeDisposition),
    destination_encryption_configuration: cdktf.listMapper(bigqueryJobLoadDestinationEncryptionConfigurationToTerraform)(struct!.destinationEncryptionConfiguration),
    destination_table: cdktf.listMapper(bigqueryJobLoadDestinationTableToTerraform)(struct!.destinationTable),
    time_partitioning: cdktf.listMapper(bigqueryJobLoadTimePartitioningToTerraform)(struct!.timePartitioning),
  }
}

export interface BigqueryJobQueryDefaultDataset {
  /**
  * The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#dataset_id BigqueryJob#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#project_id BigqueryJob#project_id}
  */
  readonly projectId?: string;
}

function bigqueryJobQueryDefaultDatasetToTerraform(struct?: BigqueryJobQueryDefaultDataset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export interface BigqueryJobQueryDestinationEncryptionConfiguration {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
The BigQuery Service Account associated with your project requires access to this encryption key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#kms_key_name BigqueryJob#kms_key_name}
  */
  readonly kmsKeyName: string;
}

function bigqueryJobQueryDestinationEncryptionConfigurationToTerraform(struct?: BigqueryJobQueryDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export interface BigqueryJobQueryDestinationTable {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#dataset_id BigqueryJob#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#project_id BigqueryJob#project_id}
  */
  readonly projectId?: string;
  /**
  * The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#table_id BigqueryJob#table_id}
  */
  readonly tableId: string;
}

function bigqueryJobQueryDestinationTableToTerraform(struct?: BigqueryJobQueryDestinationTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export interface BigqueryJobQueryScriptOptions {
  /**
  * Determines which statement in the script represents the "key result",
used to populate the schema and query results of the script job. Possible values: ["LAST", "FIRST_SELECT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#key_result_statement BigqueryJob#key_result_statement}
  */
  readonly keyResultStatement?: string;
  /**
  * Limit on the number of bytes billed per statement. Exceeding this budget results in an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#statement_byte_budget BigqueryJob#statement_byte_budget}
  */
  readonly statementByteBudget?: string;
  /**
  * Timeout period for each statement in a script.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#statement_timeout_ms BigqueryJob#statement_timeout_ms}
  */
  readonly statementTimeoutMs?: string;
}

function bigqueryJobQueryScriptOptionsToTerraform(struct?: BigqueryJobQueryScriptOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_result_statement: cdktf.stringToTerraform(struct!.keyResultStatement),
    statement_byte_budget: cdktf.stringToTerraform(struct!.statementByteBudget),
    statement_timeout_ms: cdktf.stringToTerraform(struct!.statementTimeoutMs),
  }
}

export interface BigqueryJobQueryUserDefinedFunctionResources {
  /**
  * An inline resource that contains code for a user-defined function (UDF).
Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#inline_code BigqueryJob#inline_code}
  */
  readonly inlineCode?: string;
  /**
  * A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#resource_uri BigqueryJob#resource_uri}
  */
  readonly resourceUri?: string;
}

function bigqueryJobQueryUserDefinedFunctionResourcesToTerraform(struct?: BigqueryJobQueryUserDefinedFunctionResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    inline_code: cdktf.stringToTerraform(struct!.inlineCode),
    resource_uri: cdktf.stringToTerraform(struct!.resourceUri),
  }
}

export interface BigqueryJobQuery {
  /**
  * If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.
Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#allow_large_results BigqueryJob#allow_large_results}
  */
  readonly allowLargeResults?: boolean;
  /**
  * Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#create_disposition BigqueryJob#create_disposition}
  */
  readonly createDisposition?: string;
  /**
  * If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.
allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#flatten_results BigqueryJob#flatten_results}
  */
  readonly flattenResults?: boolean;
  /**
  * Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#maximum_billing_tier BigqueryJob#maximum_billing_tier}
  */
  readonly maximumBillingTier?: number;
  /**
  * Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#maximum_bytes_billed BigqueryJob#maximum_bytes_billed}
  */
  readonly maximumBytesBilled?: string;
  /**
  * Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#parameter_mode BigqueryJob#parameter_mode}
  */
  readonly parameterMode?: string;
  /**
  * Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#priority BigqueryJob#priority}
  */
  readonly priority?: string;
  /**
  * SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#query BigqueryJob#query}
  */
  readonly query: string;
  /**
  * Allows the schema of the destination table to be updated as a side effect of the query job.
Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#schema_update_options BigqueryJob#schema_update_options}
  */
  readonly schemaUpdateOptions?: string[];
  /**
  * Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true.
If set to false, the query will use BigQuery's standard SQL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#use_legacy_sql BigqueryJob#use_legacy_sql}
  */
  readonly useLegacySql?: boolean;
  /**
  * Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#use_query_cache BigqueryJob#use_query_cache}
  */
  readonly useQueryCache?: boolean;
  /**
  * Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#write_disposition BigqueryJob#write_disposition}
  */
  readonly writeDisposition?: string;
  /**
  * default_dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#default_dataset BigqueryJob#default_dataset}
  */
  readonly defaultDataset?: BigqueryJobQueryDefaultDataset[];
  /**
  * destination_encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}
  */
  readonly destinationEncryptionConfiguration?: BigqueryJobQueryDestinationEncryptionConfiguration[];
  /**
  * destination_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_table BigqueryJob#destination_table}
  */
  readonly destinationTable?: BigqueryJobQueryDestinationTable[];
  /**
  * script_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#script_options BigqueryJob#script_options}
  */
  readonly scriptOptions?: BigqueryJobQueryScriptOptions[];
  /**
  * user_defined_function_resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#user_defined_function_resources BigqueryJob#user_defined_function_resources}
  */
  readonly userDefinedFunctionResources?: BigqueryJobQueryUserDefinedFunctionResources[];
}

function bigqueryJobQueryToTerraform(struct?: BigqueryJobQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_large_results: cdktf.booleanToTerraform(struct!.allowLargeResults),
    create_disposition: cdktf.stringToTerraform(struct!.createDisposition),
    flatten_results: cdktf.booleanToTerraform(struct!.flattenResults),
    maximum_billing_tier: cdktf.numberToTerraform(struct!.maximumBillingTier),
    maximum_bytes_billed: cdktf.stringToTerraform(struct!.maximumBytesBilled),
    parameter_mode: cdktf.stringToTerraform(struct!.parameterMode),
    priority: cdktf.stringToTerraform(struct!.priority),
    query: cdktf.stringToTerraform(struct!.query),
    schema_update_options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.schemaUpdateOptions),
    use_legacy_sql: cdktf.booleanToTerraform(struct!.useLegacySql),
    use_query_cache: cdktf.booleanToTerraform(struct!.useQueryCache),
    write_disposition: cdktf.stringToTerraform(struct!.writeDisposition),
    default_dataset: cdktf.listMapper(bigqueryJobQueryDefaultDatasetToTerraform)(struct!.defaultDataset),
    destination_encryption_configuration: cdktf.listMapper(bigqueryJobQueryDestinationEncryptionConfigurationToTerraform)(struct!.destinationEncryptionConfiguration),
    destination_table: cdktf.listMapper(bigqueryJobQueryDestinationTableToTerraform)(struct!.destinationTable),
    script_options: cdktf.listMapper(bigqueryJobQueryScriptOptionsToTerraform)(struct!.scriptOptions),
    user_defined_function_resources: cdktf.listMapper(bigqueryJobQueryUserDefinedFunctionResourcesToTerraform)(struct!.userDefinedFunctionResources),
  }
}

export interface BigqueryJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#create BigqueryJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#delete BigqueryJob#delete}
  */
  readonly delete?: string;
}

function bigqueryJobTimeoutsToTerraform(struct?: BigqueryJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html google_bigquery_job}
*/
export class BigqueryJob extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html google_bigquery_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryJobConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId: string;
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId
  }

  // job_timeout_ms - computed: false, optional: true, required: false
  private _jobTimeoutMs?: string;
  public get jobTimeoutMs() {
    return this.getStringAttribute('job_timeout_ms');
  }
  public set jobTimeoutMs(value: string ) {
    this._jobTimeoutMs = value;
  }
  public resetJobTimeoutMs() {
    this._jobTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutMsInput() {
    return this._jobTimeoutMs
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
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

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new BigqueryJobStatus(this, 'status', index);
  }

  // user_email - computed: true, optional: false, required: false
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }

  // copy - computed: false, optional: true, required: false
  private _copy?: BigqueryJobCopy[];
  public get copy() {
    return this.interpolationForAttribute('copy') as any;
  }
  public set copy(value: BigqueryJobCopy[] ) {
    this._copy = value;
  }
  public resetCopy() {
    this._copy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyInput() {
    return this._copy
  }

  // extract - computed: false, optional: true, required: false
  private _extract?: BigqueryJobExtract[];
  public get extract() {
    return this.interpolationForAttribute('extract') as any;
  }
  public set extract(value: BigqueryJobExtract[] ) {
    this._extract = value;
  }
  public resetExtract() {
    this._extract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract
  }

  // load - computed: false, optional: true, required: false
  private _load?: BigqueryJobLoad[];
  public get load() {
    return this.interpolationForAttribute('load') as any;
  }
  public set load(value: BigqueryJobLoad[] ) {
    this._load = value;
  }
  public resetLoad() {
    this._load = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load
  }

  // query - computed: false, optional: true, required: false
  private _query?: BigqueryJobQuery[];
  public get query() {
    return this.interpolationForAttribute('query') as any;
  }
  public set query(value: BigqueryJobQuery[] ) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigqueryJobTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BigqueryJobTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      job_id: cdktf.stringToTerraform(this._jobId),
      job_timeout_ms: cdktf.stringToTerraform(this._jobTimeoutMs),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      copy: cdktf.listMapper(bigqueryJobCopyToTerraform)(this._copy),
      extract: cdktf.listMapper(bigqueryJobExtractToTerraform)(this._extract),
      load: cdktf.listMapper(bigqueryJobLoadToTerraform)(this._load),
      query: cdktf.listMapper(bigqueryJobQueryToTerraform)(this._query),
      timeouts: bigqueryJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
