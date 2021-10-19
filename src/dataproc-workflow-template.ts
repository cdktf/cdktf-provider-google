// https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocWorkflowTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Timeout duration for the DAG of jobs, expressed in seconds (see [JSON representation of duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a [managed cluster](/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#dag_timeout DataprocWorkflowTemplate#dag_timeout}
  */
  readonly dagTimeout?: string;
  /**
  * Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.
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
  * Output only. The current version of this workflow template.
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
  readonly placement: DataprocWorkflowTemplatePlacement;
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

function dataprocWorkflowTemplateJobsHadoopJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsHadoopJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsHadoopJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsHadoopJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
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
  readonly loggingConfig?: DataprocWorkflowTemplateJobsHadoopJobLoggingConfig;
}

function dataprocWorkflowTemplateJobsHadoopJobToTerraform(struct?: DataprocWorkflowTemplateJobsHadoopJobOutputReference | DataprocWorkflowTemplateJobsHadoopJob): any {
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
    logging_config: dataprocWorkflowTemplateJobsHadoopJobLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocWorkflowTemplateJobsHadoopJobOutputReference extends cdktf.ComplexObject {
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
  private _loggingConfig?: DataprocWorkflowTemplateJobsHadoopJobLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocWorkflowTemplateJobsHadoopJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsHadoopJobLoggingConfig | undefined) {
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
export interface DataprocWorkflowTemplateJobsHiveJobQueryList {
  /**
  * Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } }
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#queries DataprocWorkflowTemplate#queries}
  */
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsHiveJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsHiveJobQueryListOutputReference | DataprocWorkflowTemplateJobsHiveJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export class DataprocWorkflowTemplateJobsHiveJobQueryListOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // queries - computed: false, optional: false, required: true
  private _queries?: string[]; 
  public get queries() {
    return this.getListAttribute('queries');
  }
  public set queries(value: string[]) {
    this._queries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries
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
  readonly queryList?: DataprocWorkflowTemplateJobsHiveJobQueryList;
}

function dataprocWorkflowTemplateJobsHiveJobToTerraform(struct?: DataprocWorkflowTemplateJobsHiveJobOutputReference | DataprocWorkflowTemplateJobsHiveJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    query_list: dataprocWorkflowTemplateJobsHiveJobQueryListToTerraform(struct!.queryList),
  }
}

export class DataprocWorkflowTemplateJobsHiveJobOutputReference extends cdktf.ComplexObject {
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

  // query_list - computed: false, optional: true, required: false
  private _queryList?: DataprocWorkflowTemplateJobsHiveJobQueryList | undefined; 
  private __queryListOutput = new DataprocWorkflowTemplateJobsHiveJobQueryListOutputReference(this as any, "query_list", true);
  public get queryList() {
    return this.__queryListOutput;
  }
  public putQueryList(value: DataprocWorkflowTemplateJobsHiveJobQueryList | undefined) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList
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

function dataprocWorkflowTemplateJobsPigJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsPigJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsPigJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
  }
}
export interface DataprocWorkflowTemplateJobsPigJobQueryList {
  /**
  * Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } }
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#queries DataprocWorkflowTemplate#queries}
  */
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsPigJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobQueryListOutputReference | DataprocWorkflowTemplateJobsPigJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export class DataprocWorkflowTemplateJobsPigJobQueryListOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // queries - computed: false, optional: false, required: true
  private _queries?: string[]; 
  public get queries() {
    return this.getListAttribute('queries');
  }
  public set queries(value: string[]) {
    this._queries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries
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
  * Optional. Mapping of query variable names to values (equivalent to the Pig command: `name=[value]`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#script_variables DataprocWorkflowTemplate#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#logging_config DataprocWorkflowTemplate#logging_config}
  */
  readonly loggingConfig?: DataprocWorkflowTemplateJobsPigJobLoggingConfig;
  /**
  * query_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_list DataprocWorkflowTemplate#query_list}
  */
  readonly queryList?: DataprocWorkflowTemplateJobsPigJobQueryList;
}

function dataprocWorkflowTemplateJobsPigJobToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobOutputReference | DataprocWorkflowTemplateJobsPigJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    logging_config: dataprocWorkflowTemplateJobsPigJobLoggingConfigToTerraform(struct!.loggingConfig),
    query_list: dataprocWorkflowTemplateJobsPigJobQueryListToTerraform(struct!.queryList),
  }
}

export class DataprocWorkflowTemplateJobsPigJobOutputReference extends cdktf.ComplexObject {
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
  private _loggingConfig?: DataprocWorkflowTemplateJobsPigJobLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocWorkflowTemplateJobsPigJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsPigJobLoggingConfig | undefined) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList?: DataprocWorkflowTemplateJobsPigJobQueryList | undefined; 
  private __queryListOutput = new DataprocWorkflowTemplateJobsPigJobQueryListOutputReference(this as any, "query_list", true);
  public get queryList() {
    return this.__queryListOutput;
  }
  public putQueryList(value: DataprocWorkflowTemplateJobsPigJobQueryList | undefined) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList
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

function dataprocWorkflowTemplateJobsPrestoJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsPrestoJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsPrestoJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
  }
}
export interface DataprocWorkflowTemplateJobsPrestoJobQueryList {
  /**
  * Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } }
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#queries DataprocWorkflowTemplate#queries}
  */
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsPrestoJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobQueryListOutputReference | DataprocWorkflowTemplateJobsPrestoJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export class DataprocWorkflowTemplateJobsPrestoJobQueryListOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // queries - computed: false, optional: false, required: true
  private _queries?: string[]; 
  public get queries() {
    return this.getListAttribute('queries');
  }
  public set queries(value: string[]) {
    this._queries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries
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
  * Optional. A mapping of property names to values. Used to set Presto [session properties](https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI
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
  readonly loggingConfig?: DataprocWorkflowTemplateJobsPrestoJobLoggingConfig;
  /**
  * query_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_list DataprocWorkflowTemplate#query_list}
  */
  readonly queryList?: DataprocWorkflowTemplateJobsPrestoJobQueryList;
}

function dataprocWorkflowTemplateJobsPrestoJobToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobOutputReference | DataprocWorkflowTemplateJobsPrestoJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.clientTags),
    continue_on_failure: cdktf.booleanToTerraform(struct!.continueOnFailure),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    logging_config: dataprocWorkflowTemplateJobsPrestoJobLoggingConfigToTerraform(struct!.loggingConfig),
    query_list: dataprocWorkflowTemplateJobsPrestoJobQueryListToTerraform(struct!.queryList),
  }
}

export class DataprocWorkflowTemplateJobsPrestoJobOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_tags - computed: false, optional: true, required: false
  private _clientTags?: string[] | undefined; 
  public get clientTags() {
    return this.getListAttribute('client_tags');
  }
  public set clientTags(value: string[] | undefined) {
    this._clientTags = value;
  }
  public resetClientTags() {
    this._clientTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTagsInput() {
    return this._clientTags
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

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string | undefined; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string | undefined) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat
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

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig?: DataprocWorkflowTemplateJobsPrestoJobLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocWorkflowTemplateJobsPrestoJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsPrestoJobLoggingConfig | undefined) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList?: DataprocWorkflowTemplateJobsPrestoJobQueryList | undefined; 
  private __queryListOutput = new DataprocWorkflowTemplateJobsPrestoJobQueryListOutputReference(this as any, "query_list", true);
  public get queryList() {
    return this.__queryListOutput;
  }
  public putQueryList(value: DataprocWorkflowTemplateJobsPrestoJobQueryList | undefined) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList
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

