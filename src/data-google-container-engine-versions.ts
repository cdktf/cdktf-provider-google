// https://www.terraform.io/docs/providers/google/r/data_google_container_engine_versions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataGoogleContainerEngineVersionsConfig extends TerraformMetaArguments {
  readonly location?: string;
  readonly project?: string;
  readonly region?: string;
  readonly versionPrefix?: string;
  readonly zone?: string;
}

// Resource

export class DataGoogleContainerEngineVersions extends TerraformDataSource {

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
    this._region = config.region;
    this._versionPrefix = config.versionPrefix;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_cluster_version - computed: true, optional: false, required: true
  public get defaultClusterVersion() {
    return this.getStringAttribute('default_cluster_version');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // latest_master_version - computed: true, optional: false, required: true
  public get latestMasterVersion() {
    return this.getStringAttribute('latest_master_version');
  }

  // latest_node_version - computed: true, optional: false, required: true
  public get latestNodeVersion() {
    return this.getStringAttribute('latest_node_version');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // release_channel_default_version - computed: true, optional: false, required: true
  public releaseChannelDefaultVersion(key: string): string {
    return new StringMap(this, 'release_channel_default_version').lookup(key);
  }

  // valid_master_versions - computed: true, optional: false, required: true
  public get validMasterVersions() {
    return this.getListAttribute('valid_master_versions');
  }

  // valid_node_versions - computed: true, optional: false, required: true
  public get validNodeVersions() {
    return this.getListAttribute('valid_node_versions');
  }

  // version_prefix - computed: false, optional: true, required: false
  private _versionPrefix?: string;
  public get versionPrefix() {
    return this._versionPrefix;
  }
  public set versionPrefix(value: string | undefined) {
    this._versionPrefix = value;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      project: this._project,
      region: this._region,
      version_prefix: this._versionPrefix,
      zone: this._zone,
    };
  }
}
