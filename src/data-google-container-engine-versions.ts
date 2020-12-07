// https://www.terraform.io/docs/providers/google/r/data_google_container_engine_versions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleContainerEngineVersionsConfig extends cdktf.TerraformMetaArguments {
  readonly location?: string;
  readonly project?: string;
  readonly versionPrefix?: string;
}

// Resource

export class DataGoogleContainerEngineVersions extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleContainerEngineVersionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_container_engine_versions',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
  public get id() {
    return this.getStringAttribute('id');
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
  public set location(value: string ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string ) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // release_channel_default_version - computed: true, optional: false, required: false
  public releaseChannelDefaultVersion(key: string): string {
    return new cdktf.StringMap(this, 'release_channel_default_version').lookup(key);
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
  public set versionPrefix(value: string ) {
    this._versionPrefix = value;
  }
  public resetVersionPrefix() {
    this._versionPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPrefixInput() {
    return this._versionPrefix
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      version_prefix: cdktf.stringToTerraform(this._versionPrefix),
    };
  }
}
