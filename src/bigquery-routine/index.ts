/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryRoutineConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to DATA_MASKING, the function is validated and made available as a masking function. For more information, see https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask Possible values: ["DATA_MASKING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#data_governance_type BigqueryRoutine#data_governance_type}
  */
  readonly dataGovernanceType?: string;
  /**
  * The ID of the dataset containing this routine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#dataset_id BigqueryRoutine#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The body of the routine. For functions, this is the expression in the AS clause.
  * If language=SQL, it is the substring inside (but excluding) the parentheses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#definition_body BigqueryRoutine#definition_body}
  */
  readonly definitionBody: string;
  /**
  * The description of the routine if defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#description BigqueryRoutine#description}
  */
  readonly description?: string;
  /**
  * The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#determinism_level BigqueryRoutine#determinism_level}
  */
  readonly determinismLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#id BigqueryRoutine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. If language = "JAVASCRIPT", this field stores the path of the
  * imported JAVASCRIPT libraries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#imported_libraries BigqueryRoutine#imported_libraries}
  */
  readonly importedLibraries?: string[];
  /**
  * The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#language BigqueryRoutine#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#project BigqueryRoutine#project}
  */
  readonly project?: string;
  /**
  * Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".
  * 
  * If absent, the return table type is inferred from definitionBody at query time in each query
  * that references this routine. If present, then the columns in the evaluated table result will
  * be cast to match the column types specificed in return table type, at query time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#return_table_type BigqueryRoutine#return_table_type}
  */
  readonly returnTableType?: string;
  /**
  * A JSON schema for the return type. Optional if language = "SQL"; required otherwise.
  * If absent, the return type is inferred from definitionBody at query time in each query
  * that references this routine. If present, then the evaluated result will be cast to
  * the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
  * string, any changes to the string will create a diff, even if the JSON itself hasn't
  * changed. If the API returns a different value for the same schema, e.g. it switche
  * d the order of values or replaced STRUCT field type with RECORD field type, we currently
  * cannot suppress the recurring diff this causes. As a workaround, we recommend using
  * the schema as returned by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#return_type BigqueryRoutine#return_type}
  */
  readonly returnType?: string;
  /**
  * The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#routine_id BigqueryRoutine#routine_id}
  */
  readonly routineId: string;
  /**
  * The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#routine_type BigqueryRoutine#routine_type}
  */
  readonly routineType: string;
  /**
  * arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#arguments BigqueryRoutine#arguments}
  */
  readonly arguments?: BigqueryRoutineArguments[] | cdktf.IResolvable;
  /**
  * remote_function_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#remote_function_options BigqueryRoutine#remote_function_options}
  */
  readonly remoteFunctionOptions?: BigqueryRoutineRemoteFunctionOptions;
  /**
  * spark_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#spark_options BigqueryRoutine#spark_options}
  */
  readonly sparkOptions?: BigqueryRoutineSparkOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#timeouts BigqueryRoutine#timeouts}
  */
  readonly timeouts?: BigqueryRoutineTimeouts;
}
export interface BigqueryRoutineArguments {
  /**
  * Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#argument_kind BigqueryRoutine#argument_kind}
  */
  readonly argumentKind?: string;
  /**
  * A JSON schema for the data type. Required unless argumentKind = ANY_TYPE.
  * ~>**NOTE**: Because this field expects a JSON string, any changes to the string
  * will create a diff, even if the JSON itself hasn't changed. If the API returns
  * a different value for the same schema, e.g. it switched the order of values
  * or replaced STRUCT field type with RECORD field type, we currently cannot
  * suppress the recurring diff this causes. As a workaround, we recommend using
  * the schema as returned by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#data_type BigqueryRoutine#data_type}
  */
  readonly dataType?: string;
  /**
  * Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#mode BigqueryRoutine#mode}
  */
  readonly mode?: string;
  /**
  * The name of this argument. Can be absent for function return argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#name BigqueryRoutine#name}
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


export function bigqueryRoutineArgumentsToHclTerraform(struct?: BigqueryRoutineArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argument_kind: {
      value: cdktf.stringToHclTerraform(struct!.argumentKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
export interface BigqueryRoutineRemoteFunctionOptions {
  /**
  * Fully qualified name of the user-provided connection object which holds
  * the authentication information to send requests to the remote service.
  * Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#connection BigqueryRoutine#connection}
  */
  readonly connection?: string;
  /**
  * Endpoint of the user-provided remote service, e.g.
  * 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#endpoint BigqueryRoutine#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Max number of rows in each batch sent to the remote service. If absent or if 0,
  * BigQuery dynamically decides the number of rows in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#max_batching_rows BigqueryRoutine#max_batching_rows}
  */
  readonly maxBatchingRows?: string;
  /**
  * User-defined context as a set of key/value pairs, which will be sent as function
  * invocation context together with batched arguments in the requests to the remote
  * service. The total number of bytes of keys and values must be less than 8KB.
  * 
  * An object containing a list of "key": value pairs. Example:
  * '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#user_defined_context BigqueryRoutine#user_defined_context}
  */
  readonly userDefinedContext?: { [key: string]: string };
}

