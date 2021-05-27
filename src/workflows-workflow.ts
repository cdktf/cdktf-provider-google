// https://www.terraform.io/docs/providers/google/r/workflows_workflow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowsWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the workflow provided by the user. Must be at most 1000 unicode characters long.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#description WorkflowsWorkflow#description}
  */
  readonly description?: string;
  /**
  * A set of key/value label pairs to assign to this Workflow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#labels WorkflowsWorkflow#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the Workflow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#name WorkflowsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#name_prefix WorkflowsWorkflow#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#project WorkflowsWorkflow#project}
  */
  readonly project?: string;
  /**
  * The region of the workflow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#region WorkflowsWorkflow#region}
  */
  readonly region?: string;
  /**
  * Name of the service account associated with the latest workflow version. This service
account represents the identity of the workflow and determines what permissions the workflow has.

Format: projects/{project}/serviceAccounts/{account}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#service_account WorkflowsWorkflow#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Workflow code to be executed. The size limit is 32KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#source_contents WorkflowsWorkflow#source_contents}
  */
  readonly sourceContents?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#timeouts WorkflowsWorkflow#timeouts}
  */
  readonly timeouts?: WorkflowsWorkflowTimeouts;
}
export interface WorkflowsWorkflowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#create WorkflowsWorkflow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#delete WorkflowsWorkflow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html#update WorkflowsWorkflow#update}
  */
  readonly update?: string;
}

function workflowsWorkflowTimeoutsToTerraform(struct?: WorkflowsWorkflowTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html google_workflows_workflow}
*/
export class WorkflowsWorkflow extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow.html google_workflows_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowsWorkflowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WorkflowsWorkflowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_workflows_workflow',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._project = config.project;
    this._region = config.region;
    this._serviceAccount = config.serviceAccount;
    this._sourceContents = config.sourceContents;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
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

  // revision_id - computed: true, optional: false, required: false
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }

  // service_account - computed: true, optional: true, required: false
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
    return this._serviceAccount
  }

  // source_contents - computed: false, optional: true, required: false
  private _sourceContents?: string;
  public get sourceContents() {
    return this.getStringAttribute('source_contents');
  }
  public set sourceContents(value: string ) {
    this._sourceContents = value;
  }
  public resetSourceContents() {
    this._sourceContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContentsInput() {
    return this._sourceContents
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WorkflowsWorkflowTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: WorkflowsWorkflowTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      source_contents: cdktf.stringToTerraform(this._sourceContents),
      timeouts: workflowsWorkflowTimeoutsToTerraform(this._timeouts),
    };
  }
}
