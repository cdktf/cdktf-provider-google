// https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeProjectMetadataItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * The metadata key to set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html#key ComputeProjectMetadataItem#key}
  */
  readonly key: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html#project ComputeProjectMetadataItem#project}
  */
  readonly project?: string;
  /**
  * The value to set for the given metadata key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html#value ComputeProjectMetadataItem#value}
  */
  readonly value: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html#timeouts ComputeProjectMetadataItem#timeouts}
  */
  readonly timeouts?: ComputeProjectMetadataItemTimeouts;
}
export interface ComputeProjectMetadataItemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html#create ComputeProjectMetadataItem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html#delete ComputeProjectMetadataItem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html#update ComputeProjectMetadataItem#update}
  */
  readonly update?: string;
}

function computeProjectMetadataItemTimeoutsToTerraform(struct?: ComputeProjectMetadataItemTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html google_compute_project_metadata_item}
*/
export class ComputeProjectMetadataItem extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_project_metadata_item.html google_compute_project_metadata_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeProjectMetadataItemConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
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

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeProjectMetadataItemTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeProjectMetadataItemTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      project: cdktf.stringToTerraform(this._project),
      value: cdktf.stringToTerraform(this._value),
      timeouts: computeProjectMetadataItemTimeoutsToTerraform(this._timeouts),
    };
  }
}
