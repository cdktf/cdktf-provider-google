// https://www.terraform.io/docs/providers/google/r/compute_instance_group_manager.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceGroupManagerConfig extends cdktf.TerraformMetaArguments {
  /** The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name. */
  readonly baseInstanceName: string;
  /** An optional textual description of the instance group manager. */
  readonly description?: string;
  /** The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The full URL of all target pools to which new instances in the group are added. Updating the target pools attribute does not affect existing instances. */
  readonly targetPools?: string[];
  /** The target number of running instances for this managed instance group. This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0. */
  readonly targetSize?: number;
  /** Whether to wait for all instances to be created/updated before returning. Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out. */
  readonly waitForInstances?: boolean;
  /** The zone that instances in this group should be created in. */
  readonly zone?: string;
  /** auto_healing_policies block */
  readonly autoHealingPolicies?: ComputeInstanceGroupManagerAutoHealingPolicies[];
  /** named_port block */
  readonly namedPort?: ComputeInstanceGroupManagerNamedPort[];
  /** stateful_disk block */
  readonly statefulDisk?: ComputeInstanceGroupManagerStatefulDisk[];
  /** timeouts block */
  readonly timeouts?: ComputeInstanceGroupManagerTimeouts;
  /** update_policy block */
  readonly updatePolicy?: ComputeInstanceGroupManagerUpdatePolicy[];
  /** version block */
  readonly version: ComputeInstanceGroupManagerVersion[];
}
export interface ComputeInstanceGroupManagerAutoHealingPolicies {
  /** The health check resource that signals autohealing. */
  readonly healthCheck: string;
  /** The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600. */
  readonly initialDelaySec: number;
}

function computeInstanceGroupManagerAutoHealingPoliciesToTerraform(struct?: ComputeInstanceGroupManagerAutoHealingPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    initial_delay_sec: cdktf.numberToTerraform(struct!.initialDelaySec),
  }
}

export interface ComputeInstanceGroupManagerNamedPort {
  /** The name of the port. */
  readonly name: string;
  /** The port number. */
  readonly port: number;
}

function computeInstanceGroupManagerNamedPortToTerraform(struct?: ComputeInstanceGroupManagerNamedPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface ComputeInstanceGroupManagerStatefulDisk {
  /** A value that prescribes what should happen to the stateful disk when the VM instance is deleted. The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER. */
  readonly deleteRule?: string;
  /** The device name of the disk to be attached. */
  readonly deviceName: string;
}

function computeInstanceGroupManagerStatefulDiskToTerraform(struct?: ComputeInstanceGroupManagerStatefulDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_rule: cdktf.stringToTerraform(struct!.deleteRule),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
  }
}

export interface ComputeInstanceGroupManagerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeInstanceGroupManagerTimeoutsToTerraform(struct?: ComputeInstanceGroupManagerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface ComputeInstanceGroupManagerUpdatePolicy {
  /** The maximum number of instances that can be created above the specified targetSize during the update process. Conflicts with max_surge_percent. If neither is set, defaults to 1 */
  readonly maxSurgeFixed?: number;
  /** The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. Conflicts with max_surge_fixed. */
  readonly maxSurgePercent?: number;
  /** The maximum number of instances that can be unavailable during the update process. Conflicts with max_unavailable_percent. If neither is set, defaults to 1. */
  readonly maxUnavailableFixed?: number;
  /** The maximum number of instances(calculated as percentage) that can be unavailable during the update process. Conflicts with max_unavailable_fixed. */
  readonly maxUnavailablePercent?: number;
  /** Minimum number of seconds to wait for after a newly created instance becomes available. This value must be from range [0, 3600]. */
  readonly minReadySec?: number;
  /** Minimal action to be taken on an instance. You can specify either RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a RESTART, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action. */
  readonly minimalAction: string;
  /** The instance replacement method for managed instance groups. Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0. */
  readonly replacementMethod?: string;
  /** The type of update process. You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls). */
  readonly type: string;
}

function computeInstanceGroupManagerUpdatePolicyToTerraform(struct?: ComputeInstanceGroupManagerUpdatePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_surge_fixed: cdktf.numberToTerraform(struct!.maxSurgeFixed),
    max_surge_percent: cdktf.numberToTerraform(struct!.maxSurgePercent),
    max_unavailable_fixed: cdktf.numberToTerraform(struct!.maxUnavailableFixed),
    max_unavailable_percent: cdktf.numberToTerraform(struct!.maxUnavailablePercent),
    min_ready_sec: cdktf.numberToTerraform(struct!.minReadySec),
    minimal_action: cdktf.stringToTerraform(struct!.minimalAction),
    replacement_method: cdktf.stringToTerraform(struct!.replacementMethod),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ComputeInstanceGroupManagerVersionTargetSize {
  /** The number of instances which are managed for this version. Conflicts with percent. */
  readonly fixed?: number;
  /** The number of instances (calculated as percentage) which are managed for this version. Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version. */
  readonly percent?: number;
}

function computeInstanceGroupManagerVersionTargetSizeToTerraform(struct?: ComputeInstanceGroupManagerVersionTargetSize): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}

export interface ComputeInstanceGroupManagerVersion {
  /** The full URL to an instance template from which all new instances of this version will be created. */
  readonly instanceTemplate: string;
  /** Version name. */
  readonly name?: string;
  /** target_size block */
  readonly targetSize?: ComputeInstanceGroupManagerVersionTargetSize[];
}

function computeInstanceGroupManagerVersionToTerraform(struct?: ComputeInstanceGroupManagerVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_template: cdktf.stringToTerraform(struct!.instanceTemplate),
    name: cdktf.stringToTerraform(struct!.name),
    target_size: cdktf.listMapper(computeInstanceGroupManagerVersionTargetSizeToTerraform)(struct!.targetSize),
  }
}