export function bigqueryRoutineRemoteFunctionOptionsToTerraform(struct?: BigqueryRoutineRemoteFunctionOptionsOutputReference | BigqueryRoutineRemoteFunctionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: cdktf.stringToTerraform(struct!.connection),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    max_batching_rows: cdktf.stringToTerraform(struct!.maxBatchingRows),
    user_defined_context: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userDefinedContext),
  }
}


export function bigqueryRoutineRemoteFunctionOptionsToHclTerraform(struct?: BigqueryRoutineRemoteFunctionOptionsOutputReference | BigqueryRoutineRemoteFunctionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: cdktf.stringToHclTerraform(struct!.connection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_batching_rows: {
      value: cdktf.stringToHclTerraform(struct!.maxBatchingRows),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_defined_context: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.userDefinedContext),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryRoutineRemoteFunctionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryRoutineRemoteFunctionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._maxBatchingRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchingRows = this._maxBatchingRows;
    }
    if (this._userDefinedContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedContext = this._userDefinedContext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryRoutineRemoteFunctionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connection = undefined;
      this._endpoint = undefined;
      this._maxBatchingRows = undefined;
      this._userDefinedContext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connection = value.connection;
      this._endpoint = value.endpoint;
      this._maxBatchingRows = value.maxBatchingRows;
      this._userDefinedContext = value.userDefinedContext;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection?: string; 
  public get connection() {
    return this.getStringAttribute('connection');
  }
  public set connection(value: string) {
    this._connection = value;
  }
  public resetConnection() {
    this._connection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // max_batching_rows - computed: false, optional: true, required: false
  private _maxBatchingRows?: string; 
  public get maxBatchingRows() {
    return this.getStringAttribute('max_batching_rows');
  }
  public set maxBatchingRows(value: string) {
    this._maxBatchingRows = value;
  }
  public resetMaxBatchingRows() {
    this._maxBatchingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchingRowsInput() {
    return this._maxBatchingRows;
  }

  // user_defined_context - computed: true, optional: true, required: false
  private _userDefinedContext?: { [key: string]: string }; 
  public get userDefinedContext() {
    return this.getStringMapAttribute('user_defined_context');
  }
  public set userDefinedContext(value: { [key: string]: string }) {
    this._userDefinedContext = value;
  }
  public resetUserDefinedContext() {
    this._userDefinedContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedContextInput() {
    return this._userDefinedContext;
  }
}
export interface BigqueryRoutineSparkOptions {
  /**
  * Archive files to be extracted into the working directory of each executor. For more information about Apache Spark, see Apache Spark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#archive_uris BigqueryRoutine#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Fully qualified name of the user-provided Spark connection object.
  * Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#connection BigqueryRoutine#connection}
  */
  readonly connection?: string;
  /**
  * Custom container image for the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#container_image BigqueryRoutine#container_image}
  */
  readonly containerImage?: string;
  /**
  * Files to be placed in the working directory of each executor. For more information about Apache Spark, see Apache Spark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#file_uris BigqueryRoutine#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#jar_uris BigqueryRoutine#jar_uris}
  */
  readonly jarUris?: string[];
  /**
  * The fully qualified name of a class in jarUris, for example, com.example.wordcount.
  * Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#main_class BigqueryRoutine#main_class}
  */
  readonly mainClass?: string;
  /**
  * The main file/jar URI of the Spark application.
  * Exactly one of the definitionBody field and the mainFileUri field must be set for Python.
  * Exactly one of mainClass and mainFileUri field should be set for Java/Scala language type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#main_file_uri BigqueryRoutine#main_file_uri}
  */
  readonly mainFileUri?: string;
  /**
  * Configuration properties as a set of key/value pairs, which will be passed on to the Spark application.
  * For more information, see Apache Spark and the procedure option list.
  * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#properties BigqueryRoutine#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Python files to be placed on the PYTHONPATH for PySpark application. Supported file types: .py, .egg, and .zip. For more information about Apache Spark, see Apache Spark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#py_file_uris BigqueryRoutine#py_file_uris}
  */
  readonly pyFileUris?: string[];
  /**
  * Runtime version. If not specified, the default runtime version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#runtime_version BigqueryRoutine#runtime_version}
  */
  readonly runtimeVersion?: string;
}

export function bigqueryRoutineSparkOptionsToTerraform(struct?: BigqueryRoutineSparkOptionsOutputReference | BigqueryRoutineSparkOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    connection: cdktf.stringToTerraform(struct!.connection),
    container_image: cdktf.stringToTerraform(struct!.containerImage),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    jar_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_file_uri: cdktf.stringToTerraform(struct!.mainFileUri),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    py_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pyFileUris),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
  }
}


export function bigqueryRoutineSparkOptionsToHclTerraform(struct?: BigqueryRoutineSparkOptionsOutputReference | BigqueryRoutineSparkOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection: {
      value: cdktf.stringToHclTerraform(struct!.connection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_image: {
      value: cdktf.stringToHclTerraform(struct!.containerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jarUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    main_class: {
      value: cdktf.stringToHclTerraform(struct!.mainClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.mainFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    py_file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pyFileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryRoutineSparkOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryRoutineSparkOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._connection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection;
    }
    if (this._containerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImage = this._containerImage;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarUris = this._jarUris;
    }
    if (this._mainClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass;
    }
    if (this._mainFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainFileUri = this._mainFileUri;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._pyFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.pyFileUris = this._pyFileUris;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryRoutineSparkOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._connection = undefined;
      this._containerImage = undefined;
      this._fileUris = undefined;
      this._jarUris = undefined;
      this._mainClass = undefined;
      this._mainFileUri = undefined;
      this._properties = undefined;
      this._pyFileUris = undefined;
      this._runtimeVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._connection = value.connection;
      this._containerImage = value.containerImage;
      this._fileUris = value.fileUris;
      this._jarUris = value.jarUris;
      this._mainClass = value.mainClass;
      this._mainFileUri = value.mainFileUri;
      this._properties = value.properties;
      this._pyFileUris = value.pyFileUris;
      this._runtimeVersion = value.runtimeVersion;
    }
  }

  // archive_uris - computed: true, optional: true, required: false
  private _archiveUris?: string[]; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[]) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris;
  }

  // connection - computed: false, optional: true, required: false
  private _connection?: string; 
  public get connection() {
    return this.getStringAttribute('connection');
  }
  public set connection(value: string) {
    this._connection = value;
  }
  public resetConnection() {
    this._connection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection;
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage?: string; 
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }
  public set containerImage(value: string) {
    this._containerImage = value;
  }
  public resetContainerImage() {
    this._containerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage;
  }

  // file_uris - computed: true, optional: true, required: false
  private _fileUris?: string[]; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[]) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris;
  }

  // jar_uris - computed: true, optional: true, required: false
  private _jarUris?: string[]; 
  public get jarUris() {
    return this.getListAttribute('jar_uris');
  }
  public set jarUris(value: string[]) {
    this._jarUris = value;
  }
  public resetJarUris() {
    this._jarUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarUrisInput() {
    return this._jarUris;
  }

  // main_class - computed: false, optional: true, required: false
  private _mainClass?: string; 
  public get mainClass() {
    return this.getStringAttribute('main_class');
  }
  public set mainClass(value: string) {
    this._mainClass = value;
  }
  public resetMainClass() {
    this._mainClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassInput() {
    return this._mainClass;
  }

  // main_file_uri - computed: false, optional: true, required: false
  private _mainFileUri?: string; 
  public get mainFileUri() {
    return this.getStringAttribute('main_file_uri');
  }
  public set mainFileUri(value: string) {
    this._mainFileUri = value;
  }
  public resetMainFileUri() {
    this._mainFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainFileUriInput() {
    return this._mainFileUri;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // py_file_uris - computed: true, optional: true, required: false
  private _pyFileUris?: string[]; 
  public get pyFileUris() {
    return this.getListAttribute('py_file_uris');
  }
  public set pyFileUris(value: string[]) {
    this._pyFileUris = value;
  }
  public resetPyFileUris() {
    this._pyFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pyFileUrisInput() {
    return this._pyFileUris;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }
}
export interface BigqueryRoutineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#create BigqueryRoutine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#delete BigqueryRoutine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#update BigqueryRoutine#update}
  */
  readonly update?: string;
}

export function bigqueryRoutineTimeoutsToTerraform(struct?: BigqueryRoutineTimeouts | cdktf.IResolvable): any {
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


export function bigqueryRoutineTimeoutsToHclTerraform(struct?: BigqueryRoutineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryRoutineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine google_bigquery_routine}
*/
export class BigqueryRoutine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_routine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigqueryRoutine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryRoutine to import
  * @param importFromId The id of the existing BigqueryRoutine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryRoutine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_routine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/bigquery_routine google_bigquery_routine} Resource
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
        providerVersion: '5.42.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataGovernanceType = config.dataGovernanceType;
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
    this._remoteFunctionOptions.internalValue = config.remoteFunctionOptions;
    this._sparkOptions.internalValue = config.sparkOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // data_governance_type - computed: false, optional: true, required: false
  private _dataGovernanceType?: string; 
  public get dataGovernanceType() {
    return this.getStringAttribute('data_governance_type');
  }
  public set dataGovernanceType(value: string) {
    this._dataGovernanceType = value;
  }
  public resetDataGovernanceType() {
    this._dataGovernanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataGovernanceTypeInput() {
    return this._dataGovernanceType;
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

  // routine_type - computed: false, optional: false, required: true
  private _routineType?: string; 
  public get routineType() {
    return this.getStringAttribute('routine_type');
  }
  public set routineType(value: string) {
    this._routineType = value;
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

  // remote_function_options - computed: false, optional: true, required: false
  private _remoteFunctionOptions = new BigqueryRoutineRemoteFunctionOptionsOutputReference(this, "remote_function_options");
  public get remoteFunctionOptions() {
    return this._remoteFunctionOptions;
  }
  public putRemoteFunctionOptions(value: BigqueryRoutineRemoteFunctionOptions) {
    this._remoteFunctionOptions.internalValue = value;
  }
  public resetRemoteFunctionOptions() {
    this._remoteFunctionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFunctionOptionsInput() {
    return this._remoteFunctionOptions.internalValue;
  }

  // spark_options - computed: false, optional: true, required: false
  private _sparkOptions = new BigqueryRoutineSparkOptionsOutputReference(this, "spark_options");
  public get sparkOptions() {
    return this._sparkOptions;
  }
  public putSparkOptions(value: BigqueryRoutineSparkOptions) {
    this._sparkOptions.internalValue = value;
  }
  public resetSparkOptions() {
    this._sparkOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkOptionsInput() {
    return this._sparkOptions.internalValue;
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
      data_governance_type: cdktf.stringToTerraform(this._dataGovernanceType),
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
      remote_function_options: bigqueryRoutineRemoteFunctionOptionsToTerraform(this._remoteFunctionOptions.internalValue),
      spark_options: bigqueryRoutineSparkOptionsToTerraform(this._sparkOptions.internalValue),
      timeouts: bigqueryRoutineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_governance_type: {
        value: cdktf.stringToHclTerraform(this._dataGovernanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset_id: {
        value: cdktf.stringToHclTerraform(this._datasetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      definition_body: {
        value: cdktf.stringToHclTerraform(this._definitionBody),
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
      determinism_level: {
        value: cdktf.stringToHclTerraform(this._determinismLevel),
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
      imported_libraries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importedLibraries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
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
      return_table_type: {
        value: cdktf.stringToHclTerraform(this._returnTableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      return_type: {
        value: cdktf.stringToHclTerraform(this._returnType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routine_id: {
        value: cdktf.stringToHclTerraform(this._routineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routine_type: {
        value: cdktf.stringToHclTerraform(this._routineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arguments: {
        value: cdktf.listMapperHcl(bigqueryRoutineArgumentsToHclTerraform, true)(this._arguments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryRoutineArgumentsList",
      },
      remote_function_options: {
        value: bigqueryRoutineRemoteFunctionOptionsToHclTerraform(this._remoteFunctionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryRoutineRemoteFunctionOptionsList",
      },
      spark_options: {
        value: bigqueryRoutineSparkOptionsToHclTerraform(this._sparkOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryRoutineSparkOptionsList",
      },
      timeouts: {
        value: bigqueryRoutineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryRoutineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
