// https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeRegionInstanceGroupManagerConfig extends TerraformMetaArguments {
  /** The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name. */
  readonly baseInstanceName: string;
  /** An optional textual description of the instance group manager. */
  readonly description?: string;
  /** The distribution policy for this managed instance group. You can specify one or more values. */
  readonly distributionPolicyZones?: string[];
  /** The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The region where the managed instance group resides. */
  readonly region: string;
  /** The full URL of all target pools to which new instances in the group are added. Updating the target pools attribute does not affect existing instances. */
  readonly targetPools?: string[];
  /** The target number of running instances for this managed instance group. This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0. */
  readonly targetSize?: number;
  /** Whether to wait for all instances to be created/updated before returning. Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out. */
  readonly waitForInstances?: boolean;
  /** auto_healing_policies block */
  readonly autoHealingPolicies?: ComputeRegionInstanceGroupManagerAutoHealingPolicies[];
  /** named_port block */
  readonly namedPort?: ComputeRegionInstanceGroupManagerNamedPort[];
  /** stateful_disk block */
  readonly statefulDisk?: ComputeRegionInstanceGroupManagerStatefulDisk[];
  /** timeouts block */
  readonly timeouts?: ComputeRegionInstanceGroupManagerTimeouts;
  /** update_policy block */
  readonly updatePolicy?: ComputeRegionInstanceGroupManagerUpdatePolicy[];
  /** version block */
  readonly version: ComputeRegionInstanceGroupManagerVersion[];
}
export interface ComputeRegionInstanceGroupManagerAutoHealingPolicies {
  /** The health check resource that signals autohealing. */
  readonly healthCheck: string;
  /** The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600. */
  readonly initialDelaySec: number;
}
export interface ComputeRegionInstanceGroupManagerNamedPort {
  /** The name of the port. */
  readonly name: string;
  /** The port number. */
  readonly port: number;
}
export interface ComputeRegionInstanceGroupManagerStatefulDisk {
  /** A value that prescribes what should happen to the stateful disk when the VM instance is deleted. The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER. */
  readonly deleteRule?: string;
  /** The device name of the disk to be attached. */
  readonly deviceName: string;
}
export interface ComputeRegionInstanceGroupManagerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface ComputeRegionInstanceGroupManagerUpdatePolicy {
  /** The instance redistribution policy for regional managed instance groups. Valid values are: "PROACTIVE", "NONE". If PROACTIVE (default), the group attempts to maintain an even distribution of VM instances across zones in the region. If NONE, proactive redistribution is disabled. */
  readonly instanceRedistributionType?: string;
  /** The maximum number of instances that can be created above the specified targetSize during the update process. Conflicts with max_surge_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0. */
  readonly maxSurgeFixed?: number;
  /** The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. Conflicts with max_surge_fixed. Percent value is only allowed for regional managed instance groups with size at least 10. */
  readonly maxSurgePercent?: number;
  /** The maximum number of instances that can be unavailable during the update process. Conflicts with max_unavailable_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0. */
  readonly maxUnavailableFixed?: number;
  /** The maximum number of instances(calculated as percentage) that can be unavailable during the update process. Conflicts with max_unavailable_fixed. Percent value is only allowed for regional managed instance groups with size at least 10. */
  readonly maxUnavailablePercent?: number;
  /** Minimum number of seconds to wait for after a newly created instance becomes available. This value must be from range [0, 3600]. */
  readonly minReadySec?: number;
  /** Minimal action to be taken on an instance. You can specify either RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a RESTART, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action. */
  readonly minimalAction: string;
  /** The type of update process. You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls). */
  readonly type: string;
}
export interface ComputeRegionInstanceGroupManagerVersionTargetSize {
  /** The number of instances which are managed for this version. Conflicts with percent. */
  readonly fixed?: number;
  /** The number of instances (calculated as percentage) which are managed for this version. Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version. */
  readonly percent?: number;
}
export interface ComputeRegionInstanceGroupManagerVersion {
  /** The full URL to an instance template from which all new instances of this version will be created. */
  readonly instanceTemplate: string;
  /** Version name. */
  readonly name?: string;
  /** target_size block */
  readonly targetSize?: ComputeRegionInstanceGroupManagerVersionTargetSize[];
}

// Resource

export class ComputeRegionInstanceGroupManager extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRegionInstanceGroupManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_instance_group_manager',
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
    this._distributionPolicyZones = config.distributionPolicyZones;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._targetPools = config.targetPools;
    this._targetSize = config.targetSize;
    this._waitForInstances = config.waitForInstances;
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

  // distribution_policy_zones - computed: true, optional: true, required: false
  private _distributionPolicyZones?: string[];
  public get distributionPolicyZones() {
    return this.getListAttribute('distribution_policy_zones');
  }
  public set distributionPolicyZones(value: string[]) {
    this._distributionPolicyZones = value;
  }
  public resetDistributionPolicyZones() {
    this._distributionPolicyZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionPolicyZonesInput() {
    return this._distributionPolicyZones
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

  // region - computed: false, optional: false, required: true
  private _region: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
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

  // auto_healing_policies - computed: false, optional: true, required: false
  private _autoHealingPolicies?: ComputeRegionInstanceGroupManagerAutoHealingPolicies[];
  public get autoHealingPolicies() {
    return this.interpolationForAttribute('auto_healing_policies') as any;
  }
  public set autoHealingPolicies(value: ComputeRegionInstanceGroupManagerAutoHealingPolicies[] ) {
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
  private _namedPort?: ComputeRegionInstanceGroupManagerNamedPort[];
  public get namedPort() {
    return this.interpolationForAttribute('named_port') as any;
  }
  public set namedPort(value: ComputeRegionInstanceGroupManagerNamedPort[] ) {
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
  private _statefulDisk?: ComputeRegionInstanceGroupManagerStatefulDisk[];
  public get statefulDisk() {
    return this.interpolationForAttribute('stateful_disk') as any;
  }
  public set statefulDisk(value: ComputeRegionInstanceGroupManagerStatefulDisk[] ) {
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
  private _timeouts?: ComputeRegionInstanceGroupManagerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRegionInstanceGroupManagerTimeouts ) {
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
  private _updatePolicy?: ComputeRegionInstanceGroupManagerUpdatePolicy[];
  public get updatePolicy() {
    return this.interpolationForAttribute('update_policy') as any;
  }
  public set updatePolicy(value: ComputeRegionInstanceGroupManagerUpdatePolicy[] ) {
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
  private _version: ComputeRegionInstanceGroupManagerVersion[];
  public get version() {
    return this.interpolationForAttribute('version') as any;
  }
  public set version(value: ComputeRegionInstanceGroupManagerVersion[]) {
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
      base_instance_name: this._baseInstanceName,
      description: this._description,
      distribution_policy_zones: this._distributionPolicyZones,
      name: this._name,
      project: this._project,
      region: this._region,
      target_pools: this._targetPools,
      target_size: this._targetSize,
      wait_for_instances: this._waitForInstances,
      auto_healing_policies: this._autoHealingPolicies,
      named_port: this._namedPort,
      stateful_disk: this._statefulDisk,
      timeouts: this._timeouts,
      update_policy: this._updatePolicy,
      version: this._version,
    };
  }
}
