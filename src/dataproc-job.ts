// https://www.terraform.io/docs/providers/google/r/dataproc_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * By default, you can only delete inactive jobs within Dataproc. Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#force_delete DataprocJob#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#id DataprocJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. The labels to associate with this job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#labels DataprocJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The project in which the cluster can be found and jobs subsequently run against. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#project DataprocJob#project}
  */
  readonly project?: string;
  /**
  * The Cloud Dataproc region. This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#region DataprocJob#region}
  */
  readonly region?: string;
  /**
  * hadoop_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#hadoop_config DataprocJob#hadoop_config}
  */
  readonly hadoopConfig?: DataprocJobHadoopConfig;
  /**
  * hive_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#hive_config DataprocJob#hive_config}
  */
  readonly hiveConfig?: DataprocJobHiveConfig;
  /**
  * pig_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#pig_config DataprocJob#pig_config}
  */
  readonly pigConfig?: DataprocJobPigConfig;
  /**
  * placement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#placement DataprocJob#placement}
  */
  readonly placement: DataprocJobPlacement;
  /**
  * presto_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#presto_config DataprocJob#presto_config}
  */
  readonly prestoConfig?: DataprocJobPrestoConfig;
  /**
  * pyspark_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#pyspark_config DataprocJob#pyspark_config}
  */
  readonly pysparkConfig?: DataprocJobPysparkConfig;
  /**
  * reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#reference DataprocJob#reference}
  */
  readonly reference?: DataprocJobReference;
  /**
  * scheduling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#scheduling DataprocJob#scheduling}
  */
  readonly scheduling?: DataprocJobScheduling;
  /**
  * spark_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#spark_config DataprocJob#spark_config}
  */
  readonly sparkConfig?: DataprocJobSparkConfig;
  /**
  * sparksql_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#sparksql_config DataprocJob#sparksql_config}
  */
  readonly sparksqlConfig?: DataprocJobSparksqlConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#timeouts DataprocJob#timeouts}
  */
  readonly timeouts?: DataprocJobTimeouts;
}
export interface DataprocJobStatus {
}

export function dataprocJobStatusToTerraform(struct?: DataprocJobStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataprocJobStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataprocJobStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_start_time - computed: true, optional: false, required: false
  public get stateStartTime() {
    return this.getStringAttribute('state_start_time');
  }

  // substate - computed: true, optional: false, required: false
  public get substate() {
    return this.getStringAttribute('substate');
  }
}

export class DataprocJobStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataprocJobStatusOutputReference {
    return new DataprocJobStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocJobHadoopConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string };
}

