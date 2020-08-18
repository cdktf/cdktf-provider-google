// https://www.terraform.io/docs/providers/google/r/data_google_container_registry_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleContainerRegistryImageConfig extends TerraformMetaArguments {
  readonly digest?: string;
  readonly name: string;
  readonly project?: string;
  readonly region?: string;
  readonly tag?: string;
}

// Resource

export class DataGoogleContainerRegistryImage extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleContainerRegistryImageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_registry_image',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._digest = config.digest;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digest - computed: false, optional: true, required: false
  private _digest?: string;
  public get digest() {
    return this._digest;
  }
  public set digest(value: string | undefined) {
    this._digest = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_url - computed: true, optional: false, required: true
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string;
  public get tag() {
    return this._tag;
  }
  public set tag(value: string | undefined) {
    this._tag = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      digest: this._digest,
      name: this._name,
      project: this._project,
      region: this._region,
      tag: this._tag,
    };
  }
}
