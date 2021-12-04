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

export function dataprocWorkflowTemplateJobsHadoopJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsHadoopJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsHadoopJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsHadoopJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsHadoopJobLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsHadoopJobLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
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

export function dataprocWorkflowTemplateJobsHadoopJobToTerraform(struct?: DataprocWorkflowTemplateJobsHadoopJobOutputReference | DataprocWorkflowTemplateJobsHadoopJob): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsHadoopJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarFileUris) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._mainClass) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass;
    }
    if (this._mainJarFileUri) {
      hasAnyValues = true;
      internalValueResult.mainJarFileUri = this._mainJarFileUri;
    }
    if (this._properties) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._loggingConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsHadoopJob | undefined) {
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
  private _properties?: { [key: string]: string } | cdktf.IResolvable; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _loggingConfig = new DataprocWorkflowTemplateJobsHadoopJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsHadoopJobLoggingConfig) {
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
export interface DataprocWorkflowTemplateJobsHiveJobQueryList {
  /**
  * Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } }
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#queries DataprocWorkflowTemplate#queries}
  */
  readonly queries: string[];
}

export function dataprocWorkflowTemplateJobsHiveJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsHiveJobQueryListOutputReference | DataprocWorkflowTemplateJobsHiveJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export class DataprocWorkflowTemplateJobsHiveJobQueryListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsHiveJobQueryList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queries) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsHiveJobQueryList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queries = value.queries;
    }
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
    return this._queries;
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

export function dataprocWorkflowTemplateJobsHiveJobToTerraform(struct?: DataprocWorkflowTemplateJobsHiveJobOutputReference | DataprocWorkflowTemplateJobsHiveJob): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsHiveJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueOnFailure) {
      hasAnyValues = true;
      internalValueResult.continueOnFailure = this._continueOnFailure;
    }
    if (this._jarFileUris) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._properties) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._queryFileUri) {
      hasAnyValues = true;
      internalValueResult.queryFileUri = this._queryFileUri;
    }
    if (this._scriptVariables) {
      hasAnyValues = true;
      internalValueResult.scriptVariables = this._scriptVariables;
    }
    if (this._queryList?.internalValue) {
      hasAnyValues = true;
      internalValueResult.queryList = this._queryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsHiveJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continueOnFailure = undefined;
      this._jarFileUris = undefined;
      this._properties = undefined;
      this._queryFileUri = undefined;
      this._scriptVariables = undefined;
      this._queryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continueOnFailure = value.continueOnFailure;
      this._jarFileUris = value.jarFileUris;
      this._properties = value.properties;
      this._queryFileUri = value.queryFileUri;
      this._scriptVariables = value.scriptVariables;
      this._queryList.internalValue = value.queryList;
    }
  }

  // continue_on_failure - computed: false, optional: true, required: false
  private _continueOnFailure?: boolean | cdktf.IResolvable; 
  public get continueOnFailure() {
    return this.getBooleanAttribute('continue_on_failure') as any;
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
  private _properties?: { [key: string]: string } | cdktf.IResolvable; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable) {
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

  // script_variables - computed: false, optional: true, required: false
  private _scriptVariables?: { [key: string]: string } | cdktf.IResolvable; 
  public get scriptVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('script_variables') as any;
  }
  public set scriptVariables(value: { [key: string]: string } | cdktf.IResolvable) {
    this._scriptVariables = value;
  }
  public resetScriptVariables() {
    this._scriptVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptVariablesInput() {
    return this._scriptVariables;
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList = new DataprocWorkflowTemplateJobsHiveJobQueryListOutputReference(this as any, "query_list", true);
  public get queryList() {
    return this._queryList;
  }
  public putQueryList(value: DataprocWorkflowTemplateJobsHiveJobQueryList) {
    this._queryList.internalValue = value;
  }
  public resetQueryList() {
    this._queryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList.internalValue;
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

export function dataprocWorkflowTemplateJobsPigJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsPigJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsPigJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsPigJobLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsPigJobLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
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

export function dataprocWorkflowTemplateJobsPigJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobQueryListOutputReference | DataprocWorkflowTemplateJobsPigJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export class DataprocWorkflowTemplateJobsPigJobQueryListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsPigJobQueryList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queries) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsPigJobQueryList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queries = value.queries;
    }
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
    return this._queries;
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

export function dataprocWorkflowTemplateJobsPigJobToTerraform(struct?: DataprocWorkflowTemplateJobsPigJobOutputReference | DataprocWorkflowTemplateJobsPigJob): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsPigJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueOnFailure) {
      hasAnyValues = true;
      internalValueResult.continueOnFailure = this._continueOnFailure;
    }
    if (this._jarFileUris) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._properties) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._queryFileUri) {
      hasAnyValues = true;
      internalValueResult.queryFileUri = this._queryFileUri;
    }
    if (this._scriptVariables) {
      hasAnyValues = true;
      internalValueResult.scriptVariables = this._scriptVariables;
    }
    if (this._loggingConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    if (this._queryList?.internalValue) {
      hasAnyValues = true;
      internalValueResult.queryList = this._queryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsPigJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continueOnFailure = undefined;
      this._jarFileUris = undefined;
      this._properties = undefined;
      this._queryFileUri = undefined;
      this._scriptVariables = undefined;
      this._loggingConfig.internalValue = undefined;
      this._queryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continueOnFailure = value.continueOnFailure;
      this._jarFileUris = value.jarFileUris;
      this._properties = value.properties;
      this._queryFileUri = value.queryFileUri;
      this._scriptVariables = value.scriptVariables;
      this._loggingConfig.internalValue = value.loggingConfig;
      this._queryList.internalValue = value.queryList;
    }
  }

  // continue_on_failure - computed: false, optional: true, required: false
  private _continueOnFailure?: boolean | cdktf.IResolvable; 
  public get continueOnFailure() {
    return this.getBooleanAttribute('continue_on_failure') as any;
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
  private _properties?: { [key: string]: string } | cdktf.IResolvable; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable) {
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

  // script_variables - computed: false, optional: true, required: false
  private _scriptVariables?: { [key: string]: string } | cdktf.IResolvable; 
  public get scriptVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('script_variables') as any;
  }
  public set scriptVariables(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _loggingConfig = new DataprocWorkflowTemplateJobsPigJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsPigJobLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList = new DataprocWorkflowTemplateJobsPigJobQueryListOutputReference(this as any, "query_list", true);
  public get queryList() {
    return this._queryList;
  }
  public putQueryList(value: DataprocWorkflowTemplateJobsPigJobQueryList) {
    this._queryList.internalValue = value;
  }
  public resetQueryList() {
    this._queryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList.internalValue;
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

export function dataprocWorkflowTemplateJobsPrestoJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsPrestoJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsPrestoJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsPrestoJobLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsPrestoJobLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
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

export function dataprocWorkflowTemplateJobsPrestoJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobQueryListOutputReference | DataprocWorkflowTemplateJobsPrestoJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export class DataprocWorkflowTemplateJobsPrestoJobQueryListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsPrestoJobQueryList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queries) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsPrestoJobQueryList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queries = value.queries;
    }
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
    return this._queries;
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