// Resource

export class ComputeInstanceGroupManager extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeInstanceGroupManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_group_manager',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._baseInstanceName = config.baseInstanceName;
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._targetPools = config.targetPools;
    this._targetSize = config.targetSize;
    this._waitForInstances = config.waitForInstances;
    this._zone = config.zone;
    this._autoHealingPolicies = config.autoHealingPolicies;
    this._namedPort = config.namedPort;
    this._statefulDisk = config.statefulDisk;
    this._timeouts = config.timeouts;
    this._updatePolicy = config.updatePolicy;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_instance_name - computed: false, optional: false, required: true
  private _baseInstanceName: string;
  public get baseInstanceName() {
    return this.getStringAttribute('base_instance_name');
  }
  public set baseInstanceName(value: string) {
    this._baseInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInstanceNameInput() {
    return this._baseInstanceName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_group - computed: true, optional: false, required: false
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
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

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // target_pools - computed: false, optional: true, required: false
  private _targetPools?: string[];
  public get targetPools() {
    return this.getListAttribute('target_pools');
  }
  public set targetPools(value: string[] ) {
    this._targetPools = value;
  }
  public resetTargetPools() {
    this._targetPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPoolsInput() {
    return this._targetPools
  }

  // target_size - computed: true, optional: true, required: false
  private _targetSize?: number;
  public get targetSize() {
    return this.getNumberAttribute('target_size');
  }
  public set targetSize(value: number) {
    this._targetSize = value;
  }
  public resetTargetSize() {
    this._targetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSizeInput() {
    return this._targetSize
  }

  // wait_for_instances - computed: false, optional: true, required: false
  private _waitForInstances?: boolean;
  public get waitForInstances() {
    return this.getBooleanAttribute('wait_for_instances');
  }
  public set waitForInstances(value: boolean ) {
    this._waitForInstances = value;
  }
  public resetWaitForInstances() {
    this._waitForInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInstancesInput() {
    return this._waitForInstances
  }

  // zone - computed: true, optional: true, required: false
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
    return this._zone
  }

  // auto_healing_policies - computed: false, optional: true, required: false
  private _autoHealingPolicies?: ComputeInstanceGroupManagerAutoHealingPolicies[];
  public get autoHealingPolicies() {
    return this.interpolationForAttribute('auto_healing_policies') as any;
  }
  public set autoHealingPolicies(value: ComputeInstanceGroupManagerAutoHealingPolicies[] ) {
    this._autoHealingPolicies = value;
  }
  public resetAutoHealingPolicies() {
    this._autoHealingPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingPoliciesInput() {
    return this._autoHealingPolicies
  }

  // named_port - computed: false, optional: true, required: false
  private _namedPort?: ComputeInstanceGroupManagerNamedPort[];
  public get namedPort() {
    return this.interpolationForAttribute('named_port') as any;
  }
  public set namedPort(value: ComputeInstanceGroupManagerNamedPort[] ) {
    this._namedPort = value;
  }
  public resetNamedPort() {
    this._namedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedPortInput() {
    return this._namedPort
  }

  // stateful_disk - computed: false, optional: true, required: false
  private _statefulDisk?: ComputeInstanceGroupManagerStatefulDisk[];
  public get statefulDisk() {
    return this.interpolationForAttribute('stateful_disk') as any;
  }
  public set statefulDisk(value: ComputeInstanceGroupManagerStatefulDisk[] ) {
    this._statefulDisk = value;
  }
  public resetStatefulDisk() {
    this._statefulDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulDiskInput() {
    return this._statefulDisk
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeInstanceGroupManagerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeInstanceGroupManagerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy?: ComputeInstanceGroupManagerUpdatePolicy[];
  public get updatePolicy() {
    return this.interpolationForAttribute('update_policy') as any;
  }
  public set updatePolicy(value: ComputeInstanceGroupManagerUpdatePolicy[] ) {
    this._updatePolicy = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy
  }

  // version - computed: false, optional: false, required: true
  private _version: ComputeInstanceGroupManagerVersion[];
  public get version() {
    return this.interpolationForAttribute('version') as any;
  }
  public set version(value: ComputeInstanceGroupManagerVersion[]) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_instance_name: cdktf.stringToTerraform(this._baseInstanceName),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      target_pools: cdktf.listMapper(cdktf.stringToTerraform)(this._targetPools),
      target_size: cdktf.numberToTerraform(this._targetSize),
      wait_for_instances: cdktf.booleanToTerraform(this._waitForInstances),
      zone: cdktf.stringToTerraform(this._zone),
      auto_healing_policies: cdktf.listMapper(computeInstanceGroupManagerAutoHealingPoliciesToTerraform)(this._autoHealingPolicies),
      named_port: cdktf.listMapper(computeInstanceGroupManagerNamedPortToTerraform)(this._namedPort),
      stateful_disk: cdktf.listMapper(computeInstanceGroupManagerStatefulDiskToTerraform)(this._statefulDisk),
      timeouts: computeInstanceGroupManagerTimeoutsToTerraform(this._timeouts),
      update_policy: cdktf.listMapper(computeInstanceGroupManagerUpdatePolicyToTerraform)(this._updatePolicy),
      version: cdktf.listMapper(computeInstanceGroupManagerVersionToTerraform)(this._version),
    };
  }
}
