// https://www.terraform.io/docs/providers/google/r/dataproc_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocJobConfig extends cdktf.TerraformMetaArguments {
  /** By default, you can only delete inactive jobs within Dataproc. Setting this to true, and calling destroy, will ensure that the job is first cancelled before issuing the delete. */
  readonly forceDelete?: boolean;
  /** Optional. The labels to associate with this job. */
  readonly labels?: { [key: string]: string };
  /** The project in which the cluster can be found and jobs subsequently run against. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The Cloud Dataproc region. This essentially determines which clusters are available for this job to be submitted to. If not specified, defaults to global. */
  readonly region?: string;
  /** hadoop_config block */
  readonly hadoopConfig?: DataprocJobHadoopConfig[];
  /** hive_config block */
  readonly hiveConfig?: DataprocJobHiveConfig[];
  /** pig_config block */
  readonly pigConfig?: DataprocJobPigConfig[];
  /** placement block */
  readonly placement: DataprocJobPlacement[];
  /** pyspark_config block */
  readonly pysparkConfig?: DataprocJobPysparkConfig[];
  /** reference block */
  readonly reference?: DataprocJobReference[];
  /** scheduling block */
  readonly scheduling?: DataprocJobScheduling[];
  /** spark_config block */
  readonly sparkConfig?: DataprocJobSparkConfig[];
  /** sparksql_config block */
  readonly sparksqlConfig?: DataprocJobSparksqlConfig[];
  /** timeouts block */
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
  /** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'. */
  readonly driverLogLevels: { [key: string]: string };
}

