// https://www.terraform.io/docs/providers/google/r/bigquery_routine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigqueryRoutineConfig extends TerraformMetaArguments {
  /** The ID of the dataset containing this routine */
  readonly datasetId: string;
  /** The body of the routine. For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses. */
  readonly definitionBody: string;
  /** The description of the routine if defined. */
  readonly description?: string;
  /** The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"] */
  readonly determinismLevel?: string;
  /** Optional. If language = "JAVASCRIPT", this field stores the path of the
imported JAVASCRIPT libraries. */
  readonly importedLibraries?: string[];
  /** The language of the routine. Possible values: ["SQL", "JAVASCRIPT"] */
  readonly language?: string;
  readonly project?: string;
  /** A JSON schema for the return type. Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API. */
  readonly returnType?: string;
  /** The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters. */
  readonly routineId: string;
  /** The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE"] */
  readonly routineType?: string;
  /** arguments block */
  readonly arguments?: BigqueryRoutineArguments[];
  /** timeouts block */
  readonly timeouts?: BigqueryRoutineTimeouts;
}
export interface BigqueryRoutineArguments {
  /** Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"] */
  readonly argumentKind?: string;
  /** A JSON schema for the data type. Required unless argumentKind = ANY_TYPE.
~>**NOTE**: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API. */
  readonly dataType?: string;
  /** Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"] */
  readonly mode?: string;
  /** The name of this argument. Can be absent for function return argument. */
  readonly name?: string;
}
export interface BigqueryRoutineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BigqueryRoutine extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BigqueryRoutineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_routine',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datasetId = config.datasetId;
    this._definitionBody = config.definitionBody;
    this._description = config.description;
    this._determinismLevel = config.determinismLevel;
    this._importedLibraries = config.importedLibraries;
    this._language = config.language;
    this._project = config.project;
    this._returnType = config.returnType;
    this._routineId = config.routineId;
    this._routineType = config.routineType;
    this._arguments = config.arguments;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: true
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId: string;
  public get datasetId() {
    return this._datasetId;
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }

  // definition_body - computed: false, optional: false, required: true
  private _definitionBody: string;
  public get definitionBody() {
    return this._definitionBody;
  }
  public set definitionBody(value: string) {
    this._definitionBody = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // determinism_level - computed: false, optional: true, required: false
  private _determinismLevel?: string;
  public get determinismLevel() {
    return this._determinismLevel;
  }
  public set determinismLevel(value: string | undefined) {
    this._determinismLevel = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // imported_libraries - computed: false, optional: true, required: false
  private _importedLibraries?: string[];
  public get importedLibraries() {
    return this._importedLibraries;
  }
  public set importedLibraries(value: string[] | undefined) {
    this._importedLibraries = value;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string;
  public get language() {
    return this._language;
  }
  public set language(value: string | undefined) {
    this._language = value;
  }

  // last_modified_time - computed: true, optional: false, required: true
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // return_type - computed: false, optional: true, required: false
  private _returnType?: string;
  public get returnType() {
    return this._returnType;
  }
  public set returnType(value: string | undefined) {
    this._returnType = value;
  }

  // routine_id - computed: false, optional: false, required: true
  private _routineId: string;
  public get routineId() {
    return this._routineId;
  }
  public set routineId(value: string) {
    this._routineId = value;
  }

  // routine_type - computed: false, optional: true, required: false
  private _routineType?: string;
  public get routineType() {
    return this._routineType;
  }
  public set routineType(value: string | undefined) {
    this._routineType = value;
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: BigqueryRoutineArguments[];
  public get arguments() {
    return this._arguments;
  }
  public set arguments(value: BigqueryRoutineArguments[] | undefined) {
    this._arguments = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigqueryRoutineTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BigqueryRoutineTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_id: this._datasetId,
      definition_body: this._definitionBody,
      description: this._description,
      determinism_level: this._determinismLevel,
      imported_libraries: this._importedLibraries,
      language: this._language,
      project: this._project,
      return_type: this._returnType,
      routine_id: this._routineId,
      routine_type: this._routineType,
      arguments: this._arguments,
      timeouts: this._timeouts,
    };
  }
}
