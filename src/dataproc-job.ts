// https://www.terraform.io/docs/providers/google/r/dataproc_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * By default, you can only delete inactive jobs within Dataproc. Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#force_delete DataprocJob#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Optional. The labels to associate with this job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#labels DataprocJob#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The project in which the cluster can be found and jobs subsequently run against. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#project DataprocJob#project}
  */
  readonly project?: string;
  /**
  * The Cloud Dataproc region. This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#region DataprocJob#region}
  */
  readonly region?: string;
  /**
  * hadoop_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#hadoop_config DataprocJob#hadoop_config}
  */
  readonly hadoopConfig?: DataprocJobHadoopConfig;
  /**
  * hive_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#hive_config DataprocJob#hive_config}
  */
  readonly hiveConfig?: DataprocJobHiveConfig;
  /**
  * pig_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#pig_config DataprocJob#pig_config}
  */
  readonly pigConfig?: DataprocJobPigConfig;
  /**
  * placement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#placement DataprocJob#placement}
  */
  readonly placement: DataprocJobPlacement;
  /**
  * pyspark_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#pyspark_config DataprocJob#pyspark_config}
  */
  readonly pysparkConfig?: DataprocJobPysparkConfig;
  /**
  * reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#reference DataprocJob#reference}
  */
  readonly reference?: DataprocJobReference;
  /**
  * scheduling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#scheduling DataprocJob#scheduling}
  */
  readonly scheduling?: DataprocJobScheduling;
  /**
  * spark_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#spark_config DataprocJob#spark_config}
  */
  readonly sparkConfig?: DataprocJobSparkConfig;
  /**
  * sparksql_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#sparksql_config DataprocJob#sparksql_config}
  */
  readonly sparksqlConfig?: DataprocJobSparksqlConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#timeouts DataprocJob#timeouts}
  */
  readonly timeouts?: DataprocJobTimeouts;
}
export class DataprocJobStatus extends cdktf.ComplexComputedList {

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
export interface DataprocJobHadoopConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocJobHadoopConfigLoggingConfigToTerraform(struct?: DataprocJobHadoopConfigLoggingConfigOutputReference | DataprocJobHadoopConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobHadoopConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
  }
}
export interface DataprocJobHadoopConfig {
  /**
  * HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#archive_uris DataprocJob#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * The arguments to pass to the driver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#args DataprocJob#args}
  */
  readonly args?: string[];
  /**
  * HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#file_uris DataprocJob#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The class containing the main method of the driver. Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#main_class DataprocJob#main_class}
  */
  readonly mainClass?: string;
  /**
  * The HCFS URI of jar file containing the driver jar. Conflicts with main_class
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#main_jar_file_uri DataprocJob#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
  /**
  * A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobHadoopConfigLoggingConfig;
}

function dataprocJobHadoopConfigToTerraform(struct?: DataprocJobHadoopConfigOutputReference | DataprocJobHadoopConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: dataprocJobHadoopConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobHadoopConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[] | undefined; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[] | undefined) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[] | undefined; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[] | undefined) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[] | undefined; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[] | undefined) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[] | undefined; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[] | undefined) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris
  }

  // main_class - computed: false, optional: true, required: false
  private _mainClass?: string | undefined; 
  public get mainClass() {
    return this.getStringAttribute('main_class');
  }
  public set mainClass(value: string | undefined) {
    this._mainClass = value;
  }
  public resetMainClass() {
    this._mainClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassInput() {
    return this._mainClass
  }

  // main_jar_file_uri - computed: false, optional: true, required: false
  private _mainJarFileUri?: string | undefined; 
  public get mainJarFileUri() {
    return this.getStringAttribute('main_jar_file_uri');
  }
  public set mainJarFileUri(value: string | undefined) {
    this._mainJarFileUri = value;
  }
  public resetMainJarFileUri() {
    this._mainJarFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainJarFileUriInput() {
    return this._mainJarFileUri
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig?: DataprocJobHadoopConfigLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocJobHadoopConfigLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocJobHadoopConfigLoggingConfig | undefined) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }
}
export interface DataprocJobHiveConfig {
  /**
  * Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#continue_on_failure DataprocJob#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#query_file_uri DataprocJob#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#query_list DataprocJob#query_list}
  */
  readonly queryList?: string[];
  /**
  * Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#script_variables DataprocJob#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocJobHiveConfigToTerraform(struct?: DataprocJobHiveConfigOutputReference | DataprocJobHiveConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryList),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
  }
}

export class DataprocJobHiveConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // continue_on_failure - computed: false, optional: true, required: false
  private _continueOnFailure?: boolean | cdktf.IResolvable | undefined; 
  public get continueOnFailure() {
    return this.getBooleanAttribute('continue_on_failure') as any;
  }
  public set continueOnFailure(value: boolean | cdktf.IResolvable | undefined) {
    this._continueOnFailure = value;
  }
  public resetContinueOnFailure() {
    this._continueOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnFailureInput() {
    return this._continueOnFailure
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[] | undefined; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[] | undefined) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
  }

  // query_file_uri - computed: false, optional: true, required: false
  private _queryFileUri?: string | undefined; 
  public get queryFileUri() {
    return this.getStringAttribute('query_file_uri');
  }
  public set queryFileUri(value: string | undefined) {
    this._queryFileUri = value;
  }
  public resetQueryFileUri() {
    this._queryFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFileUriInput() {
    return this._queryFileUri
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList?: string[] | undefined; 
  public get queryList() {
    return this.getListAttribute('query_list');
  }
  public set queryList(value: string[] | undefined) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList
  }

  // script_variables - computed: false, optional: true, required: false
  private _scriptVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get scriptVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('script_variables') as any;
  }
  public set scriptVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._scriptVariables = value;
  }
  public resetScriptVariables() {
    this._scriptVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptVariablesInput() {
    return this._scriptVariables
  }
}
export interface DataprocJobPigConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocJobPigConfigLoggingConfigToTerraform(struct?: DataprocJobPigConfigLoggingConfigOutputReference | DataprocJobPigConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobPigConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
  }
}
export interface DataprocJobPigConfig {
  /**
  * Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#continue_on_failure DataprocJob#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#query_file_uri DataprocJob#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#query_list DataprocJob#query_list}
  */
  readonly queryList?: string[];
  /**
  * Mapping of query variable names to values (equivalent to the Pig command: name=[value]).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#script_variables DataprocJob#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobPigConfigLoggingConfig;
}

function dataprocJobPigConfigToTerraform(struct?: DataprocJobPigConfigOutputReference | DataprocJobPigConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryList),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    logging_config: dataprocJobPigConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobPigConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // continue_on_failure - computed: false, optional: true, required: false
  private _continueOnFailure?: boolean | cdktf.IResolvable | undefined; 
  public get continueOnFailure() {
    return this.getBooleanAttribute('continue_on_failure') as any;
  }
  public set continueOnFailure(value: boolean | cdktf.IResolvable | undefined) {
    this._continueOnFailure = value;
  }
  public resetContinueOnFailure() {
    this._continueOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnFailureInput() {
    return this._continueOnFailure
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[] | undefined; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[] | undefined) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
  }

  // query_file_uri - computed: false, optional: true, required: false
  private _queryFileUri?: string | undefined; 
  public get queryFileUri() {
    return this.getStringAttribute('query_file_uri');
  }
  public set queryFileUri(value: string | undefined) {
    this._queryFileUri = value;
  }
  public resetQueryFileUri() {
    this._queryFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFileUriInput() {
    return this._queryFileUri
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList?: string[] | undefined; 
  public get queryList() {
    return this.getListAttribute('query_list');
  }
  public set queryList(value: string[] | undefined) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList
  }

  // script_variables - computed: false, optional: true, required: false
  private _scriptVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get scriptVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('script_variables') as any;
  }
  public set scriptVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._scriptVariables = value;
  }
  public resetScriptVariables() {
    this._scriptVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptVariablesInput() {
    return this._scriptVariables
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig?: DataprocJobPigConfigLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocJobPigConfigLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocJobPigConfigLoggingConfig | undefined) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }
}
export interface DataprocJobPlacement {
  /**
  * The name of the cluster where the job will be submitted
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#cluster_name DataprocJob#cluster_name}
  */
  readonly clusterName: string;
}

