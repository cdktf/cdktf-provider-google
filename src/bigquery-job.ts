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
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
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
  readonly copy?: BigqueryJobCopy;
  /**
  * extract block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#extract BigqueryJob#extract}
  */
  readonly extract?: BigqueryJobExtract;
  /**
  * load block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#load BigqueryJob#load}
  */
  readonly load?: BigqueryJobLoad;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#query BigqueryJob#query}
  */
  readonly query?: BigqueryJobQuery;
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('error_result') as any;
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    // Getting the computed value is not yet implemented
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

function bigqueryJobCopyDestinationEncryptionConfigurationToTerraform(struct?: BigqueryJobCopyDestinationEncryptionConfigurationOutputReference | BigqueryJobCopyDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class BigqueryJobCopyDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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

function bigqueryJobCopyDestinationTableToTerraform(struct?: BigqueryJobCopyDestinationTableOutputReference | BigqueryJobCopyDestinationTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export class BigqueryJobCopyDestinationTableOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string | undefined; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string | undefined) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string | undefined; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly destinationEncryptionConfiguration?: BigqueryJobCopyDestinationEncryptionConfiguration;
  /**
  * destination_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_table BigqueryJob#destination_table}
  */
  readonly destinationTable?: BigqueryJobCopyDestinationTable;
  /**
  * source_tables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#source_tables BigqueryJob#source_tables}
  */
  readonly sourceTables: BigqueryJobCopySourceTables[];
}

function bigqueryJobCopyToTerraform(struct?: BigqueryJobCopyOutputReference | BigqueryJobCopy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_disposition: cdktf.stringToTerraform(struct!.createDisposition),
    write_disposition: cdktf.stringToTerraform(struct!.writeDisposition),
    destination_encryption_configuration: bigqueryJobCopyDestinationEncryptionConfigurationToTerraform(struct!.destinationEncryptionConfiguration),
    destination_table: bigqueryJobCopyDestinationTableToTerraform(struct!.destinationTable),
    source_tables: cdktf.listMapper(bigqueryJobCopySourceTablesToTerraform)(struct!.sourceTables),
  }
}

