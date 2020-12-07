// https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageTransferJobConfig extends cdktf.TerraformMetaArguments {
  /** Unique description to identify the Transfer Job. */
  readonly description: string;
  /** The project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** Status of the job. Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation. */
  readonly status?: string;
  /** schedule block */
  readonly schedule: StorageTransferJobSchedule[];
  /** transfer_spec block */
  readonly transferSpec: StorageTransferJobTransferSpec[];
}
export interface StorageTransferJobScheduleScheduleEndDate {
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  readonly day: number;
  /** Month of year. Must be from 1 to 12. */
  readonly month: number;
  /** Year of date. Must be from 1 to 9999. */
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
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  readonly day: number;
  /** Month of year. Must be from 1 to 12. */
  readonly month: number;
  /** Year of date. Must be from 1 to 9999. */
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
  /** Hours of day in 24 hour format. Should be from 0 to 23. */
  readonly hours: number;
  /** Minutes of hour of day. Must be from 0 to 59. */
  readonly minutes: number;
  /** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
  readonly nanos: number;
  /** Seconds of minutes of the time. Must normally be from 0 to 59. */
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
  /** schedule_end_date block */
  readonly scheduleEndDate?: StorageTransferJobScheduleScheduleEndDate[];
  /** schedule_start_date block */
  readonly scheduleStartDate: StorageTransferJobScheduleScheduleStartDate[];
  /** start_time_of_day block */
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
  /** AWS Key ID. */
  readonly accessKeyId: string;
  /** AWS Secret Access Key. */
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
  /** S3 Bucket name. */
  readonly bucketName: string;
  /** aws_access_key block */
  readonly awsAccessKey: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey[];
}

function storageTransferJobTransferSpecAwsS3DataSourceToTerraform(struct?: StorageTransferJobTransferSpecAwsS3DataSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    aws_access_key: cdktf.listMapper(storageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyToTerraform)(struct!.awsAccessKey),
  }
}

export interface StorageTransferJobTransferSpecGcsDataSink {
  /** Google Cloud Storage bucket name. */
  readonly bucketName: string;
}

function storageTransferJobTransferSpecGcsDataSinkToTerraform(struct?: StorageTransferJobTransferSpecGcsDataSink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
  }
}

export interface StorageTransferJobTransferSpecGcsDataSource {
  /** Google Cloud Storage bucket name. */
  readonly bucketName: string;
}

function storageTransferJobTransferSpecGcsDataSourceToTerraform(struct?: StorageTransferJobTransferSpecGcsDataSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
  }
}

export interface StorageTransferJobTransferSpecHttpDataSource {
  /** The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported. */
  readonly listUrl: string;
}

function storageTransferJobTransferSpecHttpDataSourceToTerraform(struct?: StorageTransferJobTransferSpecHttpDataSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    list_url: cdktf.stringToTerraform(struct!.listUrl),
  }
}

export interface StorageTransferJobTransferSpecObjectConditions {
  /** exclude_prefixes must follow the requirements described for include_prefixes. */
  readonly excludePrefixes?: string[];
  /** If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions. */
  readonly includePrefixes?: string[];
  /** A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
  readonly maxTimeElapsedSinceLastModification?: string;
  /** A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
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
  /** Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and delete_objects_unique_in_sink are mutually exclusive. */
  readonly deleteObjectsFromSourceAfterTransfer?: boolean;
  /** Whether objects that exist only in the sink should be deleted. Note that this option and delete_objects_from_source_after_transfer are mutually exclusive. */
  readonly deleteObjectsUniqueInSink?: boolean;
  /** Whether overwriting objects that already exist in the sink is allowed. */
  readonly overwriteObjectsAlreadyExistingInSink?: boolean;
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
  /** aws_s3_data_source block */
  readonly awsS3DataSource?: StorageTransferJobTransferSpecAwsS3DataSource[];
  /** gcs_data_sink block */
  readonly gcsDataSink?: StorageTransferJobTransferSpecGcsDataSink[];
  /** gcs_data_source block */
  readonly gcsDataSource?: StorageTransferJobTransferSpecGcsDataSource[];
  /** http_data_source block */
  readonly httpDataSource?: StorageTransferJobTransferSpecHttpDataSource[];
  /** object_conditions block */
  readonly objectConditions?: StorageTransferJobTransferSpecObjectConditions[];
  /** transfer_options block */
  readonly transferOptions?: StorageTransferJobTransferSpecTransferOptions[];
}

function storageTransferJobTransferSpecToTerraform(struct?: StorageTransferJobTransferSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_s3_data_source: cdktf.listMapper(storageTransferJobTransferSpecAwsS3DataSourceToTerraform)(struct!.awsS3DataSource),
    gcs_data_sink: cdktf.listMapper(storageTransferJobTransferSpecGcsDataSinkToTerraform)(struct!.gcsDataSink),
    gcs_data_source: cdktf.listMapper(storageTransferJobTransferSpecGcsDataSourceToTerraform)(struct!.gcsDataSource),
    http_data_source: cdktf.listMapper(storageTransferJobTransferSpecHttpDataSourceToTerraform)(struct!.httpDataSource),
    object_conditions: cdktf.listMapper(storageTransferJobTransferSpecObjectConditionsToTerraform)(struct!.objectConditions),
    transfer_options: cdktf.listMapper(storageTransferJobTransferSpecTransferOptionsToTerraform)(struct!.transferOptions),
  }
}


// Resource

export class StorageTransferJob extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
