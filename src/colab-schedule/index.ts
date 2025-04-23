// https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ColabScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped. Default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#allow_queueing ColabSchedule#allow_queueing}
  */
  readonly allowQueueing?: boolean | cdktf.IResolvable;
  /**
  * Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#cron ColabSchedule#cron}
  */
  readonly cron: string;
  /**
  * Desired state of the Colab Schedule. Set this field to 'ACTIVE' to start/resume the schedule, and 'PAUSED' to pause the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#desired_state ColabSchedule#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Required. The display name of the Schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#display_name ColabSchedule#display_name}
  */
  readonly displayName: string;
  /**
  * Timestamp after which no new runs can be scheduled. If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#end_time ColabSchedule#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#id ColabSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource: https://cloud.google.com/colab/docs/locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#location ColabSchedule#location}
  */
  readonly location: string;
  /**
  * Maximum number of runs that can be started concurrently for this Schedule. This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#max_concurrent_run_count ColabSchedule#max_concurrent_run_count}
  */
  readonly maxConcurrentRunCount: string;
  /**
  * Maximum run count of the schedule. If specified, The schedule will be completed when either startedRunCount >= maxRunCount or when endTime is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#max_run_count ColabSchedule#max_run_count}
  */
  readonly maxRunCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#project ColabSchedule#project}
  */
  readonly project?: string;
  /**
  * The timestamp after which the first run can be scheduled. Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#start_time ColabSchedule#start_time}
  */
  readonly startTime?: string;
  /**
  * create_notebook_execution_job_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#create_notebook_execution_job_request ColabSchedule#create_notebook_execution_job_request}
  */
  readonly createNotebookExecutionJobRequest: ColabScheduleCreateNotebookExecutionJobRequest;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#timeouts ColabSchedule#timeouts}
  */
  readonly timeouts?: ColabScheduleTimeouts;
}
export interface ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource {
  /**
  * The commit SHA to read repository with. If unset, the file will be read at HEAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#commit_sha ColabSchedule#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * The resource name of the Dataform Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#dataform_repository_resource_name ColabSchedule#dataform_repository_resource_name}
  */
  readonly dataformRepositoryResourceName: string;
}

export function colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceToTerraform(struct?: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference | ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit_sha: cdktf.stringToTerraform(struct!.commitSha),
    dataform_repository_resource_name: cdktf.stringToTerraform(struct!.dataformRepositoryResourceName),
  }
}


