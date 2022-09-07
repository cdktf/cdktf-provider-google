// https://www.terraform.io/docs/providers/google/r/bigquery_routine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryRoutineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the dataset containing this routine
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#dataset_id BigqueryRoutine#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The body of the routine. For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#definition_body BigqueryRoutine#definition_body}
  */
  readonly definitionBody: string;
  /**
  * The description of the routine if defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#description BigqueryRoutine#description}
  */
  readonly description?: string;
  /**
  * The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#determinism_level BigqueryRoutine#determinism_level}
  */
  readonly determinismLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#id BigqueryRoutine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. If language = "JAVASCRIPT", this field stores the path of the
imported JAVASCRIPT libraries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#imported_libraries BigqueryRoutine#imported_libraries}
  */
  readonly importedLibraries?: string[];
  /**
  * The language of the routine. Possible values: ["SQL", "JAVASCRIPT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#language BigqueryRoutine#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#project BigqueryRoutine#project}
  */
  readonly project?: string;
  /**
  * Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#return_table_type BigqueryRoutine#return_table_type}
  */
  readonly returnTableType?: string;
  /**
  * A JSON schema for the return type. Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#return_type BigqueryRoutine#return_type}
  */
  readonly returnType?: string;
  /**
  * The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#routine_id BigqueryRoutine#routine_id}
  */
  readonly routineId: string;
  /**
  * The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#routine_type BigqueryRoutine#routine_type}
  */
  readonly routineType?: string;
  /**
  * arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#arguments BigqueryRoutine#arguments}
  */
  readonly arguments?: BigqueryRoutineArguments[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#timeouts BigqueryRoutine#timeouts}
  */
  readonly timeouts?: BigqueryRoutineTimeouts;
}
export interface BigqueryRoutineArguments {
  /**
  * Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#argument_kind BigqueryRoutine#argument_kind}
  */
  readonly argumentKind?: string;
  /**
  * A JSON schema for the data type. Required unless argumentKind = ANY_TYPE.
~>**NOTE**: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#data_type BigqueryRoutine#data_type}
  */
  readonly dataType?: string;
  /**
  * Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#mode BigqueryRoutine#mode}
  */
  readonly mode?: string;
  /**
  * The name of this argument. Can be absent for function return argument.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#name BigqueryRoutine#name}
  */
  readonly name?: string;
}

