// https://www.terraform.io/docs/providers/google/d/container_engine_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleContainerEngineVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/container_engine_versions#id DataGoogleContainerEngineVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/container_engine_versions#location DataGoogleContainerEngineVersions#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/container_engine_versions#project DataGoogleContainerEngineVersions#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}
  */
  readonly versionPrefix?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/container_engine_versions google_container_engine_versions}
*/
export class DataGoogleContainerEngineVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_engine_versions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/container_engine_versions google_container_engine_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleContainerEngineVersionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleContainerEngineVersionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_container_engine_versions',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
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
    this._location = config.location;
    this._project = config.project;
    this._versionPrefix = config.versionPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_cluster_version - computed: true, optional: false, required: false
  public get defaultClusterVersion() {
    return this.getStringAttribute('default_cluster_version');
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

  // latest_master_version - computed: true, optional: false, required: false
  public get latestMasterVersion() {
    return this.getStringAttribute('latest_master_version');
  }

  // latest_node_version - computed: true, optional: false, required: false
  public get latestNodeVersion() {
    return this.getStringAttribute('latest_node_version');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // release_channel_default_version - computed: true, optional: false, required: false
  private _releaseChannelDefaultVersion = new cdktf.StringMap(this, "release_channel_default_version");
  public get releaseChannelDefaultVersion() {
    return this._releaseChannelDefaultVersion;
  }

  // valid_master_versions - computed: true, optional: false, required: false
  public get validMasterVersions() {
    return this.getListAttribute('valid_master_versions');
  }

  // valid_node_versions - computed: true, optional: false, required: false
  public get validNodeVersions() {
    return this.getListAttribute('valid_node_versions');
  }

  // version_prefix - computed: false, optional: true, required: false
  private _versionPrefix?: string; 
  public get versionPrefix() {
    return this.getStringAttribute('version_prefix');
  }
  public set versionPrefix(value: string) {
    this._versionPrefix = value;
  }
  public resetVersionPrefix() {
    this._versionPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPrefixInput() {
    return this._versionPrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      version_prefix: cdktf.stringToTerraform(this._versionPrefix),
    };
  }
}