export function dataprocJobHadoopConfigLoggingConfigToTerraform(struct?: DataprocJobHadoopConfigLoggingConfigOutputReference | DataprocJobHadoopConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobHadoopConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobHadoopConfigLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobHadoopConfigLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string }; 
  public get driverLogLevels() {
    return this.getStringMapAttribute('driver_log_levels');
  }
  public set driverLogLevels(value: { [key: string]: string }) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
  }
}
export interface DataprocJobHadoopConfig {
  /**
  * HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#archive_uris DataprocJob#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * The arguments to pass to the driver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#args DataprocJob#args}
  */
  readonly args?: string[];
  /**
  * HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#file_uris DataprocJob#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The class containing the main method of the driver. Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#main_class DataprocJob#main_class}
  */
  readonly mainClass?: string;
  /**
  * The HCFS URI of jar file containing the driver jar. Conflicts with main_class
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
  /**
  * A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobHadoopConfigLoggingConfig;
}

export function dataprocJobHadoopConfigToTerraform(struct?: DataprocJobHadoopConfigOutputReference | DataprocJobHadoopConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    logging_config: dataprocJobHadoopConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobHadoopConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobHadoopConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._mainClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass;
    }
    if (this._mainJarFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainJarFileUri = this._mainJarFileUri;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._loggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobHadoopConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._args = undefined;
      this._fileUris = undefined;
      this._jarFileUris = undefined;
      this._mainClass = undefined;
      this._mainJarFileUri = undefined;
      this._properties = undefined;
      this._loggingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._args = value.args;
      this._fileUris = value.fileUris;
      this._jarFileUris = value.jarFileUris;
      this._mainClass = value.mainClass;
      this._mainJarFileUri = value.mainJarFileUri;
      this._properties = value.properties;
      this._loggingConfig.internalValue = value.loggingConfig;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
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

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // file_uris - computed: false, optional: true, required: false
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

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
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

  // main_jar_file_uri - computed: false, optional: true, required: false
  private _mainJarFileUri?: string; 
  public get mainJarFileUri() {
    return this.getStringAttribute('main_jar_file_uri');
  }
  public set mainJarFileUri(value: string) {
    this._mainJarFileUri = value;
  }
  public resetMainJarFileUri() {
    this._mainJarFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainJarFileUriInput() {
    return this._mainJarFileUri;
  }

  // properties - computed: false, optional: true, required: false
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

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new DataprocJobHadoopConfigLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocJobHadoopConfigLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }
}
export interface DataprocJobHiveConfig {
  /**
  * Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_file_uri DataprocJob#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_list DataprocJob#query_list}
  */
  readonly queryList?: string[];
  /**
  * Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#script_variables DataprocJob#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string };
}

export function dataprocJobHiveConfigToTerraform(struct?: DataprocJobHiveConfigOutputReference | DataprocJobHiveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryList),
    script_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scriptVariables),
  }
}

export class DataprocJobHiveConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobHiveConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueOnFailure = this._continueOnFailure;
    }
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._queryFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFileUri = this._queryFileUri;
    }
    if (this._queryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryList = this._queryList;
    }
    if (this._scriptVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptVariables = this._scriptVariables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobHiveConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continueOnFailure = undefined;
      this._jarFileUris = undefined;
      this._properties = undefined;
      this._queryFileUri = undefined;
      this._queryList = undefined;
      this._scriptVariables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continueOnFailure = value.continueOnFailure;
      this._jarFileUris = value.jarFileUris;
      this._properties = value.properties;
      this._queryFileUri = value.queryFileUri;
      this._queryList = value.queryList;
      this._scriptVariables = value.scriptVariables;
    }
  }

  // continue_on_failure - computed: false, optional: true, required: false
  private _continueOnFailure?: boolean | cdktf.IResolvable; 
  public get continueOnFailure() {
    return this.getBooleanAttribute('continue_on_failure');
  }
  public set continueOnFailure(value: boolean | cdktf.IResolvable) {
    this._continueOnFailure = value;
  }
  public resetContinueOnFailure() {
    this._continueOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnFailureInput() {
    return this._continueOnFailure;
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
  }

  // properties - computed: false, optional: true, required: false
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

  // query_file_uri - computed: false, optional: true, required: false
  private _queryFileUri?: string; 
  public get queryFileUri() {
    return this.getStringAttribute('query_file_uri');
  }
  public set queryFileUri(value: string) {
    this._queryFileUri = value;
  }
  public resetQueryFileUri() {
    this._queryFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFileUriInput() {
    return this._queryFileUri;
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList?: string[]; 
  public get queryList() {
    return this.getListAttribute('query_list');
  }
  public set queryList(value: string[]) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList;
  }

  // script_variables - computed: false, optional: true, required: false
  private _scriptVariables?: { [key: string]: string }; 
  public get scriptVariables() {
    return this.getStringMapAttribute('script_variables');
  }
  public set scriptVariables(value: { [key: string]: string }) {
    this._scriptVariables = value;
  }
  public resetScriptVariables() {
    this._scriptVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptVariablesInput() {
    return this._scriptVariables;
  }
}
export interface DataprocJobPigConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string };
}

export function dataprocJobPigConfigLoggingConfigToTerraform(struct?: DataprocJobPigConfigLoggingConfigOutputReference | DataprocJobPigConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobPigConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobPigConfigLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobPigConfigLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string }; 
  public get driverLogLevels() {
    return this.getStringMapAttribute('driver_log_levels');
  }
  public set driverLogLevels(value: { [key: string]: string }) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
  }
}
export interface DataprocJobPigConfig {
  /**
  * Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_file_uri DataprocJob#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_list DataprocJob#query_list}
  */
  readonly queryList?: string[];
  /**
  * Mapping of query variable names to values (equivalent to the Pig command: name=[value]).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#script_variables DataprocJob#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string };
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobPigConfigLoggingConfig;
}

export function dataprocJobPigConfigToTerraform(struct?: DataprocJobPigConfigOutputReference | DataprocJobPigConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryList),
    script_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scriptVariables),
    logging_config: dataprocJobPigConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobPigConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobPigConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueOnFailure = this._continueOnFailure;
    }
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._queryFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFileUri = this._queryFileUri;
    }
    if (this._queryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryList = this._queryList;
    }
    if (this._scriptVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptVariables = this._scriptVariables;
    }
    if (this._loggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobPigConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continueOnFailure = undefined;
      this._jarFileUris = undefined;
      this._properties = undefined;
      this._queryFileUri = undefined;
      this._queryList = undefined;
      this._scriptVariables = undefined;
      this._loggingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continueOnFailure = value.continueOnFailure;
      this._jarFileUris = value.jarFileUris;
      this._properties = value.properties;
      this._queryFileUri = value.queryFileUri;
      this._queryList = value.queryList;
      this._scriptVariables = value.scriptVariables;
      this._loggingConfig.internalValue = value.loggingConfig;
    }
  }

  // continue_on_failure - computed: false, optional: true, required: false
  private _continueOnFailure?: boolean | cdktf.IResolvable; 
  public get continueOnFailure() {
    return this.getBooleanAttribute('continue_on_failure');
  }
  public set continueOnFailure(value: boolean | cdktf.IResolvable) {
    this._continueOnFailure = value;
  }
  public resetContinueOnFailure() {
    this._continueOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnFailureInput() {
    return this._continueOnFailure;
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
  }

  // properties - computed: false, optional: true, required: false
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

  // query_file_uri - computed: false, optional: true, required: false
  private _queryFileUri?: string; 
  public get queryFileUri() {
    return this.getStringAttribute('query_file_uri');
  }
  public set queryFileUri(value: string) {
    this._queryFileUri = value;
  }
  public resetQueryFileUri() {
    this._queryFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFileUriInput() {
    return this._queryFileUri;
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList?: string[]; 
  public get queryList() {
    return this.getListAttribute('query_list');
  }
  public set queryList(value: string[]) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList;
  }

  // script_variables - computed: false, optional: true, required: false
  private _scriptVariables?: { [key: string]: string }; 
  public get scriptVariables() {
    return this.getStringMapAttribute('script_variables');
  }
  public set scriptVariables(value: { [key: string]: string }) {
    this._scriptVariables = value;
  }
  public resetScriptVariables() {
    this._scriptVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptVariablesInput() {
    return this._scriptVariables;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new DataprocJobPigConfigLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocJobPigConfigLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }
}
export interface DataprocJobPlacement {
  /**
  * The name of the cluster where the job will be submitted
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#cluster_name DataprocJob#cluster_name}
  */
  readonly clusterName: string;
}

