// https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocWorkflowTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label **keys** must contain 1 to 63 characters, and must conform to (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#labels DataprocWorkflowTemplate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#location DataprocWorkflowTemplate#location}
  */
  readonly location: string;
  /**
  * Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. * For `projects.regions.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}` * For `projects.locations.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#name DataprocWorkflowTemplate#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#project DataprocWorkflowTemplate#project}
  */
  readonly project?: string;
  /**
  * Optional. Used to perform a consistent read-modify-write. This field should be left blank for a `CreateWorkflowTemplate` request. It is required for an `UpdateWorkflowTemplate` request, and must match the current server version. A typical update template flow would fetch the current template with a `GetWorkflowTemplate` request, which will return the current template with the `version` field filled in with the current server version. The user updates other fields in the template, then returns it as part of the `UpdateWorkflowTemplate` request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#version DataprocWorkflowTemplate#version}
  */
  readonly version?: number;
  /**
  * jobs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jobs DataprocWorkflowTemplate#jobs}
  */
  readonly jobs: DataprocWorkflowTemplateJobs[];
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#parameters DataprocWorkflowTemplate#parameters}
  */
  readonly parameters?: DataprocWorkflowTemplateParameters[];
  /**
  * placement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#placement DataprocWorkflowTemplate#placement}
  */
  readonly placement: DataprocWorkflowTemplatePlacement[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#timeouts DataprocWorkflowTemplate#timeouts}
  */
  readonly timeouts?: DataprocWorkflowTemplateTimeouts;
}
export interface DataprocWorkflowTemplateJobsHadoopJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplateJobsHadoopJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsHadoopJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsHadoopJob {
  /**
  * Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#archive_uris DataprocWorkflowTemplate#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Optional. The arguments to pass to the driver. Do not include arguments, such as `-libjars` or `-Dfoo=bar`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#args DataprocWorkflowTemplate#args}
  */
  readonly args?: string[];
  /**
  * Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#file_uris DataprocWorkflowTemplate#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in `jar_file_uris`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_class DataprocWorkflowTemplate#main_class}
  */
  readonly mainClass?: string;
  /**
  * The HCFS URI of the jar file containing the main class. Examples: 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar' 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_jar_file_uri DataprocWorkflowTemplate#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
  /**
  * Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#logging_config DataprocWorkflowTemplate#logging_config}
  */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsHadoopJobLoggingConfig[];
}

function dataprocWorkflowTemplateJobsHadoopJobToTerraform(struct?: DataprocWorkflowTemplateJobsHadoopJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsHadoopJobLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocWorkflowTemplateJobsHiveJobQueryList {
  /**
  * Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": } }
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#queries DataprocWorkflowTemplate#queries}
  */
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsHiveJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsHiveJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export interface DataprocWorkflowTemplateJobsHiveJob {
  /**
  * Optional. Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#continue_on_failure DataprocWorkflowTemplate#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The HCFS URI of the script that contains Hive queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_file_uri DataprocWorkflowTemplate#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * Optional. Mapping of query variable names to values (equivalent to the Hive command: `SET name="value";`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#script_variables DataprocWorkflowTemplate#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * query_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_list DataprocWorkflowTemplate#query_list}
  */
  readonly queryList?: DataprocWorkflowTemplateJobsHiveJobQueryList[];
}

function dataprocWorkflowTemplateJobsHiveJobToTerraform(struct?: DataprocWorkflowTemplateJobsHiveJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    query_list: cdktf.listMapper(dataprocWorkflowTemplateJobsHiveJobQueryListToTerraform)(struct!.queryList),
  }
}

export interface DataprocWorkflowTemplateJobsPigJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplateJobsPigJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsPigJobQueryList {
  /**
  * Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": } }
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#queries DataprocWorkflowTemplate#queries}
  */
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsPigJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export interface DataprocWorkflowTemplateJobsPigJob {
  /**
  * Optional. Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#continue_on_failure DataprocWorkflowTemplate#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The HCFS URI of the script that contains the Pig queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_file_uri DataprocWorkflowTemplate#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * Optional. Mapping of query variable names to values (equivalent to the Pig command: `name=`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#script_variables DataprocWorkflowTemplate#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#logging_config DataprocWorkflowTemplate#logging_config}
  */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsPigJobLoggingConfig[];
  /**
  * query_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_list DataprocWorkflowTemplate#query_list}
  */
  readonly queryList?: DataprocWorkflowTemplateJobsPigJobQueryList[];
}

function dataprocWorkflowTemplateJobsPigJobToTerraform(struct?: DataprocWorkflowTemplateJobsPigJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsPigJobLoggingConfigToTerraform)(struct!.loggingConfig),
    query_list: cdktf.listMapper(dataprocWorkflowTemplateJobsPigJobQueryListToTerraform)(struct!.queryList),
  }
}