export function dataprocWorkflowTemplateJobsPrestoJobToTerraform(struct?: DataprocWorkflowTemplateJobsPrestoJobOutputReference | DataprocWorkflowTemplateJobsPrestoJob): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsPrestoJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientTags) {
      hasAnyValues = true;
      internalValueResult.clientTags = this._clientTags;
    }
    if (this._continueOnFailure) {
      hasAnyValues = true;
      internalValueResult.continueOnFailure = this._continueOnFailure;
    }
    if (this._outputFormat) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._properties) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._queryFileUri) {
      hasAnyValues = true;
      internalValueResult.queryFileUri = this._queryFileUri;
    }
    if (this._loggingConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    if (this._queryList?.internalValue) {
      hasAnyValues = true;
      internalValueResult.queryList = this._queryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsPrestoJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientTags = undefined;
      this._continueOnFailure = undefined;
      this._outputFormat = undefined;
      this._properties = undefined;
      this._queryFileUri = undefined;
      this._loggingConfig.internalValue = undefined;
      this._queryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientTags = value.clientTags;
      this._continueOnFailure = value.continueOnFailure;
      this._outputFormat = value.outputFormat;
      this._properties = value.properties;
      this._queryFileUri = value.queryFileUri;
      this._loggingConfig.internalValue = value.loggingConfig;
      this._queryList.internalValue = value.queryList;
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
    return this.getBooleanAttribute('continue_on_failure') as any;
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
  private _properties?: { [key: string]: string } | cdktf.IResolvable; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable) {
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

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new DataprocWorkflowTemplateJobsPrestoJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsPrestoJobLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList = new DataprocWorkflowTemplateJobsPrestoJobQueryListOutputReference(this as any, "query_list", true);
  public get queryList() {
    return this._queryList;
  }
  public putQueryList(value: DataprocWorkflowTemplateJobsPrestoJobQueryList) {
    this._queryList.internalValue = value;
  }
  public resetQueryList() {
    this._queryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList.internalValue;
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

export function dataprocWorkflowTemplateJobsPysparkJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsPysparkJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsPysparkJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsPysparkJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsPysparkJobLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsPysparkJobLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
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

export function dataprocWorkflowTemplateJobsPysparkJobToTerraform(struct?: DataprocWorkflowTemplateJobsPysparkJobOutputReference | DataprocWorkflowTemplateJobsPysparkJob): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsPysparkJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarFileUris) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._mainPythonFileUri) {
      hasAnyValues = true;
      internalValueResult.mainPythonFileUri = this._mainPythonFileUri;
    }
    if (this._properties) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._pythonFileUris) {
      hasAnyValues = true;
      internalValueResult.pythonFileUris = this._pythonFileUris;
    }
    if (this._loggingConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsPysparkJob | undefined) {
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
  private _properties?: { [key: string]: string } | cdktf.IResolvable; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _loggingConfig = new DataprocWorkflowTemplateJobsPysparkJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsPysparkJobLoggingConfig) {
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

export function dataprocWorkflowTemplateJobsSchedulingToTerraform(struct?: DataprocWorkflowTemplateJobsSchedulingOutputReference | DataprocWorkflowTemplateJobsScheduling): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFailuresPerHour) {
      hasAnyValues = true;
      internalValueResult.maxFailuresPerHour = this._maxFailuresPerHour;
    }
    if (this._maxFailuresTotal) {
      hasAnyValues = true;
      internalValueResult.maxFailuresTotal = this._maxFailuresTotal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsScheduling | undefined) {
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

  // max_failures_per_hour - computed: false, optional: true, required: false
  private _maxFailuresPerHour?: number; 
  public get maxFailuresPerHour() {
    return this.getNumberAttribute('max_failures_per_hour');
  }
  public set maxFailuresPerHour(value: number) {
    this._maxFailuresPerHour = value;
  }
  public resetMaxFailuresPerHour() {
    this._maxFailuresPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailuresPerHourInput() {
    return this._maxFailuresPerHour;
  }

  // max_failures_total - computed: false, optional: true, required: false
  private _maxFailuresTotal?: number; 
  public get maxFailuresTotal() {
    return this.getNumberAttribute('max_failures_total');
  }
  public set maxFailuresTotal(value: number) {
    this._maxFailuresTotal = value;
  }
  public resetMaxFailuresTotal() {
    this._maxFailuresTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailuresTotalInput() {
    return this._maxFailuresTotal;
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

export function dataprocWorkflowTemplateJobsSparkJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsSparkJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsSparkJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsSparkJobLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsSparkJobLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
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

export function dataprocWorkflowTemplateJobsSparkJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkJobOutputReference | DataprocWorkflowTemplateJobsSparkJob): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsSparkJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarFileUris) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._mainClass) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass;
    }
    if (this._mainJarFileUri) {
      hasAnyValues = true;
      internalValueResult.mainJarFileUri = this._mainJarFileUri;
    }
    if (this._properties) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._loggingConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsSparkJob | undefined) {
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
  private _properties?: { [key: string]: string } | cdktf.IResolvable; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _loggingConfig = new DataprocWorkflowTemplateJobsSparkJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsSparkJobLoggingConfig) {
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
export interface DataprocWorkflowTemplateJobsSparkRJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

export function dataprocWorkflowTemplateJobsSparkRJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkRJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsSparkRJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsSparkRJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsSparkRJobLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsSparkRJobLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
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

export function dataprocWorkflowTemplateJobsSparkRJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkRJobOutputReference | DataprocWorkflowTemplateJobsSparkRJob): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsSparkRJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._mainRFileUri) {
      hasAnyValues = true;
      internalValueResult.mainRFileUri = this._mainRFileUri;
    }
    if (this._properties) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._loggingConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsSparkRJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._args = undefined;
      this._fileUris = undefined;
      this._mainRFileUri = undefined;
      this._properties = undefined;
      this._loggingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._args = value.args;
      this._fileUris = value.fileUris;
      this._mainRFileUri = value.mainRFileUri;
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
    return this._mainRFileUri;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _loggingConfig = new DataprocWorkflowTemplateJobsSparkRJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsSparkRJobLoggingConfig) {
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
export interface DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig {
  /**
  * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_workflow_template.html#driver_log_levels DataprocWorkflowTemplate#driver_log_levels}
  */
  readonly driverLogLevels?: { [key: string]: string } | cdktf.IResolvable;
}

export function dataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigOutputReference | DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_log_levels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverLogLevels),
  }
}

