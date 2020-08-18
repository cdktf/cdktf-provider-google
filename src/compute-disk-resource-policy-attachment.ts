// https://www.terraform.io/docs/providers/google/r/compute_disk_resource_policy_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeDiskResourcePolicyAttachmentConfig extends TerraformMetaArguments {
  /** The name of the disk in which the resource policies are attached to. */
  readonly disk: string;
  /** The resource policy to be attached to the disk for scheduling snapshot
creation. Do not specify the self link. */
  readonly name: string;
  readonly project?: string;
  /** A reference to the zone where the disk resides. */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: ComputeDiskResourcePolicyAttachmentTimeouts;
}
export interface ComputeDiskResourcePolicyAttachmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeDiskResourcePolicyAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeDiskResourcePolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_disk_resource_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disk = config.disk;
    this._name = config.name;
    this._project = config.project;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk - computed: false, optional: false, required: true
  private _disk: string;
  public get disk() {
    return this._disk;
  }
  public set disk(value: string) {
    this._disk = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeDiskResourcePolicyAttachmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeDiskResourcePolicyAttachmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      disk: this._disk,
      name: this._name,
      project: this._project,
      zone: this._zone,
      timeouts: this._timeouts,
    };
  }
}
