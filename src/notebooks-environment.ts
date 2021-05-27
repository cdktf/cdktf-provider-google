// https://www.terraform.io/docs/providers/google/r/notebooks_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotebooksEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A brief description of this environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#description NotebooksEnvironment#description}
  */
  readonly description?: string;
  /**
  * Display name of this environment for the UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#display_name NotebooksEnvironment#display_name}
  */
  readonly displayName?: string;
  /**
  * A reference to the zone where the machine resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#location NotebooksEnvironment#location}
  */
  readonly location: string;
  /**
  * The name specified for the Environment instance.
Format: projects/{project_id}/locations/{location}/environments/{environmentId}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#name NotebooksEnvironment#name}
  */
  readonly name: string;
  /**
  * Path to a Bash script that automatically runs after a notebook instance fully boots up.
The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#post_startup_script NotebooksEnvironment#post_startup_script}
  */
  readonly postStartupScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#project NotebooksEnvironment#project}
  */
  readonly project?: string;
  /**
  * container_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#container_image NotebooksEnvironment#container_image}
  */
  readonly containerImage?: NotebooksEnvironmentContainerImage[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#timeouts NotebooksEnvironment#timeouts}
  */
  readonly timeouts?: NotebooksEnvironmentTimeouts;
  /**
  * vm_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#vm_image NotebooksEnvironment#vm_image}
  */
  readonly vmImage?: NotebooksEnvironmentVmImage[];
}
export interface NotebooksEnvironmentContainerImage {
  /**
  * The path to the container image repository.
For example: gcr.io/{project_id}/{imageName}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#repository NotebooksEnvironment#repository}
  */
  readonly repository: string;
  /**
  * The tag of the container image. If not specified, this defaults to the latest tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#tag NotebooksEnvironment#tag}
  */
  readonly tag?: string;
}

function notebooksEnvironmentContainerImageToTerraform(struct?: NotebooksEnvironmentContainerImage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export interface NotebooksEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#create NotebooksEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#delete NotebooksEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#update NotebooksEnvironment#update}
  */
  readonly update?: string;
}

function notebooksEnvironmentTimeoutsToTerraform(struct?: NotebooksEnvironmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface NotebooksEnvironmentVmImage {
  /**
  * Use this VM image family to find the image; the newest image in this family will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#image_family NotebooksEnvironment#image_family}
  */
  readonly imageFamily?: string;
  /**
  * Use VM image name to find the image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#image_name NotebooksEnvironment#image_name}
  */
  readonly imageName?: string;
  /**
  * The name of the Google Cloud project that this VM image belongs to.
Format: projects/{project_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html#project NotebooksEnvironment#project}
  */
  readonly project: string;
}

function notebooksEnvironmentVmImageToTerraform(struct?: NotebooksEnvironmentVmImage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_family: cdktf.stringToTerraform(struct!.imageFamily),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html google_notebooks_environment}
*/
export class NotebooksEnvironment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment.html google_notebooks_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotebooksEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: NotebooksEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_notebooks_environment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._location = config.location;
    this._name = config.name;
    this._postStartupScript = config.postStartupScript;
    this._project = config.project;
    this._containerImage = config.containerImage;
    this._timeouts = config.timeouts;
    this._vmImage = config.vmImage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // post_startup_script - computed: false, optional: true, required: false
  private _postStartupScript?: string;
  public get postStartupScript() {
    return this.getStringAttribute('post_startup_script');
  }
  public set postStartupScript(value: string ) {
    this._postStartupScript = value;
  }
  public resetPostStartupScript() {
    this._postStartupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartupScriptInput() {
    return this._postStartupScript
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

  // container_image - computed: false, optional: true, required: false
  private _containerImage?: NotebooksEnvironmentContainerImage[];
  public get containerImage() {
    return this.interpolationForAttribute('container_image') as any;
  }
  public set containerImage(value: NotebooksEnvironmentContainerImage[] ) {
    this._containerImage = value;
  }
  public resetContainerImage() {
    this._containerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NotebooksEnvironmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NotebooksEnvironmentTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vm_image - computed: false, optional: true, required: false
  private _vmImage?: NotebooksEnvironmentVmImage[];
  public get vmImage() {
    return this.interpolationForAttribute('vm_image') as any;
  }
  public set vmImage(value: NotebooksEnvironmentVmImage[] ) {
    this._vmImage = value;
  }
  public resetVmImage() {
    this._vmImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageInput() {
    return this._vmImage
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      post_startup_script: cdktf.stringToTerraform(this._postStartupScript),
      project: cdktf.stringToTerraform(this._project),
      container_image: cdktf.listMapper(notebooksEnvironmentContainerImageToTerraform)(this._containerImage),
      timeouts: notebooksEnvironmentTimeoutsToTerraform(this._timeouts),
      vm_image: cdktf.listMapper(notebooksEnvironmentVmImageToTerraform)(this._vmImage),
    };
  }
}
