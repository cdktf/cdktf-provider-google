// https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeProjectMetadataItemConfig extends TerraformMetaArguments {
  /** The metadata key to set. */
  readonly key: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The value to set for the given metadata key. */
  readonly value: string;
  /** timeouts block */
  readonly timeouts?: ComputeProjectMetadataItemTimeouts;
}
export interface ComputeProjectMetadataItemTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeProjectMetadataItem extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeProjectMetadataItemConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_project_metadata_item',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._key = config.key;
    this._project = config.project;
    this._value = config.value;
    this._timeouts = config.timeouts;
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

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this._key;
  }
  public set key(value: string) {
    this._key = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeProjectMetadataItemTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeProjectMetadataItemTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key: this._key,
      project: this._project,
      value: this._value,
      timeouts: this._timeouts,
    };
  }
}
