// https://www.terraform.io/docs/providers/google/r/data_google_composer_image_versions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleComposerImageVersionsConfig extends TerraformMetaArguments {
  readonly project?: string;
  readonly region?: string;
}
export class DataGoogleComposerImageVersionsImageVersions extends ComplexComputedList {

  // image_version_id - computed: true, optional: false, required: true
  public get imageVersionId() {
    return this.getStringAttribute('image_version_id');
  }

  // supported_python_versions - computed: true, optional: false, required: true
  public get supportedPythonVersions() {
    return this.getListAttribute('supported_python_versions');
  }
}

// Resource

export class DataGoogleComposerImageVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComposerImageVersionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_composer_image_versions',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_versions - computed: true, optional: false, required: true
  public imageVersions(index: string) {
    return new DataGoogleComposerImageVersionsImageVersions(this, 'image_versions', index);
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project: this._project,
      region: this._region,
    };
  }
}
