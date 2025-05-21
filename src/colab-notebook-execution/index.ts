/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ColabNotebookExecutionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. The display name of the Notebook Execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}
  */
  readonly displayName: string;
  /**
  * Max running time of the execution job in seconds (default 86400s / 24 hrs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * The user email to run the execution as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}
  */
  readonly executionUser?: string;
  /**
  * The Cloud Storage location to upload the result to. Format:'gs://bucket-name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}
  */
  readonly gcsOutputUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource: https://cloud.google.com/colab/docs/locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}
  */
  readonly location: string;
  /**
  * User specified ID for the Notebook Execution Job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}
  */
  readonly notebookExecutionJobId?: string;
  /**
  * The NotebookRuntimeTemplate to source compute configuration from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}
  */
  readonly notebookRuntimeTemplateResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}
  */
  readonly project?: string;
  /**
  * The service account to run the execution as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * dataform_repository_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}
  */
  readonly dataformRepositorySource?: ColabNotebookExecutionDataformRepositorySource;
  /**
  * direct_notebook_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}
  */
  readonly directNotebookSource?: ColabNotebookExecutionDirectNotebookSource;
  /**
  * gcs_notebook_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}
  */
  readonly gcsNotebookSource?: ColabNotebookExecutionGcsNotebookSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}
  */
  readonly timeouts?: ColabNotebookExecutionTimeouts;
}
export interface ColabNotebookExecutionDataformRepositorySource {
  /**
  * The commit SHA to read repository with. If unset, the file will be read at HEAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#commit_sha ColabNotebookExecution#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * The resource name of the Dataform Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#dataform_repository_resource_name ColabNotebookExecution#dataform_repository_resource_name}
  */
  readonly dataformRepositoryResourceName: string;
}

export function colabNotebookExecutionDataformRepositorySourceToTerraform(struct?: ColabNotebookExecutionDataformRepositorySourceOutputReference | ColabNotebookExecutionDataformRepositorySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit_sha: cdktf.stringToTerraform(struct!.commitSha),
    dataform_repository_resource_name: cdktf.stringToTerraform(struct!.dataformRepositoryResourceName),
  }
}