export interface DataprocWorkflowTemplateJobsPrestoJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplateJobsPrestoJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsPrestoJobQueryList {
  /**
  * Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": } }
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#queries DataprocWorkflowTemplate#queries}
  */
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsPrestoJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export interface DataprocWorkflowTemplateJobsPrestoJob {
  /**
  * Optional. Presto client tags to attach to this query
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#client_tags DataprocWorkflowTemplate#client_tags}
  */
  readonly clientTags?: string[];
  /**
  * Optional. Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#continue_on_failure DataprocWorkflowTemplate#continue_on_failure}
  */
  readonly continueOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#output_format DataprocWorkflowTemplate#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Optional. A mapping of property names to values. Used to set Presto (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The HCFS URI of the script that contains SQL queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_file_uri DataprocWorkflowTemplate#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#logging_config DataprocWorkflowTemplate#logging_config}
  */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsPrestoJobLoggingConfig[];
  /**
  * query_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_list DataprocWorkflowTemplate#query_list}
  */
  readonly queryList?: DataprocWorkflowTemplateJobsPrestoJobQueryList[];
}

function dataprocWorkflowTemplateJobsPrestoJobToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.clientTags),
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsPrestoJobLoggingConfigToTerraform)(struct!.loggingConfig),
    query_list: cdktf.listMapper(dataprocWorkflowTemplateJobsPrestoJobQueryListToTerraform)(struct!.queryList),
  }
}

export interface DataprocWorkflowTemplateJobsPysparkJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplateJobsPysparkJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPysparkJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsPysparkJob {
  /**
  * Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#archive_uris DataprocWorkflowTemplate#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Optional. The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#args DataprocWorkflowTemplate#args}
  */
  readonly args?: string[];
  /**
  * Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#file_uris DataprocWorkflowTemplate#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_python_file_uri DataprocWorkflowTemplate#main_python_file_uri}
  */
  readonly mainPythonFileUri: string;
  /**
  * Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#python_file_uris DataprocWorkflowTemplate#python_file_uris}
  */
  readonly pythonFileUris?: string[];
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#logging_config DataprocWorkflowTemplate#logging_config}
  */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsPysparkJobLoggingConfig[];
}

function dataprocWorkflowTemplateJobsPysparkJobToTerraform(struct?: DataprocWorkflowTemplateJobsPysparkJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_python_file_uri: cdktf.stringToTerraform(struct!.mainPythonFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    python_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.pythonFileUris),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsPysparkJobLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocWorkflowTemplateJobsScheduling {
  /**
  * Optional. Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window. Maximum value is 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#max_failures_per_hour DataprocWorkflowTemplate#max_failures_per_hour}
  */
  readonly maxFailuresPerHour?: number;
  /**
  * Optional. Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. Maximum value is 240
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#max_failures_total DataprocWorkflowTemplate#max_failures_total}
  */
  readonly maxFailuresTotal?: number;
}

function dataprocWorkflowTemplateJobsSchedulingToTerraform(struct?: DataprocWorkflowTemplateJobsScheduling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_failures_per_hour: cdktf.numberToTerraform(struct!.maxFailuresPerHour),
    max_failures_total: cdktf.numberToTerraform(struct!.maxFailuresTotal),
  }
}

export interface DataprocWorkflowTemplateJobsSparkJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplateJobsSparkJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsSparkJob {
  /**
  * Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#archive_uris DataprocWorkflowTemplate#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Optional. The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#args DataprocWorkflowTemplate#args}
  */
  readonly args?: string[];
  /**
  * Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#file_uris DataprocWorkflowTemplate#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in `jar_file_uris`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_class DataprocWorkflowTemplate#main_class}
  */
  readonly mainClass?: string;
  /**
  * The HCFS URI of the jar file that contains the main class.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_jar_file_uri DataprocWorkflowTemplate#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
  /**
  * Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#logging_config DataprocWorkflowTemplate#logging_config}
  */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsSparkJobLoggingConfig[];
}

function dataprocWorkflowTemplateJobsSparkJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkJobLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocWorkflowTemplateJobsSparkRJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplateJobsSparkRJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkRJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsSparkRJob {
  /**
  * Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#archive_uris DataprocWorkflowTemplate#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Optional. The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#args DataprocWorkflowTemplate#args}
  */
  readonly args?: string[];
  /**
  * Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#file_uris DataprocWorkflowTemplate#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Required. The HCFS URI of the main R file to use as the driver. Must be a .R file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_r_file_uri DataprocWorkflowTemplate#main_r_file_uri}
  */
  readonly mainRFileUri: string;
  /**
  * Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#logging_config DataprocWorkflowTemplate#logging_config}
  */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsSparkRJobLoggingConfig[];
}