function dataprocWorkflowTemplateJobsPysparkJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPysparkJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsPysparkJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsPysparkJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
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
  readonly loggingConfig?: DataprocWorkflowTemplateJobsPysparkJobLoggingConfig;
}

function dataprocWorkflowTemplateJobsPysparkJobToTerraform(struct?: DataprocWorkflowTemplateJobsPysparkJobOutputReference | DataprocWorkflowTemplateJobsPysparkJob): any {
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
    logging_config: dataprocWorkflowTemplateJobsPysparkJobLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocWorkflowTemplateJobsPysparkJobOutputReference extends cdktf.ComplexObject {
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
  private _loggingConfig?: DataprocWorkflowTemplateJobsPysparkJobLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocWorkflowTemplateJobsPysparkJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsPysparkJobLoggingConfig | undefined) {
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
export interface DataprocWorkflowTemplateJobsScheduling {
  /**
  * Optional. Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window. Maximum value is 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#max_failures_per_hour DataprocWorkflowTemplate#max_failures_per_hour}
  */
  readonly maxFailuresPerHour?: number;
  /**
  * Optional. Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. Maximum value is 240.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#max_failures_total DataprocWorkflowTemplate#max_failures_total}
  */
  readonly maxFailuresTotal?: number;
}

function dataprocWorkflowTemplateJobsSchedulingToTerraform(struct?: DataprocWorkflowTemplateJobsSchedulingOutputReference | DataprocWorkflowTemplateJobsScheduling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_failures_per_hour: cdktf.numberToTerraform(struct!.maxFailuresPerHour),
    max_failures_total: cdktf.numberToTerraform(struct!.maxFailuresTotal),
  }
}

export class DataprocWorkflowTemplateJobsSchedulingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_failures_per_hour - computed: false, optional: true, required: false
  private _maxFailuresPerHour?: number | undefined; 
  public get maxFailuresPerHour() {
    return this.getNumberAttribute('max_failures_per_hour');
  }
  public set maxFailuresPerHour(value: number | undefined) {
    this._maxFailuresPerHour = value;
  }
  public resetMaxFailuresPerHour() {
    this._maxFailuresPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailuresPerHourInput() {
    return this._maxFailuresPerHour
  }

  // max_failures_total - computed: false, optional: true, required: false
  private _maxFailuresTotal?: number | undefined; 
  public get maxFailuresTotal() {
    return this.getNumberAttribute('max_failures_total');
  }
  public set maxFailuresTotal(value: number | undefined) {
    this._maxFailuresTotal = value;
  }
  public resetMaxFailuresTotal() {
    this._maxFailuresTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailuresTotalInput() {
    return this._maxFailuresTotal
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

function dataprocWorkflowTemplateJobsSparkJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsSparkJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsSparkJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
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
  readonly loggingConfig?: DataprocWorkflowTemplateJobsSparkJobLoggingConfig;
}

function dataprocWorkflowTemplateJobsSparkJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkJobOutputReference | DataprocWorkflowTemplateJobsSparkJob): any {
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
    logging_config: dataprocWorkflowTemplateJobsSparkJobLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocWorkflowTemplateJobsSparkJobOutputReference extends cdktf.ComplexObject {
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
  private _loggingConfig?: DataprocWorkflowTemplateJobsSparkJobLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocWorkflowTemplateJobsSparkJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsSparkJobLoggingConfig | undefined) {
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
export interface DataprocWorkflowTemplateJobsSparkRJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplateJobsSparkRJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkRJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsSparkRJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsSparkRJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
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
  readonly loggingConfig?: DataprocWorkflowTemplateJobsSparkRJobLoggingConfig;
}

function dataprocWorkflowTemplateJobsSparkRJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkRJobOutputReference | DataprocWorkflowTemplateJobsSparkRJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileUris),
    main_r_file_uri: cdktf.stringToTerraform(struct!.mainRFileUri),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    logging_config: dataprocWorkflowTemplateJobsSparkRJobLoggingConfigToTerraform(struct!.loggingConfig),
  }
}

export class DataprocWorkflowTemplateJobsSparkRJobOutputReference extends cdktf.ComplexObject {
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

  // main_r_file_uri - computed: false, optional: false, required: true
  private _mainRFileUri?: string; 
  public get mainRFileUri() {
    return this.getStringAttribute('main_r_file_uri');
  }
  public set mainRFileUri(value: string) {
    this._mainRFileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainRFileUriInput() {
    return this._mainRFileUri
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
  private _loggingConfig?: DataprocWorkflowTemplateJobsSparkRJobLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocWorkflowTemplateJobsSparkRJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsSparkRJobLoggingConfig | undefined) {
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
export interface DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels
  }
}
export interface DataprocWorkflowTemplateJobsSparkSqlJobQueryList {
  /**
  * Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } }
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#queries DataprocWorkflowTemplate#queries}
  */
  readonly queries: string[];
}

function dataprocWorkflowTemplateJobsSparkSqlJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobQueryListOutputReference | DataprocWorkflowTemplateJobsSparkSqlJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export class DataprocWorkflowTemplateJobsSparkSqlJobQueryListOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // queries - computed: false, optional: false, required: true
  private _queries?: string[]; 
  public get queries() {
    return this.getListAttribute('queries');
  }
  public set queries(value: string[]) {
    this._queries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries
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
  readonly loggingConfig?: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig;
  /**
  * query_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#query_list DataprocWorkflowTemplate#query_list}
  */
  readonly queryList?: DataprocWorkflowTemplateJobsSparkSqlJobQueryList;
}

function dataprocWorkflowTemplateJobsSparkSqlJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobOutputReference | DataprocWorkflowTemplateJobsSparkSqlJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jarFileUris),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    script_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.scriptVariables),
    logging_config: dataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigToTerraform(struct!.loggingConfig),
    query_list: dataprocWorkflowTemplateJobsSparkSqlJobQueryListToTerraform(struct!.queryList),
  }
}