export function colabNotebookExecutionDataformRepositorySourceToHclTerraform(struct?: ColabNotebookExecutionDataformRepositorySourceOutputReference | ColabNotebookExecutionDataformRepositorySource): any {
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

export class ColabNotebookExecutionDataformRepositorySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionDataformRepositorySource | undefined {
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

  public set internalValue(value: ColabNotebookExecutionDataformRepositorySource | undefined) {
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
export interface ColabNotebookExecutionDirectNotebookSource {
  /**
  * The base64-encoded contents of the input notebook file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#content ColabNotebookExecution#content}
  */
  readonly content: string;
}

export function colabNotebookExecutionDirectNotebookSourceToTerraform(struct?: ColabNotebookExecutionDirectNotebookSourceOutputReference | ColabNotebookExecutionDirectNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function colabNotebookExecutionDirectNotebookSourceToHclTerraform(struct?: ColabNotebookExecutionDirectNotebookSourceOutputReference | ColabNotebookExecutionDirectNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionDirectNotebookSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionDirectNotebookSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabNotebookExecutionDirectNotebookSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}
export interface ColabNotebookExecutionGcsNotebookSource {
  /**
  * The version of the Cloud Storage object to read. If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#generation ColabNotebookExecution#generation}
  */
  readonly generation?: string;
  /**
  * The Cloud Storage uri pointing to the ipynb file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#uri ColabNotebookExecution#uri}
  */
  readonly uri: string;
}

export function colabNotebookExecutionGcsNotebookSourceToTerraform(struct?: ColabNotebookExecutionGcsNotebookSourceOutputReference | ColabNotebookExecutionGcsNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.stringToTerraform(struct!.generation),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function colabNotebookExecutionGcsNotebookSourceToHclTerraform(struct?: ColabNotebookExecutionGcsNotebookSourceOutputReference | ColabNotebookExecutionGcsNotebookSource): any {
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

export class ColabNotebookExecutionGcsNotebookSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabNotebookExecutionGcsNotebookSource | undefined {
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

  public set internalValue(value: ColabNotebookExecutionGcsNotebookSource | undefined) {
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
export interface ColabNotebookExecutionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}
  */
  readonly delete?: string;
}

export function colabNotebookExecutionTimeoutsToTerraform(struct?: ColabNotebookExecutionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function colabNotebookExecutionTimeoutsToHclTerraform(struct?: ColabNotebookExecutionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabNotebookExecutionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ColabNotebookExecutionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ColabNotebookExecutionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution google_colab_notebook_execution}
*/
export class ColabNotebookExecution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_colab_notebook_execution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ColabNotebookExecution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ColabNotebookExecution to import
  * @param importFromId The id of the existing ColabNotebookExecution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ColabNotebookExecution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_colab_notebook_execution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/colab_notebook_execution google_colab_notebook_execution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ColabNotebookExecutionConfig
  */
  public constructor(scope: Construct, id: string, config: ColabNotebookExecutionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_colab_notebook_execution',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.36.0',
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
    this._displayName = config.displayName;
    this._executionTimeout = config.executionTimeout;
    this._executionUser = config.executionUser;
    this._gcsOutputUri = config.gcsOutputUri;
    this._id = config.id;
    this._location = config.location;
    this._notebookExecutionJobId = config.notebookExecutionJobId;
    this._notebookRuntimeTemplateResourceName = config.notebookRuntimeTemplateResourceName;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._dataformRepositorySource.internalValue = config.dataformRepositorySource;
    this._directNotebookSource.internalValue = config.directNotebookSource;
    this._gcsNotebookSource.internalValue = config.gcsNotebookSource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // notebook_execution_job_id - computed: true, optional: true, required: false
  private _notebookExecutionJobId?: string; 
  public get notebookExecutionJobId() {
    return this.getStringAttribute('notebook_execution_job_id');
  }
  public set notebookExecutionJobId(value: string) {
    this._notebookExecutionJobId = value;
  }
  public resetNotebookExecutionJobId() {
    this._notebookExecutionJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookExecutionJobIdInput() {
    return this._notebookExecutionJobId;
  }

  // notebook_runtime_template_resource_name - computed: false, optional: true, required: false
  private _notebookRuntimeTemplateResourceName?: string; 
  public get notebookRuntimeTemplateResourceName() {
    return this.getStringAttribute('notebook_runtime_template_resource_name');
  }
  public set notebookRuntimeTemplateResourceName(value: string) {
    this._notebookRuntimeTemplateResourceName = value;
  }
  public resetNotebookRuntimeTemplateResourceName() {
    this._notebookRuntimeTemplateResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookRuntimeTemplateResourceNameInput() {
    return this._notebookRuntimeTemplateResourceName;
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
  private _dataformRepositorySource = new ColabNotebookExecutionDataformRepositorySourceOutputReference(this, "dataform_repository_source");
  public get dataformRepositorySource() {
    return this._dataformRepositorySource;
  }
  public putDataformRepositorySource(value: ColabNotebookExecutionDataformRepositorySource) {
    this._dataformRepositorySource.internalValue = value;
  }
  public resetDataformRepositorySource() {
    this._dataformRepositorySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformRepositorySourceInput() {
    return this._dataformRepositorySource.internalValue;
  }

  // direct_notebook_source - computed: false, optional: true, required: false
  private _directNotebookSource = new ColabNotebookExecutionDirectNotebookSourceOutputReference(this, "direct_notebook_source");
  public get directNotebookSource() {
    return this._directNotebookSource;
  }
  public putDirectNotebookSource(value: ColabNotebookExecutionDirectNotebookSource) {
    this._directNotebookSource.internalValue = value;
  }
  public resetDirectNotebookSource() {
    this._directNotebookSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directNotebookSourceInput() {
    return this._directNotebookSource.internalValue;
  }

  // gcs_notebook_source - computed: false, optional: true, required: false
  private _gcsNotebookSource = new ColabNotebookExecutionGcsNotebookSourceOutputReference(this, "gcs_notebook_source");
  public get gcsNotebookSource() {
    return this._gcsNotebookSource;
  }
  public putGcsNotebookSource(value: ColabNotebookExecutionGcsNotebookSource) {
    this._gcsNotebookSource.internalValue = value;
  }
  public resetGcsNotebookSource() {
    this._gcsNotebookSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsNotebookSourceInput() {
    return this._gcsNotebookSource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ColabNotebookExecutionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ColabNotebookExecutionTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      execution_timeout: cdktf.stringToTerraform(this._executionTimeout),
      execution_user: cdktf.stringToTerraform(this._executionUser),
      gcs_output_uri: cdktf.stringToTerraform(this._gcsOutputUri),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      notebook_execution_job_id: cdktf.stringToTerraform(this._notebookExecutionJobId),
      notebook_runtime_template_resource_name: cdktf.stringToTerraform(this._notebookRuntimeTemplateResourceName),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      dataform_repository_source: colabNotebookExecutionDataformRepositorySourceToTerraform(this._dataformRepositorySource.internalValue),
      direct_notebook_source: colabNotebookExecutionDirectNotebookSourceToTerraform(this._directNotebookSource.internalValue),
      gcs_notebook_source: colabNotebookExecutionGcsNotebookSourceToTerraform(this._gcsNotebookSource.internalValue),
      timeouts: colabNotebookExecutionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_timeout: {
        value: cdktf.stringToHclTerraform(this._executionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_user: {
        value: cdktf.stringToHclTerraform(this._executionUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcs_output_uri: {
        value: cdktf.stringToHclTerraform(this._gcsOutputUri),
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
      notebook_execution_job_id: {
        value: cdktf.stringToHclTerraform(this._notebookExecutionJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notebook_runtime_template_resource_name: {
        value: cdktf.stringToHclTerraform(this._notebookRuntimeTemplateResourceName),
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
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataform_repository_source: {
        value: colabNotebookExecutionDataformRepositorySourceToHclTerraform(this._dataformRepositorySource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabNotebookExecutionDataformRepositorySourceList",
      },
      direct_notebook_source: {
        value: colabNotebookExecutionDirectNotebookSourceToHclTerraform(this._directNotebookSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabNotebookExecutionDirectNotebookSourceList",
      },
      gcs_notebook_source: {
        value: colabNotebookExecutionGcsNotebookSourceToHclTerraform(this._gcsNotebookSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabNotebookExecutionGcsNotebookSourceList",
      },
      timeouts: {
        value: colabNotebookExecutionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ColabNotebookExecutionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
