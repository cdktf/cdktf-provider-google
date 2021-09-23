// https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageTransferJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique description to identify the Transfer Job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#description StorageTransferJob#description}
  */
  readonly description: string;
  /**
  * The project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#project StorageTransferJob#project}
  */
  readonly project?: string;
  /**
  * Status of the job. Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#status StorageTransferJob#status}
  */
  readonly status?: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#schedule StorageTransferJob#schedule}
  */
  readonly schedule: StorageTransferJobSchedule[];
  /**
  * transfer_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#transfer_spec StorageTransferJob#transfer_spec}
  */
  readonly transferSpec: StorageTransferJobTransferSpec[];
}
export interface StorageTransferJobScheduleScheduleEndDate {
  /**
  * Day of month. Must be from 1 to 31 and valid for the year and month.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#day StorageTransferJob#day}
  */
  readonly day: number;
  /**
  * Month of year. Must be from 1 to 12.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#month StorageTransferJob#month}
  */
  readonly month: number;
  /**
  * Year of date. Must be from 1 to 9999.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#year StorageTransferJob#year}
  */
  readonly year: number;
}

function storageTransferJobScheduleScheduleEndDateToTerraform(struct?: StorageTransferJobScheduleScheduleEndDate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}

export interface StorageTransferJobScheduleScheduleStartDate {
  /**
  * Day of month. Must be from 1 to 31 and valid for the year and month.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#day StorageTransferJob#day}
  */
  readonly day: number;
  /**
  * Month of year. Must be from 1 to 12.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#month StorageTransferJob#month}
  */
  readonly month: number;
  /**
  * Year of date. Must be from 1 to 9999.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#year StorageTransferJob#year}
  */
  readonly year: number;
}

function storageTransferJobScheduleScheduleStartDateToTerraform(struct?: StorageTransferJobScheduleScheduleStartDate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}

export interface StorageTransferJobScheduleStartTimeOfDay {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#hours StorageTransferJob#hours}
  */
  readonly hours: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#minutes StorageTransferJob#minutes}
  */
  readonly minutes: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#nanos StorageTransferJob#nanos}
  */
  readonly nanos: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#seconds StorageTransferJob#seconds}
  */
  readonly seconds: number;
}

function storageTransferJobScheduleStartTimeOfDayToTerraform(struct?: StorageTransferJobScheduleStartTimeOfDay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export interface StorageTransferJobSchedule {
  /**
  * schedule_end_date block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#schedule_end_date StorageTransferJob#schedule_end_date}
  */
  readonly scheduleEndDate?: StorageTransferJobScheduleScheduleEndDate[];
  /**
  * schedule_start_date block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#schedule_start_date StorageTransferJob#schedule_start_date}
  */
  readonly scheduleStartDate: StorageTransferJobScheduleScheduleStartDate[];
  /**
  * start_time_of_day block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#start_time_of_day StorageTransferJob#start_time_of_day}
  */
  readonly startTimeOfDay?: StorageTransferJobScheduleStartTimeOfDay[];
}

function storageTransferJobScheduleToTerraform(struct?: StorageTransferJobSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    schedule_end_date: cdktf.listMapper(storageTransferJobScheduleScheduleEndDateToTerraform)(struct!.scheduleEndDate),
    schedule_start_date: cdktf.listMapper(storageTransferJobScheduleScheduleStartDateToTerraform)(struct!.scheduleStartDate),
    start_time_of_day: cdktf.listMapper(storageTransferJobScheduleStartTimeOfDayToTerraform)(struct!.startTimeOfDay),
  }
}

export interface StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey {
  /**
  * AWS Key ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#access_key_id StorageTransferJob#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * AWS Secret Access Key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#secret_access_key StorageTransferJob#secret_access_key}
  */
  readonly secretAccessKey: string;
}

function storageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyToTerraform(struct?: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}

export interface StorageTransferJobTransferSpecAwsS3DataSource {
  /**
  * S3 Bucket name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#bucket_name StorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * aws_access_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#aws_access_key StorageTransferJob#aws_access_key}
  */
  readonly awsAccessKey: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey[];
}

function storageTransferJobTransferSpecAwsS3DataSourceToTerraform(struct?: StorageTransferJobTransferSpecAwsS3DataSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    aws_access_key: cdktf.listMapper(storageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyToTerraform)(struct!.awsAccessKey),
  }
}

