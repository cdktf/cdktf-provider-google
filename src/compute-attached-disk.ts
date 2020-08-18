// https://www.terraform.io/docs/providers/google/r/compute_attached_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeAttachedDiskConfig extends TerraformMetaArguments {
  /** Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disks-x, where x is a number assigned by Google Compute Engine. */
  readonly deviceName?: string;
  /** name or self_link of the disk that will be attached. */
  readonly disk: string;
  /** name or self_link of the compute instance that the disk will be attached to. If the self_link is provided then zone and project are extracted from the self link. If only the name is used then zone and project must be defined as properties on the resource or provider. */
  readonly instance: string;
  /** The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode. */
  readonly mode?: string;
  /** The project that the referenced compute instance is a part of. If instance is referenced by its self_link the project defined in the link will take precedence. */
  readonly project?: string;
  /** The zone that the referenced compute instance is located within. If instance is referenced by its self_link the zone defined in the link will take precedence. */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: ComputeAttachedDiskTimeouts;
}
export interface ComputeAttachedDiskTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeAttachedDisk extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeAttachedDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_attached_disk',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceName = config.deviceName;
    this._disk = config.disk;
    this._instance = config.instance;
    this._mode = config.mode;
    this._project = config.project;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string;
  public get deviceName() {
    return this._deviceName ?? this.getStringAttribute('device_name');
  }
  public set deviceName(value: string | undefined) {
    this._deviceName = value;
  }

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

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this._instance;
  }
  public set instance(value: string) {
    this._instance = value;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string;
  public get mode() {
    return this._mode;
  }
  public set mode(value: string | undefined) {
    this._mode = value;
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
  private _timeouts?: ComputeAttachedDiskTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeAttachedDiskTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: this._deviceName,
      disk: this._disk,
      instance: this._instance,
      mode: this._mode,
      project: this._project,
      zone: this._zone,
      timeouts: this._timeouts,
    };
  }
}