function dataprocWorkflowTemplateJobsSparkRJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkRJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    main_r_file_uri: cdktf.stringToTerraform(struct!.mainRFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkRJobLoggingConfigToTerraform)(struct!.loggingConfig),
  }
}

export interface DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsSparkSqlJobQueryList {
  /**
  * Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": } }
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#queries DataprocWorkflowTemplate#queries}
  */
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsSparkSqlJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export interface DataprocWorkflowTemplateJobsSparkSqlJob {
  /**
  * Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The HCFS URI of the script that contains SQL queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_file_uri DataprocWorkflowTemplate#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET `name="value";`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#script_variables DataprocWorkflowTemplate#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#logging_config DataprocWorkflowTemplate#logging_config}
  */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig[];
  /**
  * query_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_list DataprocWorkflowTemplate#query_list}
  */
  readonly queryList?: DataprocWorkflowTemplateJobsSparkSqlJobQueryList[];
}

function dataprocWorkflowTemplateJobsSparkSqlJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    logging_config: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigToTerraform)(struct!.loggingConfig),
    query_list: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkSqlJobQueryListToTerraform)(struct!.queryList),
  }
}

export interface DataprocWorkflowTemplateJobs {
  /**
  * Optional. The labels to associate with this job. Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: {0,63} No more than 32 labels can be associated with a given job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#labels DataprocWorkflowTemplate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#prerequisite_step_ids DataprocWorkflowTemplate#prerequisite_step_ids}
  */
  readonly prerequisiteStepIds?: string[];
  /**
  * Required. The step id. The id must be unique among all jobs within the template. The step id is used as prefix for job id, as job `goog-dataproc-workflow-step-id` label, and in field from other steps. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#step_id DataprocWorkflowTemplate#step_id}
  */
  readonly stepId: string;
  /**
  * hadoop_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#hadoop_job DataprocWorkflowTemplate#hadoop_job}
  */
  readonly hadoopJob?: DataprocWorkflowTemplateJobsHadoopJob[];
  /**
  * hive_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#hive_job DataprocWorkflowTemplate#hive_job}
  */
  readonly hiveJob?: DataprocWorkflowTemplateJobsHiveJob[];
  /**
  * pig_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#pig_job DataprocWorkflowTemplate#pig_job}
  */
  readonly pigJob?: DataprocWorkflowTemplateJobsPigJob[];
  /**
  * presto_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#presto_job DataprocWorkflowTemplate#presto_job}
  */
  readonly prestoJob?: DataprocWorkflowTemplateJobsPrestoJob[];
  /**
  * pyspark_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#pyspark_job DataprocWorkflowTemplate#pyspark_job}
  */
  readonly pysparkJob?: DataprocWorkflowTemplateJobsPysparkJob[];
  /**
  * scheduling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#scheduling DataprocWorkflowTemplate#scheduling}
  */
  readonly scheduling?: DataprocWorkflowTemplateJobsScheduling[];
  /**
  * spark_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#spark_job DataprocWorkflowTemplate#spark_job}
  */
  readonly sparkJob?: DataprocWorkflowTemplateJobsSparkJob[];
  /**
  * spark_r_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#spark_r_job DataprocWorkflowTemplate#spark_r_job}
  */
  readonly sparkRJob?: DataprocWorkflowTemplateJobsSparkRJob[];
  /**
  * spark_sql_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#spark_sql_job DataprocWorkflowTemplate#spark_sql_job}
  */
  readonly sparkSqlJob?: DataprocWorkflowTemplateJobsSparkSqlJob[];
}

function dataprocWorkflowTemplateJobsToTerraform(struct?: DataprocWorkflowTemplateJobs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    prerequisite_step_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prerequisiteStepIds),
    step_id: cdktf.stringToTerraform(struct!.stepId),
    hadoop_job: cdktf.listMapper(dataprocWorkflowTemplateJobsHadoopJobToTerraform)(struct!.hadoopJob),
    hive_job: cdktf.listMapper(dataprocWorkflowTemplateJobsHiveJobToTerraform)(struct!.hiveJob),
    pig_job: cdktf.listMapper(dataprocWorkflowTemplateJobsPigJobToTerraform)(struct!.pigJob),
    presto_job: cdktf.listMapper(dataprocWorkflowTemplateJobsPrestoJobToTerraform)(struct!.prestoJob),
    pyspark_job: cdktf.listMapper(dataprocWorkflowTemplateJobsPysparkJobToTerraform)(struct!.pysparkJob),
    scheduling: cdktf.listMapper(dataprocWorkflowTemplateJobsSchedulingToTerraform)(struct!.scheduling),
    spark_job: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkJobToTerraform)(struct!.sparkJob),
    spark_r_job: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkRJobToTerraform)(struct!.sparkRJob),
    spark_sql_job: cdktf.listMapper(dataprocWorkflowTemplateJobsSparkSqlJobToTerraform)(struct!.sparkSqlJob),
  }
}