export function dataprocJobPlacementToTerraform(struct?: DataprocJobPlacementOutputReference | DataprocJobPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
  }
}

export class DataprocJobPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterName = value.clusterName;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_uuid - computed: true, optional: false, required: false
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
}
export interface DataprocJobPrestoConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string };
}

export function dataprocJobPrestoConfigLoggingConfigToTerraform(struct?: DataprocJobPrestoConfigLoggingConfigOutputReference | DataprocJobPrestoConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobPrestoConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobPrestoConfigLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobPrestoConfigLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string }; 
  public get driverLogLevels() {
    return this.getStringMapAttribute('driver_log_levels');
  }
  public set driverLogLevels(value: { [key: string]: string }) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
  }
}
export interface DataprocJobPrestoConfig {
  /**
  * Presto client tags to attach to this query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#client_tags DataprocJob#client_tags}
  */
  readonly clientTags?: string[];
  /**
  * Whether to continue executing queries if a query fails. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#continue_on_failure DataprocJob#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The format in which query output will be displayed. See the Presto documentation for supported output formats.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#output_format DataprocJob#output_format}
  */
  readonly outputFormat?: string;
  /**
  * A mapping of property names to values. Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The HCFS URI of the script that contains SQL queries. Conflicts with query_list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_file_uri DataprocJob#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_list DataprocJob#query_list}
  */
  readonly queryList?: string[];
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobPrestoConfigLoggingConfig;
}

