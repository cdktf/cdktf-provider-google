// https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/artifact_registry_docker_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleArtifactRegistryDockerImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The image name to fetch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/artifact_registry_docker_image#image_name DataGoogleArtifactRegistryDockerImage#image_name}
  */
  readonly imageName: string;
  /**
  * The region of the artifact registry repository. For example, "us-west1".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/artifact_registry_docker_image#location DataGoogleArtifactRegistryDockerImage#location}
  */
  readonly location: string;
  /**
  * Project ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/artifact_registry_docker_image#project DataGoogleArtifactRegistryDockerImage#project}
  */
  readonly project?: string;
  /**
  * The last part of the repository name to fetch from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/artifact_registry_docker_image#repository_id DataGoogleArtifactRegistryDockerImage#repository_id}
  */
  readonly repositoryId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/artifact_registry_docker_image google_artifact_registry_docker_image}
*/
export class DataGoogleArtifactRegistryDockerImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_artifact_registry_docker_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleArtifactRegistryDockerImage to import
  * @param importFromId The id of the existing DataGoogleArtifactRegistryDockerImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/artifact_registry_docker_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleArtifactRegistryDockerImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_artifact_registry_docker_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/artifact_registry_docker_image google_artifact_registry_docker_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleArtifactRegistryDockerImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleArtifactRegistryDockerImageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_docker_image',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.11.1',
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
    this._id = config.id;
    this._imageName = config.imageName;
    this._location = config.location;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_time - computed: true, optional: false, required: false
  public get buildTime() {
    return this.getStringAttribute('build_time');
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

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_size_bytes - computed: true, optional: false, required: false
  public get imageSizeBytes() {
    return this.getStringAttribute('image_size_bytes');
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

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: true, required: false
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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // upload_time - computed: true, optional: false, required: false
  public get uploadTime() {
    return this.getStringAttribute('upload_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      image_name: cdktf.stringToTerraform(this._imageName),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
