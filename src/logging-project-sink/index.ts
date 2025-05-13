// https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingProjectSinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * A service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified if you are routing logs to a destination outside this sink's project. If not specified, a Logging service account will automatically be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#custom_writer_identity LoggingProjectSink#custom_writer_identity}
  */
  readonly customWriterIdentity?: string;
  /**
  * A description of this sink. The maximum length of the description is 8000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#description LoggingProjectSink#description}
  */
  readonly description?: string;
  /**
  * The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#destination LoggingProjectSink#destination}
  */
  readonly destination: string;
  /**
  * If set to True, then this sink is disabled and it does not export any log entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#disabled LoggingProjectSink#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The filter to apply when exporting logs. Only log entries that match the filter are exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#filter LoggingProjectSink#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#id LoggingProjectSink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the logging sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#name LoggingProjectSink#name}
  */
  readonly name: string;
  /**
  * The ID of the project to create the sink in. If omitted, the project associated with the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#project LoggingProjectSink#project}
  */
  readonly project?: string;
  /**
  * Whether or not to create a unique identity associated with this sink. If false (the legacy behavior), then the writer_identity used is serviceAccount:cloud-logs@system.gserviceaccount.com. If true (default), then a unique service account is created and used for this sink. If you wish to publish logs across projects, you must set unique_writer_identity to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#unique_writer_identity LoggingProjectSink#unique_writer_identity}
  */
  readonly uniqueWriterIdentity?: boolean | cdktf.IResolvable;
  /**
  * bigquery_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#bigquery_options LoggingProjectSink#bigquery_options}
  */
  readonly bigqueryOptions?: LoggingProjectSinkBigqueryOptions;
  /**
  * exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#exclusions LoggingProjectSink#exclusions}
  */
  readonly exclusions?: LoggingProjectSinkExclusions[] | cdktf.IResolvable;
}
export interface LoggingProjectSinkBigqueryOptions {
  /**
  * Whether to use BigQuery's partition tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#use_partitioned_tables LoggingProjectSink#use_partitioned_tables}
  */
  readonly usePartitionedTables: boolean | cdktf.IResolvable;
}

export function loggingProjectSinkBigqueryOptionsToTerraform(struct?: LoggingProjectSinkBigqueryOptionsOutputReference | LoggingProjectSinkBigqueryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_partitioned_tables: cdktf.booleanToTerraform(struct!.usePartitionedTables),
  }
}


