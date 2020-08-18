// https://www.terraform.io/docs/providers/google/r/logging_organization_sink.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoggingOrganizationSinkConfig extends TerraformMetaArguments {
  /** The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource. */
  readonly destination: string;
  /** The filter to apply when exporting logs. Only log entries that match the filter are exported. */
  readonly filter?: string;
  /** Whether or not to include children organizations in the sink export. If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included. */
  readonly includeChildren?: boolean;
  /** The name of the logging sink. */
  readonly name: string;
  /** The numeric ID of the organization to be exported to the sink. */
  readonly orgId: string;
  /** bigquery_options block */
  readonly bigqueryOptions?: LoggingOrganizationSinkBigqueryOptions[];
}
export interface LoggingOrganizationSinkBigqueryOptions {
  /** Whether to use BigQuery's partition tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone. */
  readonly usePartitionedTables: boolean;
}

// Resource

export class LoggingOrganizationSink extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoggingOrganizationSinkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_organization_sink',
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
    this._includeChildren = config.includeChildren;
    this._name = config.name;
    this._orgId = config.orgId;
    this._bigqueryOptions = config.bigqueryOptions;
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

  // include_children - computed: false, optional: true, required: false
  private _includeChildren?: boolean;
  public get includeChildren() {
    return this._includeChildren;
  }
  public set includeChildren(value: boolean | undefined) {
    this._includeChildren = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: string) {
    this._orgId = value;
  }

  // writer_identity - computed: true, optional: false, required: true
  public get writerIdentity() {
    return this.getStringAttribute('writer_identity');
  }

  // bigquery_options - computed: false, optional: true, required: false
  private _bigqueryOptions?: LoggingOrganizationSinkBigqueryOptions[];
  public get bigqueryOptions() {
    return this._bigqueryOptions;
  }
  public set bigqueryOptions(value: LoggingOrganizationSinkBigqueryOptions[] | undefined) {
    this._bigqueryOptions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: this._destination,
      filter: this._filter,
      include_children: this._includeChildren,
      name: this._name,
      org_id: this._orgId,
      bigquery_options: this._bigqueryOptions,
    };
  }
}
