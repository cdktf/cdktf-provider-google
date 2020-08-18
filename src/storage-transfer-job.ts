// https://www.terraform.io/docs/providers/google/r/storage_transfer_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageTransferJobConfig extends TerraformMetaArguments {
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
export interface StorageTransferJobScheduleScheduleStartDate {
  /** Day of month. Must be from 1 to 31 and valid for the year and month. */
  readonly day: number;
  /** Month of year. Must be from 1 to 12. */
  readonly month: number;
  /** Year of date. Must be from 1 to 9999. */
  readonly year: number;
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
export interface StorageTransferJobSchedule {
  /** schedule_end_date block */
  readonly scheduleEndDate?: StorageTransferJobScheduleScheduleEndDate[];
  /** schedule_start_date block */
  readonly scheduleStartDate: StorageTransferJobScheduleScheduleStartDate[];
  /** start_time_of_day block */
  readonly startTimeOfDay?: StorageTransferJobScheduleStartTimeOfDay[];
}
export interface StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey {
  /** AWS Key ID. */
  readonly accessKeyId: string;
  /** AWS Secret Access Key. */
  readonly secretAccessKey: string;
}
export interface StorageTransferJobTransferSpecAwsS3DataSource {
  /** S3 Bucket name. */
  readonly bucketName: string;
  /** aws_access_key block */
  readonly awsAccessKey: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey[];
}
export interface StorageTransferJobTransferSpecGcsDataSink {
  /** Google Cloud Storage bucket name. */
  readonly bucketName: string;
}
export interface StorageTransferJobTransferSpecGcsDataSource {
  /** Google Cloud Storage bucket name. */
  readonly bucketName: string;
}
export interface StorageTransferJobTransferSpecHttpDataSource {
  /** The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported. */
  readonly listUrl: string;
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
export interface StorageTransferJobTransferSpecTransferOptions {
  /** Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and delete_objects_unique_in_sink are mutually exclusive. */
  readonly deleteObjectsFromSourceAfterTransfer?: boolean;
  /** Whether objects that exist only in the sink should be deleted. Note that this option and delete_objects_from_source_after_transfer are mutually exclusive. */
  readonly deleteObjectsUniqueInSink?: boolean;
  /** Whether overwriting objects that already exist in the sink is allowed. */
  readonly overwriteObjectsAlreadyExistingInSink?: boolean;
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

// Resource

export class StorageTransferJob extends TerraformResource {

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

  // creation_time - computed: true, optional: false, required: true
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deletion_time - computed: true, optional: false, required: true
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_modification_time - computed: true, optional: false, required: true
  public get lastModificationTime() {
    return this.getStringAttribute('last_modification_time');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status;
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule: StorageTransferJobSchedule[];
  public get schedule() {
    return this._schedule;
  }
  public set schedule(value: StorageTransferJobSchedule[]) {
    this._schedule = value;
  }

  // transfer_spec - computed: false, optional: false, required: true
  private _transferSpec: StorageTransferJobTransferSpec[];
  public get transferSpec() {
    return this._transferSpec;
  }
  public set transferSpec(value: StorageTransferJobTransferSpec[]) {
    this._transferSpec = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      project: this._project,
      status: this._status,
      schedule: this._schedule,
      transfer_spec: this._transferSpec,
    };
  }
}
