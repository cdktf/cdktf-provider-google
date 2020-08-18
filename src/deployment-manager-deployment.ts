// https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DeploymentManagerDeploymentConfig extends TerraformMetaArguments {
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
export interface DeploymentManagerDeploymentTargetConfig {
  /** The full YAML contents of your configuration file. */
  readonly content: string;
}
export interface DeploymentManagerDeploymentTargetImports {
  /** The full contents of the template that you want to import. */
  readonly content?: string;
  /** The name of the template to import, as declared in the YAML
configuration. */
  readonly name?: string;
}
export interface DeploymentManagerDeploymentTarget {
  /** config block */
  readonly config: DeploymentManagerDeploymentTargetConfig[];
  /** imports block */
  readonly imports?: DeploymentManagerDeploymentTargetImports[];
}
export interface DeploymentManagerDeploymentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DeploymentManagerDeployment extends TerraformResource {

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
    return this._createPolicy;
  }
  public set createPolicy(value: string | undefined) {
    this._createPolicy = value;
  }

  // delete_policy - computed: false, optional: true, required: false
  private _deletePolicy?: string;
  public get deletePolicy() {
    return this._deletePolicy;
  }
  public set deletePolicy(value: string | undefined) {
    this._deletePolicy = value;
  }

  // deployment_id - computed: true, optional: false, required: true
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // manifest - computed: true, optional: false, required: true
  public get manifest() {
    return this.getStringAttribute('manifest');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // preview - computed: false, optional: true, required: false
  private _preview?: boolean;
  public get preview() {
    return this._preview;
  }
  public set preview(value: boolean | undefined) {
    this._preview = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: DeploymentManagerDeploymentLabels[];
  public get labels() {
    return this._labels;
  }
  public set labels(value: DeploymentManagerDeploymentLabels[] | undefined) {
    this._labels = value;
  }

  // target - computed: false, optional: false, required: true
  private _target: DeploymentManagerDeploymentTarget[];
  public get target() {
    return this._target;
  }
  public set target(value: DeploymentManagerDeploymentTarget[]) {
    this._target = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DeploymentManagerDeploymentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DeploymentManagerDeploymentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      create_policy: this._createPolicy,
      delete_policy: this._deletePolicy,
      description: this._description,
      name: this._name,
      preview: this._preview,
      project: this._project,
      labels: this._labels,
      target: this._target,
      timeouts: this._timeouts,
    };
  }
}