export function dataprocJobPrestoConfigToTerraform(struct?: DataprocJobPrestoConfigOutputReference | DataprocJobPrestoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientTags),
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryList),
    logging_config: dataprocJobPrestoConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobPrestoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobPrestoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTags = this._clientTags;
    }
    if (this._continueOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueOnFailure = this._continueOnFailure;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._queryFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFileUri = this._queryFileUri;
    }
    if (this._queryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryList = this._queryList;
    }
    if (this._loggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobPrestoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientTags = undefined;
      this._continueOnFailure = undefined;
      this._outputFormat = undefined;
      this._properties = undefined;
      this._queryFileUri = undefined;
      this._queryList = undefined;
      this._loggingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientTags = value.clientTags;
      this._continueOnFailure = value.continueOnFailure;
      this._outputFormat = value.outputFormat;
      this._properties = value.properties;
      this._queryFileUri = value.queryFileUri;
      this._queryList = value.queryList;
      this._loggingConfig.internalValue = value.loggingConfig;
    }
  }

  // client_tags - computed: false, optional: true, required: false
  private _clientTags?: string[]; 
  public get clientTags() {
    return this.getListAttribute('client_tags');
  }
  public set clientTags(value: string[]) {
    this._clientTags = value;
  }
  public resetClientTags() {
    this._clientTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTagsInput() {
    return this._clientTags;
  }

  // continue_on_failure - computed: false, optional: true, required: false
  private _continueOnFailure?: boolean | cdktf.IResolvable; 
  public get continueOnFailure() {
    return this.getBooleanAttribute('continue_on_failure');
  }
  public set continueOnFailure(value: boolean | cdktf.IResolvable) {
    this._continueOnFailure = value;
  }
  public resetContinueOnFailure() {
    this._continueOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnFailureInput() {
    return this._continueOnFailure;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // properties - computed: false, optional: true, required: false
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

  // query_file_uri - computed: false, optional: true, required: false
  private _queryFileUri?: string; 
  public get queryFileUri() {
    return this.getStringAttribute('query_file_uri');
  }
  public set queryFileUri(value: string) {
    this._queryFileUri = value;
  }
  public resetQueryFileUri() {
    this._queryFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFileUriInput() {
    return this._queryFileUri;
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList?: string[]; 
  public get queryList() {
    return this.getListAttribute('query_list');
  }
  public set queryList(value: string[]) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new DataprocJobPrestoConfigLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocJobPrestoConfigLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }
}
export interface DataprocJobPysparkConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string };
}

export function dataprocJobPysparkConfigLoggingConfigToTerraform(struct?: DataprocJobPysparkConfigLoggingConfigOutputReference | DataprocJobPysparkConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobPysparkConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobPysparkConfigLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobPysparkConfigLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string }; 
  public get driverLogLevels() {
    return this.getStringMapAttribute('driver_log_levels');
  }
  public set driverLogLevels(value: { [key: string]: string }) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
  }
}
export interface DataprocJobPysparkConfig {
  /**
  * Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#archive_uris DataprocJob#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#args DataprocJob#args}
  */
  readonly args?: string[];
  /**
  * Optional. HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#file_uris DataprocJob#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#main_python_file_uri DataprocJob#main_python_file_uri}
  */
  readonly mainPythonFileUri: string;
  /**
  * Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#python_file_uris DataprocJob#python_file_uris}
  */
  readonly pythonFileUris?: string[];
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobPysparkConfigLoggingConfig;
}

