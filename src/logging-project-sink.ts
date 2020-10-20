// https://www.terraform.io/docs/providers/google/r/logging_project_sink.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoggingProjectSinkConfig extends TerraformMetaArguments {
  /** The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource. */
  readonly destination: string;
  /** The filter to apply when exporting logs. Only log entries that match the filter are exported. */
  readonly filter?: string;
  /** The name of the logging sink. */
  readonly name: string;
  /** The ID of the project to create the sink in. If omitted, the project associated with the provider is used. */
  readonly project?: string;
  /** Whether or not to create a unique identity associated with this sink. If false (the default), then the writer_identity used is serviceAccount:cloud-logs@system.gserviceaccount.com. If true, then a unique service account is created and used for this sink. If you wish to publish logs across projects, you must set unique_writer_identity to true. */
  readonly uniqueWriterIdentity?: boolean;
  /** bigquery_options block */
  readonly bigqueryOptions?: LoggingProjectSinkBigqueryOptions[];
  /** exclusions block */
  readonly exclusions?: LoggingProjectSinkExclusions[];
}
export interface LoggingProjectSinkBigqueryOptions {
  /** Whether to use BigQuery's partition tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone. */
  readonly usePartitionedTables: boolean;
}
export interface LoggingProjectSinkExclusions {
  /** A description of this exclusion. */
  readonly description?: string;
  /** If set to True, then this exclusion is disabled and it does not exclude any log entries */
  readonly disabled?: boolean;
  /** An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100% of the matching log entries */
  readonly filter: string;
  /** A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric. */
  readonly name: string;
}

// Resource

export class LoggingProjectSink extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoggingProjectSinkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_project_sink',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destination = config.destination;
    this._filter = config.filter;
    this._name = config.name;
    this._project = config.project;
    this._uniqueWriterIdentity = config.uniqueWriterIdentity;
    this._bigqueryOptions = config.bigqueryOptions;
    this._exclusions = config.exclusions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination - computed: false, optional: false, required: true
  private _destination: string;
  public get destination() {
    return this._destination;
  }
  public set destination(value: string) {
    this._destination = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string;
  public get filter() {
    return this._filter;
  }
  public set filter(value: string | undefined) {
    this._filter = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // unique_writer_identity - computed: false, optional: true, required: false
  private _uniqueWriterIdentity?: boolean;
  public get uniqueWriterIdentity() {
    return this._uniqueWriterIdentity;
  }
  public set uniqueWriterIdentity(value: boolean | undefined) {
    this._uniqueWriterIdentity = value;
  }

  // writer_identity - computed: true, optional: false, required: true
  public get writerIdentity() {
    return this.getStringAttribute('writer_identity');
  }

  // bigquery_options - computed: false, optional: true, required: false
  private _bigqueryOptions?: LoggingProjectSinkBigqueryOptions[];
  public get bigqueryOptions() {
    return this._bigqueryOptions;
  }
  public set bigqueryOptions(value: LoggingProjectSinkBigqueryOptions[] | undefined) {
    this._bigqueryOptions = value;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: LoggingProjectSinkExclusions[];
  public get exclusions() {
    return this._exclusions;
  }
  public set exclusions(value: LoggingProjectSinkExclusions[] | undefined) {
    this._exclusions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: this._destination,
      filter: this._filter,
      name: this._name,
      project: this._project,
      unique_writer_identity: this._uniqueWriterIdentity,
      bigquery_options: this._bigqueryOptions,
      exclusions: this._exclusions,
    };
  }
}