export function loggingProjectSinkBigqueryOptionsToHclTerraform(struct?: LoggingProjectSinkBigqueryOptionsOutputReference | LoggingProjectSinkBigqueryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_partitioned_tables: {
      value: cdktf.booleanToHclTerraform(struct!.usePartitionedTables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingProjectSinkBigqueryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingProjectSinkBigqueryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usePartitionedTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePartitionedTables = this._usePartitionedTables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingProjectSinkBigqueryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._usePartitionedTables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._usePartitionedTables = value.usePartitionedTables;
    }
  }

  // use_partitioned_tables - computed: false, optional: false, required: true
  private _usePartitionedTables?: boolean | cdktf.IResolvable; 
  public get usePartitionedTables() {
    return this.getBooleanAttribute('use_partitioned_tables');
  }
  public set usePartitionedTables(value: boolean | cdktf.IResolvable) {
    this._usePartitionedTables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usePartitionedTablesInput() {
    return this._usePartitionedTables;
  }
}
export interface LoggingProjectSinkExclusions {
  /**
  * A description of this exclusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#description LoggingProjectSink#description}
  */
  readonly description?: string;
  /**
  * If set to True, then this exclusion is disabled and it does not exclude any log entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#disabled LoggingProjectSink#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100% of the matching log entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#filter LoggingProjectSink#filter}
  */
  readonly filter: string;
  /**
  * A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#name LoggingProjectSink#name}
  */
  readonly name: string;
}

export function loggingProjectSinkExclusionsToTerraform(struct?: LoggingProjectSinkExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function loggingProjectSinkExclusionsToHclTerraform(struct?: LoggingProjectSinkExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingProjectSinkExclusionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LoggingProjectSinkExclusions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingProjectSinkExclusions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._filter = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disabled = value.disabled;
      this._filter = value.filter;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class LoggingProjectSinkExclusionsList extends cdktf.ComplexList {
  public internalValue? : LoggingProjectSinkExclusions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LoggingProjectSinkExclusionsOutputReference {
    return new LoggingProjectSinkExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink google_logging_project_sink}
*/
export class LoggingProjectSink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_logging_project_sink";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoggingProjectSink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoggingProjectSink to import
  * @param importFromId The id of the existing LoggingProjectSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoggingProjectSink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_logging_project_sink", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink google_logging_project_sink} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingProjectSinkConfig
  */
  public constructor(scope: Construct, id: string, config: LoggingProjectSinkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_project_sink',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.34.1',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customWriterIdentity = config.customWriterIdentity;
    this._description = config.description;
    this._destination = config.destination;
    this._disabled = config.disabled;
    this._filter = config.filter;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._uniqueWriterIdentity = config.uniqueWriterIdentity;
    this._bigqueryOptions.internalValue = config.bigqueryOptions;
    this._exclusions.internalValue = config.exclusions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_writer_identity - computed: false, optional: true, required: false
  private _customWriterIdentity?: string; 
  public get customWriterIdentity() {
    return this.getStringAttribute('custom_writer_identity');
  }
  public set customWriterIdentity(value: string) {
    this._customWriterIdentity = value;
  }
  public resetCustomWriterIdentity() {
    this._customWriterIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customWriterIdentityInput() {
    return this._customWriterIdentity;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
    return this._project;
  }

  // unique_writer_identity - computed: false, optional: true, required: false
  private _uniqueWriterIdentity?: boolean | cdktf.IResolvable; 
  public get uniqueWriterIdentity() {
    return this.getBooleanAttribute('unique_writer_identity');
  }
  public set uniqueWriterIdentity(value: boolean | cdktf.IResolvable) {
    this._uniqueWriterIdentity = value;
  }
  public resetUniqueWriterIdentity() {
    this._uniqueWriterIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueWriterIdentityInput() {
    return this._uniqueWriterIdentity;
  }

  // writer_identity - computed: true, optional: false, required: false
  public get writerIdentity() {
    return this.getStringAttribute('writer_identity');
  }

  // bigquery_options - computed: false, optional: true, required: false
  private _bigqueryOptions = new LoggingProjectSinkBigqueryOptionsOutputReference(this, "bigquery_options");
  public get bigqueryOptions() {
    return this._bigqueryOptions;
  }
  public putBigqueryOptions(value: LoggingProjectSinkBigqueryOptions) {
    this._bigqueryOptions.internalValue = value;
  }
  public resetBigqueryOptions() {
    this._bigqueryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryOptionsInput() {
    return this._bigqueryOptions.internalValue;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new LoggingProjectSinkExclusionsList(this, "exclusions", false);
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: LoggingProjectSinkExclusions[] | cdktf.IResolvable) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_writer_identity: cdktf.stringToTerraform(this._customWriterIdentity),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.stringToTerraform(this._destination),
      disabled: cdktf.booleanToTerraform(this._disabled),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      unique_writer_identity: cdktf.booleanToTerraform(this._uniqueWriterIdentity),
      bigquery_options: loggingProjectSinkBigqueryOptionsToTerraform(this._bigqueryOptions.internalValue),
      exclusions: cdktf.listMapper(loggingProjectSinkExclusionsToTerraform, true)(this._exclusions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_writer_identity: {
        value: cdktf.stringToHclTerraform(this._customWriterIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unique_writer_identity: {
        value: cdktf.booleanToHclTerraform(this._uniqueWriterIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bigquery_options: {
        value: loggingProjectSinkBigqueryOptionsToHclTerraform(this._bigqueryOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingProjectSinkBigqueryOptionsList",
      },
      exclusions: {
        value: cdktf.listMapperHcl(loggingProjectSinkExclusionsToHclTerraform, true)(this._exclusions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingProjectSinkExclusionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
