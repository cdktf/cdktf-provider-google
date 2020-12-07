// https://www.terraform.io/docs/providers/google/r/bigquery_routine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryRoutineConfig extends cdktf.TerraformMetaArguments {
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

function bigqueryRoutineArgumentsToTerraform(struct?: BigqueryRoutineArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    argument_kind: cdktf.stringToTerraform(struct!.argumentKind),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface BigqueryRoutineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function bigqueryRoutineTimeoutsToTerraform(struct?: BigqueryRoutineTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BigqueryRoutine extends cdktf.TerraformResource {

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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId: string;
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId
  }

  // definition_body - computed: false, optional: false, required: true
  private _definitionBody: string;
  public get definitionBody() {
    return this.getStringAttribute('definition_body');
  }
  public set definitionBody(value: string) {
    this._definitionBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionBodyInput() {
    return this._definitionBody
  }

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

  // determinism_level - computed: false, optional: true, required: false
  private _determinismLevel?: string;
  public get determinismLevel() {
    return this.getStringAttribute('determinism_level');
  }
  public set determinismLevel(value: string ) {
    this._determinismLevel = value;
  }
  public resetDeterminismLevel() {
    this._determinismLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get determinismLevelInput() {
    return this._determinismLevel
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // imported_libraries - computed: false, optional: true, required: false
  private _importedLibraries?: string[];
  public get importedLibraries() {
    return this.getListAttribute('imported_libraries');
  }
  public set importedLibraries(value: string[] ) {
    this._importedLibraries = value;
  }
  public resetImportedLibraries() {
    this._importedLibraries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedLibrariesInput() {
    return this._importedLibraries
  }

  // language - computed: false, optional: true, required: false
  private _language?: string;
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string ) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
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

  // return_type - computed: false, optional: true, required: false
  private _returnType?: string;
  public get returnType() {
    return this.getStringAttribute('return_type');
  }
  public set returnType(value: string ) {
    this._returnType = value;
  }
  public resetReturnType() {
    this._returnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnTypeInput() {
    return this._returnType
  }

  // routine_id - computed: false, optional: false, required: true
  private _routineId: string;
  public get routineId() {
    return this.getStringAttribute('routine_id');
  }
  public set routineId(value: string) {
    this._routineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routineIdInput() {
    return this._routineId
  }

  // routine_type - computed: false, optional: true, required: false
  private _routineType?: string;
  public get routineType() {
    return this.getStringAttribute('routine_type');
  }
  public set routineType(value: string ) {
    this._routineType = value;
  }
  public resetRoutineType() {
    this._routineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineTypeInput() {
    return this._routineType
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: BigqueryRoutineArguments[];
  public get arguments() {
    return this.interpolationForAttribute('arguments') as any;
  }
  public set arguments(value: BigqueryRoutineArguments[] ) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigqueryRoutineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BigqueryRoutineTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      definition_body: cdktf.stringToTerraform(this._definitionBody),
      description: cdktf.stringToTerraform(this._description),
      determinism_level: cdktf.stringToTerraform(this._determinismLevel),
      imported_libraries: cdktf.listMapper(cdktf.stringToTerraform)(this._importedLibraries),
      language: cdktf.stringToTerraform(this._language),
      project: cdktf.stringToTerraform(this._project),
      return_type: cdktf.stringToTerraform(this._returnType),
      routine_id: cdktf.stringToTerraform(this._routineId),
      routine_type: cdktf.stringToTerraform(this._routineType),
      arguments: cdktf.listMapper(bigqueryRoutineArgumentsToTerraform)(this._arguments),
      timeouts: bigqueryRoutineTimeoutsToTerraform(this._timeouts),
    };
  }
}
