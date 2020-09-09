// https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataLossPreventionJobTriggerConfig extends TerraformMetaArguments {
  /** A description of the job trigger. */
  readonly description?: string;
  /** User set display name of the job trigger. */
  readonly displayName?: string;
  /** The parent of the trigger, either in the format 'projects/{{project}}'
or 'projects/{{project}}/locations/{{location}}' */
  readonly parent: string;
  /** Whether the trigger is currently active. Default value: "HEALTHY" Possible values: ["PAUSED", "HEALTHY", "CANCELLED"] */
  readonly status?: string;
  /** inspect_job block */
  readonly inspectJob?: DataLossPreventionJobTriggerInspectJob[];
  /** timeouts block */
  readonly timeouts?: DataLossPreventionJobTriggerTimeouts;
  /** triggers block */
  readonly triggers: DataLossPreventionJobTriggerTriggers[];
}
export interface DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable {
  /** Dataset ID of the table. */
  readonly datasetId: string;
  /** The Google Cloud Platform project ID of the project containing the table. */
  readonly projectId: string;
  /** Name of the table. If is not set a new one will be generated for you with the following format:
'dlp_googleapis_yyyy_mm_dd_[dlp_job_id]'. Pacific timezone will be used for generating the date details. */
  readonly tableId?: string;
}
export interface DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig {
  /** Schema used for writing the findings for Inspect jobs. This field is only used for
Inspect and must be unspecified for Risk jobs. Columns are derived from the Finding
object. If appending to an existing table, any columns from the predefined schema
that are missing will be added. No columns in the existing table will be deleted.

If unspecified, then all available columns will be used for a new table or an (existing)
table with no schema, and no changes will be made to an existing table that has a schema.
Only for use with external storage. Possible values: ["BASIC_COLUMNS", "GCS_COLUMNS", "DATASTORE_COLUMNS", "BIG_QUERY_COLUMNS", "ALL_COLUMNS"] */
  readonly outputSchema?: string;
  /** table block */
  readonly table: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable[];
}
export interface DataLossPreventionJobTriggerInspectJobActionsSaveFindings {
  /** output_config block */
  readonly outputConfig: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig[];
}
export interface DataLossPreventionJobTriggerInspectJobActions {
  /** save_findings block */
  readonly saveFindings: DataLossPreventionJobTriggerInspectJobActionsSaveFindings[];
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference {
  /** The dataset ID of the table. */
  readonly datasetId: string;
  /** The Google Cloud Platform project ID of the project containing the table. */
  readonly projectId: string;
  /** The name of the table. */
  readonly tableId: string;
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions {
  /** table_reference block */
  readonly tableReference: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference[];
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet {
  /** The name of a Cloud Storage bucket. */
  readonly bucketName: string;
  /** A list of regular expressions matching file paths to exclude. All files in the bucket that match at
least one of these regular expressions will be excluded from the scan. */
  readonly excludeRegex?: string[];
  /** A list of regular expressions matching file paths to include. All files in the bucket
that match at least one of these regular expressions will be included in the set of files,
except for those that also match an item in excludeRegex. Leaving this field empty will
match all files by default (this is equivalent to including .* in the list) */
  readonly includeRegex?: string[];
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet {
  /** The Cloud Storage url of the file(s) to scan, in the format 'gs://<bucket>/<path>'. Trailing wildcard
in the path is allowed.

If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned
non-recursively (content in sub-directories will not be scanned). This means that 'gs://mybucket/' is
equivalent to 'gs://mybucket/*', and 'gs://mybucket/directory/' is equivalent to 'gs://mybucket/directory/*'. */
  readonly url?: string;
  /** regex_file_set block */
  readonly regexFileSet?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet[];
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions {
  /** Max number of bytes to scan from a file. If a scanned file's size is bigger than this value
then the rest of the bytes are omitted. */
  readonly bytesLimitPerFile?: number;
  /** Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. */
  readonly bytesLimitPerFilePercent?: number;
  /** List of file type groups to include in the scan. If empty, all files are scanned and available data
format processors are applied. In addition, the binary content of the selected files is always scanned as well.
Images are scanned only as binary if the specified region does not support image inspection and no fileTypes were specified. Possible values: ["BINARY_FILE", "TEXT_FILE", "IMAGE", "WORD", "PDF", "AVRO", "CSV", "TSV"] */
  readonly fileTypes?: string[];
  /** Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. */
  readonly filesLimitPercent?: number;
  /** How to sample bytes if not all bytes are scanned. Meaningful only when used in conjunction with bytesLimitPerFile.
If not specified, scanning would start from the top. Possible values: ["TOP", "RANDOM_START"] */
  readonly sampleMethod?: string;
  /** file_set block */
  readonly fileSet: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet[];
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind {
  /** The name of the Datastore kind. */
  readonly name: string;
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId {
  /** If not empty, the ID of the namespace to which the entities belong. */
  readonly namespaceId?: string;
  /** The ID of the project to which the entities belong. */
  readonly projectId: string;
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions {
  /** kind block */
  readonly kind: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind[];
  /** partition_id block */
  readonly partitionId: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId[];
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField {
  /** Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery.

For BigQuery: Required to filter out rows based on the given start and end times. If not specified and the table was
modified between the given start and end times, the entire table will be scanned. The valid data types of the timestamp
field are: INTEGER, DATE, TIMESTAMP, or DATETIME BigQuery column.

For Datastore. Valid data types of the timestamp field are: TIMESTAMP. Datastore entity will be scanned if the
timestamp property does not exist or its value is empty or invalid. */
  readonly name: string;
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig {
  /** When the job is started by a JobTrigger we will automatically figure out a valid startTime to avoid
scanning files that have not been modified since the last time the JobTrigger executed. This will
be based on the time of the execution of the last run of the JobTrigger. */
  readonly enableAutoPopulationOfTimespanConfig?: boolean;
  /** Exclude files or rows newer than this value. If set to zero, no upper time limit is applied. */
  readonly endTime?: string;
  /** Exclude files or rows older than this value. */
  readonly startTime?: string;
  /** timestamp_field block */
  readonly timestampField: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField[];
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfig {
  /** big_query_options block */
  readonly bigQueryOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions[];
  /** cloud_storage_options block */
  readonly cloudStorageOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions[];
  /** datastore_options block */
  readonly datastoreOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions[];
  /** timespan_config block */
  readonly timespanConfig?: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig[];
}
export interface DataLossPreventionJobTriggerInspectJob {
  /** The name of the template to run when this job is triggered. */
  readonly inspectTemplateName: string;
  /** actions block */
  readonly actions: DataLossPreventionJobTriggerInspectJobActions[];
  /** storage_config block */
  readonly storageConfig: DataLossPreventionJobTriggerInspectJobStorageConfig[];
}
export interface DataLossPreventionJobTriggerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface DataLossPreventionJobTriggerTriggersSchedule {
  /** With this option a job is started a regular periodic basis. For example: every day (86400 seconds).

A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs.

This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
  readonly recurrencePeriodDuration?: string;
}
export interface DataLossPreventionJobTriggerTriggers {
  /** schedule block */
  readonly schedule?: DataLossPreventionJobTriggerTriggersSchedule[];
}

// Resource

export class DataLossPreventionJobTrigger extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataLossPreventionJobTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_job_trigger',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._parent = config.parent;
    this._status = config.status;
    this._inspectJob = config.inspectJob;
    this._timeouts = config.timeouts;
    this._triggers = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_run_time - computed: true, optional: false, required: true
  public get lastRunTime() {
    return this.getStringAttribute('last_run_time');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this._parent;
  }
  public set parent(value: string) {
    this._parent = value;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status;
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // inspect_job - computed: false, optional: true, required: false
  private _inspectJob?: DataLossPreventionJobTriggerInspectJob[];
  public get inspectJob() {
    return this._inspectJob;
  }
  public set inspectJob(value: DataLossPreventionJobTriggerInspectJob[] | undefined) {
    this._inspectJob = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLossPreventionJobTriggerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataLossPreventionJobTriggerTimeouts | undefined) {
    this._timeouts = value;
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers: DataLossPreventionJobTriggerTriggers[];
  public get triggers() {
    return this._triggers;
  }
  public set triggers(value: DataLossPreventionJobTriggerTriggers[]) {
    this._triggers = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      parent: this._parent,
      status: this._status,
      inspect_job: this._inspectJob,
      timeouts: this._timeouts,
      triggers: this._triggers,
    };
  }
}