export interface DataprocWorkflowTemplateParametersValidationRegex {
  /**
  * Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#regexes DataprocWorkflowTemplate#regexes}
  */
  readonly regexes: string[];
}

function dataprocWorkflowTemplateParametersValidationRegexToTerraform(struct?: DataprocWorkflowTemplateParametersValidationRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    regexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regexes),
  }
}

export interface DataprocWorkflowTemplateParametersValidationValues {
  /**
  * Required. List of allowed values for the parameter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#values DataprocWorkflowTemplate#values}
  */
  readonly values: string[];
}

function dataprocWorkflowTemplateParametersValidationValuesToTerraform(struct?: DataprocWorkflowTemplateParametersValidationValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataprocWorkflowTemplateParametersValidation {
  /**
  * regex block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#regex DataprocWorkflowTemplate#regex}
  */
  readonly regex?: DataprocWorkflowTemplateParametersValidationRegex[];
  /**
  * values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#values DataprocWorkflowTemplate#values}
  */
  readonly values?: DataprocWorkflowTemplateParametersValidationValues[];
}

function dataprocWorkflowTemplateParametersValidationToTerraform(struct?: DataprocWorkflowTemplateParametersValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    regex: cdktf.listMapper(dataprocWorkflowTemplateParametersValidationRegexToTerraform)(struct!.regex),
    values: cdktf.listMapper(dataprocWorkflowTemplateParametersValidationValuesToTerraform)(struct!.values),
  }
}

export interface DataprocWorkflowTemplateParameters {
  /**
  * Optional. Brief description of the parameter. Must not exceed 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#description DataprocWorkflowTemplate#description}
  */
  readonly description?: string;
  /**
  * Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths. A field path is similar in syntax to a .sparkJob.args
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#fields DataprocWorkflowTemplate#fields}
  */
  readonly fields: string[];
  /**
  * Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#name DataprocWorkflowTemplate#name}
  */
  readonly name: string;
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#validation DataprocWorkflowTemplate#validation}
  */
  readonly validation?: DataprocWorkflowTemplateParametersValidation[];
}

function dataprocWorkflowTemplateParametersToTerraform(struct?: DataprocWorkflowTemplateParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fields),
    name: cdktf.stringToTerraform(struct!.name),
    validation: cdktf.listMapper(dataprocWorkflowTemplateParametersValidationToTerraform)(struct!.validation),
  }
}

export interface DataprocWorkflowTemplatePlacementClusterSelector {
  /**
  * Required. The cluster labels. Cluster must have all labels to match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cluster_labels DataprocWorkflowTemplate#cluster_labels}
  */
  readonly clusterLabels: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster. If unspecified, the zone of the first cluster matching the selector is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#zone DataprocWorkflowTemplate#zone}
  */
  readonly zone?: string;
}