export function dataprocJobPysparkConfigToTerraform(struct?: DataprocJobPysparkConfigOutputReference | DataprocJobPysparkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    main_python_file_uri: cdktf.stringToTerraform(struct!.mainPythonFileUri),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    python_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pythonFileUris),
    logging_config: dataprocJobPysparkConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobPysparkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobPysparkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._mainPythonFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainPythonFileUri = this._mainPythonFileUri;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._pythonFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonFileUris = this._pythonFileUris;
    }
    if (this._loggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobPysparkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._args = undefined;
      this._fileUris = undefined;
      this._jarFileUris = undefined;
      this._mainPythonFileUri = undefined;
      this._properties = undefined;
      this._pythonFileUris = undefined;
      this._loggingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._args = value.args;
      this._fileUris = value.fileUris;
      this._jarFileUris = value.jarFileUris;
      this._mainPythonFileUri = value.mainPythonFileUri;
      this._properties = value.properties;
      this._pythonFileUris = value.pythonFileUris;
      this._loggingConfig.internalValue = value.loggingConfig;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
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

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // file_uris - computed: false, optional: true, required: false
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

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
  }

  // main_python_file_uri - computed: false, optional: false, required: true
  private _mainPythonFileUri?: string; 
  public get mainPythonFileUri() {
    return this.getStringAttribute('main_python_file_uri');
  }
  public set mainPythonFileUri(value: string) {
    this._mainPythonFileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainPythonFileUriInput() {
    return this._mainPythonFileUri;
  }

  // properties - computed: false, optional: true, required: false
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

  // python_file_uris - computed: false, optional: true, required: false
  private _pythonFileUris?: string[]; 
  public get pythonFileUris() {
    return this.getListAttribute('python_file_uris');
  }
  public set pythonFileUris(value: string[]) {
    this._pythonFileUris = value;
  }
  public resetPythonFileUris() {
    this._pythonFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFileUrisInput() {
    return this._pythonFileUris;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new DataprocJobPysparkConfigLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocJobPysparkConfigLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }
}
export interface DataprocJobReference {
  /**
  * The job ID, which must be unique within the project. The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#job_id DataprocJob#job_id}
  */
  readonly jobId?: string;
}

export function dataprocJobReferenceToTerraform(struct?: DataprocJobReferenceOutputReference | DataprocJobReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_id: cdktf.stringToTerraform(struct!.jobId),
  }
}

export class DataprocJobReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobId = value.jobId;
    }
  }

  // job_id - computed: true, optional: true, required: false
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }
}
export interface DataprocJobScheduling {
  /**
  * Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#max_failures_per_hour DataprocJob#max_failures_per_hour}
  */
  readonly maxFailuresPerHour: number;
  /**
  * Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#max_failures_total DataprocJob#max_failures_total}
  */
  readonly maxFailuresTotal: number;
}

export function dataprocJobSchedulingToTerraform(struct?: DataprocJobSchedulingOutputReference | DataprocJobScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_failures_per_hour: cdktf.numberToTerraform(struct!.maxFailuresPerHour),
    max_failures_total: cdktf.numberToTerraform(struct!.maxFailuresTotal),
  }
}

export class DataprocJobSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFailuresPerHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailuresPerHour = this._maxFailuresPerHour;
    }
    if (this._maxFailuresTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailuresTotal = this._maxFailuresTotal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFailuresPerHour = undefined;
      this._maxFailuresTotal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFailuresPerHour = value.maxFailuresPerHour;
      this._maxFailuresTotal = value.maxFailuresTotal;
    }
  }

  // max_failures_per_hour - computed: false, optional: false, required: true
  private _maxFailuresPerHour?: number; 
  public get maxFailuresPerHour() {
    return this.getNumberAttribute('max_failures_per_hour');
  }
  public set maxFailuresPerHour(value: number) {
    this._maxFailuresPerHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailuresPerHourInput() {
    return this._maxFailuresPerHour;
  }

  // max_failures_total - computed: false, optional: false, required: true
  private _maxFailuresTotal?: number; 
  public get maxFailuresTotal() {
    return this.getNumberAttribute('max_failures_total');
  }
  public set maxFailuresTotal(value: number) {
    this._maxFailuresTotal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailuresTotalInput() {
    return this._maxFailuresTotal;
  }
}
export interface DataprocJobSparkConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string };
}