export class BigqueryJobCopyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create_disposition - computed: false, optional: true, required: false
  private _createDisposition?: string | undefined; 
  public get createDisposition() {
    return this.getStringAttribute('create_disposition');
  }
  public set createDisposition(value: string | undefined) {
    this._createDisposition = value;
  }
  public resetCreateDisposition() {
    this._createDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDispositionInput() {
    return this._createDisposition
  }

  // write_disposition - computed: false, optional: true, required: false
  private _writeDisposition?: string | undefined; 
  public get writeDisposition() {
    return this.getStringAttribute('write_disposition');
  }
  public set writeDisposition(value: string | undefined) {
    this._writeDisposition = value;
  }
  public resetWriteDisposition() {
    this._writeDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDispositionInput() {
    return this._writeDisposition
  }

  // destination_encryption_configuration - computed: false, optional: true, required: false
  private _destinationEncryptionConfiguration?: BigqueryJobCopyDestinationEncryptionConfiguration | undefined; 
  private __destinationEncryptionConfigurationOutput = new BigqueryJobCopyDestinationEncryptionConfigurationOutputReference(this as any, "destination_encryption_configuration", true);
  public get destinationEncryptionConfiguration() {
    return this.__destinationEncryptionConfigurationOutput;
  }
  public putDestinationEncryptionConfiguration(value: BigqueryJobCopyDestinationEncryptionConfiguration | undefined) {
    this._destinationEncryptionConfiguration = value;
  }
  public resetDestinationEncryptionConfiguration() {
    this._destinationEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEncryptionConfigurationInput() {
    return this._destinationEncryptionConfiguration
  }

  // destination_table - computed: false, optional: true, required: false
  private _destinationTable?: BigqueryJobCopyDestinationTable | undefined; 
  private __destinationTableOutput = new BigqueryJobCopyDestinationTableOutputReference(this as any, "destination_table", true);
  public get destinationTable() {
    return this.__destinationTableOutput;
  }
  public putDestinationTable(value: BigqueryJobCopyDestinationTable | undefined) {
    this._destinationTable = value;
  }
  public resetDestinationTable() {
    this._destinationTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable
  }

  // source_tables - computed: false, optional: false, required: true
  private _sourceTables?: BigqueryJobCopySourceTables[]; 
  public get sourceTables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('source_tables') as any;
  }
  public set sourceTables(value: BigqueryJobCopySourceTables[]) {
    this._sourceTables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTablesInput() {
    return this._sourceTables
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

function bigqueryJobExtractSourceModelToTerraform(struct?: BigqueryJobExtractSourceModelOutputReference | BigqueryJobExtractSourceModel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    model_id: cdktf.stringToTerraform(struct!.modelId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export class BigqueryJobExtractSourceModelOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
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

function bigqueryJobExtractSourceTableToTerraform(struct?: BigqueryJobExtractSourceTableOutputReference | BigqueryJobExtractSourceTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export class BigqueryJobExtractSourceTableOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string | undefined; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string | undefined) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string | undefined; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
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
  readonly printHeader?: boolean | cdktf.IResolvable;
  /**
  * Whether to use logical types when extracting to AVRO format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#use_avro_logical_types BigqueryJob#use_avro_logical_types}
  */
  readonly useAvroLogicalTypes?: boolean | cdktf.IResolvable;
  /**
  * source_model block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#source_model BigqueryJob#source_model}
  */
  readonly sourceModel?: BigqueryJobExtractSourceModel;
  /**
  * source_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#source_table BigqueryJob#source_table}
  */
  readonly sourceTable?: BigqueryJobExtractSourceTable;
}

function bigqueryJobExtractToTerraform(struct?: BigqueryJobExtractOutputReference | BigqueryJobExtract): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    destination_format: cdktf.stringToTerraform(struct!.destinationFormat),
    destination_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationUris),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    print_header: cdktf.booleanToTerraform(struct!.printHeader),
    use_avro_logical_types: cdktf.booleanToTerraform(struct!.useAvroLogicalTypes),
    source_model: bigqueryJobExtractSourceModelToTerraform(struct!.sourceModel),
    source_table: bigqueryJobExtractSourceTableToTerraform(struct!.sourceTable),
  }
}

export class BigqueryJobExtractOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // destination_format - computed: true, optional: true, required: false
  private _destinationFormat?: string | undefined; 
  public get destinationFormat() {
    return this.getStringAttribute('destination_format');
  }
  public set destinationFormat(value: string | undefined) {
    this._destinationFormat = value;
  }
  public resetDestinationFormat() {
    this._destinationFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFormatInput() {
    return this._destinationFormat
  }

  // destination_uris - computed: false, optional: false, required: true
  private _destinationUris?: string[]; 
  public get destinationUris() {
    return this.getListAttribute('destination_uris');
  }
  public set destinationUris(value: string[]) {
    this._destinationUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationUrisInput() {
    return this._destinationUris
  }

  // field_delimiter - computed: true, optional: true, required: false
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

  // print_header - computed: false, optional: true, required: false
  private _printHeader?: boolean | cdktf.IResolvable | undefined; 
  public get printHeader() {
    return this.getBooleanAttribute('print_header') as any;
  }
  public set printHeader(value: boolean | cdktf.IResolvable | undefined) {
    this._printHeader = value;
  }
  public resetPrintHeader() {
    this._printHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get printHeaderInput() {
    return this._printHeader
  }

  // use_avro_logical_types - computed: false, optional: true, required: false
  private _useAvroLogicalTypes?: boolean | cdktf.IResolvable | undefined; 
  public get useAvroLogicalTypes() {
    return this.getBooleanAttribute('use_avro_logical_types') as any;
  }
  public set useAvroLogicalTypes(value: boolean | cdktf.IResolvable | undefined) {
    this._useAvroLogicalTypes = value;
  }
  public resetUseAvroLogicalTypes() {
    this._useAvroLogicalTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAvroLogicalTypesInput() {
    return this._useAvroLogicalTypes
  }

  // source_model - computed: false, optional: true, required: false
  private _sourceModel?: BigqueryJobExtractSourceModel | undefined; 
  private __sourceModelOutput = new BigqueryJobExtractSourceModelOutputReference(this as any, "source_model", true);
  public get sourceModel() {
    return this.__sourceModelOutput;
  }
  public putSourceModel(value: BigqueryJobExtractSourceModel | undefined) {
    this._sourceModel = value;
  }
  public resetSourceModel() {
    this._sourceModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceModelInput() {
    return this._sourceModel
  }

  // source_table - computed: false, optional: true, required: false
  private _sourceTable?: BigqueryJobExtractSourceTable | undefined; 
  private __sourceTableOutput = new BigqueryJobExtractSourceTableOutputReference(this as any, "source_table", true);
  public get sourceTable() {
    return this.__sourceTableOutput;
  }
  public putSourceTable(value: BigqueryJobExtractSourceTable | undefined) {
    this._sourceTable = value;
  }
  public resetSourceTable() {
    this._sourceTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableInput() {
    return this._sourceTable
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

function bigqueryJobLoadDestinationEncryptionConfigurationToTerraform(struct?: BigqueryJobLoadDestinationEncryptionConfigurationOutputReference | BigqueryJobLoadDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class BigqueryJobLoadDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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

function bigqueryJobLoadDestinationTableToTerraform(struct?: BigqueryJobLoadDestinationTableOutputReference | BigqueryJobLoadDestinationTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export class BigqueryJobLoadDestinationTableOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string | undefined; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string | undefined) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string | undefined; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
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

function bigqueryJobLoadTimePartitioningToTerraform(struct?: BigqueryJobLoadTimePartitioningOutputReference | BigqueryJobLoadTimePartitioning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_ms: cdktf.stringToTerraform(struct!.expirationMs),
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class BigqueryJobLoadTimePartitioningOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // expiration_ms - computed: false, optional: true, required: false
  private _expirationMs?: string | undefined; 
  public get expirationMs() {
    return this.getStringAttribute('expiration_ms');
  }
  public set expirationMs(value: string | undefined) {
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
export interface BigqueryJobLoad {
  /**
  * Accept rows that are missing trailing optional columns. The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#allow_jagged_rows BigqueryJob#allow_jagged_rows}
  */
  readonly allowJaggedRows?: boolean | cdktf.IResolvable;
  /**
  * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.
The default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#allow_quoted_newlines BigqueryJob#allow_quoted_newlines}
  */
  readonly allowQuotedNewlines?: boolean | cdktf.IResolvable;
  /**
  * Indicates if we should automatically infer the options and schema for CSV and JSON sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#autodetect BigqueryJob#autodetect}
  */
  readonly autodetect?: boolean | cdktf.IResolvable;
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
  readonly ignoreUnknownValues?: boolean | cdktf.IResolvable;
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
  readonly destinationEncryptionConfiguration?: BigqueryJobLoadDestinationEncryptionConfiguration;
  /**
  * destination_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_table BigqueryJob#destination_table}
  */
  readonly destinationTable: BigqueryJobLoadDestinationTable;
  /**
  * time_partitioning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#time_partitioning BigqueryJob#time_partitioning}
  */
  readonly timePartitioning?: BigqueryJobLoadTimePartitioning;
}

function bigqueryJobLoadToTerraform(struct?: BigqueryJobLoadOutputReference | BigqueryJobLoad): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    destination_encryption_configuration: bigqueryJobLoadDestinationEncryptionConfigurationToTerraform(struct!.destinationEncryptionConfiguration),
    destination_table: bigqueryJobLoadDestinationTableToTerraform(struct!.destinationTable),
    time_partitioning: bigqueryJobLoadTimePartitioningToTerraform(struct!.timePartitioning),
  }
}

export class BigqueryJobLoadOutputReference extends cdktf.ComplexObject {
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

  // autodetect - computed: false, optional: true, required: false
  private _autodetect?: boolean | cdktf.IResolvable | undefined; 
  public get autodetect() {
    return this.getBooleanAttribute('autodetect') as any;
  }
  public set autodetect(value: boolean | cdktf.IResolvable | undefined) {
    this._autodetect = value;
  }
  public resetAutodetect() {
    this._autodetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodetectInput() {
    return this._autodetect
  }

  // create_disposition - computed: false, optional: true, required: false
  private _createDisposition?: string | undefined; 
  public get createDisposition() {
    return this.getStringAttribute('create_disposition');
  }
  public set createDisposition(value: string | undefined) {
    this._createDisposition = value;
  }
  public resetCreateDisposition() {
    this._createDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDispositionInput() {
    return this._createDisposition
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

  // field_delimiter - computed: true, optional: true, required: false
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

  // null_marker - computed: false, optional: true, required: false
  private _nullMarker?: string | undefined; 
  public get nullMarker() {
    return this.getStringAttribute('null_marker');
  }
  public set nullMarker(value: string | undefined) {
    this._nullMarker = value;
  }
  public resetNullMarker() {
    this._nullMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullMarkerInput() {
    return this._nullMarker
  }

  // projection_fields - computed: false, optional: true, required: false
  private _projectionFields?: string[] | undefined; 
  public get projectionFields() {
    return this.getListAttribute('projection_fields');
  }
  public set projectionFields(value: string[] | undefined) {
    this._projectionFields = value;
  }
  public resetProjectionFields() {
    this._projectionFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionFieldsInput() {
    return this._projectionFields
  }

  // quote - computed: true, optional: true, required: false
  private _quote?: string | undefined; 
  public get quote() {
    return this.getStringAttribute('quote');
  }
  public set quote(value: string | undefined) {
    this._quote = value;
  }
  public resetQuote() {
    this._quote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteInput() {
    return this._quote
  }

  // schema_update_options - computed: false, optional: true, required: false
  private _schemaUpdateOptions?: string[] | undefined; 
  public get schemaUpdateOptions() {
    return this.getListAttribute('schema_update_options');
  }
  public set schemaUpdateOptions(value: string[] | undefined) {
    this._schemaUpdateOptions = value;
  }
  public resetSchemaUpdateOptions() {
    this._schemaUpdateOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaUpdateOptionsInput() {
    return this._schemaUpdateOptions
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

  // source_format - computed: false, optional: true, required: false
  private _sourceFormat?: string | undefined; 
  public get sourceFormat() {
    return this.getStringAttribute('source_format');
  }
  public set sourceFormat(value: string | undefined) {
    this._sourceFormat = value;
  }
  public resetSourceFormat() {
    this._sourceFormat = undefined;
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

  // write_disposition - computed: false, optional: true, required: false
  private _writeDisposition?: string | undefined; 
  public get writeDisposition() {
    return this.getStringAttribute('write_disposition');
  }
  public set writeDisposition(value: string | undefined) {
    this._writeDisposition = value;
  }
  public resetWriteDisposition() {
    this._writeDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDispositionInput() {
    return this._writeDisposition
  }

  // destination_encryption_configuration - computed: false, optional: true, required: false
  private _destinationEncryptionConfiguration?: BigqueryJobLoadDestinationEncryptionConfiguration | undefined; 
  private __destinationEncryptionConfigurationOutput = new BigqueryJobLoadDestinationEncryptionConfigurationOutputReference(this as any, "destination_encryption_configuration", true);
  public get destinationEncryptionConfiguration() {
    return this.__destinationEncryptionConfigurationOutput;
  }
  public putDestinationEncryptionConfiguration(value: BigqueryJobLoadDestinationEncryptionConfiguration | undefined) {
    this._destinationEncryptionConfiguration = value;
  }
  public resetDestinationEncryptionConfiguration() {
    this._destinationEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEncryptionConfigurationInput() {
    return this._destinationEncryptionConfiguration
  }

  // destination_table - computed: false, optional: false, required: true
  private _destinationTable?: BigqueryJobLoadDestinationTable; 
  private __destinationTableOutput = new BigqueryJobLoadDestinationTableOutputReference(this as any, "destination_table", true);
  public get destinationTable() {
    return this.__destinationTableOutput;
  }
  public putDestinationTable(value: BigqueryJobLoadDestinationTable) {
    this._destinationTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable
  }

  // time_partitioning - computed: false, optional: true, required: false
  private _timePartitioning?: BigqueryJobLoadTimePartitioning | undefined; 
  private __timePartitioningOutput = new BigqueryJobLoadTimePartitioningOutputReference(this as any, "time_partitioning", true);
  public get timePartitioning() {
    return this.__timePartitioningOutput;
  }
  public putTimePartitioning(value: BigqueryJobLoadTimePartitioning | undefined) {
    this._timePartitioning = value;
  }
  public resetTimePartitioning() {
    this._timePartitioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePartitioningInput() {
    return this._timePartitioning
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

function bigqueryJobQueryDefaultDatasetToTerraform(struct?: BigqueryJobQueryDefaultDatasetOutputReference | BigqueryJobQueryDefaultDataset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export class BigqueryJobQueryDefaultDatasetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string | undefined; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
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

function bigqueryJobQueryDestinationEncryptionConfigurationToTerraform(struct?: BigqueryJobQueryDestinationEncryptionConfigurationOutputReference | BigqueryJobQueryDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class BigqueryJobQueryDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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

function bigqueryJobQueryDestinationTableToTerraform(struct?: BigqueryJobQueryDestinationTableOutputReference | BigqueryJobQueryDestinationTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export class BigqueryJobQueryDestinationTableOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string | undefined; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string | undefined) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string | undefined; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
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

function bigqueryJobQueryScriptOptionsToTerraform(struct?: BigqueryJobQueryScriptOptionsOutputReference | BigqueryJobQueryScriptOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_result_statement: cdktf.stringToTerraform(struct!.keyResultStatement),
    statement_byte_budget: cdktf.stringToTerraform(struct!.statementByteBudget),
    statement_timeout_ms: cdktf.stringToTerraform(struct!.statementTimeoutMs),
  }
}

export class BigqueryJobQueryScriptOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_result_statement - computed: false, optional: true, required: false
  private _keyResultStatement?: string | undefined; 
  public get keyResultStatement() {
    return this.getStringAttribute('key_result_statement');
  }
  public set keyResultStatement(value: string | undefined) {
    this._keyResultStatement = value;
  }
  public resetKeyResultStatement() {
    this._keyResultStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyResultStatementInput() {
    return this._keyResultStatement
  }

  // statement_byte_budget - computed: false, optional: true, required: false
  private _statementByteBudget?: string | undefined; 
  public get statementByteBudget() {
    return this.getStringAttribute('statement_byte_budget');
  }
  public set statementByteBudget(value: string | undefined) {
    this._statementByteBudget = value;
  }
  public resetStatementByteBudget() {
    this._statementByteBudget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementByteBudgetInput() {
    return this._statementByteBudget
  }

  // statement_timeout_ms - computed: false, optional: true, required: false
  private _statementTimeoutMs?: string | undefined; 
  public get statementTimeoutMs() {
    return this.getStringAttribute('statement_timeout_ms');
  }
  public set statementTimeoutMs(value: string | undefined) {
    this._statementTimeoutMs = value;
  }
  public resetStatementTimeoutMs() {
    this._statementTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementTimeoutMsInput() {
    return this._statementTimeoutMs
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly allowLargeResults?: boolean | cdktf.IResolvable;
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
  readonly flattenResults?: boolean | cdktf.IResolvable;
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
  readonly useLegacySql?: boolean | cdktf.IResolvable;
  /**
  * Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#use_query_cache BigqueryJob#use_query_cache}
  */
  readonly useQueryCache?: boolean | cdktf.IResolvable;
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
  readonly defaultDataset?: BigqueryJobQueryDefaultDataset;
  /**
  * destination_encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}
  */
  readonly destinationEncryptionConfiguration?: BigqueryJobQueryDestinationEncryptionConfiguration;
  /**
  * destination_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#destination_table BigqueryJob#destination_table}
  */
  readonly destinationTable?: BigqueryJobQueryDestinationTable;
  /**
  * script_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#script_options BigqueryJob#script_options}
  */
  readonly scriptOptions?: BigqueryJobQueryScriptOptions;
  /**
  * user_defined_function_resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html#user_defined_function_resources BigqueryJob#user_defined_function_resources}
  */
  readonly userDefinedFunctionResources?: BigqueryJobQueryUserDefinedFunctionResources[];
}

function bigqueryJobQueryToTerraform(struct?: BigqueryJobQueryOutputReference | BigqueryJobQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    default_dataset: bigqueryJobQueryDefaultDatasetToTerraform(struct!.defaultDataset),
    destination_encryption_configuration: bigqueryJobQueryDestinationEncryptionConfigurationToTerraform(struct!.destinationEncryptionConfiguration),
    destination_table: bigqueryJobQueryDestinationTableToTerraform(struct!.destinationTable),
    script_options: bigqueryJobQueryScriptOptionsToTerraform(struct!.scriptOptions),
    user_defined_function_resources: cdktf.listMapper(bigqueryJobQueryUserDefinedFunctionResourcesToTerraform)(struct!.userDefinedFunctionResources),
  }
}

export class BigqueryJobQueryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_large_results - computed: false, optional: true, required: false
  private _allowLargeResults?: boolean | cdktf.IResolvable | undefined; 
  public get allowLargeResults() {
    return this.getBooleanAttribute('allow_large_results') as any;
  }
  public set allowLargeResults(value: boolean | cdktf.IResolvable | undefined) {
    this._allowLargeResults = value;
  }
  public resetAllowLargeResults() {
    this._allowLargeResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLargeResultsInput() {
    return this._allowLargeResults
  }

  // create_disposition - computed: false, optional: true, required: false
  private _createDisposition?: string | undefined; 
  public get createDisposition() {
    return this.getStringAttribute('create_disposition');
  }
  public set createDisposition(value: string | undefined) {
    this._createDisposition = value;
  }
  public resetCreateDisposition() {
    this._createDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDispositionInput() {
    return this._createDisposition
  }

  // flatten_results - computed: false, optional: true, required: false
  private _flattenResults?: boolean | cdktf.IResolvable | undefined; 
  public get flattenResults() {
    return this.getBooleanAttribute('flatten_results') as any;
  }
  public set flattenResults(value: boolean | cdktf.IResolvable | undefined) {
    this._flattenResults = value;
  }
  public resetFlattenResults() {
    this._flattenResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenResultsInput() {
    return this._flattenResults
  }

  // maximum_billing_tier - computed: false, optional: true, required: false
  private _maximumBillingTier?: number | undefined; 
  public get maximumBillingTier() {
    return this.getNumberAttribute('maximum_billing_tier');
  }
  public set maximumBillingTier(value: number | undefined) {
    this._maximumBillingTier = value;
  }
  public resetMaximumBillingTier() {
    this._maximumBillingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBillingTierInput() {
    return this._maximumBillingTier
  }

  // maximum_bytes_billed - computed: false, optional: true, required: false
  private _maximumBytesBilled?: string | undefined; 
  public get maximumBytesBilled() {
    return this.getStringAttribute('maximum_bytes_billed');
  }
  public set maximumBytesBilled(value: string | undefined) {
    this._maximumBytesBilled = value;
  }
  public resetMaximumBytesBilled() {
    this._maximumBytesBilled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBytesBilledInput() {
    return this._maximumBytesBilled
  }

  // parameter_mode - computed: false, optional: true, required: false
  private _parameterMode?: string | undefined; 
  public get parameterMode() {
    return this.getStringAttribute('parameter_mode');
  }
  public set parameterMode(value: string | undefined) {
    this._parameterMode = value;
  }
  public resetParameterMode() {
    this._parameterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterModeInput() {
    return this._parameterMode
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string | undefined; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string | undefined) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
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

  // schema_update_options - computed: false, optional: true, required: false
  private _schemaUpdateOptions?: string[] | undefined; 
  public get schemaUpdateOptions() {
    return this.getListAttribute('schema_update_options');
  }
  public set schemaUpdateOptions(value: string[] | undefined) {
    this._schemaUpdateOptions = value;
  }
  public resetSchemaUpdateOptions() {
    this._schemaUpdateOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaUpdateOptionsInput() {
    return this._schemaUpdateOptions
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

  // use_query_cache - computed: false, optional: true, required: false
  private _useQueryCache?: boolean | cdktf.IResolvable | undefined; 
  public get useQueryCache() {
    return this.getBooleanAttribute('use_query_cache') as any;
  }
  public set useQueryCache(value: boolean | cdktf.IResolvable | undefined) {
    this._useQueryCache = value;
  }
  public resetUseQueryCache() {
    this._useQueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useQueryCacheInput() {
    return this._useQueryCache
  }

  // write_disposition - computed: false, optional: true, required: false
  private _writeDisposition?: string | undefined; 
  public get writeDisposition() {
    return this.getStringAttribute('write_disposition');
  }
  public set writeDisposition(value: string | undefined) {
    this._writeDisposition = value;
  }
  public resetWriteDisposition() {
    this._writeDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDispositionInput() {
    return this._writeDisposition
  }

  // default_dataset - computed: false, optional: true, required: false
  private _defaultDataset?: BigqueryJobQueryDefaultDataset | undefined; 
  private __defaultDatasetOutput = new BigqueryJobQueryDefaultDatasetOutputReference(this as any, "default_dataset", true);
  public get defaultDataset() {
    return this.__defaultDatasetOutput;
  }
  public putDefaultDataset(value: BigqueryJobQueryDefaultDataset | undefined) {
    this._defaultDataset = value;
  }
  public resetDefaultDataset() {
    this._defaultDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatasetInput() {
    return this._defaultDataset
  }

  // destination_encryption_configuration - computed: false, optional: true, required: false
  private _destinationEncryptionConfiguration?: BigqueryJobQueryDestinationEncryptionConfiguration | undefined; 
  private __destinationEncryptionConfigurationOutput = new BigqueryJobQueryDestinationEncryptionConfigurationOutputReference(this as any, "destination_encryption_configuration", true);
  public get destinationEncryptionConfiguration() {
    return this.__destinationEncryptionConfigurationOutput;
  }
  public putDestinationEncryptionConfiguration(value: BigqueryJobQueryDestinationEncryptionConfiguration | undefined) {
    this._destinationEncryptionConfiguration = value;
  }
  public resetDestinationEncryptionConfiguration() {
    this._destinationEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEncryptionConfigurationInput() {
    return this._destinationEncryptionConfiguration
  }

  // destination_table - computed: false, optional: true, required: false
  private _destinationTable?: BigqueryJobQueryDestinationTable | undefined; 
  private __destinationTableOutput = new BigqueryJobQueryDestinationTableOutputReference(this as any, "destination_table", true);
  public get destinationTable() {
    return this.__destinationTableOutput;
  }
  public putDestinationTable(value: BigqueryJobQueryDestinationTable | undefined) {
    this._destinationTable = value;
  }
  public resetDestinationTable() {
    this._destinationTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable
  }

  // script_options - computed: false, optional: true, required: false
  private _scriptOptions?: BigqueryJobQueryScriptOptions | undefined; 
  private __scriptOptionsOutput = new BigqueryJobQueryScriptOptionsOutputReference(this as any, "script_options", true);
  public get scriptOptions() {
    return this.__scriptOptionsOutput;
  }
  public putScriptOptions(value: BigqueryJobQueryScriptOptions | undefined) {
    this._scriptOptions = value;
  }
  public resetScriptOptions() {
    this._scriptOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptOptionsInput() {
    return this._scriptOptions
  }

  // user_defined_function_resources - computed: false, optional: true, required: false
  private _userDefinedFunctionResources?: BigqueryJobQueryUserDefinedFunctionResources[] | undefined; 
  public get userDefinedFunctionResources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_defined_function_resources') as any;
  }
  public set userDefinedFunctionResources(value: BigqueryJobQueryUserDefinedFunctionResources[] | undefined) {
    this._userDefinedFunctionResources = value;
  }
  public resetUserDefinedFunctionResources() {
    this._userDefinedFunctionResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedFunctionResourcesInput() {
    return this._userDefinedFunctionResources
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

function bigqueryJobTimeoutsToTerraform(struct?: BigqueryJobTimeoutsOutputReference | BigqueryJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class BigqueryJobTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_job.html google_bigquery_job}
*/
export class BigqueryJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_bigquery_job";

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
  private _jobId?: string; 
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
  private _jobTimeoutMs?: string | undefined; 
  public get jobTimeoutMs() {
    return this.getStringAttribute('job_timeout_ms');
  }
  public set jobTimeoutMs(value: string | undefined) {
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

  // location - computed: false, optional: true, required: false
  private _location?: string | undefined; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
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

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new BigqueryJobStatus(this, 'status', index);
  }

  // user_email - computed: true, optional: false, required: false
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }

  // copy - computed: false, optional: true, required: false
  private _copy?: BigqueryJobCopy | undefined; 
  private __copyOutput = new BigqueryJobCopyOutputReference(this as any, "copy", true);
  public get copy() {
    return this.__copyOutput;
  }
  public putCopy(value: BigqueryJobCopy | undefined) {
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
  private _extract?: BigqueryJobExtract | undefined; 
  private __extractOutput = new BigqueryJobExtractOutputReference(this as any, "extract", true);
  public get extract() {
    return this.__extractOutput;
  }
  public putExtract(value: BigqueryJobExtract | undefined) {
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
  private _load?: BigqueryJobLoad | undefined; 
  private __loadOutput = new BigqueryJobLoadOutputReference(this as any, "load", true);
  public get load() {
    return this.__loadOutput;
  }
  public putLoad(value: BigqueryJobLoad | undefined) {
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
  private _query?: BigqueryJobQuery | undefined; 
  private __queryOutput = new BigqueryJobQueryOutputReference(this as any, "query", true);
  public get query() {
    return this.__queryOutput;
  }
  public putQuery(value: BigqueryJobQuery | undefined) {
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
  private _timeouts?: BigqueryJobTimeouts | undefined; 
  private __timeoutsOutput = new BigqueryJobTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BigqueryJobTimeouts | undefined) {
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
      copy: bigqueryJobCopyToTerraform(this._copy),
      extract: bigqueryJobExtractToTerraform(this._extract),
      load: bigqueryJobLoadToTerraform(this._load),
      query: bigqueryJobQueryToTerraform(this._query),
      timeouts: bigqueryJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
