// https://www.terraform.io/docs/providers/google/d/container_attached_install_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleContainerAttachedInstallManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}
  */
  readonly platformVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/container_attached_install_manifest google_container_attached_install_manifest}
*/
export class DataGoogleContainerAttachedInstallManifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_attached_install_manifest";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/container_attached_install_manifest google_container_attached_install_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleContainerAttachedInstallManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleContainerAttachedInstallManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_attached_install_manifest',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.59.0',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._location = config.location;
    this._platformVersion = config.platformVersion;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // manifest - computed: true, optional: false, required: false
  public get manifest() {
    return this.getStringAttribute('manifest');
  }

  // platform_version - computed: false, optional: false, required: true
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      platform_version: cdktf.stringToTerraform(this._platformVersion),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