function dataprocJobPlacementToTerraform(struct?: DataprocJobPlacementOutputReference | DataprocJobPlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
  }
}

export class DataprocJobPlacementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._clusterName
  }
}
export interface DataprocJobPysparkConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocJobPysparkConfigLoggingConfigToTerraform(struct?: DataprocJobPysparkConfigLoggingConfigOutputReference | DataprocJobPysparkConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobPysparkConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
  }
}
export interface DataprocJobPysparkConfig {
  /**
  * Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#archive_uris DataprocJob#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#args DataprocJob#args}
  */
  readonly args?: string[];
  /**
  * Optional. HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#file_uris DataprocJob#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#main_python_file_uri DataprocJob#main_python_file_uri}
  */
  readonly mainPythonFileUri: string;
  /**
  * Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#python_file_uris DataprocJob#python_file_uris}
  */
  readonly pythonFileUris?: string[];
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobPysparkConfigLoggingConfig;
}

function dataprocJobPysparkConfigToTerraform(struct?: DataprocJobPysparkConfigOutputReference | DataprocJobPysparkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_python_file_uri: cdktf.stringToTerraform(struct!.mainPythonFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    python_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.pythonFileUris),
    logging_config: dataprocJobPysparkConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobPysparkConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[] | undefined; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[] | undefined) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[] | undefined; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[] | undefined) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[] | undefined; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[] | undefined) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[] | undefined; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[] | undefined) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris
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
    return this._mainPythonFileUri
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
  }

  // python_file_uris - computed: false, optional: true, required: false
  private _pythonFileUris?: string[] | undefined; 
  public get pythonFileUris() {
    return this.getListAttribute('python_file_uris');
  }
  public set pythonFileUris(value: string[] | undefined) {
    this._pythonFileUris = value;
  }
  public resetPythonFileUris() {
    this._pythonFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFileUrisInput() {
    return this._pythonFileUris
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig?: DataprocJobPysparkConfigLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocJobPysparkConfigLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocJobPysparkConfigLoggingConfig | undefined) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }
}
export interface DataprocJobReference {
  /**
  * The job ID, which must be unique within the project. The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#job_id DataprocJob#job_id}
  */
  readonly jobId?: string;
}