export class DataprocWorkflowTemplateJobsSparkSqlJobOutputReference extends cdktf.ComplexObject {
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
  private _loggingConfig?: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig | undefined; 
  private __loggingConfigOutput = new DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this.__loggingConfigOutput;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig | undefined) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList?: DataprocWorkflowTemplateJobsSparkSqlJobQueryList | undefined; 
  private __queryListOutput = new DataprocWorkflowTemplateJobsSparkSqlJobQueryListOutputReference(this as any, "query_list", true);
  public get queryList() {
    return this.__queryListOutput;
  }
  public putQueryList(value: DataprocWorkflowTemplateJobsSparkSqlJobQueryList | undefined) {
    this._queryList = value;
  }
  public resetQueryList() {
    this._queryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList
  }
}
export interface DataprocWorkflowTemplateJobs {
  /**
  * Optional. The labels to associate with this job. Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: p{Ll}p{Lo}{0,62} Label values must be between 1 and 63 characters long, and must conform to the following regular expression: [p{Ll}p{Lo}p{N}_-]{0,63} No more than 32 labels can be associated with a given job.
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
  * Required. The step id. The id must be unique among all jobs within the template. The step id is used as prefix for job id, as job `goog-dataproc-workflow-step-id` label, and in prerequisiteStepIds field from other steps. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#step_id DataprocWorkflowTemplate#step_id}
  */
  readonly stepId: string;
  /**
  * hadoop_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#hadoop_job DataprocWorkflowTemplate#hadoop_job}
  */
  readonly hadoopJob?: DataprocWorkflowTemplateJobsHadoopJob;
  /**
  * hive_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#hive_job DataprocWorkflowTemplate#hive_job}
  */
  readonly hiveJob?: DataprocWorkflowTemplateJobsHiveJob;
  /**
  * pig_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#pig_job DataprocWorkflowTemplate#pig_job}
  */
  readonly pigJob?: DataprocWorkflowTemplateJobsPigJob;
  /**
  * presto_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#presto_job DataprocWorkflowTemplate#presto_job}
  */
  readonly prestoJob?: DataprocWorkflowTemplateJobsPrestoJob;
  /**
  * pyspark_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#pyspark_job DataprocWorkflowTemplate#pyspark_job}
  */
  readonly pysparkJob?: DataprocWorkflowTemplateJobsPysparkJob;
  /**
  * scheduling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#scheduling DataprocWorkflowTemplate#scheduling}
  */
  readonly scheduling?: DataprocWorkflowTemplateJobsScheduling;
  /**
  * spark_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#spark_job DataprocWorkflowTemplate#spark_job}
  */
  readonly sparkJob?: DataprocWorkflowTemplateJobsSparkJob;
  /**
  * spark_r_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#spark_r_job DataprocWorkflowTemplate#spark_r_job}
  */
  readonly sparkRJob?: DataprocWorkflowTemplateJobsSparkRJob;
  /**
  * spark_sql_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#spark_sql_job DataprocWorkflowTemplate#spark_sql_job}
  */
  readonly sparkSqlJob?: DataprocWorkflowTemplateJobsSparkSqlJob;
}

function dataprocWorkflowTemplateJobsToTerraform(struct?: DataprocWorkflowTemplateJobs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    prerequisite_step_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prerequisiteStepIds),
    step_id: cdktf.stringToTerraform(struct!.stepId),
    hadoop_job: dataprocWorkflowTemplateJobsHadoopJobToTerraform(struct!.hadoopJob),
    hive_job: dataprocWorkflowTemplateJobsHiveJobToTerraform(struct!.hiveJob),
    pig_job: dataprocWorkflowTemplateJobsPigJobToTerraform(struct!.pigJob),
    presto_job: dataprocWorkflowTemplateJobsPrestoJobToTerraform(struct!.prestoJob),
    pyspark_job: dataprocWorkflowTemplateJobsPysparkJobToTerraform(struct!.pysparkJob),
    scheduling: dataprocWorkflowTemplateJobsSchedulingToTerraform(struct!.scheduling),
    spark_job: dataprocWorkflowTemplateJobsSparkJobToTerraform(struct!.sparkJob),
    spark_r_job: dataprocWorkflowTemplateJobsSparkRJobToTerraform(struct!.sparkRJob),
    spark_sql_job: dataprocWorkflowTemplateJobsSparkSqlJobToTerraform(struct!.sparkSqlJob),
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

function dataprocWorkflowTemplateParametersValidationRegexToTerraform(struct?: DataprocWorkflowTemplateParametersValidationRegexOutputReference | DataprocWorkflowTemplateParametersValidationRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regexes),
  }
}

export class DataprocWorkflowTemplateParametersValidationRegexOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // regexes - computed: false, optional: false, required: true
  private _regexes?: string[]; 
  public get regexes() {
    return this.getListAttribute('regexes');
  }
  public set regexes(value: string[]) {
    this._regexes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexesInput() {
    return this._regexes
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

function dataprocWorkflowTemplateParametersValidationValuesToTerraform(struct?: DataprocWorkflowTemplateParametersValidationValuesOutputReference | DataprocWorkflowTemplateParametersValidationValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataprocWorkflowTemplateParametersValidationValuesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface DataprocWorkflowTemplateParametersValidation {
  /**
  * regex block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#regex DataprocWorkflowTemplate#regex}
  */
  readonly regex?: DataprocWorkflowTemplateParametersValidationRegex;
  /**
  * values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#values DataprocWorkflowTemplate#values}
  */
  readonly values?: DataprocWorkflowTemplateParametersValidationValues;
}

function dataprocWorkflowTemplateParametersValidationToTerraform(struct?: DataprocWorkflowTemplateParametersValidationOutputReference | DataprocWorkflowTemplateParametersValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: dataprocWorkflowTemplateParametersValidationRegexToTerraform(struct!.regex),
    values: dataprocWorkflowTemplateParametersValidationValuesToTerraform(struct!.values),
  }
}

export class DataprocWorkflowTemplateParametersValidationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: DataprocWorkflowTemplateParametersValidationRegex | undefined; 
  private __regexOutput = new DataprocWorkflowTemplateParametersValidationRegexOutputReference(this as any, "regex", true);
  public get regex() {
    return this.__regexOutput;
  }
  public putRegex(value: DataprocWorkflowTemplateParametersValidationRegex | undefined) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex
  }

  // values - computed: false, optional: true, required: false
  private _values?: DataprocWorkflowTemplateParametersValidationValues | undefined; 
  private __valuesOutput = new DataprocWorkflowTemplateParametersValidationValuesOutputReference(this as any, "values", true);
  public get values() {
    return this.__valuesOutput;
  }
  public putValues(value: DataprocWorkflowTemplateParametersValidationValues | undefined) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
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
  * Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths. A field path is similar in syntax to a google.protobuf.FieldMask. For example, a field path that references the zone field of a workflow template's cluster selector would be specified as `placement.clusterSelector.zone`. Also, field paths can reference fields using the following syntax: * Values in maps can be referenced by key: * labels['key'] * placement.clusterSelector.clusterLabels['key'] * placement.managedCluster.labels['key'] * placement.clusterSelector.clusterLabels['key'] * jobs['step-id'].labels['key'] * Jobs in the jobs list can be referenced by step-id: * jobs['step-id'].hadoopJob.mainJarFileUri * jobs['step-id'].hiveJob.queryFileUri * jobs['step-id'].pySparkJob.mainPythonFileUri * jobs['step-id'].hadoopJob.jarFileUris[0] * jobs['step-id'].hadoopJob.archiveUris[0] * jobs['step-id'].hadoopJob.fileUris[0] * jobs['step-id'].pySparkJob.pythonFileUris[0] * Items in repeated fields can be referenced by a zero-based index: * jobs['step-id'].sparkJob.args[0] * Other examples: * jobs['step-id'].hadoopJob.properties['key'] * jobs['step-id'].hadoopJob.args[0] * jobs['step-id'].hiveJob.scriptVariables['key'] * jobs['step-id'].hadoopJob.mainJarFileUri * placement.clusterSelector.zone It may not be possible to parameterize maps and repeated fields in their entirety since only individual map values and individual items in repeated fields can be referenced. For example, the following field paths are invalid: - placement.clusterSelector.clusterLabels - jobs['step-id'].sparkJob.args
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
  readonly validation?: DataprocWorkflowTemplateParametersValidation;
}

function dataprocWorkflowTemplateParametersToTerraform(struct?: DataprocWorkflowTemplateParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fields),
    name: cdktf.stringToTerraform(struct!.name),
    validation: dataprocWorkflowTemplateParametersValidationToTerraform(struct!.validation),
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