export function colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceToHclTerraform(struct?: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference | ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit_sha: {
      value: cdktf.stringToHclTerraform(struct!.commitSha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataform_repository_resource_name: {
      value: cdktf.stringToHclTerraform(struct!.dataformRepositoryResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitSha = this._commitSha;
    }
    if (this._dataformRepositoryResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataformRepositoryResourceName = this._dataformRepositoryResourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commitSha = undefined;
      this._dataformRepositoryResourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commitSha = value.commitSha;
      this._dataformRepositoryResourceName = value.dataformRepositoryResourceName;
    }
  }

  // commit_sha - computed: false, optional: true, required: false
  private _commitSha?: string; 
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }
  public set commitSha(value: string) {
    this._commitSha = value;
  }
  public resetCommitSha() {
    this._commitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitShaInput() {
    return this._commitSha;
  }

  // dataform_repository_resource_name - computed: false, optional: false, required: true
  private _dataformRepositoryResourceName?: string; 
  public get dataformRepositoryResourceName() {
    return this.getStringAttribute('dataform_repository_resource_name');
  }
  public set dataformRepositoryResourceName(value: string) {
    this._dataformRepositoryResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformRepositoryResourceNameInput() {
    return this._dataformRepositoryResourceName;
  }
}
export interface ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource {
  /**
  * The version of the Cloud Storage object to read. If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#generation ColabSchedule#generation}
  */
  readonly generation?: string;
  /**
  * The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#uri ColabSchedule#uri}
  */
  readonly uri: string;
}

export function colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceToTerraform(struct?: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference | ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.stringToTerraform(struct!.generation),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceToHclTerraform(struct?: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference | ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generation = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generation = value.generation;
      this._uri = value.uri;
    }
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob {
  /**
  * Required. The display name of the Notebook Execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#display_name ColabSchedule#display_name}
  */
  readonly displayName: string;
  /**
  * Max running time of the execution job in seconds (default 86400s / 24 hrs). A duration in seconds with up to nine fractional digits, ending with "s". Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#execution_timeout ColabSchedule#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * The user email to run the execution as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#execution_user ColabSchedule#execution_user}
  */
  readonly executionUser?: string;
  /**
  * The Cloud Storage location to upload the result to. Format:'gs://bucket-name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#gcs_output_uri ColabSchedule#gcs_output_uri}
  */
  readonly gcsOutputUri: string;
  /**
  * The NotebookRuntimeTemplate to source compute configuration from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#notebook_runtime_template_resource_name ColabSchedule#notebook_runtime_template_resource_name}
  */
  readonly notebookRuntimeTemplateResourceName: string;
  /**
  * The service account to run the execution as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#service_account ColabSchedule#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * dataform_repository_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#dataform_repository_source ColabSchedule#dataform_repository_source}
  */
  readonly dataformRepositorySource?: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource;
  /**
  * gcs_notebook_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#gcs_notebook_source ColabSchedule#gcs_notebook_source}
  */
  readonly gcsNotebookSource?: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource;
}

export function colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobToTerraform(struct?: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference | ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    execution_timeout: cdktf.stringToTerraform(struct!.executionTimeout),
    execution_user: cdktf.stringToTerraform(struct!.executionUser),
    gcs_output_uri: cdktf.stringToTerraform(struct!.gcsOutputUri),
    notebook_runtime_template_resource_name: cdktf.stringToTerraform(struct!.notebookRuntimeTemplateResourceName),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    dataform_repository_source: colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceToTerraform(struct!.dataformRepositorySource),
    gcs_notebook_source: colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceToTerraform(struct!.gcsNotebookSource),
  }
}


export function colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobToHclTerraform(struct?: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference | ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_timeout: {
      value: cdktf.stringToHclTerraform(struct!.executionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_user: {
      value: cdktf.stringToHclTerraform(struct!.executionUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_output_uri: {
      value: cdktf.stringToHclTerraform(struct!.gcsOutputUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notebook_runtime_template_resource_name: {
      value: cdktf.stringToHclTerraform(struct!.notebookRuntimeTemplateResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataform_repository_source: {
      value: colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceToHclTerraform(struct!.dataformRepositorySource),
      isBlock: true,
      type: "list",
      storageClassType: "ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceList",
    },
    gcs_notebook_source: {
      value: colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceToHclTerraform(struct!.gcsNotebookSource),
      isBlock: true,
      type: "list",
      storageClassType: "ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._executionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeout = this._executionTimeout;
    }
    if (this._executionUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionUser = this._executionUser;
    }
    if (this._gcsOutputUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsOutputUri = this._gcsOutputUri;
    }
    if (this._notebookRuntimeTemplateResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookRuntimeTemplateResourceName = this._notebookRuntimeTemplateResourceName;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._dataformRepositorySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataformRepositorySource = this._dataformRepositorySource?.internalValue;
    }
    if (this._gcsNotebookSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsNotebookSource = this._gcsNotebookSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._executionTimeout = undefined;
      this._executionUser = undefined;
      this._gcsOutputUri = undefined;
      this._notebookRuntimeTemplateResourceName = undefined;
      this._serviceAccount = undefined;
      this._dataformRepositorySource.internalValue = undefined;
      this._gcsNotebookSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._executionTimeout = value.executionTimeout;
      this._executionUser = value.executionUser;
      this._gcsOutputUri = value.gcsOutputUri;
      this._notebookRuntimeTemplateResourceName = value.notebookRuntimeTemplateResourceName;
      this._serviceAccount = value.serviceAccount;
      this._dataformRepositorySource.internalValue = value.dataformRepositorySource;
      this._gcsNotebookSource.internalValue = value.gcsNotebookSource;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // execution_timeout - computed: false, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // execution_user - computed: false, optional: true, required: false
  private _executionUser?: string; 
  public get executionUser() {
    return this.getStringAttribute('execution_user');
  }
  public set executionUser(value: string) {
    this._executionUser = value;
  }
  public resetExecutionUser() {
    this._executionUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionUserInput() {
    return this._executionUser;
  }

  // gcs_output_uri - computed: false, optional: false, required: true
  private _gcsOutputUri?: string; 
  public get gcsOutputUri() {
    return this.getStringAttribute('gcs_output_uri');
  }
  public set gcsOutputUri(value: string) {
    this._gcsOutputUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsOutputUriInput() {
    return this._gcsOutputUri;
  }

  // notebook_runtime_template_resource_name - computed: false, optional: false, required: true
  private _notebookRuntimeTemplateResourceName?: string; 
  public get notebookRuntimeTemplateResourceName() {
    return this.getStringAttribute('notebook_runtime_template_resource_name');
  }
  public set notebookRuntimeTemplateResourceName(value: string) {
    this._notebookRuntimeTemplateResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookRuntimeTemplateResourceNameInput() {
    return this._notebookRuntimeTemplateResourceName;
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

  // dataform_repository_source - computed: false, optional: true, required: false
  private _dataformRepositorySource = new ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference(this, "dataform_repository_source");
  public get dataformRepositorySource() {
    return this._dataformRepositorySource;
  }
  public putDataformRepositorySource(value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource) {
    this._dataformRepositorySource.internalValue = value;
  }
  public resetDataformRepositorySource() {
    this._dataformRepositorySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformRepositorySourceInput() {
    return this._dataformRepositorySource.internalValue;
  }

  // gcs_notebook_source - computed: false, optional: true, required: false
  private _gcsNotebookSource = new ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference(this, "gcs_notebook_source");
  public get gcsNotebookSource() {
    return this._gcsNotebookSource;
  }
  public putGcsNotebookSource(value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource) {
    this._gcsNotebookSource.internalValue = value;
  }
  public resetGcsNotebookSource() {
    this._gcsNotebookSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsNotebookSourceInput() {
    return this._gcsNotebookSource.internalValue;
  }
}
export interface ColabScheduleCreateNotebookExecutionJobRequest {
  /**
  * notebook_execution_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#notebook_execution_job ColabSchedule#notebook_execution_job}
  */
  readonly notebookExecutionJob: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob;
}

export function colabScheduleCreateNotebookExecutionJobRequestToTerraform(struct?: ColabScheduleCreateNotebookExecutionJobRequestOutputReference | ColabScheduleCreateNotebookExecutionJobRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_execution_job: colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobToTerraform(struct!.notebookExecutionJob),
  }
}


export function colabScheduleCreateNotebookExecutionJobRequestToHclTerraform(struct?: ColabScheduleCreateNotebookExecutionJobRequestOutputReference | ColabScheduleCreateNotebookExecutionJobRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_execution_job: {
      value: colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobToHclTerraform(struct!.notebookExecutionJob),
      isBlock: true,
      type: "list",
      storageClassType: "ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabScheduleCreateNotebookExecutionJobRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabScheduleCreateNotebookExecutionJobRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookExecutionJob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookExecutionJob = this._notebookExecutionJob?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabScheduleCreateNotebookExecutionJobRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notebookExecutionJob.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notebookExecutionJob.internalValue = value.notebookExecutionJob;
    }
  }

  // notebook_execution_job - computed: false, optional: false, required: true
  private _notebookExecutionJob = new ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference(this, "notebook_execution_job");
  public get notebookExecutionJob() {
    return this._notebookExecutionJob;
  }
  public putNotebookExecutionJob(value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob) {
    this._notebookExecutionJob.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookExecutionJobInput() {
    return this._notebookExecutionJob.internalValue;
  }
}
export interface ColabScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#create ColabSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#delete ColabSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#update ColabSchedule#update}
  */
  readonly update?: string;
}

export function colabScheduleTimeoutsToTerraform(struct?: ColabScheduleTimeouts | cdktf.IResolvable): any {
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


export function colabScheduleTimeoutsToHclTerraform(struct?: ColabScheduleTimeouts | cdktf.IResolvable): any {
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

export class ColabScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ColabScheduleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ColabScheduleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule google_colab_schedule}
*/
export class ColabSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_colab_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ColabSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ColabSchedule to import
  * @param importFromId The id of the existing ColabSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ColabSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_colab_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/colab_schedule google_colab_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ColabScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: ColabScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_colab_schedule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.31.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowQueueing = config.allowQueueing;
    this._cron = config.cron;
    this._desiredState = config.desiredState;
    this._displayName = config.displayName;
    this._endTime = config.endTime;
    this._id = config.id;
    this._location = config.location;
    this._maxConcurrentRunCount = config.maxConcurrentRunCount;
    this._maxRunCount = config.maxRunCount;
    this._project = config.project;
    this._startTime = config.startTime;
    this._createNotebookExecutionJobRequest.internalValue = config.createNotebookExecutionJobRequest;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_queueing - computed: false, optional: true, required: false
  private _allowQueueing?: boolean | cdktf.IResolvable; 
  public get allowQueueing() {
    return this.getBooleanAttribute('allow_queueing');
  }
  public set allowQueueing(value: boolean | cdktf.IResolvable) {
    this._allowQueueing = value;
  }
  public resetAllowQueueing() {
    this._allowQueueing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueueingInput() {
    return this._allowQueueing;
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // max_concurrent_run_count - computed: false, optional: false, required: true
  private _maxConcurrentRunCount?: string; 
  public get maxConcurrentRunCount() {
    return this.getStringAttribute('max_concurrent_run_count');
  }
  public set maxConcurrentRunCount(value: string) {
    this._maxConcurrentRunCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunCountInput() {
    return this._maxConcurrentRunCount;
  }

  // max_run_count - computed: false, optional: true, required: false
  private _maxRunCount?: string; 
  public get maxRunCount() {
    return this.getStringAttribute('max_run_count');
  }
  public set maxRunCount(value: string) {
    this._maxRunCount = value;
  }
  public resetMaxRunCount() {
    this._maxRunCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunCountInput() {
    return this._maxRunCount;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // create_notebook_execution_job_request - computed: false, optional: false, required: true
  private _createNotebookExecutionJobRequest = new ColabScheduleCreateNotebookExecutionJobRequestOutputReference(this, "create_notebook_execution_job_request");
  public get createNotebookExecutionJobRequest() {
    return this._createNotebookExecutionJobRequest;
  }
  public putCreateNotebookExecutionJobRequest(value: ColabScheduleCreateNotebookExecutionJobRequest) {
    this._createNotebookExecutionJobRequest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createNotebookExecutionJobRequestInput() {
    return this._createNotebookExecutionJobRequest.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ColabScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ColabScheduleTimeouts) {
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
      allow_queueing: cdktf.booleanToTerraform(this._allowQueueing),
      cron: cdktf.stringToTerraform(this._cron),
      desired_state: cdktf.stringToTerraform(this._desiredState),
      display_name: cdktf.stringToTerraform(this._displayName),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      max_concurrent_run_count: cdktf.stringToTerraform(this._maxConcurrentRunCount),
      max_run_count: cdktf.stringToTerraform(this._maxRunCount),
      project: cdktf.stringToTerraform(this._project),
      start_time: cdktf.stringToTerraform(this._startTime),
      create_notebook_execution_job_request: colabScheduleCreateNotebookExecutionJobRequestToTerraform(this._createNotebookExecutionJobRequest.internalValue),
      timeouts: colabScheduleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_queueing: {
        value: cdktf.booleanToHclTerraform(this._allowQueueing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_state: {
        value: cdktf.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_run_count: {
        value: cdktf.stringToHclTerraform(this._maxConcurrentRunCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_run_count: {
        value: cdktf.stringToHclTerraform(this._maxRunCount),
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_notebook_execution_job_request: {
        value: colabScheduleCreateNotebookExecutionJobRequestToHclTerraform(this._createNotebookExecutionJobRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabScheduleCreateNotebookExecutionJobRequestList",
      },
      timeouts: {
        value: colabScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ColabScheduleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