export function bigqueryRoutineArgumentsToTerraform(struct?: BigqueryRoutineArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argument_kind: cdktf.stringToTerraform(struct!.argumentKind),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class BigqueryRoutineArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BigqueryRoutineArguments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argumentKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.argumentKind = this._argumentKind;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryRoutineArguments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argumentKind = undefined;
      this._dataType = undefined;
      this._mode = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argumentKind = value.argumentKind;
      this._dataType = value.dataType;
      this._mode = value.mode;
      this._name = value.name;
    }
  }

  // argument_kind - computed: false, optional: true, required: false
  private _argumentKind?: string; 
  public get argumentKind() {
    return this.getStringAttribute('argument_kind');
  }
  public set argumentKind(value: string) {
    this._argumentKind = value;
  }
  public resetArgumentKind() {
    this._argumentKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentKindInput() {
    return this._argumentKind;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class BigqueryRoutineArgumentsList extends cdktf.ComplexList {
  public internalValue? : BigqueryRoutineArguments[] | cdktf.IResolvable

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
  public get(index: number): BigqueryRoutineArgumentsOutputReference {
    return new BigqueryRoutineArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryRoutineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#create BigqueryRoutine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#delete BigqueryRoutine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine#update BigqueryRoutine#update}
  */
  readonly update?: string;
}

export function bigqueryRoutineTimeoutsToTerraform(struct?: BigqueryRoutineTimeoutsOutputReference | BigqueryRoutineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class BigqueryRoutineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryRoutineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryRoutineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine google_bigquery_routine}
*/
export class BigqueryRoutine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_routine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/bigquery_routine google_bigquery_routine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryRoutineConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryRoutineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_routine',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datasetId = config.datasetId;
    this._definitionBody = config.definitionBody;
    this._description = config.description;
    this._determinismLevel = config.determinismLevel;
    this._id = config.id;
    this._importedLibraries = config.importedLibraries;
    this._language = config.language;
    this._project = config.project;
    this._returnTableType = config.returnTableType;
    this._returnType = config.returnType;
    this._routineId = config.routineId;
    this._routineType = config.routineType;
    this._arguments.internalValue = config.arguments;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // definition_body - computed: false, optional: false, required: true
  private _definitionBody?: string; 
  public get definitionBody() {
    return this.getStringAttribute('definition_body');
  }
  public set definitionBody(value: string) {
    this._definitionBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionBodyInput() {
    return this._definitionBody;
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

  // determinism_level - computed: false, optional: true, required: false
  private _determinismLevel?: string; 
  public get determinismLevel() {
    return this.getStringAttribute('determinism_level');
  }
  public set determinismLevel(value: string) {
    this._determinismLevel = value;
  }
  public resetDeterminismLevel() {
    this._determinismLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get determinismLevelInput() {
    return this._determinismLevel;
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

  // imported_libraries - computed: false, optional: true, required: false
  private _importedLibraries?: string[]; 
  public get importedLibraries() {
    return this.getListAttribute('imported_libraries');
  }
  public set importedLibraries(value: string[]) {
    this._importedLibraries = value;
  }
  public resetImportedLibraries() {
    this._importedLibraries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedLibrariesInput() {
    return this._importedLibraries;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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
    return this._project;
  }

  // return_table_type - computed: false, optional: true, required: false
  private _returnTableType?: string; 
  public get returnTableType() {
    return this.getStringAttribute('return_table_type');
  }
  public set returnTableType(value: string) {
    this._returnTableType = value;
  }
  public resetReturnTableType() {
    this._returnTableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnTableTypeInput() {
    return this._returnTableType;
  }

  // return_type - computed: false, optional: true, required: false
  private _returnType?: string; 
  public get returnType() {
    return this.getStringAttribute('return_type');
  }
  public set returnType(value: string) {
    this._returnType = value;
  }
  public resetReturnType() {
    this._returnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnTypeInput() {
    return this._returnType;
  }

  // routine_id - computed: false, optional: false, required: true
  private _routineId?: string; 
  public get routineId() {
    return this.getStringAttribute('routine_id');
  }
  public set routineId(value: string) {
    this._routineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routineIdInput() {
    return this._routineId;
  }

  // routine_type - computed: false, optional: true, required: false
  private _routineType?: string; 
  public get routineType() {
    return this.getStringAttribute('routine_type');
  }
  public set routineType(value: string) {
    this._routineType = value;
  }
  public resetRoutineType() {
    this._routineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineTypeInput() {
    return this._routineType;
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments = new BigqueryRoutineArgumentsList(this, "arguments", false);
  public get arguments() {
    return this._arguments;
  }
  public putArguments(value: BigqueryRoutineArguments[] | cdktf.IResolvable) {
    this._arguments.internalValue = value;
  }
  public resetArguments() {
    this._arguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryRoutineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryRoutineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      imported_libraries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importedLibraries),
      language: cdktf.stringToTerraform(this._language),
      project: cdktf.stringToTerraform(this._project),
      return_table_type: cdktf.stringToTerraform(this._returnTableType),
      return_type: cdktf.stringToTerraform(this._returnType),
      routine_id: cdktf.stringToTerraform(this._routineId),
      routine_type: cdktf.stringToTerraform(this._routineType),
      arguments: cdktf.listMapper(bigqueryRoutineArgumentsToTerraform, true)(this._arguments.internalValue),
      timeouts: bigqueryRoutineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
