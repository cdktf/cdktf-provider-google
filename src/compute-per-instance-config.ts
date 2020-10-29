// https://www.terraform.io/docs/providers/google/r/compute_per_instance_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputePerInstanceConfigConfig extends TerraformMetaArguments {
  /** The instance group manager this instance config is part of. */
  readonly instanceGroupManager: string;
  readonly minimalAction?: string;
  readonly mostDisruptiveAllowedAction?: string;
  /** The name for this per-instance config and its corresponding instance. */
  readonly name: string;
  readonly project?: string;
  readonly removeInstanceStateOnDestroy?: boolean;
  /** Zone where the containing instance group manager is located */
  readonly zone: string;
  /** preserved_state block */
  readonly preservedState?: ComputePerInstanceConfigPreservedState[];
  /** timeouts block */
  readonly timeouts?: ComputePerInstanceConfigTimeouts;
}
export interface ComputePerInstanceConfigPreservedStateDisk {
  /** A value that prescribes what should happen to the stateful disk when the VM instance is deleted.
The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"] */
  readonly deleteRule?: string;
  /** A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. */
  readonly deviceName: string;
  /** The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"] */
  readonly mode?: string;
  /** The URI of an existing persistent disk to attach under the specified device-name in the format
'projects/project-id/zones/zone/disks/disk-name'. */
  readonly source: string;
}
export interface ComputePerInstanceConfigPreservedState {
  /** Preserved metadata defined for this instance. This is a list of key->value pairs. */
  readonly metadata?: { [key: string]: string };
  /** disk block */
  readonly disk?: ComputePerInstanceConfigPreservedStateDisk[];
}
export interface ComputePerInstanceConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputePerInstanceConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputePerInstanceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_per_instance_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceGroupManager = config.instanceGroupManager;
    this._minimalAction = config.minimalAction;
    this._mostDisruptiveAllowedAction = config.mostDisruptiveAllowedAction;
    this._name = config.name;
    this._project = config.project;
    this._removeInstanceStateOnDestroy = config.removeInstanceStateOnDestroy;
    this._zone = config.zone;
    this._preservedState = config.preservedState;
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

  // instance_group_manager - computed: false, optional: false, required: true
  private _instanceGroupManager: string;
  public get instanceGroupManager() {
    return this._instanceGroupManager;
  }
  public set instanceGroupManager(value: string) {
    this._instanceGroupManager = value;
  }

  // minimal_action - computed: false, optional: true, required: false
  private _minimalAction?: string;
  public get minimalAction() {
    return this._minimalAction;
  }
  public set minimalAction(value: string | undefined) {
    this._minimalAction = value;
  }

  // most_disruptive_allowed_action - computed: false, optional: true, required: false
  private _mostDisruptiveAllowedAction?: string;
  public get mostDisruptiveAllowedAction() {
    return this._mostDisruptiveAllowedAction;
  }
  public set mostDisruptiveAllowedAction(value: string | undefined) {
    this._mostDisruptiveAllowedAction = value;
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

  // remove_instance_state_on_destroy - computed: false, optional: true, required: false
  private _removeInstanceStateOnDestroy?: boolean;
  public get removeInstanceStateOnDestroy() {
    return this._removeInstanceStateOnDestroy;
  }
  public set removeInstanceStateOnDestroy(value: boolean | undefined) {
    this._removeInstanceStateOnDestroy = value;
  }

  // zone - computed: false, optional: false, required: true
  private _zone: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string) {
    this._zone = value;
  }

  // preserved_state - computed: false, optional: true, required: false
  private _preservedState?: ComputePerInstanceConfigPreservedState[];
  public get preservedState() {
    return this._preservedState;
  }
  public set preservedState(value: ComputePerInstanceConfigPreservedState[] | undefined) {
    this._preservedState = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputePerInstanceConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputePerInstanceConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_group_manager: this._instanceGroupManager,
      minimal_action: this._minimalAction,
      most_disruptive_allowed_action: this._mostDisruptiveAllowedAction,
      name: this._name,
      project: this._project,
      remove_instance_state_on_destroy: this._removeInstanceStateOnDestroy,
      zone: this._zone,
      preserved_state: this._preservedState,
      timeouts: this._timeouts,
    };
  }
}
