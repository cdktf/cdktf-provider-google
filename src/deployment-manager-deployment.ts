// https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentManagerDeploymentConfig extends cdktf.TerraformMetaArguments {
  /** Set the policy to use for creating new resources. Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"] */
  readonly createPolicy?: string;
  /** Set the policy to use for deleting new resources on update/delete.
Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"] */
  readonly deletePolicy?: string;
  /** Optional user-provided description of deployment. */
  readonly description?: string;
  /** Unique name for the deployment */
  readonly name: string;
  /** If set to true, a deployment is created with "shell" resources
that are not actually instantiated. This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
 ~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true. */
  readonly preview?: boolean;
  readonly project?: string;
  /** labels block */
  readonly labels?: DeploymentManagerDeploymentLabels[];
  /** target block */
  readonly target: DeploymentManagerDeploymentTarget[];
  /** timeouts block */
  readonly timeouts?: DeploymentManagerDeploymentTimeouts;
}
export interface DeploymentManagerDeploymentLabels {
  /** Key for label. */
  readonly key?: string;
  /** Value of label. */
  readonly value?: string;
}

function deploymentManagerDeploymentLabelsToTerraform(struct?: DeploymentManagerDeploymentLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentManagerDeploymentTargetConfig {
  /** The full YAML contents of your configuration file. */
  readonly content: string;
}

function deploymentManagerDeploymentTargetConfigToTerraform(struct?: DeploymentManagerDeploymentTargetConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}

export interface DeploymentManagerDeploymentTargetImports {
  /** The full contents of the template that you want to import. */
  readonly content?: string;
  /** The name of the template to import, as declared in the YAML
configuration. */
  readonly name?: string;
}

function deploymentManagerDeploymentTargetImportsToTerraform(struct?: DeploymentManagerDeploymentTargetImports): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DeploymentManagerDeploymentTarget {
  /** config block */
  readonly config: DeploymentManagerDeploymentTargetConfig[];
  /** imports block */
  readonly imports?: DeploymentManagerDeploymentTargetImports[];
}

function deploymentManagerDeploymentTargetToTerraform(struct?: DeploymentManagerDeploymentTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config: cdktf.listMapper(deploymentManagerDeploymentTargetConfigToTerraform)(struct!.config),
    imports: cdktf.listMapper(deploymentManagerDeploymentTargetImportsToTerraform)(struct!.imports),
  }
}

export interface DeploymentManagerDeploymentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function deploymentManagerDeploymentTimeoutsToTerraform(struct?: DeploymentManagerDeploymentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DeploymentManagerDeployment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DeploymentManagerDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_deployment_manager_deployment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._createPolicy = config.createPolicy;
    this._deletePolicy = config.deletePolicy;
    this._description = config.description;
    this._name = config.name;
    this._preview = config.preview;
    this._project = config.project;
    this._labels = config.labels;
    this._target = config.target;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_policy - computed: false, optional: true, required: false
  private _createPolicy?: string;
  public get createPolicy() {
    return this.getStringAttribute('create_policy');
  }
  public set createPolicy(value: string ) {
    this._createPolicy = value;
  }
  public resetCreatePolicy() {
    this._createPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPolicyInput() {
    return this._createPolicy
  }

  // delete_policy - computed: false, optional: true, required: false
  private _deletePolicy?: string;
  public get deletePolicy() {
    return this.getStringAttribute('delete_policy');
  }
  public set deletePolicy(value: string ) {
    this._deletePolicy = value;
  }
  public resetDeletePolicy() {
    this._deletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePolicyInput() {
    return this._deletePolicy
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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

  // manifest - computed: true, optional: false, required: false
  public get manifest() {
    return this.getStringAttribute('manifest');
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

  // preview - computed: false, optional: true, required: false
  private _preview?: boolean;
  public get preview() {
    return this.getBooleanAttribute('preview');
  }
  public set preview(value: boolean ) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: DeploymentManagerDeploymentLabels[];
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: DeploymentManagerDeploymentLabels[] ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // target - computed: false, optional: false, required: true
  private _target: DeploymentManagerDeploymentTarget[];
  public get target() {
    return this.interpolationForAttribute('target') as any;
  }
  public set target(value: DeploymentManagerDeploymentTarget[]) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DeploymentManagerDeploymentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DeploymentManagerDeploymentTimeouts ) {
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
      create_policy: cdktf.stringToTerraform(this._createPolicy),
      delete_policy: cdktf.stringToTerraform(this._deletePolicy),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      preview: cdktf.booleanToTerraform(this._preview),
      project: cdktf.stringToTerraform(this._project),
      labels: cdktf.listMapper(deploymentManagerDeploymentLabelsToTerraform)(this._labels),
      target: cdktf.listMapper(deploymentManagerDeploymentTargetToTerraform)(this._target),
      timeouts: deploymentManagerDeploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