function dataprocJobReferenceToTerraform(struct?: DataprocJobReferenceOutputReference | DataprocJobReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_id: cdktf.stringToTerraform(struct!.jobId),
  }
}

export class DataprocJobReferenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // job_id - computed: true, optional: true, required: false
  private _jobId?: string | undefined; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string | undefined) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId
  }
}
export interface DataprocJobScheduling {
  /**
  * Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#max_failures_per_hour DataprocJob#max_failures_per_hour}
  */
  readonly maxFailuresPerHour: number;
  /**
  * Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#max_failures_total DataprocJob#max_failures_total}
  */
  readonly maxFailuresTotal: number;
}

function dataprocJobSchedulingToTerraform(struct?: DataprocJobSchedulingOutputReference | DataprocJobScheduling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_failures_per_hour: cdktf.numberToTerraform(struct!.maxFailuresPerHour),
    max_failures_total: cdktf.numberToTerraform(struct!.maxFailuresTotal),
  }
}

export class DataprocJobSchedulingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._maxFailuresPerHour
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
    return this._maxFailuresTotal
  }
}
export interface DataprocJobSparkConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocJobSparkConfigLoggingConfigToTerraform(struct?: DataprocJobSparkConfigLoggingConfigOutputReference | DataprocJobSparkConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobSparkConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
  }
}
export interface DataprocJobSparkConfig {
  /**
  * HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#archive_uris DataprocJob#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * The arguments to pass to the driver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#args DataprocJob#args}
  */
  readonly args?: string[];
  /**
  * HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#file_uris DataprocJob#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The class containing the main method of the driver. Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#main_class DataprocJob#main_class}
  */
  readonly mainClass?: string;
  /**
  * The HCFS URI of jar file containing the driver jar. Conflicts with main_class
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#main_jar_file_uri DataprocJob#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
  /**
  * A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobSparkConfigLoggingConfig;
}

function dataprocJobSparkConfigToTerraform(struct?: DataprocJobSparkConfigOutputReference | DataprocJobSparkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: dataprocJobSparkConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobSparkConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[] | undefined; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[] | undefined) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[] | undefined; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[] | undefined) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[] | undefined; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[] | undefined) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[] | undefined; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[] | undefined) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris
  }

  // main_class - computed: false, optional: true, required: false
  private _mainClass?: string | undefined; 
  public get mainClass() {
    return this.getStringAttribute('main_class');
  }
  public set mainClass(value: string | undefined) {
    this._mainClass = value;
  }
  public resetMainClass() {
    this._mainClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassInput() {
    return this._mainClass
  }

  // main_jar_file_uri - computed: false, optional: true, required: false
  private _mainJarFileUri?: string | undefined; 
  public get mainJarFileUri() {
    return this.getStringAttribute('main_jar_file_uri');
  }
  public set mainJarFileUri(value: string | undefined) {
    this._mainJarFileUri = value;
  }
  public resetMainJarFileUri() {
    this._mainJarFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainJarFileUriInput() {
    return this._mainJarFileUri
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig?: DataprocJobSparkConfigLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocJobSparkConfigLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocJobSparkConfigLoggingConfig | undefined) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }
}
export interface DataprocJobSparksqlConfigLoggingConfig {
  /**
  * Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#driver_log_levels DataprocJob#driver_log_levels}
  */
  readonly driverLogLevels: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocJobSparksqlConfigLoggingConfigToTerraform(struct?: DataprocJobSparksqlConfigLoggingConfigOutputReference | DataprocJobSparksqlConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocJobSparksqlConfigLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: false, required: true
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
  }
}
export interface DataprocJobSparksqlConfig {
  /**
  * HCFS URIs of jar files to be added to the Spark CLASSPATH.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#jar_file_uris DataprocJob#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#properties DataprocJob#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The HCFS URI of the script that contains SQL queries. Conflicts with query_list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#query_file_uri DataprocJob#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#query_list DataprocJob#query_list}
  */
  readonly queryList?: string[];
  /**
  * Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#script_variables DataprocJob#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#logging_config DataprocJob#logging_config}
  */
  readonly loggingConfig?: DataprocJobSparksqlConfigLoggingConfig;
}

