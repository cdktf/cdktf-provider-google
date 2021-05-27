// https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocWorkflowTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#labels DataprocWorkflowTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#location DataprocWorkflowTemplate#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#name DataprocWorkflowTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#project DataprocWorkflowTemplate#project}
  */
  readonly project?: string;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsHadoopJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsHadoopJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsHadoopJob {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#archive_uris DataprocWorkflowTemplate#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#args DataprocWorkflowTemplate#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#file_uris DataprocWorkflowTemplate#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_class DataprocWorkflowTemplate#main_class}
  */
  readonly mainClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_jar_file_uri DataprocWorkflowTemplate#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#continue_on_failure DataprocWorkflowTemplate#continue_on_failure}
  */
  readonly continueOnFailure?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_file_uri DataprocWorkflowTemplate#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#script_variables DataprocWorkflowTemplate#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string };
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsPigJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsPigJobQueryList {
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#continue_on_failure DataprocWorkflowTemplate#continue_on_failure}
  */
  readonly continueOnFailure?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_file_uri DataprocWorkflowTemplate#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#script_variables DataprocWorkflowTemplate#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string };
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsPrestoJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsPrestoJobQueryList {
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#client_tags DataprocWorkflowTemplate#client_tags}
  */
  readonly clientTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#continue_on_failure DataprocWorkflowTemplate#continue_on_failure}
  */
  readonly continueOnFailure?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#output_format DataprocWorkflowTemplate#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsPysparkJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPysparkJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsPysparkJob {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#archive_uris DataprocWorkflowTemplate#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#args DataprocWorkflowTemplate#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#file_uris DataprocWorkflowTemplate#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_python_file_uri DataprocWorkflowTemplate#main_python_file_uri}
  */
  readonly mainPythonFileUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#max_failures_per_hour DataprocWorkflowTemplate#max_failures_per_hour}
  */
  readonly maxFailuresPerHour?: number;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsSparkJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsSparkJob {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#archive_uris DataprocWorkflowTemplate#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#args DataprocWorkflowTemplate#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#file_uris DataprocWorkflowTemplate#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_class DataprocWorkflowTemplate#main_class}
  */
  readonly mainClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_jar_file_uri DataprocWorkflowTemplate#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsSparkRJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkRJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsSparkRJob {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#archive_uris DataprocWorkflowTemplate#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#args DataprocWorkflowTemplate#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#file_uris DataprocWorkflowTemplate#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#main_r_file_uri DataprocWorkflowTemplate#main_r_file_uri}
  */
  readonly mainRFileUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string };
}

function dataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export interface DataprocWorkflowTemplateJobsSparkSqlJobQueryList {
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#jar_file_uris DataprocWorkflowTemplate#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_file_uri DataprocWorkflowTemplate#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#script_variables DataprocWorkflowTemplate#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string };
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#labels DataprocWorkflowTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#prerequisite_step_ids DataprocWorkflowTemplate#prerequisite_step_ids}
  */
  readonly prerequisiteStepIds?: string[];
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#description DataprocWorkflowTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#fields DataprocWorkflowTemplate#fields}
  */
  readonly fields: string[];
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cluster_labels DataprocWorkflowTemplate#cluster_labels}
  */
  readonly clusterLabels: { [key: string]: string };
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#enable_http_port_access DataprocWorkflowTemplate#enable_http_port_access}
  */
  readonly enableHttpPortAccess?: boolean;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_http_port_access: cdktf.booleanToTerraform(struct!.enableHttpPortAccess),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity {
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#consume_reservation_type DataprocWorkflowTemplate#consume_reservation_type}
  */
  readonly consumeReservationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#key DataprocWorkflowTemplate#key}
  */
  readonly key?: string;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#internal_ip_only DataprocWorkflowTemplate#internal_ip_only}
  */
  readonly internalIpOnly?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#metadata DataprocWorkflowTemplate#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#network DataprocWorkflowTemplate#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#private_ipv6_google_access DataprocWorkflowTemplate#private_ipv6_google_access}
  */
  readonly privateIpv6GoogleAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#service_account DataprocWorkflowTemplate#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#service_account_scopes DataprocWorkflowTemplate#service_account_scopes}
  */
  readonly serviceAccountScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#subnetwork DataprocWorkflowTemplate#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#tags DataprocWorkflowTemplate#tags}
  */
  readonly tags?: string[];
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#executable_file DataprocWorkflowTemplate#executable_file}
  */
  readonly executableFile?: string;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#auto_delete_time DataprocWorkflowTemplate#auto_delete_time}
  */
  readonly autoDeleteTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#auto_delete_ttl DataprocWorkflowTemplate#auto_delete_ttl}
  */
  readonly autoDeleteTtl?: string;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_count DataprocWorkflowTemplate#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_size_gb DataprocWorkflowTemplate#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_type DataprocWorkflowTemplate#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image DataprocWorkflowTemplate#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#machine_type DataprocWorkflowTemplate#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#min_cpu_platform DataprocWorkflowTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_instances DataprocWorkflowTemplate#num_instances}
  */
  readonly numInstances?: number;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_count DataprocWorkflowTemplate#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_size_gb DataprocWorkflowTemplate#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_type DataprocWorkflowTemplate#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image DataprocWorkflowTemplate#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#machine_type DataprocWorkflowTemplate#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#min_cpu_platform DataprocWorkflowTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_instances DataprocWorkflowTemplate#num_instances}
  */
  readonly numInstances?: number;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cross_realm_trust_admin_server DataprocWorkflowTemplate#cross_realm_trust_admin_server}
  */
  readonly crossRealmTrustAdminServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cross_realm_trust_kdc DataprocWorkflowTemplate#cross_realm_trust_kdc}
  */
  readonly crossRealmTrustKdc?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cross_realm_trust_realm DataprocWorkflowTemplate#cross_realm_trust_realm}
  */
  readonly crossRealmTrustRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cross_realm_trust_shared_password DataprocWorkflowTemplate#cross_realm_trust_shared_password}
  */
  readonly crossRealmTrustSharedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#enable_kerberos DataprocWorkflowTemplate#enable_kerberos}
  */
  readonly enableKerberos?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#kdc_db_key DataprocWorkflowTemplate#kdc_db_key}
  */
  readonly kdcDbKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#key_password DataprocWorkflowTemplate#key_password}
  */
  readonly keyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#keystore DataprocWorkflowTemplate#keystore}
  */
  readonly keystore?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#keystore_password DataprocWorkflowTemplate#keystore_password}
  */
  readonly keystorePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#kms_key DataprocWorkflowTemplate#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#realm DataprocWorkflowTemplate#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#root_principal_password DataprocWorkflowTemplate#root_principal_password}
  */
  readonly rootPrincipalPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#tgt_lifetime_hours DataprocWorkflowTemplate#tgt_lifetime_hours}
  */
  readonly tgtLifetimeHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#truststore DataprocWorkflowTemplate#truststore}
  */
  readonly truststore?: string;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image_version DataprocWorkflowTemplate#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_count DataprocWorkflowTemplate#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_size_gb DataprocWorkflowTemplate#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_type DataprocWorkflowTemplate#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image DataprocWorkflowTemplate#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#machine_type DataprocWorkflowTemplate#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#min_cpu_platform DataprocWorkflowTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_instances DataprocWorkflowTemplate#num_instances}
  */
  readonly numInstances?: number;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#staging_bucket DataprocWorkflowTemplate#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cluster_name DataprocWorkflowTemplate#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#labels DataprocWorkflowTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
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