export class DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverLogLevels) {
      hasAnyValues = true;
      internalValueResult.driverLogLevels = this._driverLogLevels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverLogLevels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverLogLevels = value.driverLogLevels;
    }
  }

  // driver_log_levels - computed: false, optional: true, required: false
  private _driverLogLevels?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverLogLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_log_levels') as any;
  }
  public set driverLogLevels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverLogLevels = value;
  }
  public resetDriverLogLevels() {
    this._driverLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLogLevelsInput() {
    return this._driverLogLevels;
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

export function dataprocWorkflowTemplateJobsSparkSqlJobQueryListToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobQueryListOutputReference | DataprocWorkflowTemplateJobsSparkSqlJobQueryList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queries),
  }
}

export class DataprocWorkflowTemplateJobsSparkSqlJobQueryListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsSparkSqlJobQueryList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queries) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsSparkSqlJobQueryList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queries = value.queries;
    }
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
    return this._queries;
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

export function dataprocWorkflowTemplateJobsSparkSqlJobToTerraform(struct?: DataprocWorkflowTemplateJobsSparkSqlJobOutputReference | DataprocWorkflowTemplateJobsSparkSqlJob): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateJobsSparkSqlJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jarFileUris) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._properties) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._queryFileUri) {
      hasAnyValues = true;
      internalValueResult.queryFileUri = this._queryFileUri;
    }
    if (this._scriptVariables) {
      hasAnyValues = true;
      internalValueResult.scriptVariables = this._scriptVariables;
    }
    if (this._loggingConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    if (this._queryList?.internalValue) {
      hasAnyValues = true;
      internalValueResult.queryList = this._queryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateJobsSparkSqlJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jarFileUris = undefined;
      this._properties = undefined;
      this._queryFileUri = undefined;
      this._scriptVariables = undefined;
      this._loggingConfig.internalValue = undefined;
      this._queryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jarFileUris = value.jarFileUris;
      this._properties = value.properties;
      this._queryFileUri = value.queryFileUri;
      this._scriptVariables = value.scriptVariables;
      this._loggingConfig.internalValue = value.loggingConfig;
      this._queryList.internalValue = value.queryList;
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
  private _properties?: { [key: string]: string } | cdktf.IResolvable; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable) {
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

  // script_variables - computed: false, optional: true, required: false
  private _scriptVariables?: { [key: string]: string } | cdktf.IResolvable; 
  public get scriptVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('script_variables') as any;
  }
  public set scriptVariables(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _loggingConfig = new DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfigOutputReference(this as any, "logging_config", true);
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DataprocWorkflowTemplateJobsSparkSqlJobLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList = new DataprocWorkflowTemplateJobsSparkSqlJobQueryListOutputReference(this as any, "query_list", true);
  public get queryList() {
    return this._queryList;
  }
  public putQueryList(value: DataprocWorkflowTemplateJobsSparkSqlJobQueryList) {
    this._queryList.internalValue = value;
  }
  public resetQueryList() {
    this._queryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList.internalValue;
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

export function dataprocWorkflowTemplateJobsToTerraform(struct?: DataprocWorkflowTemplateJobs): any {
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

export function dataprocWorkflowTemplateParametersValidationRegexToTerraform(struct?: DataprocWorkflowTemplateParametersValidationRegexOutputReference | DataprocWorkflowTemplateParametersValidationRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regexes),
  }
}

export class DataprocWorkflowTemplateParametersValidationRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateParametersValidationRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexes) {
      hasAnyValues = true;
      internalValueResult.regexes = this._regexes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateParametersValidationRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regexes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regexes = value.regexes;
    }
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
    return this._regexes;
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

export function dataprocWorkflowTemplateParametersValidationValuesToTerraform(struct?: DataprocWorkflowTemplateParametersValidationValuesOutputReference | DataprocWorkflowTemplateParametersValidationValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataprocWorkflowTemplateParametersValidationValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateParametersValidationValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateParametersValidationValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
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
    return this._values;
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

export function dataprocWorkflowTemplateParametersValidationToTerraform(struct?: DataprocWorkflowTemplateParametersValidationOutputReference | DataprocWorkflowTemplateParametersValidation): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateParametersValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex?.internalValue) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex?.internalValue;
    }
    if (this._values?.internalValue) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateParametersValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex.internalValue = value.regex;
      this._values.internalValue = value.values;
    }
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new DataprocWorkflowTemplateParametersValidationRegexOutputReference(this as any, "regex", true);
  public get regex() {
    return this._regex;
  }
  public putRegex(value: DataprocWorkflowTemplateParametersValidationRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values = new DataprocWorkflowTemplateParametersValidationValuesOutputReference(this as any, "values", true);
  public get values() {
    return this._values;
  }
  public putValues(value: DataprocWorkflowTemplateParametersValidationValues) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
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

export function dataprocWorkflowTemplateParametersToTerraform(struct?: DataprocWorkflowTemplateParameters): any {
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

export function dataprocWorkflowTemplatePlacementClusterSelectorToTerraform(struct?: DataprocWorkflowTemplatePlacementClusterSelectorOutputReference | DataprocWorkflowTemplatePlacementClusterSelector): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementClusterSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterLabels) {
      hasAnyValues = true;
      internalValueResult.clusterLabels = this._clusterLabels;
    }
    if (this._zone) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementClusterSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterLabels = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterLabels = value.clusterLabels;
      this._zone = value.zone;
    }
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
    return this._clusterLabels;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gce_pd_kms_key_name: cdktf.stringToTerraform(struct!.gcePdKmsKeyName),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcePdKmsKeyName) {
      hasAnyValues = true;
      internalValueResult.gcePdKmsKeyName = this._gcePdKmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcePdKmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcePdKmsKeyName = value.gcePdKmsKeyName;
    }
  }

  // gce_pd_kms_key_name - computed: false, optional: true, required: false
  private _gcePdKmsKeyName?: string; 
  public get gcePdKmsKeyName() {
    return this.getStringAttribute('gce_pd_kms_key_name');
  }
  public set gcePdKmsKeyName(value: string) {
    this._gcePdKmsKeyName = value;
  }
  public resetGcePdKmsKeyName() {
    this._gcePdKmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePdKmsKeyNameInput() {
    return this._gcePdKmsKeyName;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_http_port_access: cdktf.booleanToTerraform(struct!.enableHttpPortAccess),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHttpPortAccess) {
      hasAnyValues = true;
      internalValueResult.enableHttpPortAccess = this._enableHttpPortAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableHttpPortAccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableHttpPortAccess = value.enableHttpPortAccess;
    }
  }

  // enable_http_port_access - computed: false, optional: true, required: false
  private _enableHttpPortAccess?: boolean | cdktf.IResolvable; 
  public get enableHttpPortAccess() {
    return this.getBooleanAttribute('enable_http_port_access') as any;
  }
  public set enableHttpPortAccess(value: boolean | cdktf.IResolvable) {
    this._enableHttpPortAccess = value;
  }
  public resetEnableHttpPortAccess() {
    this._enableHttpPortAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpPortAccessInput() {
    return this._enableHttpPortAccess;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeGroup) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeGroup = value.nodeGroup;
    }
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
    return this._nodeGroup;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._key) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: true, required: false
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  public resetConsumeReservationType() {
    this._consumeReservationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIpOnly) {
      hasAnyValues = true;
      internalValueResult.internalIpOnly = this._internalIpOnly;
    }
    if (this._metadata) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._network) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._privateIpv6GoogleAccess) {
      hasAnyValues = true;
      internalValueResult.privateIpv6GoogleAccess = this._privateIpv6GoogleAccess;
    }
    if (this._serviceAccount) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountScopes) {
      hasAnyValues = true;
      internalValueResult.serviceAccountScopes = this._serviceAccountScopes;
    }
    if (this._subnetwork) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tags) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._zone) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._nodeGroupAffinity?.internalValue) {
      hasAnyValues = true;
      internalValueResult.nodeGroupAffinity = this._nodeGroupAffinity?.internalValue;
    }
    if (this._reservationAffinity?.internalValue) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalIpOnly = undefined;
      this._metadata = undefined;
      this._network = undefined;
      this._privateIpv6GoogleAccess = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountScopes = undefined;
      this._subnetwork = undefined;
      this._tags = undefined;
      this._zone = undefined;
      this._nodeGroupAffinity.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalIpOnly = value.internalIpOnly;
      this._metadata = value.metadata;
      this._network = value.network;
      this._privateIpv6GoogleAccess = value.privateIpv6GoogleAccess;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountScopes = value.serviceAccountScopes;
      this._subnetwork = value.subnetwork;
      this._tags = value.tags;
      this._zone = value.zone;
      this._nodeGroupAffinity.internalValue = value.nodeGroupAffinity;
      this._reservationAffinity.internalValue = value.reservationAffinity;
    }
  }

  // internal_ip_only - computed: true, optional: true, required: false
  private _internalIpOnly?: boolean | cdktf.IResolvable; 
  public get internalIpOnly() {
    return this.getBooleanAttribute('internal_ip_only') as any;
  }
  public set internalIpOnly(value: boolean | cdktf.IResolvable) {
    this._internalIpOnly = value;
  }
  public resetInternalIpOnly() {
    this._internalIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpOnlyInput() {
    return this._internalIpOnly;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // private_ipv6_google_access - computed: false, optional: true, required: false
  private _privateIpv6GoogleAccess?: string; 
  public get privateIpv6GoogleAccess() {
    return this.getStringAttribute('private_ipv6_google_access');
  }
  public set privateIpv6GoogleAccess(value: string) {
    this._privateIpv6GoogleAccess = value;
  }
  public resetPrivateIpv6GoogleAccess() {
    this._privateIpv6GoogleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv6GoogleAccessInput() {
    return this._privateIpv6GoogleAccess;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_account_scopes - computed: false, optional: true, required: false
  private _serviceAccountScopes?: string[]; 
  public get serviceAccountScopes() {
    return this.getListAttribute('service_account_scopes');
  }
  public set serviceAccountScopes(value: string[]) {
    this._serviceAccountScopes = value;
  }
  public resetServiceAccountScopes() {
    this._serviceAccountScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountScopesInput() {
    return this._serviceAccountScopes;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // node_group_affinity - computed: false, optional: true, required: false
  private _nodeGroupAffinity = new DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinityOutputReference(this as any, "node_group_affinity", true);
  public get nodeGroupAffinity() {
    return this._nodeGroupAffinity;
  }
  public putNodeGroupAffinity(value: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity) {
    this._nodeGroupAffinity.internalValue = value;
  }
  public resetNodeGroupAffinity() {
    this._nodeGroupAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupAffinityInput() {
    return this._nodeGroupAffinity.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinityOutputReference(this as any, "reservation_affinity", true);
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActionsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions): any {
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeleteTime) {
      hasAnyValues = true;
      internalValueResult.autoDeleteTime = this._autoDeleteTime;
    }
    if (this._autoDeleteTtl) {
      hasAnyValues = true;
      internalValueResult.autoDeleteTtl = this._autoDeleteTtl;
    }
    if (this._idleDeleteTtl) {
      hasAnyValues = true;
      internalValueResult.idleDeleteTtl = this._idleDeleteTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDeleteTime = undefined;
      this._autoDeleteTtl = undefined;
      this._idleDeleteTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDeleteTime = value.autoDeleteTime;
      this._autoDeleteTtl = value.autoDeleteTtl;
      this._idleDeleteTtl = value.idleDeleteTtl;
    }
  }

  // auto_delete_time - computed: false, optional: true, required: false
  private _autoDeleteTime?: string; 
  public get autoDeleteTime() {
    return this.getStringAttribute('auto_delete_time');
  }
  public set autoDeleteTime(value: string) {
    this._autoDeleteTime = value;
  }
  public resetAutoDeleteTime() {
    this._autoDeleteTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteTimeInput() {
    return this._autoDeleteTime;
  }

  // auto_delete_ttl - computed: false, optional: true, required: false
  private _autoDeleteTtl?: string; 
  public get autoDeleteTtl() {
    return this.getStringAttribute('auto_delete_ttl');
  }
  public set autoDeleteTtl(value: string) {
    this._autoDeleteTtl = value;
  }
  public resetAutoDeleteTtl() {
    this._autoDeleteTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteTtlInput() {
    return this._autoDeleteTtl;
  }

  // idle_delete_ttl - computed: false, optional: true, required: false
  private _idleDeleteTtl?: string; 
  public get idleDeleteTtl() {
    return this.getStringAttribute('idle_delete_ttl');
  }
  public set idleDeleteTtl(value: string) {
    this._idleDeleteTtl = value;
  }
  public resetIdleDeleteTtl() {
    this._idleDeleteTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDeleteTtlInput() {
    return this._idleDeleteTtl;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators): any {
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._numLocalSsds) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._machineType) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._numInstances) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._preemptibility) {
      hasAnyValues = true;
      internalValueResult.preemptibility = this._preemptibility;
    }
    if (this._accelerators) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators;
    }
    if (this._diskConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._numInstances = undefined;
      this._preemptibility = undefined;
      this._accelerators = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._numInstances = value.numInstances;
      this._preemptibility = value.preemptibility;
      this._accelerators = value.accelerators;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // num_instances - computed: false, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // preemptibility - computed: false, optional: true, required: false
  private _preemptibility?: string; 
  public get preemptibility() {
    return this.getStringAttribute('preemptibility');
  }
  public set preemptibility(value: string) {
    this._preemptibility = value;
  }
  public resetPreemptibility() {
    this._preemptibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibilityInput() {
    return this._preemptibility;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators[]; 
  public get accelerators() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('accelerators') as any;
  }
  public set accelerators(value: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerators[]) {
    this._accelerators = value;
  }
  public resetAccelerators() {
    this._accelerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfigOutputReference(this as any, "disk_config", true);
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators): any {
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._numLocalSsds) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._machineType) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._numInstances) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._preemptibility) {
      hasAnyValues = true;
      internalValueResult.preemptibility = this._preemptibility;
    }
    if (this._accelerators) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators;
    }
    if (this._diskConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._numInstances = undefined;
      this._preemptibility = undefined;
      this._accelerators = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._numInstances = value.numInstances;
      this._preemptibility = value.preemptibility;
      this._accelerators = value.accelerators;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // num_instances - computed: false, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // preemptibility - computed: false, optional: true, required: false
  private _preemptibility?: string; 
  public get preemptibility() {
    return this.getStringAttribute('preemptibility');
  }
  public set preemptibility(value: string) {
    this._preemptibility = value;
  }
  public resetPreemptibility() {
    this._preemptibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibilityInput() {
    return this._preemptibility;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators[]; 
  public get accelerators() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('accelerators') as any;
  }
  public set accelerators(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerators[]) {
    this._accelerators = value;
  }
  public resetAccelerators() {
    this._accelerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfigOutputReference(this as any, "disk_config", true);
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossRealmTrustAdminServer) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustAdminServer = this._crossRealmTrustAdminServer;
    }
    if (this._crossRealmTrustKdc) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustKdc = this._crossRealmTrustKdc;
    }
    if (this._crossRealmTrustRealm) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustRealm = this._crossRealmTrustRealm;
    }
    if (this._crossRealmTrustSharedPassword) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustSharedPassword = this._crossRealmTrustSharedPassword;
    }
    if (this._enableKerberos) {
      hasAnyValues = true;
      internalValueResult.enableKerberos = this._enableKerberos;
    }
    if (this._kdcDbKey) {
      hasAnyValues = true;
      internalValueResult.kdcDbKey = this._kdcDbKey;
    }
    if (this._keyPassword) {
      hasAnyValues = true;
      internalValueResult.keyPassword = this._keyPassword;
    }
    if (this._keystore) {
      hasAnyValues = true;
      internalValueResult.keystore = this._keystore;
    }
    if (this._keystorePassword) {
      hasAnyValues = true;
      internalValueResult.keystorePassword = this._keystorePassword;
    }
    if (this._kmsKey) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._realm) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._rootPrincipalPassword) {
      hasAnyValues = true;
      internalValueResult.rootPrincipalPassword = this._rootPrincipalPassword;
    }
    if (this._tgtLifetimeHours) {
      hasAnyValues = true;
      internalValueResult.tgtLifetimeHours = this._tgtLifetimeHours;
    }
    if (this._truststore) {
      hasAnyValues = true;
      internalValueResult.truststore = this._truststore;
    }
    if (this._truststorePassword) {
      hasAnyValues = true;
      internalValueResult.truststorePassword = this._truststorePassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossRealmTrustAdminServer = undefined;
      this._crossRealmTrustKdc = undefined;
      this._crossRealmTrustRealm = undefined;
      this._crossRealmTrustSharedPassword = undefined;
      this._enableKerberos = undefined;
      this._kdcDbKey = undefined;
      this._keyPassword = undefined;
      this._keystore = undefined;
      this._keystorePassword = undefined;
      this._kmsKey = undefined;
      this._realm = undefined;
      this._rootPrincipalPassword = undefined;
      this._tgtLifetimeHours = undefined;
      this._truststore = undefined;
      this._truststorePassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossRealmTrustAdminServer = value.crossRealmTrustAdminServer;
      this._crossRealmTrustKdc = value.crossRealmTrustKdc;
      this._crossRealmTrustRealm = value.crossRealmTrustRealm;
      this._crossRealmTrustSharedPassword = value.crossRealmTrustSharedPassword;
      this._enableKerberos = value.enableKerberos;
      this._kdcDbKey = value.kdcDbKey;
      this._keyPassword = value.keyPassword;
      this._keystore = value.keystore;
      this._keystorePassword = value.keystorePassword;
      this._kmsKey = value.kmsKey;
      this._realm = value.realm;
      this._rootPrincipalPassword = value.rootPrincipalPassword;
      this._tgtLifetimeHours = value.tgtLifetimeHours;
      this._truststore = value.truststore;
      this._truststorePassword = value.truststorePassword;
    }
  }

  // cross_realm_trust_admin_server - computed: false, optional: true, required: false
  private _crossRealmTrustAdminServer?: string; 
  public get crossRealmTrustAdminServer() {
    return this.getStringAttribute('cross_realm_trust_admin_server');
  }
  public set crossRealmTrustAdminServer(value: string) {
    this._crossRealmTrustAdminServer = value;
  }
  public resetCrossRealmTrustAdminServer() {
    this._crossRealmTrustAdminServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustAdminServerInput() {
    return this._crossRealmTrustAdminServer;
  }

  // cross_realm_trust_kdc - computed: false, optional: true, required: false
  private _crossRealmTrustKdc?: string; 
  public get crossRealmTrustKdc() {
    return this.getStringAttribute('cross_realm_trust_kdc');
  }
  public set crossRealmTrustKdc(value: string) {
    this._crossRealmTrustKdc = value;
  }
  public resetCrossRealmTrustKdc() {
    this._crossRealmTrustKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustKdcInput() {
    return this._crossRealmTrustKdc;
  }

  // cross_realm_trust_realm - computed: false, optional: true, required: false
  private _crossRealmTrustRealm?: string; 
  public get crossRealmTrustRealm() {
    return this.getStringAttribute('cross_realm_trust_realm');
  }
  public set crossRealmTrustRealm(value: string) {
    this._crossRealmTrustRealm = value;
  }
  public resetCrossRealmTrustRealm() {
    this._crossRealmTrustRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustRealmInput() {
    return this._crossRealmTrustRealm;
  }

  // cross_realm_trust_shared_password - computed: false, optional: true, required: false
  private _crossRealmTrustSharedPassword?: string; 
  public get crossRealmTrustSharedPassword() {
    return this.getStringAttribute('cross_realm_trust_shared_password');
  }
  public set crossRealmTrustSharedPassword(value: string) {
    this._crossRealmTrustSharedPassword = value;
  }
  public resetCrossRealmTrustSharedPassword() {
    this._crossRealmTrustSharedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustSharedPasswordInput() {
    return this._crossRealmTrustSharedPassword;
  }

  // enable_kerberos - computed: false, optional: true, required: false
  private _enableKerberos?: boolean | cdktf.IResolvable; 
  public get enableKerberos() {
    return this.getBooleanAttribute('enable_kerberos') as any;
  }
  public set enableKerberos(value: boolean | cdktf.IResolvable) {
    this._enableKerberos = value;
  }
  public resetEnableKerberos() {
    this._enableKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKerberosInput() {
    return this._enableKerberos;
  }

  // kdc_db_key - computed: false, optional: true, required: false
  private _kdcDbKey?: string; 
  public get kdcDbKey() {
    return this.getStringAttribute('kdc_db_key');
  }
  public set kdcDbKey(value: string) {
    this._kdcDbKey = value;
  }
  public resetKdcDbKey() {
    this._kdcDbKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcDbKeyInput() {
    return this._kdcDbKey;
  }

  // key_password - computed: false, optional: true, required: false
  private _keyPassword?: string; 
  public get keyPassword() {
    return this.getStringAttribute('key_password');
  }
  public set keyPassword(value: string) {
    this._keyPassword = value;
  }
  public resetKeyPassword() {
    this._keyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordInput() {
    return this._keyPassword;
  }

  // keystore - computed: false, optional: true, required: false
  private _keystore?: string; 
  public get keystore() {
    return this.getStringAttribute('keystore');
  }
  public set keystore(value: string) {
    this._keystore = value;
  }
  public resetKeystore() {
    this._keystore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreInput() {
    return this._keystore;
  }

  // keystore_password - computed: false, optional: true, required: false
  private _keystorePassword?: string; 
  public get keystorePassword() {
    return this.getStringAttribute('keystore_password');
  }
  public set keystorePassword(value: string) {
    this._keystorePassword = value;
  }
  public resetKeystorePassword() {
    this._keystorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystorePasswordInput() {
    return this._keystorePassword;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // root_principal_password - computed: false, optional: true, required: false
  private _rootPrincipalPassword?: string; 
  public get rootPrincipalPassword() {
    return this.getStringAttribute('root_principal_password');
  }
  public set rootPrincipalPassword(value: string) {
    this._rootPrincipalPassword = value;
  }
  public resetRootPrincipalPassword() {
    this._rootPrincipalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPrincipalPasswordInput() {
    return this._rootPrincipalPassword;
  }

  // tgt_lifetime_hours - computed: false, optional: true, required: false
  private _tgtLifetimeHours?: number; 
  public get tgtLifetimeHours() {
    return this.getNumberAttribute('tgt_lifetime_hours');
  }
  public set tgtLifetimeHours(value: number) {
    this._tgtLifetimeHours = value;
  }
  public resetTgtLifetimeHours() {
    this._tgtLifetimeHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtLifetimeHoursInput() {
    return this._tgtLifetimeHours;
  }

  // truststore - computed: false, optional: true, required: false
  private _truststore?: string; 
  public get truststore() {
    return this.getStringAttribute('truststore');
  }
  public set truststore(value: string) {
    this._truststore = value;
  }
  public resetTruststore() {
    this._truststore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreInput() {
    return this._truststore;
  }

  // truststore_password - computed: false, optional: true, required: false
  private _truststorePassword?: string; 
  public get truststorePassword() {
    return this.getStringAttribute('truststore_password');
  }
  public set truststorePassword(value: string) {
    this._truststorePassword = value;
  }
  public resetTruststorePassword() {
    this._truststorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststorePasswordInput() {
    return this._truststorePassword;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_config: dataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigToTerraform(struct!.kerberosConfig),
  }
}

export class DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.kerberosConfig = this._kerberosConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kerberosConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kerberosConfig.internalValue = value.kerberosConfig;
    }
  }

  // kerberos_config - computed: false, optional: true, required: false
  private _kerberosConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfigOutputReference(this as any, "kerberos_config", true);
  public get kerberosConfig() {
    return this._kerberosConfig;
  }
  public putKerberosConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigKerberosConfig) {
    this._kerberosConfig.internalValue = value;
  }
  public resetKerberosConfig() {
    this._kerberosConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosConfigInput() {
    return this._kerberosConfig.internalValue;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageVersion) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    if (this._optionalComponents) {
      hasAnyValues = true;
      internalValueResult.optionalComponents = this._optionalComponents;
    }
    if (this._properties) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageVersion = undefined;
      this._optionalComponents = undefined;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageVersion = value.imageVersion;
      this._optionalComponents = value.optionalComponents;
      this._properties = value.properties;
    }
  }

  // image_version - computed: false, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // optional_components - computed: false, optional: true, required: false
  private _optionalComponents?: string[]; 
  public get optionalComponents() {
    return this.getListAttribute('optional_components');
  }
  public set optionalComponents(value: string[]) {
    this._optionalComponents = value;
  }
  public resetOptionalComponents() {
    this._optionalComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalComponentsInput() {
    return this._optionalComponents;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAcceleratorsToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators): any {
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._numLocalSsds) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._machineType) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._numInstances) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._preemptibility) {
      hasAnyValues = true;
      internalValueResult.preemptibility = this._preemptibility;
    }
    if (this._accelerators) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators;
    }
    if (this._diskConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._numInstances = undefined;
      this._preemptibility = undefined;
      this._accelerators = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._numInstances = value.numInstances;
      this._preemptibility = value.preemptibility;
      this._accelerators = value.accelerators;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // num_instances - computed: false, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // preemptibility - computed: false, optional: true, required: false
  private _preemptibility?: string; 
  public get preemptibility() {
    return this.getStringAttribute('preemptibility');
  }
  public set preemptibility(value: string) {
    this._preemptibility = value;
  }
  public resetPreemptibility() {
    this._preemptibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibilityInput() {
    return this._preemptibility;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators?: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators[]; 
  public get accelerators() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('accelerators') as any;
  }
  public set accelerators(value: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerators[]) {
    this._accelerators = value;
  }
  public resetAccelerators() {
    this._accelerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfigOutputReference(this as any, "disk_config", true);
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
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

export function dataprocWorkflowTemplatePlacementManagedClusterConfigToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterConfigOutputReference | DataprocWorkflowTemplatePlacementManagedClusterConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stagingBucket) {
      hasAnyValues = true;
      internalValueResult.stagingBucket = this._stagingBucket;
    }
    if (this._tempBucket) {
      hasAnyValues = true;
      internalValueResult.tempBucket = this._tempBucket;
    }
    if (this._autoscalingConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.autoscalingConfig = this._autoscalingConfig?.internalValue;
    }
    if (this._encryptionConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._endpointConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.endpointConfig = this._endpointConfig?.internalValue;
    }
    if (this._gceClusterConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.gceClusterConfig = this._gceClusterConfig?.internalValue;
    }
    if (this._initializationActions) {
      hasAnyValues = true;
      internalValueResult.initializationActions = this._initializationActions;
    }
    if (this._lifecycleConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfig = this._lifecycleConfig?.internalValue;
    }
    if (this._masterConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.masterConfig = this._masterConfig?.internalValue;
    }
    if (this._secondaryWorkerConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.secondaryWorkerConfig = this._secondaryWorkerConfig?.internalValue;
    }
    if (this._securityConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.securityConfig = this._securityConfig?.internalValue;
    }
    if (this._softwareConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.softwareConfig = this._softwareConfig?.internalValue;
    }
    if (this._workerConfig?.internalValue) {
      hasAnyValues = true;
      internalValueResult.workerConfig = this._workerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stagingBucket = undefined;
      this._tempBucket = undefined;
      this._autoscalingConfig.internalValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._endpointConfig.internalValue = undefined;
      this._gceClusterConfig.internalValue = undefined;
      this._initializationActions = undefined;
      this._lifecycleConfig.internalValue = undefined;
      this._masterConfig.internalValue = undefined;
      this._secondaryWorkerConfig.internalValue = undefined;
      this._securityConfig.internalValue = undefined;
      this._softwareConfig.internalValue = undefined;
      this._workerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stagingBucket = value.stagingBucket;
      this._tempBucket = value.tempBucket;
      this._autoscalingConfig.internalValue = value.autoscalingConfig;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._endpointConfig.internalValue = value.endpointConfig;
      this._gceClusterConfig.internalValue = value.gceClusterConfig;
      this._initializationActions = value.initializationActions;
      this._lifecycleConfig.internalValue = value.lifecycleConfig;
      this._masterConfig.internalValue = value.masterConfig;
      this._secondaryWorkerConfig.internalValue = value.secondaryWorkerConfig;
      this._securityConfig.internalValue = value.securityConfig;
      this._softwareConfig.internalValue = value.softwareConfig;
      this._workerConfig.internalValue = value.workerConfig;
    }
  }

  // staging_bucket - computed: false, optional: true, required: false
  private _stagingBucket?: string; 
  public get stagingBucket() {
    return this.getStringAttribute('staging_bucket');
  }
  public set stagingBucket(value: string) {
    this._stagingBucket = value;
  }
  public resetStagingBucket() {
    this._stagingBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingBucketInput() {
    return this._stagingBucket;
  }

  // temp_bucket - computed: false, optional: true, required: false
  private _tempBucket?: string; 
  public get tempBucket() {
    return this.getStringAttribute('temp_bucket');
  }
  public set tempBucket(value: string) {
    this._tempBucket = value;
  }
  public resetTempBucket() {
    this._tempBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempBucketInput() {
    return this._tempBucket;
  }

  // autoscaling_config - computed: false, optional: true, required: false
  private _autoscalingConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfigOutputReference(this as any, "autoscaling_config", true);
  public get autoscalingConfig() {
    return this._autoscalingConfig;
  }
  public putAutoscalingConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigAutoscalingConfig) {
    this._autoscalingConfig.internalValue = value;
  }
  public resetAutoscalingConfig() {
    this._autoscalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigInput() {
    return this._autoscalingConfig.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfigOutputReference(this as any, "encryption_config", true);
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // endpoint_config - computed: false, optional: true, required: false
  private _endpointConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfigOutputReference(this as any, "endpoint_config", true);
  public get endpointConfig() {
    return this._endpointConfig;
  }
  public putEndpointConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigEndpointConfig) {
    this._endpointConfig.internalValue = value;
  }
  public resetEndpointConfig() {
    this._endpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigInput() {
    return this._endpointConfig.internalValue;
  }

  // gce_cluster_config - computed: false, optional: true, required: false
  private _gceClusterConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfigOutputReference(this as any, "gce_cluster_config", true);
  public get gceClusterConfig() {
    return this._gceClusterConfig;
  }
  public putGceClusterConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigGceClusterConfig) {
    this._gceClusterConfig.internalValue = value;
  }
  public resetGceClusterConfig() {
    this._gceClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceClusterConfigInput() {
    return this._gceClusterConfig.internalValue;
  }

  // initialization_actions - computed: false, optional: true, required: false
  private _initializationActions?: DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions[]; 
  public get initializationActions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('initialization_actions') as any;
  }
  public set initializationActions(value: DataprocWorkflowTemplatePlacementManagedClusterConfigInitializationActions[]) {
    this._initializationActions = value;
  }
  public resetInitializationActions() {
    this._initializationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationActionsInput() {
    return this._initializationActions;
  }

  // lifecycle_config - computed: false, optional: true, required: false
  private _lifecycleConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfigOutputReference(this as any, "lifecycle_config", true);
  public get lifecycleConfig() {
    return this._lifecycleConfig;
  }
  public putLifecycleConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigLifecycleConfig) {
    this._lifecycleConfig.internalValue = value;
  }
  public resetLifecycleConfig() {
    this._lifecycleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigInput() {
    return this._lifecycleConfig.internalValue;
  }

  // master_config - computed: false, optional: true, required: false
  private _masterConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfigOutputReference(this as any, "master_config", true);
  public get masterConfig() {
    return this._masterConfig;
  }
  public putMasterConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigMasterConfig) {
    this._masterConfig.internalValue = value;
  }
  public resetMasterConfig() {
    this._masterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterConfigInput() {
    return this._masterConfig.internalValue;
  }

  // secondary_worker_config - computed: false, optional: true, required: false
  private _secondaryWorkerConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigOutputReference(this as any, "secondary_worker_config", true);
  public get secondaryWorkerConfig() {
    return this._secondaryWorkerConfig;
  }
  public putSecondaryWorkerConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfig) {
    this._secondaryWorkerConfig.internalValue = value;
  }
  public resetSecondaryWorkerConfig() {
    this._secondaryWorkerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryWorkerConfigInput() {
    return this._secondaryWorkerConfig.internalValue;
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfigOutputReference(this as any, "security_config", true);
  public get securityConfig() {
    return this._securityConfig;
  }
  public putSecurityConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSecurityConfig) {
    this._securityConfig.internalValue = value;
  }
  public resetSecurityConfig() {
    this._securityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig.internalValue;
  }

  // software_config - computed: false, optional: true, required: false
  private _softwareConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfigOutputReference(this as any, "software_config", true);
  public get softwareConfig() {
    return this._softwareConfig;
  }
  public putSoftwareConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigSoftwareConfig) {
    this._softwareConfig.internalValue = value;
  }
  public resetSoftwareConfig() {
    this._softwareConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareConfigInput() {
    return this._softwareConfig.internalValue;
  }

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig = new DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfigOutputReference(this as any, "worker_config", true);
  public get workerConfig() {
    return this._workerConfig;
  }
  public putWorkerConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfigWorkerConfig) {
    this._workerConfig.internalValue = value;
  }
  public resetWorkerConfig() {
    this._workerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig.internalValue;
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

export function dataprocWorkflowTemplatePlacementManagedClusterToTerraform(struct?: DataprocWorkflowTemplatePlacementManagedClusterOutputReference | DataprocWorkflowTemplatePlacementManagedCluster): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacementManagedCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._config?.internalValue) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacementManagedCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterName = undefined;
      this._labels = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterName = value.clusterName;
      this._labels = value.labels;
      this._config.internalValue = value.config;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // config - computed: false, optional: false, required: true
  private _config = new DataprocWorkflowTemplatePlacementManagedClusterConfigOutputReference(this as any, "config", true);
  public get config() {
    return this._config;
  }
  public putConfig(value: DataprocWorkflowTemplatePlacementManagedClusterConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

export function dataprocWorkflowTemplatePlacementToTerraform(struct?: DataprocWorkflowTemplatePlacementOutputReference | DataprocWorkflowTemplatePlacement): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplatePlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterSelector?.internalValue) {
      hasAnyValues = true;
      internalValueResult.clusterSelector = this._clusterSelector?.internalValue;
    }
    if (this._managedCluster?.internalValue) {
      hasAnyValues = true;
      internalValueResult.managedCluster = this._managedCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplatePlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterSelector.internalValue = undefined;
      this._managedCluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterSelector.internalValue = value.clusterSelector;
      this._managedCluster.internalValue = value.managedCluster;
    }
  }

  // cluster_selector - computed: false, optional: true, required: false
  private _clusterSelector = new DataprocWorkflowTemplatePlacementClusterSelectorOutputReference(this as any, "cluster_selector", true);
  public get clusterSelector() {
    return this._clusterSelector;
  }
  public putClusterSelector(value: DataprocWorkflowTemplatePlacementClusterSelector) {
    this._clusterSelector.internalValue = value;
  }
  public resetClusterSelector() {
    this._clusterSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelectorInput() {
    return this._clusterSelector.internalValue;
  }

  // managed_cluster - computed: false, optional: true, required: false
  private _managedCluster = new DataprocWorkflowTemplatePlacementManagedClusterOutputReference(this as any, "managed_cluster", true);
  public get managedCluster() {
    return this._managedCluster;
  }
  public putManagedCluster(value: DataprocWorkflowTemplatePlacementManagedCluster) {
    this._managedCluster.internalValue = value;
  }
  public resetManagedCluster() {
    this._managedCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterInput() {
    return this._managedCluster.internalValue;
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

export function dataprocWorkflowTemplateTimeoutsToTerraform(struct?: DataprocWorkflowTemplateTimeoutsOutputReference | DataprocWorkflowTemplateTimeouts): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocWorkflowTemplateTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocWorkflowTemplateTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    this._placement.internalValue = config.placement;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dag_timeout - computed: false, optional: true, required: false
  private _dagTimeout?: string; 
  public get dagTimeout() {
    return this.getStringAttribute('dag_timeout');
  }
  public set dagTimeout(value: string) {
    this._dagTimeout = value;
  }
  public resetDagTimeout() {
    this._dagTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagTimeoutInput() {
    return this._dagTimeout;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
    return this._location;
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
    return this._name;
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
    return this._version;
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
    return this._jobs;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: DataprocWorkflowTemplateParameters[]; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: DataprocWorkflowTemplateParameters[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // placement - computed: false, optional: false, required: true
  private _placement = new DataprocWorkflowTemplatePlacementOutputReference(this as any, "placement", true);
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataprocWorkflowTemplatePlacement) {
    this._placement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocWorkflowTemplateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocWorkflowTemplateTimeouts) {
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
      dag_timeout: cdktf.stringToTerraform(this._dagTimeout),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      version: cdktf.numberToTerraform(this._version),
      jobs: cdktf.listMapper(dataprocWorkflowTemplateJobsToTerraform)(this._jobs),
      parameters: cdktf.listMapper(dataprocWorkflowTemplateParametersToTerraform)(this._parameters),
      placement: dataprocWorkflowTemplatePlacementToTerraform(this._placement.internalValue),
      timeouts: dataprocWorkflowTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
