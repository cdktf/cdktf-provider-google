// https://www.terraform.io/docs/providers/google/r/logging_folder_sink.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingFolderSinkConfig extends cdktf.TerraformMetaArguments {
  /** A description of this sink. The maximum length of the description is 8000 characters. */
  readonly description?: string;
  /** The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource. */
  readonly destination: string;
  /** If set to True, then this sink is disabled and it does not export any log entries. */
  readonly disabled?: boolean;
  /** The filter to apply when exporting logs. Only log entries that match the filter are exported. */
  readonly filter?: string;
  /** The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted. */
  readonly folder: string;
  /** Whether or not to include children folders in the sink export. If true, logs associated with child projects are also exported; otherwise only logs relating to the provided folder are included. */
  readonly includeChildren?: boolean;
  /** The name of the logging sink. */
  readonly name: string;
  /** bigquery_options block */
  readonly bigqueryOptions?: LoggingFolderSinkBigqueryOptions[];
  /** exclusions block */
  readonly exclusions?: LoggingFolderSinkExclusions[];
}
export interface LoggingFolderSinkBigqueryOptions {
  /** Whether to use BigQuery's partition tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone. */
  readonly usePartitionedTables: boolean;
}

function loggingFolderSinkBigqueryOptionsToTerraform(struct?: LoggingFolderSinkBigqueryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    use_partitioned_tables: cdktf.booleanToTerraform(struct!.usePartitionedTables),
  }
}

export interface LoggingFolderSinkExclusions {
  /** A description of this exclusion. */
  readonly description?: string;
  /** If set to True, then this exclusion is disabled and it does not exclude any log entries */
  readonly disabled?: boolean;
  /** An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100% of the matching log entries */
  readonly filter: string;
  /** A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric. */
  readonly name: string;
}

function loggingFolderSinkExclusionsToTerraform(struct?: LoggingFolderSinkExclusions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


// Resource

export class LoggingFolderSink extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoggingFolderSinkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_folder_sink',
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
    this._folder = config.folder;
    this._includeChildren = config.includeChildren;
    this._name = config.name;
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
  private _disabled?: boolean;
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean ) {
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

  // folder - computed: false, optional: false, required: true
  private _folder: string;
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_children - computed: false, optional: true, required: false
  private _includeChildren?: boolean;
  public get includeChildren() {
    return this.getBooleanAttribute('include_children');
  }
  public set includeChildren(value: boolean ) {
    this._includeChildren = value;
  }
  public resetIncludeChildren() {
    this._includeChildren = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildrenInput() {
    return this._includeChildren
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

  // writer_identity - computed: true, optional: false, required: false
  public get writerIdentity() {
    return this.getStringAttribute('writer_identity');
  }

  // bigquery_options - computed: false, optional: true, required: false
  private _bigqueryOptions?: LoggingFolderSinkBigqueryOptions[];
  public get bigqueryOptions() {
    return this.interpolationForAttribute('bigquery_options') as any;
  }
  public set bigqueryOptions(value: LoggingFolderSinkBigqueryOptions[] ) {
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
  private _exclusions?: LoggingFolderSinkExclusions[];
  public get exclusions() {
    return this.interpolationForAttribute('exclusions') as any;
  }
  public set exclusions(value: LoggingFolderSinkExclusions[] ) {
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
      folder: cdktf.stringToTerraform(this._folder),
      include_children: cdktf.booleanToTerraform(this._includeChildren),
      name: cdktf.stringToTerraform(this._name),
      bigquery_options: cdktf.listMapper(loggingFolderSinkBigqueryOptionsToTerraform)(this._bigqueryOptions),
      exclusions: cdktf.listMapper(loggingFolderSinkExclusionsToTerraform)(this._exclusions),
    };
  }
}