export function dataprocJobSparkConfigLoggingConfigToTerraform(struct?: DataprocJobSparkConfigLoggingConfigOutputReference | DataprocJobSparkConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobSparkConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobSparkConfigLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobSparkConfigLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string }; 
  public get driverLogLevels() {
    return this.getStringMapAttribute('driver_log_levels');
  }
  public set driverLogLevels(value: { [key: string]: string }) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
  }
}
export interface DataprocJobSparkConfig {
  /**
  * HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#archive_uris DataprocJob#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * The arguments to pass to the driver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#args DataprocJob#args}
  */
  readonly args?: string[];
  /**
  * HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#file_uris DataprocJob#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The class containing the main method of the driver. Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#main_class DataprocJob#main_class}
  */
  readonly mainClass?: string;
  /**
  * The HCFS URI of jar file containing the driver jar. Conflicts with main_class
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#main_jar_file_uri DataprocJob#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
  /**
  * A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobSparkConfigLoggingConfig;
}

export function dataprocJobSparkConfigToTerraform(struct?: DataprocJobSparkConfigOutputReference | DataprocJobSparkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    logging_config: dataprocJobSparkConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobSparkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobSparkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._mainClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass;
    }
    if (this._mainJarFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainJarFileUri = this._mainJarFileUri;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._loggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobSparkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._args = undefined;
      this._fileUris = undefined;
      this._jarFileUris = undefined;
      this._mainClass = undefined;
      this._mainJarFileUri = undefined;
      this._properties = undefined;
      this._loggingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._args = value.args;
      this._fileUris = value.fileUris;
      this._jarFileUris = value.jarFileUris;
      this._mainClass = value.mainClass;
      this._mainJarFileUri = value.mainJarFileUri;
      this._properties = value.properties;
      this._loggingConfig.internalValue = value.loggingConfig;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
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

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // file_uris - computed: false, optional: true, required: false
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

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
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

  // main_jar_file_uri - computed: false, optional: true, required: false
  private _mainJarFileUri?: string; 
  public get mainJarFileUri() {
    return this.getStringAttribute('main_jar_file_uri');
  }
  public set mainJarFileUri(value: string) {
    this._mainJarFileUri = value;
  }
  public resetMainJarFileUri() {
    this._mainJarFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainJarFileUriInput() {
    return this._mainJarFileUri;
  }

  // properties - computed: false, optional: true, required: false
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

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new DataprocJobSparkConfigLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocJobSparkConfigLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }
}
export interface DataprocJobSparksqlConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string };
}

export function dataprocJobSparksqlConfigLoggingConfigToTerraform(struct?: DataprocJobSparksqlConfigLoggingConfigOutputReference | DataprocJobSparksqlConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobSparksqlConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobSparksqlConfigLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobSparksqlConfigLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string }; 
  public get driverLogLevels() {
    return this.getStringMapAttribute('driver_log_levels');
  }
  public set driverLogLevels(value: { [key: string]: string }) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
  }
}
export interface DataprocJobSparksqlConfig {
  /**
  * HCFS URIs of jar files to be added to the Spark CLASSPATH.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The HCFS URI of the script that contains SQL queries. Conflicts with query_list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_file_uri DataprocJob#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#query_list DataprocJob#query_list}
  */
  readonly queryList?: string[];
  /**
  * Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#script_variables DataprocJob#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string };
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobSparksqlConfigLoggingConfig;
}

export function dataprocJobSparksqlConfigToTerraform(struct?: DataprocJobSparksqlConfigOutputReference | DataprocJobSparksqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryList),
    script_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scriptVariables),
    logging_config: dataprocJobSparksqlConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobSparksqlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobSparksqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._queryFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFileUri = this._queryFileUri;
    }
    if (this._queryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryList = this._queryList;
    }
    if (this._scriptVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptVariables = this._scriptVariables;
    }
    if (this._loggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobSparksqlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jarFileUris = undefined;
      this._properties = undefined;
      this._queryFileUri = undefined;
      this._queryList = undefined;
      this._scriptVariables = undefined;
      this._loggingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jarFileUris = value.jarFileUris;
      this._properties = value.properties;
      this._queryFileUri = value.queryFileUri;
      this._queryList = value.queryList;
      this._scriptVariables = value.scriptVariables;
      this._loggingConfig.internalValue = value.loggingConfig;
    }
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
  }

  // properties - computed: false, optional: true, required: false
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

  // query_file_uri - computed: false, optional: true, required: false
  private _queryFileUri?: string; 
  public get queryFileUri() {
    return this.getStringAttribute('query_file_uri');
  }
  public set queryFileUri(value: string) {
    this._queryFileUri = value;
  }
  public resetQueryFileUri() {
    this._queryFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFileUriInput() {
    return this._queryFileUri;
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList?: string[]; 
  public get queryList() {
    return this.getListAttribute('query_list');
  }
  public set queryList(value: string[]) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList;
  }

  // script_variables - computed: false, optional: true, required: false
  private _scriptVariables?: { [key: string]: string }; 
  public get scriptVariables() {
    return this.getStringMapAttribute('script_variables');
  }
  public set scriptVariables(value: { [key: string]: string }) {
    this._scriptVariables = value;
  }
  public resetScriptVariables() {
    this._scriptVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptVariablesInput() {
    return this._scriptVariables;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new DataprocJobSparksqlConfigLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocJobSparksqlConfigLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }
}
export interface DataprocJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#create DataprocJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job#delete DataprocJob#delete}
  */
  readonly delete?: string;
}