function dataprocWorkflowTemplatePlacementClusterSelectorToTerraform(struct?: DataprocWorkflowTemplatePlacementClusterSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.clusterLabels),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig {
  /**
  * Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/` Note that the policy must be in the same project and Dataproc region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#policy DataprocWorkflowTemplate#policy}
  */
  readonly policy?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig {
  /**
  * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#gce_pd_kms_key_name DataprocWorkflowTemplate#gce_pd_kms_key_name}
  */
  readonly gcePdKmsKeyName?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gce_pd_kms_key_name: cdktf.stringToTerraform(struct!.gcePdKmsKeyName),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig {
  /**
  * Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#enable_http_port_access DataprocWorkflowTemplate#enable_http_port_access}
  */
  readonly enableHttpPortAccess?: boolean | cdktf.IResolvable;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_http_port_access: cdktf.booleanToTerraform(struct!.enableHttpPortAccess),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity {
  /**
  * Required. The URI of a sole-tenant /zones/us-central1-a/nodeGroups/node-group-1` * `node-group-1`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#node_group DataprocWorkflowTemplate#node_group}
  */
  readonly nodeGroup: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity {
  /**
  * Optional. Type of reservation to consume Possible values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#consume_reservation_type DataprocWorkflowTemplate#consume_reservation_type}
  */
  readonly consumeReservationType?: string;
  /**
  * Optional. Corresponds to the label key of reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#key DataprocWorkflowTemplate#key}
  */
  readonly key?: string;
  /**
  * Optional. Corresponds to the label values of reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#values DataprocWorkflowTemplate#values}
  */
  readonly values?: string[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig {
  /**
  * Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#internal_ip_only DataprocWorkflowTemplate#internal_ip_only}
  */
  readonly internalIpOnly?: boolean | cdktf.IResolvable;
  /**
  * The Compute Engine metadata entries to add to all instances (see (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#metadata DataprocWorkflowTemplate#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see /regions/global/default` * `default`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#network DataprocWorkflowTemplate#network}
  */
  readonly network?: string;
  /**
  * Optional. The type of IPv6 access for a cluster. Possible values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, INHERIT_FROM_SUBNETWORK, OUTBOUND, BIDIRECTIONAL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#private_ipv6_google_access DataprocWorkflowTemplate#private_ipv6_google_access}
  */
  readonly privateIpv6GoogleAccess?: string;
  /**
  * Optional. The (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#service_account DataprocWorkflowTemplate#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: * https://www.googleapis.com/auth/cloud.useraccounts.readonly * https://www.googleapis.com/auth/devstorage.read_write * https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: * https://www.googleapis.com/auth/bigquery * https://www.googleapis.com/auth/bigtable.admin.table * https://www.googleapis.com/auth/bigtable.data * https://www.googleapis.com/auth/devstorage.full_control
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#service_account_scopes DataprocWorkflowTemplate#service_account_scopes}
  */
  readonly serviceAccountScopes?: string[];
  /**
  * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects//regions/us-east1/subnetworks/sub0` * `sub0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#subnetwork DataprocWorkflowTemplate#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The Compute Engine tags to add to all instances (see (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#tags DataprocWorkflowTemplate#tags}
  */
  readonly tags?: string[];
  /**
  * Optional. The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/` * `us-central1-f`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#zone DataprocWorkflowTemplate#zone}
  */
  readonly zone?: string;
  /**
  * node_group_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#node_group_affinity DataprocWorkflowTemplate#node_group_affinity}
  */
  readonly nodeGroupAffinity?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity[];
  /**
  * reservation_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#reservation_affinity DataprocWorkflowTemplate#reservation_affinity}
  */
  readonly reservationAffinity?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    internal_ip_only: cdktf.booleanToTerraform(struct!.internalIpOnly),
    metadata: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.metadata),
    network: cdktf.stringToTerraform(struct!.network),
    private_ipv6_google_access: cdktf.stringToTerraform(struct!.privateIpv6GoogleAccess),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceAccountScopes),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    zone: cdktf.stringToTerraform(struct!.zone),
    node_group_affinity: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityToTerraform)(struct!.nodeGroupAffinity),
    reservation_affinity: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityToTerraform)(struct!.reservationAffinity),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions {
  /**
  * Required. Cloud Storage URI of executable file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#executable_file DataprocWorkflowTemplate#executable_file}
  */
  readonly executableFile?: string;
  /**
  * Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of (https://developers.google.com/protocol-buffers/docs/proto3#json)). Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#execution_timeout DataprocWorkflowTemplate#execution_timeout}
  */
  readonly executionTimeout?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActionsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    executable_file: cdktf.stringToTerraform(struct!.executableFile),
    execution_timeout: cdktf.stringToTerraform(struct!.executionTimeout),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig {
  /**
  * Optional. The time when cluster will be auto-deleted (see JSON representation of (https://developers.google.com/protocol-buffers/docs/proto3#json)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#auto_delete_time DataprocWorkflowTemplate#auto_delete_time}
  */
  readonly autoDeleteTime?: string;
  /**
  * Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of (https://developers.google.com/protocol-buffers/docs/proto3#json)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#auto_delete_ttl DataprocWorkflowTemplate#auto_delete_ttl}
  */
  readonly autoDeleteTtl?: string;
  /**
  * Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of (https://developers.google.com/protocol-buffers/docs/proto3#json).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#idle_delete_ttl DataprocWorkflowTemplate#idle_delete_ttl}
  */
  readonly idleDeleteTtl?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_delete_time: cdktf.stringToTerraform(struct!.autoDeleteTime),
    auto_delete_ttl: cdktf.stringToTerraform(struct!.autoDeleteTtl),
    idle_delete_ttl: cdktf.stringToTerraform(struct!.idleDeleteTtl),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_count DataprocWorkflowTemplate#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_type DataprocWorkflowTemplate#accelerator_type}
  */
  readonly acceleratorType?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig {
  /**
  * Optional. Size in GB of the boot disk (default is 500GB).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_size_gb DataprocWorkflowTemplate#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_type DataprocWorkflowTemplate#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_local_ssds DataprocWorkflowTemplate#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig {
  /**
  * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image DataprocWorkflowTemplate#image}
  */
  readonly image?: string;
  /**
  * Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/(https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#machine_type DataprocWorkflowTemplate#machine_type}
  */
  readonly machineType?: string;
  /**
  * Optional. Specifies the minimum cpu platform for the Instance Group. See (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#min_cpu_platform DataprocWorkflowTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Optional. The number of VM instances in the instance group. For master instance groups, must be set to 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_instances DataprocWorkflowTemplate#num_instances}
  */
  readonly numInstances?: number;
  /**
  * Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#preemptibility DataprocWorkflowTemplate#preemptibility}
  */
  readonly preemptibility?: string;
  /**
  * accelerators block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerators DataprocWorkflowTemplate#accelerators}
  */
  readonly accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators[];
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#disk_config DataprocWorkflowTemplate#disk_config}
  */
  readonly diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    preemptibility: cdktf.stringToTerraform(struct!.preemptibility),
    accelerators: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigToTerraform)(struct!.diskConfig),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_count DataprocWorkflowTemplate#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_type DataprocWorkflowTemplate#accelerator_type}
  */
  readonly acceleratorType?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig {
  /**
  * Optional. Size in GB of the boot disk (default is 500GB).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_size_gb DataprocWorkflowTemplate#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_type DataprocWorkflowTemplate#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_local_ssds DataprocWorkflowTemplate#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig {
  /**
  * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image DataprocWorkflowTemplate#image}
  */
  readonly image?: string;
  /**
  * Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/(https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#machine_type DataprocWorkflowTemplate#machine_type}
  */
  readonly machineType?: string;
  /**
  * Optional. Specifies the minimum cpu platform for the Instance Group. See (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#min_cpu_platform DataprocWorkflowTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Optional. The number of VM instances in the instance group. For master instance groups, must be set to 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_instances DataprocWorkflowTemplate#num_instances}
  */
  readonly numInstances?: number;
  /**
  * Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#preemptibility DataprocWorkflowTemplate#preemptibility}
  */
  readonly preemptibility?: string;
  /**
  * accelerators block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerators DataprocWorkflowTemplate#accelerators}
  */
  readonly accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators[];
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#disk_config DataprocWorkflowTemplate#disk_config}
  */
  readonly diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    preemptibility: cdktf.stringToTerraform(struct!.preemptibility),
    accelerators: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigToTerraform)(struct!.diskConfig),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig {
  /**
  * Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cross_realm_trust_admin_server DataprocWorkflowTemplate#cross_realm_trust_admin_server}
  */
  readonly crossRealmTrustAdminServer?: string;
  /**
  * Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cross_realm_trust_kdc DataprocWorkflowTemplate#cross_realm_trust_kdc}
  */
  readonly crossRealmTrustKdc?: string;
  /**
  * Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cross_realm_trust_realm DataprocWorkflowTemplate#cross_realm_trust_realm}
  */
  readonly crossRealmTrustRealm?: string;
  /**
  * Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cross_realm_trust_shared_password DataprocWorkflowTemplate#cross_realm_trust_shared_password}
  */
  readonly crossRealmTrustSharedPassword?: string;
  /**
  * Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#enable_kerberos DataprocWorkflowTemplate#enable_kerberos}
  */
  readonly enableKerberos?: boolean | cdktf.IResolvable;
  /**
  * Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#kdc_db_key DataprocWorkflowTemplate#kdc_db_key}
  */
  readonly kdcDbKey?: string;
  /**
  * Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#key_password DataprocWorkflowTemplate#key_password}
  */
  readonly keyPassword?: string;
  /**
  * Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#keystore DataprocWorkflowTemplate#keystore}
  */
  readonly keystore?: string;
  /**
  * Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#keystore_password DataprocWorkflowTemplate#keystore_password}
  */
  readonly keystorePassword?: string;
  /**
  * Optional. The uri of the KMS key used to encrypt various sensitive files.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#kms_key DataprocWorkflowTemplate#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#realm DataprocWorkflowTemplate#realm}
  */
  readonly realm?: string;
  /**
  * Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#root_principal_password DataprocWorkflowTemplate#root_principal_password}
  */
  readonly rootPrincipalPassword?: string;
  /**
  * Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#tgt_lifetime_hours DataprocWorkflowTemplate#tgt_lifetime_hours}
  */
  readonly tgtLifetimeHours?: number;
  /**
  * Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#truststore DataprocWorkflowTemplate#truststore}
  */
  readonly truststore?: string;
  /**
  * Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#truststore_password DataprocWorkflowTemplate#truststore_password}
  */
  readonly truststorePassword?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cross_realm_trust_admin_server: cdktf.stringToTerraform(struct!.crossRealmTrustAdminServer),
    cross_realm_trust_kdc: cdktf.stringToTerraform(struct!.crossRealmTrustKdc),
    cross_realm_trust_realm: cdktf.stringToTerraform(struct!.crossRealmTrustRealm),
    cross_realm_trust_shared_password: cdktf.stringToTerraform(struct!.crossRealmTrustSharedPassword),
    enable_kerberos: cdktf.booleanToTerraform(struct!.enableKerberos),
    kdc_db_key: cdktf.stringToTerraform(struct!.kdcDbKey),
    key_password: cdktf.stringToTerraform(struct!.keyPassword),
    keystore: cdktf.stringToTerraform(struct!.keystore),
    keystore_password: cdktf.stringToTerraform(struct!.keystorePassword),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    realm: cdktf.stringToTerraform(struct!.realm),
    root_principal_password: cdktf.stringToTerraform(struct!.rootPrincipalPassword),
    tgt_lifetime_hours: cdktf.numberToTerraform(struct!.tgtLifetimeHours),
    truststore: cdktf.stringToTerraform(struct!.truststore),
    truststore_password: cdktf.stringToTerraform(struct!.truststorePassword),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig {
  /**
  * kerberos_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#kerberos_config DataprocWorkflowTemplate#kerberos_config}
  */
  readonly kerberosConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kerberos_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigToTerraform)(struct!.kerberosConfig),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig {
  /**
  * Optional. The version of software inside the cluster. It must be one of the supported (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image_version DataprocWorkflowTemplate#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Optional. The properties to set on daemon config files. Property keys are specified in `prefix:property` format, for example `core:hadoop.tmp.dir`. The following are supported prefixes and their mappings: * capacity-scheduler: `capacity-scheduler.xml` * core: `core-site.xml` * distcp: `distcp-default.xml` * hdfs: `hdfs-site.xml` * hive: `hive-site.xml` * mapred: `mapred-site.xml` * pig: `pig.properties` * spark: `spark-defaults.conf` * yarn: `yarn-site.xml` For more information, see (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_count DataprocWorkflowTemplate#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_type DataprocWorkflowTemplate#accelerator_type}
  */
  readonly acceleratorType?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig {
  /**
  * Optional. Size in GB of the boot disk (default is 500GB).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_size_gb DataprocWorkflowTemplate#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_type DataprocWorkflowTemplate#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_local_ssds DataprocWorkflowTemplate#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig {
  /**
  * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image DataprocWorkflowTemplate#image}
  */
  readonly image?: string;
  /**
  * Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/(https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#machine_type DataprocWorkflowTemplate#machine_type}
  */
  readonly machineType?: string;
  /**
  * Optional. Specifies the minimum cpu platform for the Instance Group. See (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#min_cpu_platform DataprocWorkflowTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Optional. The number of VM instances in the instance group. For master instance groups, must be set to 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_instances DataprocWorkflowTemplate#num_instances}
  */
  readonly numInstances?: number;
  /**
  * Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#preemptibility DataprocWorkflowTemplate#preemptibility}
  */
  readonly preemptibility?: string;
  /**
  * accelerators block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerators DataprocWorkflowTemplate#accelerators}
  */
  readonly accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators[];
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#disk_config DataprocWorkflowTemplate#disk_config}
  */
  readonly diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    preemptibility: cdktf.stringToTerraform(struct!.preemptibility),
    accelerators: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigToTerraform)(struct!.diskConfig),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfig {
  /**
  * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#staging_bucket DataprocWorkflowTemplate#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#temp_bucket DataprocWorkflowTemplate#temp_bucket}
  */
  readonly tempBucket?: string;
  /**
  * autoscaling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#autoscaling_config DataprocWorkflowTemplate#autoscaling_config}
  */
  readonly autoscalingConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig[];
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#encryption_config DataprocWorkflowTemplate#encryption_config}
  */
  readonly encryptionConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig[];
  /**
  * endpoint_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#endpoint_config DataprocWorkflowTemplate#endpoint_config}
  */
  readonly endpointConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig[];
  /**
  * gce_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#gce_cluster_config DataprocWorkflowTemplate#gce_cluster_config}
  */
  readonly gceClusterConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig[];
  /**
  * initialization_actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#initialization_actions DataprocWorkflowTemplate#initialization_actions}
  */
  readonly initializationActions?: DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions[];
  /**
  * lifecycle_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#lifecycle_config DataprocWorkflowTemplate#lifecycle_config}
  */
  readonly lifecycleConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig[];
  /**
  * master_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#master_config DataprocWorkflowTemplate#master_config}
  */
  readonly masterConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig[];
  /**
  * secondary_worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#secondary_worker_config DataprocWorkflowTemplate#secondary_worker_config}
  */
  readonly secondaryWorkerConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig[];
  /**
  * security_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#security_config DataprocWorkflowTemplate#security_config}
  */
  readonly securityConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig[];
  /**
  * software_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#software_config DataprocWorkflowTemplate#software_config}
  */
  readonly softwareConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig[];
  /**
  * worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#worker_config DataprocWorkflowTemplate#worker_config}
  */
  readonly workerConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    staging_bucket: cdktf.stringToTerraform(struct!.stagingBucket),
    temp_bucket: cdktf.stringToTerraform(struct!.tempBucket),
    autoscaling_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigToTerraform)(struct!.autoscalingConfig),
    encryption_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigToTerraform)(struct!.encryptionConfig),
    endpoint_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigToTerraform)(struct!.endpointConfig),
    gce_cluster_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigToTerraform)(struct!.gceClusterConfig),
    initialization_actions: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActionsToTerraform)(struct!.initializationActions),
    lifecycle_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigToTerraform)(struct!.lifecycleConfig),
    master_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigToTerraform)(struct!.masterConfig),
    secondary_worker_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigToTerraform)(struct!.secondaryWorkerConfig),
    security_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigToTerraform)(struct!.securityConfig),
    software_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigToTerraform)(struct!.softwareConfig),
    worker_config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigToTerraform)(struct!.workerConfig),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedCluster {
  /**
  * Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix. The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cluster_name DataprocWorkflowTemplate#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Optional. The labels to associate with this cluster. Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: {0,63} No more than 32 labels can be associated with a given cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#labels DataprocWorkflowTemplate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#config DataprocWorkflowTemplate#config}
  */
  readonly config: DataprocWorkflowTemplatePlacementManagedClusterConfig[];
}