function dataprocJobHadoopConfigLoggingConfigToTerraform(struct?: DataprocJobHadoopConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocJobHadoopConfig {
  /** HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. */
  readonly archiveUris?: string[];
  /** The arguments to pass to the driver. */
  readonly args?: string[];
  /** HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks. */
  readonly fileUris?: string[];
  /** HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. */
  readonly jarFileUris?: string[];
  /** The class containing the main method of the driver. Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri */
  readonly mainClass?: string;
  /** The HCFS URI of jar file containing the driver jar. Conflicts with main_class */
  readonly mainJarFileUri?: string;
  /** A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
  readonly properties?: { [key: string]: string };
  /** logging_config block */
  readonly loggingConfig?: DataprocJobHadoopConfigLoggingConfig[];
}

function dataprocJobHadoopConfigToTerraform(struct?: DataprocJobHadoopConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: cdktf.listMapper(dataprocJobHadoopConfigLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocJobHiveConfig {
  /** Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false. */
  readonly continueOnFailure?: boolean;
  /** HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs. */
  readonly jarFileUris?: string[];
  /** A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code. */
  readonly properties?: { [key: string]: string };
  /** HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list */
  readonly queryFileUri?: string;
  /** The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri */
  readonly queryList?: string[];
  /** Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). */
  readonly scriptVariables?: { [key: string]: string };
}

function dataprocJobHiveConfigToTerraform(struct?: DataprocJobHiveConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryList),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
  }
}

export interface DataprocJobPigConfigLoggingConfig {
  /** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'. */
  readonly driverLogLevels: { [key: string]: string };
}

function dataprocJobPigConfigLoggingConfigToTerraform(struct?: DataprocJobPigConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocJobPigConfig {
  /** Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false. */
  readonly continueOnFailure?: boolean;
  /** HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs. */
  readonly jarFileUris?: string[];
  /** A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code. */
  readonly properties?: { [key: string]: string };
  /** HCFS URI of file containing Hive script to execute as the job. Conflicts with query_list */
  readonly queryFileUri?: string;
  /** The list of Hive queries or statements to execute as part of the job. Conflicts with query_file_uri */
  readonly queryList?: string[];
  /** Mapping of query variable names to values (equivalent to the Pig command: name=[value]). */
  readonly scriptVariables?: { [key: string]: string };
  /** logging_config block */
  readonly loggingConfig?: DataprocJobPigConfigLoggingConfig[];
}

function dataprocJobPigConfigToTerraform(struct?: DataprocJobPigConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryList),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    logging_config: cdktf.listMapper(dataprocJobPigConfigLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocJobPlacement {
  /** The name of the cluster where the job will be submitted */
  readonly clusterName: string;
}

function dataprocJobPlacementToTerraform(struct?: DataprocJobPlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
  }
}

export interface DataprocJobPysparkConfigLoggingConfig {
  /** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'. */
  readonly driverLogLevels: { [key: string]: string };
}

function dataprocJobPysparkConfigLoggingConfigToTerraform(struct?: DataprocJobPysparkConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocJobPysparkConfig {
  /** Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip */
  readonly archiveUris?: string[];
  /** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission */
  readonly args?: string[];
  /** Optional. HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks */
  readonly fileUris?: string[];
  /** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks */
  readonly jarFileUris?: string[];
  /** Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file */
  readonly mainPythonFileUri: string;
  /** Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code */
  readonly properties?: { [key: string]: string };
  /** Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip */
  readonly pythonFileUris?: string[];
  /** logging_config block */
  readonly loggingConfig?: DataprocJobPysparkConfigLoggingConfig[];
}

function dataprocJobPysparkConfigToTerraform(struct?: DataprocJobPysparkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_python_file_uri: cdktf.stringToTerraform(struct!.mainPythonFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    python_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.pythonFileUris),
    logging_config: cdktf.listMapper(dataprocJobPysparkConfigLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocJobReference {
  /** The job ID, which must be unique within the project. The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs */
  readonly jobId?: string;
}

function dataprocJobReferenceToTerraform(struct?: DataprocJobReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    job_id: cdktf.stringToTerraform(struct!.jobId),
  }
}

export interface DataprocJobScheduling {
  /** Maximum number of times per hour a driver may be restarted as a result of driver terminating with non-zero code before job is reported failed. */
  readonly maxFailuresPerHour: number;
}

function dataprocJobSchedulingToTerraform(struct?: DataprocJobScheduling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_failures_per_hour: cdktf.numberToTerraform(struct!.maxFailuresPerHour),
  }
}

export interface DataprocJobSparkConfigLoggingConfig {
  /** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'. */
  readonly driverLogLevels: { [key: string]: string };
}

function dataprocJobSparkConfigLoggingConfigToTerraform(struct?: DataprocJobSparkConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocJobSparkConfig {
  /** HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. */
  readonly archiveUris?: string[];
  /** The arguments to pass to the driver. */
  readonly args?: string[];
  /** HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks. */
  readonly fileUris?: string[];
  /** HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. */
  readonly jarFileUris?: string[];
  /** The class containing the main method of the driver. Must be in a provided jar or jar that is already on the classpath. Conflicts with main_jar_file_uri */
  readonly mainClass?: string;
  /** The HCFS URI of jar file containing the driver jar. Conflicts with main_class */
  readonly mainJarFileUri?: string;
  /** A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
  readonly properties?: { [key: string]: string };
  /** logging_config block */
  readonly loggingConfig?: DataprocJobSparkConfigLoggingConfig[];
}

function dataprocJobSparkConfigToTerraform(struct?: DataprocJobSparkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: cdktf.listMapper(dataprocJobSparkConfigLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocJobSparksqlConfigLoggingConfig {
  /** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'. */
  readonly driverLogLevels: { [key: string]: string };
}

function dataprocJobSparksqlConfigLoggingConfigToTerraform(struct?: DataprocJobSparksqlConfigLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocJobSparksqlConfig {
  /** HCFS URIs of jar files to be added to the Spark CLASSPATH. */
  readonly jarFileUris?: string[];
  /** A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. */
  readonly properties?: { [key: string]: string };
  /** The HCFS URI of the script that contains SQL queries. Conflicts with query_list */
  readonly queryFileUri?: string;
  /** The list of SQL queries or statements to execute as part of the job. Conflicts with query_file_uri */
  readonly queryList?: string[];
  /** Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). */
  readonly scriptVariables?: { [key: string]: string };
  /** logging_config block */
  readonly loggingConfig?: DataprocJobSparksqlConfigLoggingConfig[];
}

function dataprocJobSparksqlConfigToTerraform(struct?: DataprocJobSparksqlConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    query_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryList),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    logging_config: cdktf.listMapper(dataprocJobSparksqlConfigLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocJobTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function dataprocJobTimeoutsToTerraform(struct?: DataprocJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class DataprocJob extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _forceDelete?: boolean;
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean ) {
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
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
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

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string ) {
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
  private _hadoopConfig?: DataprocJobHadoopConfig[];
  public get hadoopConfig() {
    return this.interpolationForAttribute('hadoop_config') as any;
  }
  public set hadoopConfig(value: DataprocJobHadoopConfig[] ) {
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
  private _hiveConfig?: DataprocJobHiveConfig[];
  public get hiveConfig() {
    return this.interpolationForAttribute('hive_config') as any;
  }
  public set hiveConfig(value: DataprocJobHiveConfig[] ) {
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
  private _pigConfig?: DataprocJobPigConfig[];
  public get pigConfig() {
    return this.interpolationForAttribute('pig_config') as any;
  }
  public set pigConfig(value: DataprocJobPigConfig[] ) {
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
  private _placement: DataprocJobPlacement[];
  public get placement() {
    return this.interpolationForAttribute('placement') as any;
  }
  public set placement(value: DataprocJobPlacement[]) {
    this._placement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement
  }

  // pyspark_config - computed: false, optional: true, required: false
  private _pysparkConfig?: DataprocJobPysparkConfig[];
  public get pysparkConfig() {
    return this.interpolationForAttribute('pyspark_config') as any;
  }
  public set pysparkConfig(value: DataprocJobPysparkConfig[] ) {
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
  private _reference?: DataprocJobReference[];
  public get reference() {
    return this.interpolationForAttribute('reference') as any;
  }
  public set reference(value: DataprocJobReference[] ) {
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
  private _scheduling?: DataprocJobScheduling[];
  public get scheduling() {
    return this.interpolationForAttribute('scheduling') as any;
  }
  public set scheduling(value: DataprocJobScheduling[] ) {
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
  private _sparkConfig?: DataprocJobSparkConfig[];
  public get sparkConfig() {
    return this.interpolationForAttribute('spark_config') as any;
  }
  public set sparkConfig(value: DataprocJobSparkConfig[] ) {
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
  private _sparksqlConfig?: DataprocJobSparksqlConfig[];
  public get sparksqlConfig() {
    return this.interpolationForAttribute('sparksql_config') as any;
  }
  public set sparksqlConfig(value: DataprocJobSparksqlConfig[] ) {
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
  private _timeouts?: DataprocJobTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataprocJobTimeouts ) {
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
      hadoop_config: cdktf.listMapper(dataprocJobHadoopConfigToTerraform)(this._hadoopConfig),
      hive_config: cdktf.listMapper(dataprocJobHiveConfigToTerraform)(this._hiveConfig),
      pig_config: cdktf.listMapper(dataprocJobPigConfigToTerraform)(this._pigConfig),
      placement: cdktf.listMapper(dataprocJobPlacementToTerraform)(this._placement),
      pyspark_config: cdktf.listMapper(dataprocJobPysparkConfigToTerraform)(this._pysparkConfig),
      reference: cdktf.listMapper(dataprocJobReferenceToTerraform)(this._reference),
      scheduling: cdktf.listMapper(dataprocJobSchedulingToTerraform)(this._scheduling),
      spark_config: cdktf.listMapper(dataprocJobSparkConfigToTerraform)(this._sparkConfig),
      sparksql_config: cdktf.listMapper(dataprocJobSparksqlConfigToTerraform)(this._sparksqlConfig),
      timeouts: dataprocJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
