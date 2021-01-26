// https://www.terraform.io/docs/providers/google/r/compute_per_instance_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputePerInstanceConfigConfig extends cdktf.TerraformMetaArguments {
  /** The instance group manager this instance config is part of. */
  readonly instanceGroupManager: string;
  readonly minimalAction?: string;
  readonly mostDisruptiveAllowedAction?: string;
  /** The name for this per-instance config and its corresponding instance. */
  readonly name: string;
  readonly project?: string;
  readonly removeInstanceStateOnDestroy?: boolean;
  /** Zone where the containing instance group manager is located */
  readonly zone?: string;
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

function computePerInstanceConfigPreservedStateDiskToTerraform(struct?: ComputePerInstanceConfigPreservedStateDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_rule: cdktf.stringToTerraform(struct!.deleteRule),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export interface ComputePerInstanceConfigPreservedState {
  /** Preserved metadata defined for this instance. This is a list of key->value pairs. */
  readonly metadata?: { [key: string]: string };
  /** disk block */
  readonly disk?: ComputePerInstanceConfigPreservedStateDisk[];
}

function computePerInstanceConfigPreservedStateToTerraform(struct?: ComputePerInstanceConfigPreservedState): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metadata: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.metadata),
    disk: cdktf.listMapper(computePerInstanceConfigPreservedStateDiskToTerraform)(struct!.disk),
  }
}

export interface ComputePerInstanceConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computePerInstanceConfigTimeoutsToTerraform(struct?: ComputePerInstanceConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputePerInstanceConfig extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_group_manager - computed: false, optional: false, required: true
  private _instanceGroupManager: string;
  public get instanceGroupManager() {
    return this.getStringAttribute('instance_group_manager');
  }
  public set instanceGroupManager(value: string) {
    this._instanceGroupManager = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupManagerInput() {
    return this._instanceGroupManager
  }

  // minimal_action - computed: false, optional: true, required: false
  private _minimalAction?: string;
  public get minimalAction() {
    return this.getStringAttribute('minimal_action');
  }
  public set minimalAction(value: string ) {
    this._minimalAction = value;
  }
  public resetMinimalAction() {
    this._minimalAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalActionInput() {
    return this._minimalAction
  }

  // most_disruptive_allowed_action - computed: false, optional: true, required: false
  private _mostDisruptiveAllowedAction?: string;
  public get mostDisruptiveAllowedAction() {
    return this.getStringAttribute('most_disruptive_allowed_action');
  }
  public set mostDisruptiveAllowedAction(value: string ) {
    this._mostDisruptiveAllowedAction = value;
  }
  public resetMostDisruptiveAllowedAction() {
    this._mostDisruptiveAllowedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostDisruptiveAllowedActionInput() {
    return this._mostDisruptiveAllowedAction
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // remove_instance_state_on_destroy - computed: false, optional: true, required: false
  private _removeInstanceStateOnDestroy?: boolean;
  public get removeInstanceStateOnDestroy() {
    return this.getBooleanAttribute('remove_instance_state_on_destroy');
  }
  public set removeInstanceStateOnDestroy(value: boolean ) {
    this._removeInstanceStateOnDestroy = value;
  }
  public resetRemoveInstanceStateOnDestroy() {
    this._removeInstanceStateOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstanceStateOnDestroyInput() {
    return this._removeInstanceStateOnDestroy
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string ) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // preserved_state - computed: false, optional: true, required: false
  private _preservedState?: ComputePerInstanceConfigPreservedState[];
  public get preservedState() {
    return this.interpolationForAttribute('preserved_state') as any;
  }
  public set preservedState(value: ComputePerInstanceConfigPreservedState[] ) {
    this._preservedState = value;
  }
  public resetPreservedState() {
    this._preservedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservedStateInput() {
    return this._preservedState
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputePerInstanceConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputePerInstanceConfigTimeouts ) {
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
      instance_group_manager: cdktf.stringToTerraform(this._instanceGroupManager),
      minimal_action: cdktf.stringToTerraform(this._minimalAction),
      most_disruptive_allowed_action: cdktf.stringToTerraform(this._mostDisruptiveAllowedAction),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      remove_instance_state_on_destroy: cdktf.booleanToTerraform(this._removeInstanceStateOnDestroy),
      zone: cdktf.stringToTerraform(this._zone),
      preserved_state: cdktf.listMapper(computePerInstanceConfigPreservedStateToTerraform)(this._preservedState),
      timeouts: computePerInstanceConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