export interface StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials {
  /**
  * Azure shared access signature.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#sas_token StorageTransferJob#sas_token}
  */
  readonly sasToken: string;
}

function storageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsToTerraform(struct?: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
  }
}

export interface StorageTransferJobTransferSpecAzureBlobStorageDataSource {
  /**
  * The container to transfer from the Azure Storage account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#container StorageTransferJob#container}
  */
  readonly container: string;
  /**
  * Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#path StorageTransferJob#path}
  */
  readonly path?: string;
  /**
  * The name of the Azure Storage account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#storage_account StorageTransferJob#storage_account}
  */
  readonly storageAccount: string;
  /**
  * azure_credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#azure_credentials StorageTransferJob#azure_credentials}
  */
  readonly azureCredentials: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials[];
}

function storageTransferJobTransferSpecAzureBlobStorageDataSourceToTerraform(struct?: StorageTransferJobTransferSpecAzureBlobStorageDataSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    path: cdktf.stringToTerraform(struct!.path),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
    azure_credentials: cdktf.listMapper(storageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsToTerraform)(struct!.azureCredentials),
  }
}

export interface StorageTransferJobTransferSpecGcsDataSink {
  /**
  * Google Cloud Storage bucket name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#bucket_name StorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Google Cloud Storage path in bucket to transfer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#path StorageTransferJob#path}
  */
  readonly path?: string;
}

function storageTransferJobTransferSpecGcsDataSinkToTerraform(struct?: StorageTransferJobTransferSpecGcsDataSink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StorageTransferJobTransferSpecGcsDataSource {
  /**
  * Google Cloud Storage bucket name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#bucket_name StorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Google Cloud Storage path in bucket to transfer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#path StorageTransferJob#path}
  */
  readonly path?: string;
}

function storageTransferJobTransferSpecGcsDataSourceToTerraform(struct?: StorageTransferJobTransferSpecGcsDataSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StorageTransferJobTransferSpecHttpDataSource {
  /**
  * The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#list_url StorageTransferJob#list_url}
  */
  readonly listUrl: string;
}

function storageTransferJobTransferSpecHttpDataSourceToTerraform(struct?: StorageTransferJobTransferSpecHttpDataSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    list_url: cdktf.stringToTerraform(struct!.listUrl),
  }
}

export interface StorageTransferJobTransferSpecObjectConditions {
  /**
  * exclude_prefixes must follow the requirements described for include_prefixes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#exclude_prefixes StorageTransferJob#exclude_prefixes}
  */
  readonly excludePrefixes?: string[];
  /**
  * If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#include_prefixes StorageTransferJob#include_prefixes}
  */
  readonly includePrefixes?: string[];
  /**
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}
  */
  readonly maxTimeElapsedSinceLastModification?: string;
  /**
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}
  */
  readonly minTimeElapsedSinceLastModification?: string;
}

function storageTransferJobTransferSpecObjectConditionsToTerraform(struct?: StorageTransferJobTransferSpecObjectConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exclude_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludePrefixes),
    include_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includePrefixes),
    max_time_elapsed_since_last_modification: cdktf.stringToTerraform(struct!.maxTimeElapsedSinceLastModification),
    min_time_elapsed_since_last_modification: cdktf.stringToTerraform(struct!.minTimeElapsedSinceLastModification),
  }
}

export interface StorageTransferJobTransferSpecTransferOptions {
  /**
  * Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and delete_objects_unique_in_sink are mutually exclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}
  */
  readonly deleteObjectsFromSourceAfterTransfer?: boolean | cdktf.IResolvable;
  /**
  * Whether objects that exist only in the sink should be deleted. Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}
  */
  readonly deleteObjectsUniqueInSink?: boolean | cdktf.IResolvable;
  /**
  * Whether overwriting objects that already exist in the sink is allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}
  */
  readonly overwriteObjectsAlreadyExistingInSink?: boolean | cdktf.IResolvable;
}

function storageTransferJobTransferSpecTransferOptionsToTerraform(struct?: StorageTransferJobTransferSpecTransferOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_objects_from_source_after_transfer: cdktf.booleanToTerraform(struct!.deleteObjectsFromSourceAfterTransfer),
    delete_objects_unique_in_sink: cdktf.booleanToTerraform(struct!.deleteObjectsUniqueInSink),
    overwrite_objects_already_existing_in_sink: cdktf.booleanToTerraform(struct!.overwriteObjectsAlreadyExistingInSink),
  }
}

