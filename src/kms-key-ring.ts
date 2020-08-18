// https://www.terraform.io/docs/providers/google/r/kms_key_ring.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsKeyRingConfig extends TerraformMetaArguments {
  /** The location for the KeyRing.
A full list of valid locations can be found by running 'gcloud kms locations list'. */
  readonly location: string;
  /** The resource name for the KeyRing. */
  readonly name: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: KmsKeyRingTimeouts;
}
export interface KmsKeyRingTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class KmsKeyRing extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsKeyRingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_key_ring',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
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

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KmsKeyRingTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KmsKeyRingTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