export function dataprocJobTimeoutsToTerraform(struct?: DataprocJobTimeoutsOutputReference | DataprocJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DataprocJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocJobTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_job google_dataproc_job}
*/
export class DataprocJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataproc_job google_dataproc_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_job',
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
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._region = config.region;
    this._hadoopConfig.internalValue = config.hadoopConfig;
    this._hiveConfig.internalValue = config.hiveConfig;
    this._pigConfig.internalValue = config.pigConfig;
    this._placement.internalValue = config.placement;
    this._prestoConfig.internalValue = config.prestoConfig;
    this._pysparkConfig.internalValue = config.pysparkConfig;
    this._reference.internalValue = config.reference;
    this._scheduling.internalValue = config.scheduling;
    this._sparkConfig.internalValue = config.sparkConfig;
    this._sparksqlConfig.internalValue = config.sparksqlConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // driver_controls_files_uri - computed: true, optional: false, required: false
  public get driverControlsFilesUri() {
    return this.getStringAttribute('driver_controls_files_uri');
  }

  // driver_output_resource_uri - computed: true, optional: false, required: false
  public get driverOutputResourceUri() {
    return this.getStringAttribute('driver_output_resource_uri');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataprocJobStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // hadoop_config - computed: false, optional: true, required: false
  private _hadoopConfig = new DataprocJobHadoopConfigOutputReference(this, "hadoop_config");
  public get hadoopConfig() {
    return this._hadoopConfig;
  }
  public putHadoopConfig(value: DataprocJobHadoopConfig) {
    this._hadoopConfig.internalValue = value;
  }
  public resetHadoopConfig() {
    this._hadoopConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hadoopConfigInput() {
    return this._hadoopConfig.internalValue;
  }

  // hive_config - computed: false, optional: true, required: false
  private _hiveConfig = new DataprocJobHiveConfigOutputReference(this, "hive_config");
  public get hiveConfig() {
    return this._hiveConfig;
  }
  public putHiveConfig(value: DataprocJobHiveConfig) {
    this._hiveConfig.internalValue = value;
  }
  public resetHiveConfig() {
    this._hiveConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveConfigInput() {
    return this._hiveConfig.internalValue;
  }

  // pig_config - computed: false, optional: true, required: false
  private _pigConfig = new DataprocJobPigConfigOutputReference(this, "pig_config");
  public get pigConfig() {
    return this._pigConfig;
  }
  public putPigConfig(value: DataprocJobPigConfig) {
    this._pigConfig.internalValue = value;
  }
  public resetPigConfig() {
    this._pigConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pigConfigInput() {
    return this._pigConfig.internalValue;
  }

  // placement - computed: false, optional: false, required: true
  private _placement = new DataprocJobPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataprocJobPlacement) {
    this._placement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // presto_config - computed: false, optional: true, required: false
  private _prestoConfig = new DataprocJobPrestoConfigOutputReference(this, "presto_config");
  public get prestoConfig() {
    return this._prestoConfig;
  }
  public putPrestoConfig(value: DataprocJobPrestoConfig) {
    this._prestoConfig.internalValue = value;
  }
  public resetPrestoConfig() {
    this._prestoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prestoConfigInput() {
    return this._prestoConfig.internalValue;
  }

  // pyspark_config - computed: false, optional: true, required: false
  private _pysparkConfig = new DataprocJobPysparkConfigOutputReference(this, "pyspark_config");
  public get pysparkConfig() {
    return this._pysparkConfig;
  }
  public putPysparkConfig(value: DataprocJobPysparkConfig) {
    this._pysparkConfig.internalValue = value;
  }
  public resetPysparkConfig() {
    this._pysparkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pysparkConfigInput() {
    return this._pysparkConfig.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new DataprocJobReferenceOutputReference(this, "reference");
  public get reference() {
    return this._reference;
  }
  public putReference(value: DataprocJobReference) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new DataprocJobSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: DataprocJobScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // spark_config - computed: false, optional: true, required: false
  private _sparkConfig = new DataprocJobSparkConfigOutputReference(this, "spark_config");
  public get sparkConfig() {
    return this._sparkConfig;
  }
  public putSparkConfig(value: DataprocJobSparkConfig) {
    this._sparkConfig.internalValue = value;
  }
  public resetSparkConfig() {
    this._sparkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfigInput() {
    return this._sparkConfig.internalValue;
  }

  // sparksql_config - computed: false, optional: true, required: false
  private _sparksqlConfig = new DataprocJobSparksqlConfigOutputReference(this, "sparksql_config");
  public get sparksqlConfig() {
    return this._sparksqlConfig;
  }
  public putSparksqlConfig(value: DataprocJobSparksqlConfig) {
    this._sparksqlConfig.internalValue = value;
  }
  public resetSparksqlConfig() {
    this._sparksqlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparksqlConfigInput() {
    return this._sparksqlConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocJobTimeouts) {
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
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      hadoop_config: dataprocJobHadoopConfigToTerraform(this._hadoopConfig.internalValue),
      hive_config: dataprocJobHiveConfigToTerraform(this._hiveConfig.internalValue),
      pig_config: dataprocJobPigConfigToTerraform(this._pigConfig.internalValue),
      placement: dataprocJobPlacementToTerraform(this._placement.internalValue),
      presto_config: dataprocJobPrestoConfigToTerraform(this._prestoConfig.internalValue),
      pyspark_config: dataprocJobPysparkConfigToTerraform(this._pysparkConfig.internalValue),
      reference: dataprocJobReferenceToTerraform(this._reference.internalValue),
      scheduling: dataprocJobSchedulingToTerraform(this._scheduling.internalValue),
      spark_config: dataprocJobSparkConfigToTerraform(this._sparkConfig.internalValue),
      sparksql_config: dataprocJobSparksqlConfigToTerraform(this._sparksqlConfig.internalValue),
      timeouts: dataprocJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