export interface StorageTransferJobTransferSpec {
  /**
  * aws_s3_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#aws_s3_data_source StorageTransferJob#aws_s3_data_source}
  */
  readonly awsS3DataSource?: StorageTransferJobTransferSpecAwsS3DataSource[];
  /**
  * azure_blob_storage_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#azure_blob_storage_data_source StorageTransferJob#azure_blob_storage_data_source}
  */
  readonly azureBlobStorageDataSource?: StorageTransferJobTransferSpecAzureBlobStorageDataSource[];
  /**
  * gcs_data_sink block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#gcs_data_sink StorageTransferJob#gcs_data_sink}
  */
  readonly gcsDataSink?: StorageTransferJobTransferSpecGcsDataSink[];
  /**
  * gcs_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#gcs_data_source StorageTransferJob#gcs_data_source}
  */
  readonly gcsDataSource?: StorageTransferJobTransferSpecGcsDataSource[];
  /**
  * http_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#http_data_source StorageTransferJob#http_data_source}
  */
  readonly httpDataSource?: StorageTransferJobTransferSpecHttpDataSource[];
  /**
  * object_conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#object_conditions StorageTransferJob#object_conditions}
  */
  readonly objectConditions?: StorageTransferJobTransferSpecObjectConditions[];
  /**
  * transfer_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html#transfer_options StorageTransferJob#transfer_options}
  */
  readonly transferOptions?: StorageTransferJobTransferSpecTransferOptions[];
}

function storageTransferJobTransferSpecToTerraform(struct?: StorageTransferJobTransferSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_s3_data_source: cdktf.listMapper(storageTransferJobTransferSpecAwsS3DataSourceToTerraform)(struct!.awsS3DataSource),
    azure_blob_storage_data_source: cdktf.listMapper(storageTransferJobTransferSpecAzureBlobStorageDataSourceToTerraform)(struct!.azureBlobStorageDataSource),
    gcs_data_sink: cdktf.listMapper(storageTransferJobTransferSpecGcsDataSinkToTerraform)(struct!.gcsDataSink),
    gcs_data_source: cdktf.listMapper(storageTransferJobTransferSpecGcsDataSourceToTerraform)(struct!.gcsDataSource),
    http_data_source: cdktf.listMapper(storageTransferJobTransferSpecHttpDataSourceToTerraform)(struct!.httpDataSource),
    object_conditions: cdktf.listMapper(storageTransferJobTransferSpecObjectConditionsToTerraform)(struct!.objectConditions),
    transfer_options: cdktf.listMapper(storageTransferJobTransferSpecTransferOptionsToTerraform)(struct!.transferOptions),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html google_storage_transfer_job}
*/
export class StorageTransferJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_storage_transfer_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html google_storage_transfer_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageTransferJobConfig
  */
  public constructor(scope: Construct, id: string, config: StorageTransferJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_transfer_job',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._project = config.project;
    this._status = config.status;
    this._schedule = config.schedule;
    this._transferSpec = config.transferSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deletion_time - computed: true, optional: false, required: false
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modification_time - computed: true, optional: false, required: false
  public get lastModificationTime() {
    return this.getStringAttribute('last_modification_time');
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
    return this._project
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule: StorageTransferJobSchedule[];
  public get schedule() {
    return this.interpolationForAttribute('schedule') as any;
  }
  public set schedule(value: StorageTransferJobSchedule[]) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // transfer_spec - computed: false, optional: false, required: true
  private _transferSpec: StorageTransferJobTransferSpec[];
  public get transferSpec() {
    return this.interpolationForAttribute('transfer_spec') as any;
  }
  public set transferSpec(value: StorageTransferJobTransferSpec[]) {
    this._transferSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transferSpecInput() {
    return this._transferSpec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      project: cdktf.stringToTerraform(this._project),
      status: cdktf.stringToTerraform(this._status),
      schedule: cdktf.listMapper(storageTransferJobScheduleToTerraform)(this._schedule),
      transfer_spec: cdktf.listMapper(storageTransferJobTransferSpecToTerraform)(this._transferSpec),
    };
  }
}
