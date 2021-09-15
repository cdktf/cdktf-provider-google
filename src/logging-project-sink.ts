// https://www.terraform.io/docs/providers/google/r/logging_project_sink.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingProjectSinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of this sink. The maximum length of the description is 8000 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#description LoggingProjectSink#description}
  */
  readonly description?: string;
  /**
  * The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#destination LoggingProjectSink#destination}
  */
  readonly destination: string;
  /**
  * If set to True, then this sink is disabled and it does not export any log entries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#disabled LoggingProjectSink#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The filter to apply when exporting logs. Only log entries that match the filter are exported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#filter LoggingProjectSink#filter}
  */
  readonly filter?: string;
  /**
  * The name of the logging sink.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#name LoggingProjectSink#name}
  */
  readonly name: string;
  /**
  * The ID of the project to create the sink in. If omitted, the project associated with the provider is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#project LoggingProjectSink#project}
  */
  readonly project?: string;
  /**
  * Whether or not to create a unique identity associated with this sink. If false (the default), then the writer_identity used is serviceAccount:cloud-logs@system.gserviceaccount.com. If true, then a unique service account is created and used for this sink. If you wish to publish logs across projects, you must set unique_writer_identity to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#unique_writer_identity LoggingProjectSink#unique_writer_identity}
  */
  readonly uniqueWriterIdentity?: boolean | cdktf.IResolvable;
  /**
  * bigquery_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#bigquery_options LoggingProjectSink#bigquery_options}
  */
  readonly bigqueryOptions?: LoggingProjectSinkBigqueryOptions[];
  /**
  * exclusions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#exclusions LoggingProjectSink#exclusions}
  */
  readonly exclusions?: LoggingProjectSinkExclusions[];
}
export interface LoggingProjectSinkBigqueryOptions {
  /**
  * Whether to use BigQuery's partition tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#use_partitioned_tables LoggingProjectSink#use_partitioned_tables}
  */
  readonly usePartitionedTables: boolean | cdktf.IResolvable;
}

function loggingProjectSinkBigqueryOptionsToTerraform(struct?: LoggingProjectSinkBigqueryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    use_partitioned_tables: cdktf.booleanToTerraform(struct!.usePartitionedTables),
  }
}

export interface LoggingProjectSinkExclusions {
  /**
  * A description of this exclusion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#description LoggingProjectSink#description}
  */
  readonly description?: string;
  /**
  * If set to True, then this exclusion is disabled and it does not exclude any log entries
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#disabled LoggingProjectSink#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100% of the matching log entries
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#filter LoggingProjectSink#filter}
  */
  readonly filter: string;
  /**
  * A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html#name LoggingProjectSink#name}
  */
  readonly name: string;
}

function loggingProjectSinkExclusionsToTerraform(struct?: LoggingProjectSinkExclusions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html google_logging_project_sink}
*/
export class LoggingProjectSink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_logging_project_sink";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/logging_project_sink.html google_logging_project_sink} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingProjectSinkConfig
  */
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
    this._description = config.description;
    this._destination = config.destination;
    this._disabled = config.disabled;
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

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // destination - computed: false, optional: false, required: true
  private _destination: string;
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable;
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable ) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string;
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // unique_writer_identity - computed: false, optional: true, required: false
  private _uniqueWriterIdentity?: boolean | cdktf.IResolvable;
  public get uniqueWriterIdentity() {
    return this.getBooleanAttribute('unique_writer_identity');
  }
  public set uniqueWriterIdentity(value: boolean | cdktf.IResolvable ) {
    this._uniqueWriterIdentity = value;
  }
  public resetUniqueWriterIdentity() {
    this._uniqueWriterIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueWriterIdentityInput() {
    return this._uniqueWriterIdentity
  }

  // writer_identity - computed: true, optional: false, required: false
  public get writerIdentity() {
    return this.getStringAttribute('writer_identity');
  }

  // bigquery_options - computed: false, optional: true, required: false
  private _bigqueryOptions?: LoggingProjectSinkBigqueryOptions[];
  public get bigqueryOptions() {
    return this.interpolationForAttribute('bigquery_options') as any;
  }
  public set bigqueryOptions(value: LoggingProjectSinkBigqueryOptions[] ) {
    this._bigqueryOptions = value;
  }
  public resetBigqueryOptions() {
    this._bigqueryOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryOptionsInput() {
    return this._bigqueryOptions
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: LoggingProjectSinkExclusions[];
  public get exclusions() {
    return this.interpolationForAttribute('exclusions') as any;
  }
  public set exclusions(value: LoggingProjectSinkExclusions[] ) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.stringToTerraform(this._destination),
      disabled: cdktf.booleanToTerraform(this._disabled),
      filter: cdktf.stringToTerraform(this._filter),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      unique_writer_identity: cdktf.booleanToTerraform(this._uniqueWriterIdentity),
      bigquery_options: cdktf.listMapper(loggingProjectSinkBigqueryOptionsToTerraform)(this._bigqueryOptions),
      exclusions: cdktf.listMapper(loggingProjectSinkExclusionsToTerraform)(this._exclusions),
    };
  }
}
