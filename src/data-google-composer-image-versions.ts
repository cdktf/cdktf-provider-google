// https://www.terraform.io/docs/providers/google/r/data_google_composer_image_versions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComposerImageVersionsConfig extends cdktf.TerraformMetaArguments {
  readonly project?: string;
  readonly region?: string;
}
export class DataGoogleComposerImageVersionsImageVersions extends cdktf.ComplexComputedList {

  // image_version_id - computed: true, optional: false, required: false
  public get imageVersionId() {
    return this.getStringAttribute('image_version_id');
  }

  // supported_python_versions - computed: true, optional: false, required: false
  public get supportedPythonVersions() {
    return this.getListAttribute('supported_python_versions');
  }
}

// Resource

export class DataGoogleComposerImageVersions extends cdktf.TerraformDataSource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_versions - computed: true, optional: false, required: false
  public imageVersions(index: string) {
    return new DataGoogleComposerImageVersionsImageVersions(this, 'image_versions', index);
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
