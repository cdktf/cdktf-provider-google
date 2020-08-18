// https://www.terraform.io/docs/providers/google/r/compute_region_disk_resource_policy_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeRegionDiskResourcePolicyAttachmentConfig extends TerraformMetaArguments {
  /** The name of the regional disk in which the resource policies are attached to. */
  readonly disk: string;
  /** The resource policy to be attached to the disk for scheduling snapshot
creation. Do not specify the self link. */
  readonly name: string;
  readonly project?: string;
  /** A reference to the region where the disk resides. */
  readonly region?: string;
  /** timeouts block */
  readonly timeouts?: ComputeRegionDiskResourcePolicyAttachmentTimeouts;
}
export interface ComputeRegionDiskResourcePolicyAttachmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeRegionDiskResourcePolicyAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRegionDiskResourcePolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_disk_resource_policy_attachment',
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
    this._region = config.region;
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionDiskResourcePolicyAttachmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeRegionDiskResourcePolicyAttachmentTimeouts | undefined) {
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
      region: this._region,
      timeouts: this._timeouts,
    };
  }
}