function dataprocJobSparksqlConfigToTerraform(struct?: DataprocJobSparksqlConfigOutputReference | DataprocJobSparksqlConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryList),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    logging_config: dataprocJobSparksqlConfigLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocJobSparksqlConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[] | undefined; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[] | undefined) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
  }

  // query_file_uri - computed: false, optional: true, required: false
  private _queryFileUri?: string | undefined; 
  public get queryFileUri() {
    return this.getStringAttribute('query_file_uri');
  }
  public set queryFileUri(value: string | undefined) {
    this._queryFileUri = value;
  }
  public resetQueryFileUri() {
    this._queryFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFileUriInput() {
    return this._queryFileUri
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList?: string[] | undefined; 
  public get queryList() {
    return this.getListAttribute('query_list');
  }
  public set queryList(value: string[] | undefined) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList
  }

  // script_variables - computed: false, optional: true, required: false
  private _scriptVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get scriptVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('script_variables') as any;
  }
  public set scriptVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._scriptVariables = value;
  }
  public resetScriptVariables() {
    this._scriptVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptVariablesInput() {
    return this._scriptVariables
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig?: DataprocJobSparksqlConfigLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocJobSparksqlConfigLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocJobSparksqlConfigLoggingConfig | undefined) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }
}
export interface DataprocJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#create DataprocJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html#delete DataprocJob#delete}
  */
  readonly delete?: string;
}