function dataprocWorkflowTemplatePlacementManagedClusterToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    config: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigToTerraform)(struct!.config),
  }
}

export interface DataprocWorkflowTemplatePlacement {
  /**
  * cluster_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cluster_selector DataprocWorkflowTemplate#cluster_selector}
  */
  readonly clusterSelector?: DataprocWorkflowTemplatePlacementClusterSelector[];
  /**
  * managed_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#managed_cluster DataprocWorkflowTemplate#managed_cluster}
  */
  readonly managedCluster?: DataprocWorkflowTemplatePlacementManagedCluster[];
}

function dataprocWorkflowTemplatePlacementToTerraform(struct?: DataprocWorkflowTemplatePlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_selector: cdktf.listMapper(dataprocWorkflowTemplatePlacementClusterSelectorToTerraform)(struct!.clusterSelector),
    managed_cluster: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterToTerraform)(struct!.managedCluster),
  }
}

export interface DataprocWorkflowTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#create DataprocWorkflowTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#delete DataprocWorkflowTemplate#delete}
  */
  readonly delete?: string;
}

function dataprocWorkflowTemplateTimeoutsToTerraform(struct?: DataprocWorkflowTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html google_dataproc_workflow_template}
*/
export class DataprocWorkflowTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dataproc_workflow_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html google_dataproc_workflow_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocWorkflowTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocWorkflowTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_workflow_template',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._version = config.version;
    this._jobs = config.jobs;
    this._parameters = config.parameters;
    this._placement = config.placement;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable;
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number;
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // jobs - computed: false, optional: false, required: true
  private _jobs: DataprocWorkflowTemplateJobs[];
  public get jobs() {
    return this.interpolationForAttribute('jobs') as any;
  }
  public set jobs(value: DataprocWorkflowTemplateJobs[]) {
    this._jobs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: DataprocWorkflowTemplateParameters[];
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: DataprocWorkflowTemplateParameters[] ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // placement - computed: false, optional: false, required: true
  private _placement: DataprocWorkflowTemplatePlacement[];
  public get placement() {
    return this.interpolationForAttribute('placement') as any;
  }
  public set placement(value: DataprocWorkflowTemplatePlacement[]) {
    this._placement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataprocWorkflowTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataprocWorkflowTemplateTimeouts ) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      version: cdktf.numberToTerraform(this._version),
      jobs: cdktf.listMapper(dataprocWorkflowTemplateJobsToTerraform)(this._jobs),
      parameters: cdktf.listMapper(dataprocWorkflowTemplateParametersToTerraform)(this._parameters),
      placement: cdktf.listMapper(dataprocWorkflowTemplatePlacementToTerraform)(this._placement),
      timeouts: dataprocWorkflowTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
