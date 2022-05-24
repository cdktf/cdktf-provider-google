// https://www.terraform.io/docs/providers/google/r/compute_per_instance_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputePerInstanceConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The instance group manager this instance config is part of.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#instance_group_manager ComputePerInstanceConfig#instance_group_manager}
  */
  readonly instanceGroupManager: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#minimal_action ComputePerInstanceConfig#minimal_action}
  */
  readonly minimalAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#most_disruptive_allowed_action ComputePerInstanceConfig#most_disruptive_allowed_action}
  */
  readonly mostDisruptiveAllowedAction?: string;
  /**
  * The name for this per-instance config and its corresponding instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#name ComputePerInstanceConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#project ComputePerInstanceConfig#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#remove_instance_state_on_destroy ComputePerInstanceConfig#remove_instance_state_on_destroy}
  */
  readonly removeInstanceStateOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Zone where the containing instance group manager is located
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#zone ComputePerInstanceConfig#zone}
  */
  readonly zone?: string;
  /**
  * preserved_state block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#preserved_state ComputePerInstanceConfig#preserved_state}
  */
  readonly preservedState?: ComputePerInstanceConfigPreservedState;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#timeouts ComputePerInstanceConfig#timeouts}
  */
  readonly timeouts?: ComputePerInstanceConfigTimeouts;
}
export interface ComputePerInstanceConfigPreservedStateDisk {
  /**
  * A value that prescribes what should happen to the stateful disk when the VM instance is deleted.
The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#delete_rule ComputePerInstanceConfig#delete_rule}
  */
  readonly deleteRule?: string;
  /**
  * A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#device_name ComputePerInstanceConfig#device_name}
  */
  readonly deviceName: string;
  /**
  * The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#mode ComputePerInstanceConfig#mode}
  */
  readonly mode?: string;
  /**
  * The URI of an existing persistent disk to attach under the specified device-name in the format
'projects/project-id/zones/zone/disks/disk-name'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#source ComputePerInstanceConfig#source}
  */
  readonly source: string;
}

export function computePerInstanceConfigPreservedStateDiskToTerraform(struct?: ComputePerInstanceConfigPreservedStateDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_rule: cdktf.stringToTerraform(struct!.deleteRule),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export interface ComputePerInstanceConfigPreservedState {
  /**
  * Preserved metadata defined for this instance. This is a list of key->value pairs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#metadata ComputePerInstanceConfig#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#disk ComputePerInstanceConfig#disk}
  */
  readonly disk?: ComputePerInstanceConfigPreservedStateDisk[] | cdktf.IResolvable;
}

export function computePerInstanceConfigPreservedStateToTerraform(struct?: ComputePerInstanceConfigPreservedStateOutputReference | ComputePerInstanceConfigPreservedState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    disk: cdktf.listMapper(computePerInstanceConfigPreservedStateDiskToTerraform)(struct!.disk),
  }
}

export class ComputePerInstanceConfigPreservedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePerInstanceConfigPreservedState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePerInstanceConfigPreservedState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
      this._disk = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
      this._disk = value.disk;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // disk - computed: false, optional: true, required: false
  private _disk?: ComputePerInstanceConfigPreservedStateDisk[] | cdktf.IResolvable; 
  public get disk() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('disk')));
  }
  public set disk(value: ComputePerInstanceConfigPreservedStateDisk[] | cdktf.IResolvable) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }
}
export interface ComputePerInstanceConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#create ComputePerInstanceConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#delete ComputePerInstanceConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config#update ComputePerInstanceConfig#update}
  */
  readonly update?: string;
}

export function computePerInstanceConfigTimeoutsToTerraform(struct?: ComputePerInstanceConfigTimeoutsOutputReference | ComputePerInstanceConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputePerInstanceConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePerInstanceConfigTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePerInstanceConfigTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config google_compute_per_instance_config}
*/
export class ComputePerInstanceConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_per_instance_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_per_instance_config google_compute_per_instance_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputePerInstanceConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ComputePerInstanceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_per_instance_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.22.0',
        providerVersionConstraint: '~> 4.0'
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
    this._preservedState.internalValue = config.preservedState;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_group_manager - computed: false, optional: false, required: true
  private _instanceGroupManager?: string; 
  public get instanceGroupManager() {
    return this.getStringAttribute('instance_group_manager');
  }
  public set instanceGroupManager(value: string) {
    this._instanceGroupManager = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupManagerInput() {
    return this._instanceGroupManager;
  }

  // minimal_action - computed: false, optional: true, required: false
  private _minimalAction?: string; 
  public get minimalAction() {
    return this.getStringAttribute('minimal_action');
  }
  public set minimalAction(value: string) {
    this._minimalAction = value;
  }
  public resetMinimalAction() {
    this._minimalAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalActionInput() {
    return this._minimalAction;
  }

  // most_disruptive_allowed_action - computed: false, optional: true, required: false
  private _mostDisruptiveAllowedAction?: string; 
  public get mostDisruptiveAllowedAction() {
    return this.getStringAttribute('most_disruptive_allowed_action');
  }
  public set mostDisruptiveAllowedAction(value: string) {
    this._mostDisruptiveAllowedAction = value;
  }
  public resetMostDisruptiveAllowedAction() {
    this._mostDisruptiveAllowedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostDisruptiveAllowedActionInput() {
    return this._mostDisruptiveAllowedAction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
    return this._project;
  }

  // remove_instance_state_on_destroy - computed: false, optional: true, required: false
  private _removeInstanceStateOnDestroy?: boolean | cdktf.IResolvable; 
  public get removeInstanceStateOnDestroy() {
    return this.getBooleanAttribute('remove_instance_state_on_destroy');
  }
  public set removeInstanceStateOnDestroy(value: boolean | cdktf.IResolvable) {
    this._removeInstanceStateOnDestroy = value;
  }
  public resetRemoveInstanceStateOnDestroy() {
    this._removeInstanceStateOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstanceStateOnDestroyInput() {
    return this._removeInstanceStateOnDestroy;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // preserved_state - computed: false, optional: true, required: false
  private _preservedState = new ComputePerInstanceConfigPreservedStateOutputReference(this, "preserved_state");
  public get preservedState() {
    return this._preservedState;
  }
  public putPreservedState(value: ComputePerInstanceConfigPreservedState) {
    this._preservedState.internalValue = value;
  }
  public resetPreservedState() {
    this._preservedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservedStateInput() {
    return this._preservedState.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputePerInstanceConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputePerInstanceConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      preserved_state: computePerInstanceConfigPreservedStateToTerraform(this._preservedState.internalValue),
      timeouts: computePerInstanceConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