function dataprocWorkflowTemplatePlacementClusterSelectorToTerraform(struct?: DataprocWorkflowTemplatePlacementClusterSelectorOutputReference | DataprocWorkflowTemplatePlacementClusterSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.clusterLabels),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export class DataprocWorkflowTemplatePlacementClusterSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cluster_labels - computed: false, optional: false, required: true
  private _clusterLabels?: { [key: string]: string } | cdktf.IResolvable; 
  public get clusterLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cluster_labels') as any;
  }
  public set clusterLabels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._clusterLabels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLabelsInput() {
    return this._clusterLabels
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string | undefined; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }
}
export interface DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig {
  /**
  * Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` * `projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` Note that the policy must be in the same project and Dataproc region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#policy DataprocWorkflowTemplate#policy}
  */
  readonly policy?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string | undefined; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string | undefined) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
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

function dataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gce_pd_kms_key_name: cdktf.stringToTerraform(struct!.gcePdKmsKeyName),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // gce_pd_kms_key_name - computed: false, optional: true, required: false
  private _gcePdKmsKeyName?: string | undefined; 
  public get gcePdKmsKeyName() {
    return this.getStringAttribute('gce_pd_kms_key_name');
  }
  public set gcePdKmsKeyName(value: string | undefined) {
    this._gcePdKmsKeyName = value;
  }
  public resetGcePdKmsKeyName() {
    this._gcePdKmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePdKmsKeyNameInput() {
    return this._gcePdKmsKeyName
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

function dataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_http_port_access: cdktf.booleanToTerraform(struct!.enableHttpPortAccess),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_http_port_access - computed: false, optional: true, required: false
  private _enableHttpPortAccess?: boolean | cdktf.IResolvable | undefined; 
  public get enableHttpPortAccess() {
    return this.getBooleanAttribute('enable_http_port_access') as any;
  }
  public set enableHttpPortAccess(value: boolean | cdktf.IResolvable | undefined) {
    this._enableHttpPortAccess = value;
  }
  public resetEnableHttpPortAccess() {
    this._enableHttpPortAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpPortAccessInput() {
    return this._enableHttpPortAccess
  }
}
export interface DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity {
  /**
  * Required. The URI of a sole-tenant [node group resource](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on. A full URL, partial URI, or node group name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` * `projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` * `node-group-1`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#node_group DataprocWorkflowTemplate#node_group}
  */
  readonly nodeGroup: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // node_group - computed: false, optional: false, required: true
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup
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

function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // consume_reservation_type - computed: false, optional: true, required: false
  private _consumeReservationType?: string | undefined; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string | undefined) {
    this._consumeReservationType = value;
  }
  public resetConsumeReservationType() {
    this._consumeReservationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType
  }

  // key - computed: false, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[] | undefined; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[] | undefined) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
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
  * The Compute Engine metadata entries to add to all instances (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#metadata DataprocWorkflowTemplate#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information). A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` * `projects/[project_id]/regions/global/default` * `default`
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
  * Optional. The [Dataproc service account](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see [VM Data Plane identity](https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
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
  * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` * `projects/[project_id]/regions/us-east1/subnetworks/sub0` * `sub0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#subnetwork DataprocWorkflowTemplate#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The Compute Engine tags to add to all instances (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#tags DataprocWorkflowTemplate#tags}
  */
  readonly tags?: string[];
  /**
  * Optional. The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]` * `projects/[project_id]/zones/[zone]` * `us-central1-f`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#zone DataprocWorkflowTemplate#zone}
  */
  readonly zone?: string;
  /**
  * node_group_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#node_group_affinity DataprocWorkflowTemplate#node_group_affinity}
  */
  readonly nodeGroupAffinity?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity;
  /**
  * reservation_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#reservation_affinity DataprocWorkflowTemplate#reservation_affinity}
  */
  readonly reservationAffinity?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    node_group_affinity: dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityToTerraform(struct!.nodeGroupAffinity),
    reservation_affinity: dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityToTerraform(struct!.reservationAffinity),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // internal_ip_only - computed: true, optional: true, required: false
  private _internalIpOnly?: boolean | cdktf.IResolvable | undefined; 
  public get internalIpOnly() {
    return this.getBooleanAttribute('internal_ip_only') as any;
  }
  public set internalIpOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._internalIpOnly = value;
  }
  public resetInternalIpOnly() {
    this._internalIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpOnlyInput() {
    return this._internalIpOnly
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // network - computed: false, optional: true, required: false
  private _network?: string | undefined; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // private_ipv6_google_access - computed: false, optional: true, required: false
  private _privateIpv6GoogleAccess?: string | undefined; 
  public get privateIpv6GoogleAccess() {
    return this.getStringAttribute('private_ipv6_google_access');
  }
  public set privateIpv6GoogleAccess(value: string | undefined) {
    this._privateIpv6GoogleAccess = value;
  }
  public resetPrivateIpv6GoogleAccess() {
    this._privateIpv6GoogleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv6GoogleAccessInput() {
    return this._privateIpv6GoogleAccess
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string | undefined; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string | undefined) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount
  }

  // service_account_scopes - computed: false, optional: true, required: false
  private _serviceAccountScopes?: string[] | undefined; 
  public get serviceAccountScopes() {
    return this.getListAttribute('service_account_scopes');
  }
  public set serviceAccountScopes(value: string[] | undefined) {
    this._serviceAccountScopes = value;
  }
  public resetServiceAccountScopes() {
    this._serviceAccountScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountScopesInput() {
    return this._serviceAccountScopes
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string | undefined; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string | undefined) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[] | undefined; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string | undefined; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // node_group_affinity - computed: false, optional: true, required: false
  private _nodeGroupAffinity?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity | undefined; 
  private __nodeGroupAffinityOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityOutputReference(this as any, "node_group_affinity", true);
  public get nodeGroupAffinity() {
    return this.__nodeGroupAffinityOutput;
  }
  public putNodeGroupAffinity(value: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity | undefined) {
    this._nodeGroupAffinity = value;
  }
  public resetNodeGroupAffinity() {
    this._nodeGroupAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupAffinityInput() {
    return this._nodeGroupAffinity
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity | undefined; 
  private __reservationAffinityOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityOutputReference(this as any, "reservation_affinity", true);
  public get reservationAffinity() {
    return this.__reservationAffinityOutput;
  }
  public putReservationAffinity(value: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity | undefined) {
    this._reservationAffinity = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity
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
  * Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#execution_timeout DataprocWorkflowTemplate#execution_timeout}
  */
  readonly executionTimeout?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActionsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    executable_file: cdktf.stringToTerraform(struct!.executableFile),
    execution_timeout: cdktf.stringToTerraform(struct!.executionTimeout),
  }
}

export interface DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig {
  /**
  * Optional. The time when cluster will be auto-deleted (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#auto_delete_time DataprocWorkflowTemplate#auto_delete_time}
  */
  readonly autoDeleteTime?: string;
  /**
  * Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#auto_delete_ttl DataprocWorkflowTemplate#auto_delete_ttl}
  */
  readonly autoDeleteTtl?: string;
  /**
  * Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#idle_delete_ttl DataprocWorkflowTemplate#idle_delete_ttl}
  */
  readonly idleDeleteTtl?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete_time: cdktf.stringToTerraform(struct!.autoDeleteTime),
    auto_delete_ttl: cdktf.stringToTerraform(struct!.autoDeleteTtl),
    idle_delete_ttl: cdktf.stringToTerraform(struct!.idleDeleteTtl),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // auto_delete_time - computed: false, optional: true, required: false
  private _autoDeleteTime?: string | undefined; 
  public get autoDeleteTime() {
    return this.getStringAttribute('auto_delete_time');
  }
  public set autoDeleteTime(value: string | undefined) {
    this._autoDeleteTime = value;
  }
  public resetAutoDeleteTime() {
    this._autoDeleteTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteTimeInput() {
    return this._autoDeleteTime
  }

  // auto_delete_ttl - computed: false, optional: true, required: false
  private _autoDeleteTtl?: string | undefined; 
  public get autoDeleteTtl() {
    return this.getStringAttribute('auto_delete_ttl');
  }
  public set autoDeleteTtl(value: string | undefined) {
    this._autoDeleteTtl = value;
  }
  public resetAutoDeleteTtl() {
    this._autoDeleteTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteTtlInput() {
    return this._autoDeleteTtl
  }

  // idle_delete_ttl - computed: false, optional: true, required: false
  private _idleDeleteTtl?: string | undefined; 
  public get idleDeleteTtl() {
    return this.getStringAttribute('idle_delete_ttl');
  }
  public set idleDeleteTtl(value: string | undefined) {
    this._idleDeleteTtl = value;
  }
  public resetIdleDeleteTtl() {
    this._idleDeleteTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDeleteTtlInput() {
    return this._idleDeleteTtl
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
  * Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `nvidia-tesla-k80` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_type DataprocWorkflowTemplate#accelerator_type}
  */
  readonly acceleratorType?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_type DataprocWorkflowTemplate#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_local_ssds DataprocWorkflowTemplate#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number | undefined; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number | undefined) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string | undefined; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string | undefined) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number | undefined; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number | undefined) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds
  }
}
export interface DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig {
  /**
  * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` * `projects/[project_id]/global/images/[image-id]` * `image-id` Image family examples. Dataproc will use the most recent image from the family: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` * `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image DataprocWorkflowTemplate#image}
  */
  readonly image?: string;
  /**
  * Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `n1-standard-2` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#machine_type DataprocWorkflowTemplate#machine_type}
  */
  readonly machineType?: string;
  /**
  * Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#min_cpu_platform DataprocWorkflowTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, **must be set to 3**. For standard cluster [master_config](#FIELDS.master_config) groups, **must be set to 1**.
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
  readonly diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    preemptibility: cdktf.stringToTerraform(struct!.preemptibility),
    accelerators: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigToTerraform(struct!.diskConfig),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // image - computed: false, optional: true, required: false
  private _image?: string | undefined; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string | undefined) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string | undefined; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string | undefined) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string | undefined; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string | undefined) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform
  }

  // num_instances - computed: false, optional: true, required: false
  private _numInstances?: number | undefined; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number | undefined) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances
  }

  // preemptibility - computed: false, optional: true, required: false
  private _preemptibility?: string | undefined; 
  public get preemptibility() {
    return this.getStringAttribute('preemptibility');
  }
  public set preemptibility(value: string | undefined) {
    this._preemptibility = value;
  }
  public resetPreemptibility() {
    this._preemptibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibilityInput() {
    return this._preemptibility
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators[] | undefined; 
  public get accelerators() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('accelerators') as any;
  }
  public set accelerators(value: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators[] | undefined) {
    this._accelerators = value;
  }
  public resetAccelerators() {
    this._accelerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig | undefined; 
  private __diskConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigOutputReference(this as any, "disk_config", true);
  public get diskConfig() {
    return this.__diskConfigOutput;
  }
  public putDiskConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig | undefined) {
    this._diskConfig = value;
  }
  public resetDiskConfig() {
    this._diskConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig
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
  * Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `nvidia-tesla-k80` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_type DataprocWorkflowTemplate#accelerator_type}
  */
  readonly acceleratorType?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_type DataprocWorkflowTemplate#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_local_ssds DataprocWorkflowTemplate#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number | undefined; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number | undefined) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string | undefined; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string | undefined) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number | undefined; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number | undefined) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds
  }
}
export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig {
  /**
  * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` * `projects/[project_id]/global/images/[image-id]` * `image-id` Image family examples. Dataproc will use the most recent image from the family: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` * `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image DataprocWorkflowTemplate#image}
  */
  readonly image?: string;
  /**
  * Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `n1-standard-2` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#machine_type DataprocWorkflowTemplate#machine_type}
  */
  readonly machineType?: string;
  /**
  * Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#min_cpu_platform DataprocWorkflowTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, **must be set to 3**. For standard cluster [master_config](#FIELDS.master_config) groups, **must be set to 1**.
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
  readonly diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    preemptibility: cdktf.stringToTerraform(struct!.preemptibility),
    accelerators: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigToTerraform(struct!.diskConfig),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // image - computed: false, optional: true, required: false
  private _image?: string | undefined; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string | undefined) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string | undefined; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string | undefined) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string | undefined; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string | undefined) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform
  }

  // num_instances - computed: false, optional: true, required: false
  private _numInstances?: number | undefined; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number | undefined) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances
  }

  // preemptibility - computed: false, optional: true, required: false
  private _preemptibility?: string | undefined; 
  public get preemptibility() {
    return this.getStringAttribute('preemptibility');
  }
  public set preemptibility(value: string | undefined) {
    this._preemptibility = value;
  }
  public resetPreemptibility() {
    this._preemptibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibilityInput() {
    return this._preemptibility
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators[] | undefined; 
  public get accelerators() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('accelerators') as any;
  }
  public set accelerators(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators[] | undefined) {
    this._accelerators = value;
  }
  public resetAccelerators() {
    this._accelerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig | undefined; 
  private __diskConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigOutputReference(this as any, "disk_config", true);
  public get diskConfig() {
    return this.__diskConfigOutput;
  }
  public putDiskConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig | undefined) {
    this._diskConfig = value;
  }
  public resetDiskConfig() {
    this._diskConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig
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

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cross_realm_trust_admin_server - computed: false, optional: true, required: false
  private _crossRealmTrustAdminServer?: string | undefined; 
  public get crossRealmTrustAdminServer() {
    return this.getStringAttribute('cross_realm_trust_admin_server');
  }
  public set crossRealmTrustAdminServer(value: string | undefined) {
    this._crossRealmTrustAdminServer = value;
  }
  public resetCrossRealmTrustAdminServer() {
    this._crossRealmTrustAdminServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustAdminServerInput() {
    return this._crossRealmTrustAdminServer
  }

  // cross_realm_trust_kdc - computed: false, optional: true, required: false
  private _crossRealmTrustKdc?: string | undefined; 
  public get crossRealmTrustKdc() {
    return this.getStringAttribute('cross_realm_trust_kdc');
  }
  public set crossRealmTrustKdc(value: string | undefined) {
    this._crossRealmTrustKdc = value;
  }
  public resetCrossRealmTrustKdc() {
    this._crossRealmTrustKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustKdcInput() {
    return this._crossRealmTrustKdc
  }

  // cross_realm_trust_realm - computed: false, optional: true, required: false
  private _crossRealmTrustRealm?: string | undefined; 
  public get crossRealmTrustRealm() {
    return this.getStringAttribute('cross_realm_trust_realm');
  }
  public set crossRealmTrustRealm(value: string | undefined) {
    this._crossRealmTrustRealm = value;
  }
  public resetCrossRealmTrustRealm() {
    this._crossRealmTrustRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustRealmInput() {
    return this._crossRealmTrustRealm
  }

  // cross_realm_trust_shared_password - computed: false, optional: true, required: false
  private _crossRealmTrustSharedPassword?: string | undefined; 
  public get crossRealmTrustSharedPassword() {
    return this.getStringAttribute('cross_realm_trust_shared_password');
  }
  public set crossRealmTrustSharedPassword(value: string | undefined) {
    this._crossRealmTrustSharedPassword = value;
  }
  public resetCrossRealmTrustSharedPassword() {
    this._crossRealmTrustSharedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustSharedPasswordInput() {
    return this._crossRealmTrustSharedPassword
  }

  // enable_kerberos - computed: false, optional: true, required: false
  private _enableKerberos?: boolean | cdktf.IResolvable | undefined; 
  public get enableKerberos() {
    return this.getBooleanAttribute('enable_kerberos') as any;
  }
  public set enableKerberos(value: boolean | cdktf.IResolvable | undefined) {
    this._enableKerberos = value;
  }
  public resetEnableKerberos() {
    this._enableKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKerberosInput() {
    return this._enableKerberos
  }

  // kdc_db_key - computed: false, optional: true, required: false
  private _kdcDbKey?: string | undefined; 
  public get kdcDbKey() {
    return this.getStringAttribute('kdc_db_key');
  }
  public set kdcDbKey(value: string | undefined) {
    this._kdcDbKey = value;
  }
  public resetKdcDbKey() {
    this._kdcDbKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcDbKeyInput() {
    return this._kdcDbKey
  }

  // key_password - computed: false, optional: true, required: false
  private _keyPassword?: string | undefined; 
  public get keyPassword() {
    return this.getStringAttribute('key_password');
  }
  public set keyPassword(value: string | undefined) {
    this._keyPassword = value;
  }
  public resetKeyPassword() {
    this._keyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordInput() {
    return this._keyPassword
  }

  // keystore - computed: false, optional: true, required: false
  private _keystore?: string | undefined; 
  public get keystore() {
    return this.getStringAttribute('keystore');
  }
  public set keystore(value: string | undefined) {
    this._keystore = value;
  }
  public resetKeystore() {
    this._keystore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreInput() {
    return this._keystore
  }

  // keystore_password - computed: false, optional: true, required: false
  private _keystorePassword?: string | undefined; 
  public get keystorePassword() {
    return this.getStringAttribute('keystore_password');
  }
  public set keystorePassword(value: string | undefined) {
    this._keystorePassword = value;
  }
  public resetKeystorePassword() {
    this._keystorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystorePasswordInput() {
    return this._keystorePassword
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string | undefined; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string | undefined) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string | undefined; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string | undefined) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm
  }

  // root_principal_password - computed: false, optional: true, required: false
  private _rootPrincipalPassword?: string | undefined; 
  public get rootPrincipalPassword() {
    return this.getStringAttribute('root_principal_password');
  }
  public set rootPrincipalPassword(value: string | undefined) {
    this._rootPrincipalPassword = value;
  }
  public resetRootPrincipalPassword() {
    this._rootPrincipalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPrincipalPasswordInput() {
    return this._rootPrincipalPassword
  }

  // tgt_lifetime_hours - computed: false, optional: true, required: false
  private _tgtLifetimeHours?: number | undefined; 
  public get tgtLifetimeHours() {
    return this.getNumberAttribute('tgt_lifetime_hours');
  }
  public set tgtLifetimeHours(value: number | undefined) {
    this._tgtLifetimeHours = value;
  }
  public resetTgtLifetimeHours() {
    this._tgtLifetimeHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtLifetimeHoursInput() {
    return this._tgtLifetimeHours
  }

  // truststore - computed: false, optional: true, required: false
  private _truststore?: string | undefined; 
  public get truststore() {
    return this.getStringAttribute('truststore');
  }
  public set truststore(value: string | undefined) {
    this._truststore = value;
  }
  public resetTruststore() {
    this._truststore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreInput() {
    return this._truststore
  }

  // truststore_password - computed: false, optional: true, required: false
  private _truststorePassword?: string | undefined; 
  public get truststorePassword() {
    return this.getStringAttribute('truststore_password');
  }
  public set truststorePassword(value: string | undefined) {
    this._truststorePassword = value;
  }
  public resetTruststorePassword() {
    this._truststorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststorePasswordInput() {
    return this._truststorePassword
  }
}
export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig {
  /**
  * kerberos_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#kerberos_config DataprocWorkflowTemplate#kerberos_config}
  */
  readonly kerberosConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_config: dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigToTerraform(struct!.kerberosConfig),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // kerberos_config - computed: false, optional: true, required: false
  private _kerberosConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig | undefined; 
  private __kerberosConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigOutputReference(this as any, "kerberos_config", true);
  public get kerberosConfig() {
    return this.__kerberosConfigOutput;
  }
  public putKerberosConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig | undefined) {
    this._kerberosConfig = value;
  }
  public resetKerberosConfig() {
    this._kerberosConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosConfigInput() {
    return this._kerberosConfig
  }
}
export interface DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig {
  /**
  * Optional. The version of software inside the cluster. It must be one of the supported [Dataproc Versions](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the ["preview" version](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image_version DataprocWorkflowTemplate#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Optional. The set of components to activate on the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#optional_components DataprocWorkflowTemplate#optional_components}
  */
  readonly optionalComponents?: string[];
  /**
  * Optional. The properties to set on daemon config files. Property keys are specified in `prefix:property` format, for example `core:hadoop.tmp.dir`. The following are supported prefixes and their mappings: * capacity-scheduler: `capacity-scheduler.xml` * core: `core-site.xml` * distcp: `distcp-default.xml` * hdfs: `hdfs-site.xml` * hive: `hive-site.xml` * mapred: `mapred-site.xml` * pig: `pig.properties` * spark: `spark-defaults.conf` * yarn: `yarn-site.xml` For more information, see [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#properties DataprocWorkflowTemplate#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    optional_components: cdktf.listMapper(cdktf.stringToTerraform)(struct!.optionalComponents),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // image_version - computed: false, optional: true, required: false
  private _imageVersion?: string | undefined; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string | undefined) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion
  }

  // optional_components - computed: false, optional: true, required: false
  private _optionalComponents?: string[] | undefined; 
  public get optionalComponents() {
    return this.getListAttribute('optional_components');
  }
  public set optionalComponents(value: string[] | undefined) {
    this._optionalComponents = value;
  }
  public resetOptionalComponents() {
    this._optionalComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalComponentsInput() {
    return this._optionalComponents
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
}
export interface DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_count DataprocWorkflowTemplate#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `nvidia-tesla-k80` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#accelerator_type DataprocWorkflowTemplate#accelerator_type}
  */
  readonly acceleratorType?: string;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#boot_disk_type DataprocWorkflowTemplate#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#num_local_ssds DataprocWorkflowTemplate#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number | undefined; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number | undefined) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string | undefined; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string | undefined) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number | undefined; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number | undefined) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds
  }
}
export interface DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig {
  /**
  * Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` * `projects/[project_id]/global/images/[image-id]` * `image-id` Image family examples. Dataproc will use the most recent image from the family: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` * `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#image DataprocWorkflowTemplate#image}
  */
  readonly image?: string;
  /**
  * Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `n1-standard-2` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#machine_type DataprocWorkflowTemplate#machine_type}
  */
  readonly machineType?: string;
  /**
  * Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#min_cpu_platform DataprocWorkflowTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, **must be set to 3**. For standard cluster [master_config](#FIELDS.master_config) groups, **must be set to 1**.
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
  readonly diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    preemptibility: cdktf.stringToTerraform(struct!.preemptibility),
    accelerators: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigToTerraform(struct!.diskConfig),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // image - computed: false, optional: true, required: false
  private _image?: string | undefined; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string | undefined) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string | undefined; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string | undefined) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string | undefined; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string | undefined) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform
  }

  // num_instances - computed: false, optional: true, required: false
  private _numInstances?: number | undefined; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number | undefined) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances
  }

  // preemptibility - computed: false, optional: true, required: false
  private _preemptibility?: string | undefined; 
  public get preemptibility() {
    return this.getStringAttribute('preemptibility');
  }
  public set preemptibility(value: string | undefined) {
    this._preemptibility = value;
  }
  public resetPreemptibility() {
    this._preemptibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibilityInput() {
    return this._preemptibility
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators[] | undefined; 
  public get accelerators() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('accelerators') as any;
  }
  public set accelerators(value: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators[] | undefined) {
    this._accelerators = value;
  }
  public resetAccelerators() {
    this._accelerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig | undefined; 
  private __diskConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigOutputReference(this as any, "disk_config", true);
  public get diskConfig() {
    return this.__diskConfigOutput;
  }
  public putDiskConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig | undefined) {
    this._diskConfig = value;
  }
  public resetDiskConfig() {
    this._diskConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig
  }
}
export interface DataprocWorkflowTemplatePlacementManagedClusterConfig {
  /**
  * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging bucket](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). **This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.**
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#staging_bucket DataprocWorkflowTemplate#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket. **This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.**
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#temp_bucket DataprocWorkflowTemplate#temp_bucket}
  */
  readonly tempBucket?: string;
  /**
  * autoscaling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#autoscaling_config DataprocWorkflowTemplate#autoscaling_config}
  */
  readonly autoscalingConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#encryption_config DataprocWorkflowTemplate#encryption_config}
  */
  readonly encryptionConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig;
  /**
  * endpoint_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#endpoint_config DataprocWorkflowTemplate#endpoint_config}
  */
  readonly endpointConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig;
  /**
  * gce_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#gce_cluster_config DataprocWorkflowTemplate#gce_cluster_config}
  */
  readonly gceClusterConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig;
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
  readonly lifecycleConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig;
  /**
  * master_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#master_config DataprocWorkflowTemplate#master_config}
  */
  readonly masterConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig;
  /**
  * secondary_worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#secondary_worker_config DataprocWorkflowTemplate#secondary_worker_config}
  */
  readonly secondaryWorkerConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig;
  /**
  * security_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#security_config DataprocWorkflowTemplate#security_config}
  */
  readonly securityConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig;
  /**
  * software_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#software_config DataprocWorkflowTemplate#software_config}
  */
  readonly softwareConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig;
  /**
  * worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#worker_config DataprocWorkflowTemplate#worker_config}
  */
  readonly workerConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig;
}

function dataprocWorkflowTemplatePlacementManagedClusterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    staging_bucket: cdktf.stringToTerraform(struct!.stagingBucket),
    temp_bucket: cdktf.stringToTerraform(struct!.tempBucket),
    autoscaling_config: dataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigToTerraform(struct!.autoscalingConfig),
    encryption_config: dataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    endpoint_config: dataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigToTerraform(struct!.endpointConfig),
    gce_cluster_config: dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigToTerraform(struct!.gceClusterConfig),
    initialization_actions: cdktf.listMapper(dataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActionsToTerraform)(struct!.initializationActions),
    lifecycle_config: dataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigToTerraform(struct!.lifecycleConfig),
    master_config: dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigToTerraform(struct!.masterConfig),
    secondary_worker_config: dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigToTerraform(struct!.secondaryWorkerConfig),
    security_config: dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigToTerraform(struct!.securityConfig),
    software_config: dataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigToTerraform(struct!.softwareConfig),
    worker_config: dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigToTerraform(struct!.workerConfig),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // staging_bucket - computed: false, optional: true, required: false
  private _stagingBucket?: string | undefined; 
  public get stagingBucket() {
    return this.getStringAttribute('staging_bucket');
  }
  public set stagingBucket(value: string | undefined) {
    this._stagingBucket = value;
  }
  public resetStagingBucket() {
    this._stagingBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingBucketInput() {
    return this._stagingBucket
  }

  // temp_bucket - computed: false, optional: true, required: false
  private _tempBucket?: string | undefined; 
  public get tempBucket() {
    return this.getStringAttribute('temp_bucket');
  }
  public set tempBucket(value: string | undefined) {
    this._tempBucket = value;
  }
  public resetTempBucket() {
    this._tempBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempBucketInput() {
    return this._tempBucket
  }

  // autoscaling_config - computed: false, optional: true, required: false
  private _autoscalingConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig | undefined; 
  private __autoscalingConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigOutputReference(this as any, "autoscaling_config", true);
  public get autoscalingConfig() {
    return this.__autoscalingConfigOutput;
  }
  public putAutoscalingConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig | undefined) {
    this._autoscalingConfig = value;
  }
  public resetAutoscalingConfig() {
    this._autoscalingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigInput() {
    return this._autoscalingConfig
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig | undefined; 
  private __encryptionConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigOutputReference(this as any, "encryption_config", true);
  public get encryptionConfig() {
    return this.__encryptionConfigOutput;
  }
  public putEncryptionConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig | undefined) {
    this._encryptionConfig = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig
  }

  // endpoint_config - computed: false, optional: true, required: false
  private _endpointConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig | undefined; 
  private __endpointConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigOutputReference(this as any, "endpoint_config", true);
  public get endpointConfig() {
    return this.__endpointConfigOutput;
  }
  public putEndpointConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig | undefined) {
    this._endpointConfig = value;
  }
  public resetEndpointConfig() {
    this._endpointConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigInput() {
    return this._endpointConfig
  }

  // gce_cluster_config - computed: false, optional: true, required: false
  private _gceClusterConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig | undefined; 
  private __gceClusterConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigOutputReference(this as any, "gce_cluster_config", true);
  public get gceClusterConfig() {
    return this.__gceClusterConfigOutput;
  }
  public putGceClusterConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig | undefined) {
    this._gceClusterConfig = value;
  }
  public resetGceClusterConfig() {
    this._gceClusterConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceClusterConfigInput() {
    return this._gceClusterConfig
  }

  // initialization_actions - computed: false, optional: true, required: false
  private _initializationActions?: DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions[] | undefined; 
  public get initializationActions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('initialization_actions') as any;
  }
  public set initializationActions(value: DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions[] | undefined) {
    this._initializationActions = value;
  }
  public resetInitializationActions() {
    this._initializationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationActionsInput() {
    return this._initializationActions
  }

  // lifecycle_config - computed: false, optional: true, required: false
  private _lifecycleConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig | undefined; 
  private __lifecycleConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigOutputReference(this as any, "lifecycle_config", true);
  public get lifecycleConfig() {
    return this.__lifecycleConfigOutput;
  }
  public putLifecycleConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig | undefined) {
    this._lifecycleConfig = value;
  }
  public resetLifecycleConfig() {
    this._lifecycleConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigInput() {
    return this._lifecycleConfig
  }

  // master_config - computed: false, optional: true, required: false
  private _masterConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig | undefined; 
  private __masterConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigOutputReference(this as any, "master_config", true);
  public get masterConfig() {
    return this.__masterConfigOutput;
  }
  public putMasterConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig | undefined) {
    this._masterConfig = value;
  }
  public resetMasterConfig() {
    this._masterConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterConfigInput() {
    return this._masterConfig
  }

  // secondary_worker_config - computed: false, optional: true, required: false
  private _secondaryWorkerConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig | undefined; 
  private __secondaryWorkerConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigOutputReference(this as any, "secondary_worker_config", true);
  public get secondaryWorkerConfig() {
    return this.__secondaryWorkerConfigOutput;
  }
  public putSecondaryWorkerConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig | undefined) {
    this._secondaryWorkerConfig = value;
  }
  public resetSecondaryWorkerConfig() {
    this._secondaryWorkerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryWorkerConfigInput() {
    return this._secondaryWorkerConfig
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig | undefined; 
  private __securityConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigOutputReference(this as any, "security_config", true);
  public get securityConfig() {
    return this.__securityConfigOutput;
  }
  public putSecurityConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig | undefined) {
    this._securityConfig = value;
  }
  public resetSecurityConfig() {
    this._securityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig
  }

  // software_config - computed: false, optional: true, required: false
  private _softwareConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig | undefined; 
  private __softwareConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigOutputReference(this as any, "software_config", true);
  public get softwareConfig() {
    return this.__softwareConfigOutput;
  }
  public putSoftwareConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig | undefined) {
    this._softwareConfig = value;
  }
  public resetSoftwareConfig() {
    this._softwareConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareConfigInput() {
    return this._softwareConfig
  }

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig | undefined; 
  private __workerConfigOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigOutputReference(this as any, "worker_config", true);
  public get workerConfig() {
    return this.__workerConfigOutput;
  }
  public putWorkerConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig | undefined) {
    this._workerConfig = value;
  }
  public resetWorkerConfig() {
    this._workerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig
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
  * Optional. The labels to associate with this cluster. Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: p{Ll}p{Lo}{0,62} Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: [p{Ll}p{Lo}p{N}_-]{0,63} No more than 32 labels can be associated with a given cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#labels DataprocWorkflowTemplate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#config DataprocWorkflowTemplate#config}
  */
  readonly config: DataprocWorkflowTemplatePlacementManagedClusterConfig;
}

function dataprocWorkflowTemplatePlacementManagedClusterToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterOutputReference | DataprocWorkflowTemplatePlacementManagedCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    config: dataprocWorkflowTemplatePlacementManagedClusterConfigToTerraform(struct!.config),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterOutputReference extends cdktf.ComplexObject {
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

  // config - computed: false, optional: false, required: true
  private _config?: DataprocWorkflowTemplatePlacementManagedClusterConfig; 
  private __configOutput = new DataprocWorkflowTemplatePlacementManagedClusterConfigOutputReference(this as any, "config", true);
  public get config() {
    return this.__configOutput;
  }
  public putConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfig) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }
}
export interface DataprocWorkflowTemplatePlacement {
  /**
  * cluster_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#cluster_selector DataprocWorkflowTemplate#cluster_selector}
  */
  readonly clusterSelector?: DataprocWorkflowTemplatePlacementClusterSelector;
  /**
  * managed_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#managed_cluster DataprocWorkflowTemplate#managed_cluster}
  */
  readonly managedCluster?: DataprocWorkflowTemplatePlacementManagedCluster;
}

function dataprocWorkflowTemplatePlacementToTerraform(struct?: DataprocWorkflowTemplatePlacementOutputReference | DataprocWorkflowTemplatePlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_selector: dataprocWorkflowTemplatePlacementClusterSelectorToTerraform(struct!.clusterSelector),
    managed_cluster: dataprocWorkflowTemplatePlacementManagedClusterToTerraform(struct!.managedCluster),
  }
}

export class DataprocWorkflowTemplatePlacementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cluster_selector - computed: false, optional: true, required: false
  private _clusterSelector?: DataprocWorkflowTemplatePlacementClusterSelector | undefined; 
  private __clusterSelectorOutput = new DataprocWorkflowTemplatePlacementClusterSelectorOutputReference(this as any, "cluster_selector", true);
  public get clusterSelector() {
    return this.__clusterSelectorOutput;
  }
  public putClusterSelector(value: DataprocWorkflowTemplatePlacementClusterSelector | undefined) {
    this._clusterSelector = value;
  }
  public resetClusterSelector() {
    this._clusterSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelectorInput() {
    return this._clusterSelector
  }

  // managed_cluster - computed: false, optional: true, required: false
  private _managedCluster?: DataprocWorkflowTemplatePlacementManagedCluster | undefined; 
  private __managedClusterOutput = new DataprocWorkflowTemplatePlacementManagedClusterOutputReference(this as any, "managed_cluster", true);
  public get managedCluster() {
    return this.__managedClusterOutput;
  }
  public putManagedCluster(value: DataprocWorkflowTemplatePlacementManagedCluster | undefined) {
    this._managedCluster = value;
  }
  public resetManagedCluster() {
    this._managedCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterInput() {
    return this._managedCluster
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

function dataprocWorkflowTemplateTimeoutsToTerraform(struct?: DataprocWorkflowTemplateTimeoutsOutputReference | DataprocWorkflowTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DataprocWorkflowTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
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
    this._dagTimeout = config.dagTimeout;
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

  // dag_timeout - computed: false, optional: true, required: false
  private _dagTimeout?: string | undefined; 
  public get dagTimeout() {
    return this.getStringAttribute('dag_timeout');
  }
  public set dagTimeout(value: string | undefined) {
    this._dagTimeout = value;
  }
  public resetDagTimeout() {
    this._dagTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagTimeoutInput() {
    return this._dagTimeout
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
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
  private _name?: string; 
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number | undefined; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number | undefined) {
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
  private _jobs?: DataprocWorkflowTemplateJobs[]; 
  public get jobs() {
    // Getting the computed value is not yet implemented
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
  private _parameters?: DataprocWorkflowTemplateParameters[] | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: DataprocWorkflowTemplateParameters[] | undefined) {
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
  private _placement?: DataprocWorkflowTemplatePlacement; 
  private __placementOutput = new DataprocWorkflowTemplatePlacementOutputReference(this as any, "placement", true);
  public get placement() {
    return this.__placementOutput;
  }
  public putPlacement(value: DataprocWorkflowTemplatePlacement) {
    this._placement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataprocWorkflowTemplateTimeouts | undefined; 
  private __timeoutsOutput = new DataprocWorkflowTemplateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataprocWorkflowTemplateTimeouts | undefined) {
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
      dag_timeout: cdktf.stringToTerraform(this._dagTimeout),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      version: cdktf.numberToTerraform(this._version),
      jobs: cdktf.listMapper(dataprocWorkflowTemplateJobsToTerraform)(this._jobs),
      parameters: cdktf.listMapper(dataprocWorkflowTemplateParametersToTerraform)(this._parameters),
      placement: dataprocWorkflowTemplatePlacementToTerraform(this._placement),
      timeouts: dataprocWorkflowTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
