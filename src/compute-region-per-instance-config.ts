// https://www.terraform.io/docs/providers/google/r/compute_region_per_instance_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeRegionPerInstanceConfigConfig extends TerraformMetaArguments {
  readonly minimalAction?: string;
  readonly mostDisruptiveAllowedAction?: string;
  /** The name for this per-instance config and its corresponding instance. */
  readonly name: string;
  readonly project?: string;
  /** Region where the containing instance group manager is located */
  readonly region: string;
  /** The region instance group manager this instance config is part of. */
  readonly regionInstanceGroupManager: string;
  readonly removeInstanceStateOnDestroy?: boolean;
  /** preserved_state block */
  readonly preservedState?: ComputeRegionPerInstanceConfigPreservedState[];
  /** timeouts block */
  readonly timeouts?: ComputeRegionPerInstanceConfigTimeouts;
}
export interface ComputeRegionPerInstanceConfigPreservedStateDisk {
  /** A value that prescribes what should happen to the stateful disk when the VM instance is deleted.
The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' detatch the disk when the VM is deleted, but not delete the disk.
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
export interface ComputeRegionPerInstanceConfigPreservedState {
  /** Preserved metadata defined for this instance. This is a list of key->value pairs. */
  readonly metadata?: { [key: string]: string };
  /** disk block */
  readonly disk?: ComputeRegionPerInstanceConfigPreservedStateDisk[];
}
export interface ComputeRegionPerInstanceConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeRegionPerInstanceConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRegionPerInstanceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_per_instance_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._minimalAction = config.minimalAction;
    this._mostDisruptiveAllowedAction = config.mostDisruptiveAllowedAction;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._regionInstanceGroupManager = config.regionInstanceGroupManager;
    this._removeInstanceStateOnDestroy = config.removeInstanceStateOnDestroy;
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

  // region - computed: false, optional: false, required: true
  private _region: string;
  public get region() {
    return this._region;
  }
  public set region(value: string) {
    this._region = value;
  }

  // region_instance_group_manager - computed: false, optional: false, required: true
  private _regionInstanceGroupManager: string;
  public get regionInstanceGroupManager() {
    return this._regionInstanceGroupManager;
  }
  public set regionInstanceGroupManager(value: string) {
    this._regionInstanceGroupManager = value;
  }

  // remove_instance_state_on_destroy - computed: false, optional: true, required: false
  private _removeInstanceStateOnDestroy?: boolean;
  public get removeInstanceStateOnDestroy() {
    return this._removeInstanceStateOnDestroy;
  }
  public set removeInstanceStateOnDestroy(value: boolean | undefined) {
    this._removeInstanceStateOnDestroy = value;
  }

  // preserved_state - computed: false, optional: true, required: false
  private _preservedState?: ComputeRegionPerInstanceConfigPreservedState[];
  public get preservedState() {
    return this._preservedState;
  }
  public set preservedState(value: ComputeRegionPerInstanceConfigPreservedState[] | undefined) {
    this._preservedState = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionPerInstanceConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeRegionPerInstanceConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      minimal_action: this._minimalAction,
      most_disruptive_allowed_action: this._mostDisruptiveAllowedAction,
      name: this._name,
      project: this._project,
      region: this._region,
      region_instance_group_manager: this._regionInstanceGroupManager,
      remove_instance_state_on_destroy: this._removeInstanceStateOnDestroy,
      preserved_state: this._preservedState,
      timeouts: this._timeouts,
    };
  }
}