function dataprocJobTimeoutsToTerraform(struct?: DataprocJobTimeoutsOutputReference | DataprocJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DataprocJobTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html google_dataproc_job}
*/
export class DataprocJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dataproc_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataproc_job.html google_dataproc_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_job',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._forceDelete = config.forceDelete;
    this._labels = config.labels;
    this._project = config.project;
    this._region = config.region;
    this._hadoopConfig = config.hadoopConfig;
    this._hiveConfig = config.hiveConfig;
    this._pigConfig = config.pigConfig;
    this._placement = config.placement;
    this._pysparkConfig = config.pysparkConfig;
    this._reference = config.reference;
    this._scheduling = config.scheduling;
    this._sparkConfig = config.sparkConfig;
    this._sparksqlConfig = config.sparksqlConfig;
    this._timeouts = config.timeouts;
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
  private _forceDelete?: boolean | cdktf.IResolvable | undefined; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete') as any;
  }
  public set forceDelete(value: boolean | cdktf.IResolvable | undefined) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // region - computed: false, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new DataprocJobStatus(this, 'status', index);
  }

  // hadoop_config - computed: false, optional: true, required: false
  private _hadoopConfig?: DataprocJobHadoopConfig | undefined; 
  private __hadoopConfigOutput = new DataprocJobHadoopConfigOutputReference(this as any, "hadoop_config", true);
  public get hadoopConfig() {
    return this.__hadoopConfigOutput;
  }
  public putHadoopConfig(value: DataprocJobHadoopConfig | undefined) {
    this._hadoopConfig = value;
  }
  public resetHadoopConfig() {
    this._hadoopConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hadoopConfigInput() {
    return this._hadoopConfig
  }

  // hive_config - computed: false, optional: true, required: false
  private _hiveConfig?: DataprocJobHiveConfig | undefined; 
  private __hiveConfigOutput = new DataprocJobHiveConfigOutputReference(this as any, "hive_config", true);
  public get hiveConfig() {
    return this.__hiveConfigOutput;
  }
  public putHiveConfig(value: DataprocJobHiveConfig | undefined) {
    this._hiveConfig = value;
  }
  public resetHiveConfig() {
    this._hiveConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveConfigInput() {
    return this._hiveConfig
  }

  // pig_config - computed: false, optional: true, required: false
  private _pigConfig?: DataprocJobPigConfig | undefined; 
  private __pigConfigOutput = new DataprocJobPigConfigOutputReference(this as any, "pig_config", true);
  public get pigConfig() {
    return this.__pigConfigOutput;
  }
  public putPigConfig(value: DataprocJobPigConfig | undefined) {
    this._pigConfig = value;
  }
  public resetPigConfig() {
    this._pigConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pigConfigInput() {
    return this._pigConfig
  }

  // placement - computed: false, optional: false, required: true
  private _placement?: DataprocJobPlacement; 
  private __placementOutput = new DataprocJobPlacementOutputReference(this as any, "placement", true);
  public get placement() {
    return this.__placementOutput;
  }
  public putPlacement(value: DataprocJobPlacement) {
    this._placement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement
  }

  // pyspark_config - computed: false, optional: true, required: false
  private _pysparkConfig?: DataprocJobPysparkConfig | undefined; 
  private __pysparkConfigOutput = new DataprocJobPysparkConfigOutputReference(this as any, "pyspark_config", true);
  public get pysparkConfig() {
    return this.__pysparkConfigOutput;
  }
  public putPysparkConfig(value: DataprocJobPysparkConfig | undefined) {
    this._pysparkConfig = value;
  }
  public resetPysparkConfig() {
    this._pysparkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pysparkConfigInput() {
    return this._pysparkConfig
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: DataprocJobReference | undefined; 
  private __referenceOutput = new DataprocJobReferenceOutputReference(this as any, "reference", true);
  public get reference() {
    return this.__referenceOutput;
  }
  public putReference(value: DataprocJobReference | undefined) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling?: DataprocJobScheduling | undefined; 
  private __schedulingOutput = new DataprocJobSchedulingOutputReference(this as any, "scheduling", true);
  public get scheduling() {
    return this.__schedulingOutput;
  }
  public putScheduling(value: DataprocJobScheduling | undefined) {
    this._scheduling = value;
  }
  public resetScheduling() {
    this._scheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling
  }

  // spark_config - computed: false, optional: true, required: false
  private _sparkConfig?: DataprocJobSparkConfig | undefined; 
  private __sparkConfigOutput = new DataprocJobSparkConfigOutputReference(this as any, "spark_config", true);
  public get sparkConfig() {
    return this.__sparkConfigOutput;
  }
  public putSparkConfig(value: DataprocJobSparkConfig | undefined) {
    this._sparkConfig = value;
  }
  public resetSparkConfig() {
    this._sparkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfigInput() {
    return this._sparkConfig
  }

  // sparksql_config - computed: false, optional: true, required: false
  private _sparksqlConfig?: DataprocJobSparksqlConfig | undefined; 
  private __sparksqlConfigOutput = new DataprocJobSparksqlConfigOutputReference(this as any, "sparksql_config", true);
  public get sparksqlConfig() {
    return this.__sparksqlConfigOutput;
  }
  public putSparksqlConfig(value: DataprocJobSparksqlConfig | undefined) {
    this._sparksqlConfig = value;
  }
  public resetSparksqlConfig() {
    this._sparksqlConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparksqlConfigInput() {
    return this._sparksqlConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataprocJobTimeouts | undefined; 
  private __timeoutsOutput = new DataprocJobTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataprocJobTimeouts | undefined) {
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
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      hadoop_config: dataprocJobHadoopConfigToTerraform(this._hadoopConfig),
      hive_config: dataprocJobHiveConfigToTerraform(this._hiveConfig),
      pig_config: dataprocJobPigConfigToTerraform(this._pigConfig),
      placement: dataprocJobPlacementToTerraform(this._placement),
      pyspark_config: dataprocJobPysparkConfigToTerraform(this._pysparkConfig),
      reference: dataprocJobReferenceToTerraform(this._reference),
      scheduling: dataprocJobSchedulingToTerraform(this._scheduling),
      spark_config: dataprocJobSparkConfigToTerraform(this._sparkConfig),
      sparksql_config: dataprocJobSparksqlConfigToTerraform(this._sparksqlConfig),
      timeouts: dataprocJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
