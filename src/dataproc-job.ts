// https://www.terraform.io/docs/providers/google/r/dataproc_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataprocJobConfig extends TerraformMetaArguments {
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
export class DataprocJobStatus extends ComplexComputedList {

  // details - computed: true, optional: false, required: true
  public get details() {
    return this.getStringAttribute('details');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_start_time - computed: true, optional: false, required: true
  public get stateStartTime() {
    return this.getStringAttribute('state_start_time');
  }

  // substate - computed: true, optional: false, required: true
  public get substate() {
    return this.getStringAttribute('substate');
  }
}
export interface DataprocJobHadoopConfigLoggingConfig {
  /** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'. */
  readonly driverLogLevels: { [key: string]: string };
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
export interface DataprocJobPigConfigLoggingConfig {
  /** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'. */
  readonly driverLogLevels: { [key: string]: string };
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
export interface DataprocJobPlacement {
  /** The name of the cluster where the job will be submitted */
  readonly clusterName: string;
}
export interface DataprocJobPysparkConfigLoggingConfig {
  /** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'. */
  readonly driverLogLevels: { [key: string]: string };
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
export interface DataprocJobReference {
  /** The job ID, which must be unique within the project. The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs */
  readonly jobId?: string;
}
export interface DataprocJobScheduling {
  /** Maximum number of times per hour a driver may be restarted as a result of driver terminating with non-zero code before job is reported failed. */
  readonly maxFailuresPerHour: number;
}
export interface DataprocJobSparkConfigLoggingConfig {
  /** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'. */
  readonly driverLogLevels: { [key: string]: string };
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
export interface DataprocJobSparksqlConfigLoggingConfig {
  /** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'. */
  readonly driverLogLevels: { [key: string]: string };
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
export interface DataprocJobTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class DataprocJob extends TerraformResource {

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

  // driver_controls_files_uri - computed: true, optional: false, required: true
  public get driverControlsFilesUri() {
    return this.getStringAttribute('driver_controls_files_uri');
  }

  // driver_output_resource_uri - computed: true, optional: false, required: true
  public get driverOutputResourceUri() {
    return this.getStringAttribute('driver_output_resource_uri');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean;
  public get forceDelete() {
    return this._forceDelete;
  }
  public set forceDelete(value: boolean | undefined) {
    this._forceDelete = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // status - computed: true, optional: false, required: true
  public status(index: string) {
    return new DataprocJobStatus(this, 'status', index);
  }

  // hadoop_config - computed: false, optional: true, required: false
  private _hadoopConfig?: DataprocJobHadoopConfig[];
  public get hadoopConfig() {
    return this._hadoopConfig;
  }
  public set hadoopConfig(value: DataprocJobHadoopConfig[] | undefined) {
    this._hadoopConfig = value;
  }

  // hive_config - computed: false, optional: true, required: false
  private _hiveConfig?: DataprocJobHiveConfig[];
  public get hiveConfig() {
    return this._hiveConfig;
  }
  public set hiveConfig(value: DataprocJobHiveConfig[] | undefined) {
    this._hiveConfig = value;
  }

  // pig_config - computed: false, optional: true, required: false
  private _pigConfig?: DataprocJobPigConfig[];
  public get pigConfig() {
    return this._pigConfig;
  }
  public set pigConfig(value: DataprocJobPigConfig[] | undefined) {
    this._pigConfig = value;
  }

  // placement - computed: false, optional: false, required: true
  private _placement: DataprocJobPlacement[];
  public get placement() {
    return this._placement;
  }
  public set placement(value: DataprocJobPlacement[]) {
    this._placement = value;
  }

  // pyspark_config - computed: false, optional: true, required: false
  private _pysparkConfig?: DataprocJobPysparkConfig[];
  public get pysparkConfig() {
    return this._pysparkConfig;
  }
  public set pysparkConfig(value: DataprocJobPysparkConfig[] | undefined) {
    this._pysparkConfig = value;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: DataprocJobReference[];
  public get reference() {
    return this._reference;
  }
  public set reference(value: DataprocJobReference[] | undefined) {
    this._reference = value;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling?: DataprocJobScheduling[];
  public get scheduling() {
    return this._scheduling;
  }
  public set scheduling(value: DataprocJobScheduling[] | undefined) {
    this._scheduling = value;
  }

  // spark_config - computed: false, optional: true, required: false
  private _sparkConfig?: DataprocJobSparkConfig[];
  public get sparkConfig() {
    return this._sparkConfig;
  }
  public set sparkConfig(value: DataprocJobSparkConfig[] | undefined) {
    this._sparkConfig = value;
  }

  // sparksql_config - computed: false, optional: true, required: false
  private _sparksqlConfig?: DataprocJobSparksqlConfig[];
  public get sparksqlConfig() {
    return this._sparksqlConfig;
  }
  public set sparksqlConfig(value: DataprocJobSparksqlConfig[] | undefined) {
    this._sparksqlConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataprocJobTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataprocJobTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      force_delete: this._forceDelete,
      labels: this._labels,
      project: this._project,
      region: this._region,
      hadoop_config: this._hadoopConfig,
      hive_config: this._hiveConfig,
      pig_config: this._pigConfig,
      placement: this._placement,
      pyspark_config: this._pysparkConfig,
      reference: this._reference,
      scheduling: this._scheduling,
      spark_config: this._sparkConfig,
      sparksql_config: this._sparksqlConfig,
      timeouts: this._timeouts,
    };
  }
}
